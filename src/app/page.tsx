'use client';

import { useEffect, useState } from "react";
import "./globals.css";
import { Orbit } from "@uiball/loaders";

export default function Home() {
  const options = [
    "Email",
    "Password",
    "Breach",
    "Roblox User",
    "Discord ID",
    "Roblox ID",
  ];
  
  const [loading, setLoading] = useState(true);
  const [currentText, setCurrentText] = useState("");
  const [optionIndex, setOptionIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenWords = 1000;

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  useEffect(() => {
    if (loading) return;

    const currentWord = options[optionIndex];

    let interval: NodeJS.Timeout | undefined;
    if (!isDeleting && charIndex <= currentWord.length) {
      interval = setTimeout(() => {
        setCurrentText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
      
      if (charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), delayBetweenWords);
      }
    } else if (isDeleting && charIndex >= 0) {
      interval = setTimeout(() => {
        setCurrentText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, deletingSpeed);
      
      if (charIndex === 0) {
        setIsDeleting(false);
        setOptionIndex((prev) => (prev + 1) % options.length);
      }
    }

    return () => clearTimeout(interval);
  }, [charIndex, optionIndex, isDeleting, loading]);

  return (
    <div className="relative flex items-center justify-center min-h-screen w-full bg-[#0A0A0A] text-white font-bebas overflow-hidden">
      {loading ? (
        <div className="flex flex-col items-center justify-center w-full animate-fadeIn">
          <Orbit color="white" size={35} />
          <p className="text-lg text-white text-center tracking-wide opacity-0 animate-fadeInText mt-4">
            We&apos;re just checking if your request is not malicious.<br />
            Don&apos;t worry; it&apos;ll only take a couple of seconds.
          </p>
        </div>
      ) : (
        <div className="text-center animate-fadeIn w-full h-full flex flex-col justify-center items-center space-y-4">
          <h1 className="text-[6rem] font-extrabold font-bebas tracking-widest drop-shadow-[0_0_6px_rgba(255,255,255,0.3)] animate-glitch">
            ECRIMINAL
          </h1>
          <p className="text-[3rem] opacity-90 font-bebas tracking-wider animate-glow mt-[-5.5rem]">
            The <strong className="font-black text-red-300 drop-shadow-[0_0_6px_red] text-opacity-80 animate-glow">BEST</strong> Discord OSINT tool
          </p>
          <p className="text-[3.8rem] font-bebas mt-8">
            Search Any: <span className="text-red-300 drop-shadow-[0_0_6px_red] text-[4rem]">{currentText}</span>
          </p>
        </div>
      )}
    </div>
  );
}
