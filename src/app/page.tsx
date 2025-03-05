'use client';
import { useEffect, useState } from "react";
import { RingLoader, MoonLoader } from "react-spinners";
import "./globals.css";
import {Ring, Orbit} from "@uiball/loaders";


export default function Home() {
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");
  const words = "Ecriminal";

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000); // Simulate loading for 3 seconds
  }, []);

  useEffect(() => {
    if (!loading) {
      let i = 0;
      const interval = setInterval(() => {
        setText(words.substring(0, i));
        i++;
        if (i > words.length) clearInterval(interval);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [loading]);

  return (
    <div className="relative flex items-center justify-center min-h-screen w-full bg-[#0A0A0A] text-white font-bebas overflow-hidden min-h-screen w-screen">
      {/* Animated Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="absolute w-2 h-2 bg-white rounded-full opacity-20 blur-lg animate-float" style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animationDuration: `${2 + Math.random() * 3}s` }}></div>
        ))}
      </div>
      
      {loading ? (
        <div className="flex flex-col items-center justify-center animate-fadeIn w-full h-full">
          {/* Switch between different loaders here */}
          <Orbit color="white" size={35} />
          <p className="text-lg text-white text-center tracking-wide opacity-0 animate-fadeInText mt-4">
            We're just checking if your request is not malicious.<br />
            Don't worry; it'll only take a couple of seconds.
          </p>
        </div>
      ) : (
        <div className="text-center animate-fadeIn w-full h-full flex flex-col justify-center items-center space-y-[-4rem]">
          <h1 className="text-[5rem] font-extrabold font-bebas tracking-widest drop-shadow-[0_0_6px_rgba(255,255,255,0.3)] animate-pulse-slow">
            {text}
          </h1>
          <p className="text-[2.5rem] opacity-90 font-bebas tracking-wider animate-glow">
            The <strong className="font-black text-red-300 drop-shadow-[0_0_6px_red] text-opacity-80 animate-glow">best</strong> Discord OSINT tool
          </p>
        </div>
      )}
      
      {/* Bottom Light Effect */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#090909] to-transparent opacity-80 blur-md"></div>
    </div>
  );
}