'use client';

import { useEffect, useState } from "react";
import "./globals.css";
import { Orbit } from "@uiball/loaders";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 3 seconds
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen w-full bg-[#0A0A0A] text-white overflow-hidden">
      {loading ? (
        <div className="flex flex-col items-center justify-center w-full animate-fadeIn">
          <Orbit color="white" size={35} />
          <p className="text-lg text-white text-center tracking-wide opacity-0 animate-fadeInText mt-4 font-bebas">
            We&apos;re just checking if your request is not malicious.<br />
            Don&apos;t worry; it&apos;ll only take a couple of seconds.
          </p>
        </div>
      ) : (
        <div className="text-center animate-fadeIn w-full h-full flex flex-col justify-center items-center">
          {/* ECRIMINAL Logo Image */}
          <img
            src="/ecriminal-logo.png"
            alt="ECRIMINAL Logo"
            className="w-2 h-auto drop-shadow-[0_0_7px_rgba(255,255,255,0.3)]"
          />

          {/* Centered multiline text under the logo (2 lines, gray text) */}
          <p className="text-center text-[1.2rem] leading-relaxed mt-6 px-4 max-w-xl mx-auto text-gray-900 font-bebas">
            We are private by design, providing threat intelligence
            <br />
            with strong privacy protection.
          </p>
        </div>
      )}
    </div>
  );
}
