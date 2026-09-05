export interface QuoteFormData {
  fullName: string;
  company?: string;
  email: string;
  phone: string;
  industry?: string;
  service?: string;
  message?: string;
}

export const WHATSAPP_NUMBER = "255744550551"; // +255 744 550 551

export function formatQuoteWhatsAppMessage(data: Partial<QuoteFormData>): string {
  const parts = [
    `*NEW ENQUIRY - INGRAM ENTERPRISES LTD*`,
    `----------------------------------------`,
  ];

  if (data.fullName) {
    parts.push(`*Full Name:* ${data.fullName}`);
  }

  if (data.company) {
    parts.push(`*Company:* ${data.company}`);
  }

  if (data.phone) {
    parts.push(`*Phone:* ${data.phone}`);
  }

  if (data.email) {
    parts.push(`*Email:* ${data.email}`);
  }

  if (data.industry) {
    parts.push(`*Industry:* ${data.industry}`);
  }

  if (data.service) {
    parts.push(`*Service / Interest:* ${data.service}`);
  }

  if (data.message) {
    parts.push(`*Message:* ${data.message}`);
  }

  parts.push(`----------------------------------------`);
  parts.push(`_Submitted via Ingram Enterprises Website (ingram.co.tz)_`);

  return parts.join("\n");
}

export function getWhatsAppUrl(data?: Partial<QuoteFormData> | string): string {
  if (!data) {
    const defaultMsg =
      "Hello Ingram Enterprises Ltd, I would like to learn more about your industrial automation and technology solutions in Tanzania.";
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(defaultMsg)}`;
  }

  if (typeof data === "string") {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(data)}`;
  }

  const message = formatQuoteWhatsAppMessage(data);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
