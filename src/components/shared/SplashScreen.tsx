"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Start fading out after 2 seconds
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 2000);

    // Completely remove from DOM after 2.5 seconds (allowing for 0.5s fade transition)
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-500 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Outer rotating/flashing ring */}
        <div
          className="absolute -inset-8 rounded-full border-[3px] border-transparent border-t-brand-purple border-b-brand-purple animate-spin"
          style={{ animationDuration: "1.5s" }}
        ></div>

        {/* Inner pulsing glow */}
        <div className="absolute inset-0 bg-brand-purple-tint/40 rounded-full blur-2xl animate-pulse"></div>

        <div className="relative h-20 w-56 sm:h-24 sm:w-64 z-10 animate-pulse">
          <Image
            src="/images/logo.png"
            alt="Ingram Enterprises Ltd Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="mt-12 flex gap-2">
          <div
            className="w-2.5 h-2.5 rounded-full bg-brand-purple animate-bounce"
            style={{ animationDelay: "0ms" }}
          ></div>
          <div
            className="w-2.5 h-2.5 rounded-full bg-brand-purple animate-bounce"
            style={{ animationDelay: "150ms" }}
          ></div>
          <div
            className="w-2.5 h-2.5 rounded-full bg-brand-purple animate-bounce"
            style={{ animationDelay: "300ms" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
