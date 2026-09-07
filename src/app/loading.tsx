export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm transition-all duration-300">
      <div className="relative flex flex-col items-center justify-center animate-pulse">
        {/* Outer rotating/flashing ring */}
        <div className="absolute -inset-4 rounded-full border-[3px] border-transparent border-t-brand-purple border-b-brand-purple animate-spin" style={{ animationDuration: '1.5s' }}></div>
        
        {/* Inner pulsing glow */}
        <div className="absolute inset-0 bg-brand-purple-tint/40 rounded-full blur-xl animate-pulse"></div>
        
        <img
          src="/images/logo.png"
          alt="Ingram Enterprises Ltd Logo"
          className="relative h-16 object-contain z-10"
        />
        
        <div className="mt-8 flex gap-1">
          <div className="w-2 h-2 rounded-full bg-brand-purple animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 rounded-full bg-brand-purple animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 rounded-full bg-brand-purple animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}
