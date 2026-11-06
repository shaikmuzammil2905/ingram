export interface CloudinaryUploadResponse {
  asset_id: string;
  public_id: string;
  version: number;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: string;
  bytes: number;
  type: string;
  url: string;
  secure_url: string;
  folder?: string;
  original_filename?: string;
}

export const CLOUDINARY_CONFIG = {
  cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "qjeckycw",
  uploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "ml_default",
};

/**
 * Upload a File directly to Cloudinary using the unsigned preset
 */
export async function uploadToCloudinary(
  file: File | Blob,
  folder?: string
): Promise<CloudinaryUploadResponse> {
  // 1. Try Cloudinary first if configured
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_CONFIG.uploadPreset);
    if (folder) {
      formData.append("folder", folder);
    }

    const endpoint = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CONFIG.cloudName}/image/upload`;
    const response = await fetch(endpoint, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const data: CloudinaryUploadResponse = await response.json();
      return data;
    }
  } catch (cloudErr) {
    console.warn("Direct Cloudinary upload failed, falling back to local server upload:", cloudErr);
  }

  // 2. Reliable Fallback: Upload to server /public/uploads/ API
  const localFormData = new FormData();
  localFormData.append("file", file);

  const localRes = await fetch("/api/upload", {
    method: "POST",
    body: localFormData,
  });

  if (localRes.ok) {
    const localData = await localRes.json();
    return {
      asset_id: localData.public_id || `local_${Date.now()}`,
      public_id: localData.public_id || `local_${Date.now()}`,
      version: 1,
      width: 800,
      height: 600,
      format: "jpg",
      resource_type: "image",
      created_at: new Date().toISOString(),
      bytes: (file as any).size || 0,
      type: "upload",
      url: localData.url,
      secure_url: localData.secure_url,
    };
  }

  // 3. Fallback: Data URL conversion so image is always usable in browser & localStorage
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const base64Url = reader.result as string;
      resolve({
        asset_id: `data_${Date.now()}`,
        public_id: `data_${Date.now()}`,
        version: 1,
        width: 800,
        height: 600,
        format: "base64",
        resource_type: "image",
        created_at: new Date().toISOString(),
        bytes: (file as any).size || 0,
        type: "data-uri",
        url: base64Url,
        secure_url: base64Url,
      });
    };
    reader.onerror = () => reject(new Error("Failed to process image"));
    reader.readAsDataURL(file);
  });
}
