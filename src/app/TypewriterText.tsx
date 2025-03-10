'use client';
import React from 'react';
import './typing.css';

export default function TypewriterText() {
  // The text you want to animate
  const text =
    'We are private by design, providing threat intelligence with strong privacy protection.';

  return (
    <div className="typing-effect_text">
      {text.split('').map((char, index) => (
        <span key={index} style={{ animationDelay: `${index * 0.05}s` }}>
          {char}
        </span>
      ))}
    </div>
  );
}
