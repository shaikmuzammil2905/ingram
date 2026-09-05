"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, FileText, ChevronUp, Sparkles, Phone } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { COMPANY_INFO } from "@/data/company";

export default function MobileEngagementPopup() {
  const { openQuoteModal } = useQuoteModal();
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    // Show after 3.5 seconds or when scrolled down 250px
    const handleScroll = () => {
      if (window.scrollY > 250 && !isDismissed) {
        setIsVisible(true);
      }
    };

    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true);
      }
    }, 4000);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  const whatsappUrl = getWhatsAppUrl({
    service: "General Industrial Automation",
    message: "Hello Ingram Enterprises, I would like to enquire about your industrial automation and Yokogawa instrumentation services in Tanzania.",
  });

  return (
    <div className="block sm:hidden fixed bottom-20 left-3 right-3 z-40 pointer-events-none">
      <AnimatePresence>
        {isVisible && !isDismissed && (
          <div className="pointer-events-auto">
            {!isMinimized ? (
              <motion.div
                initial={{ y: 80, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 80, opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-brand-purple/20 relative overflow-hidden"
              >
                {/* Decorative Top Accent Gradient */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-purple via-[#5C2C90] to-brand-navy" />

                {/* Close Button */}
                <button
                  onClick={handleDismiss}
                  className="absolute top-2.5 right-2.5 p-1 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Dismiss quick support"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Header Info */}
                <div className="flex items-center gap-2.5 mb-2 pr-6">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-purple">
                    Tanzania Engineering Desk
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-sm font-bold text-gray-900 leading-tight">
                  Need Industrial Automation or Instruments?
                </h4>
                <p className="text-[11px] text-gray-600 mt-0.5 mb-3 leading-snug">
                  Connect instantly with our lead technical engineers in Dar Es Salaam.
                </p>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => openQuoteModal("Mobile Quick Enquiry")}
                    className="flex items-center justify-center gap-1.5 bg-brand-purple hover:bg-brand-purple-hover text-white text-xs font-bold py-2 px-3 rounded-lg shadow-sm transition-colors active:scale-95"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Get Fast Quote</span>
                  </button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold py-2 px-3 rounded-lg shadow-sm transition-colors active:scale-95"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                {/* Phone hint & Minimize */}
                <div className="mt-2.5 pt-2 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-500">
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="flex items-center gap-1 text-gray-600 hover:text-brand-purple font-medium"
                  >
                    <Phone className="w-3 h-3 text-brand-purple" />
                    <span>Direct: {COMPANY_INFO.phone}</span>
                  </a>
                  <button
                    onClick={() => setIsMinimized(true)}
                    className="text-gray-400 hover:text-gray-600 underline"
                  >
                    Minimize
                  </button>
                </div>
              </motion.div>
            ) : (
              /* Minimized Floating Pill */
              <motion.button
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={() => setIsMinimized(false)}
                className="ml-auto flex items-center gap-1.5 bg-brand-purple text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-white/20 active:scale-95"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Enquire Now</span>
                <ChevronUp className="w-3.5 h-3.5" />
              </motion.button>
            )}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
