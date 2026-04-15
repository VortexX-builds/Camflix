import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      }
    });

    // 1. The Fade & Scale In
    tl.fromTo(
      imgRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'power2.out',
      }
    );

    // 2. The Pop Out
    tl.to(
      imgRef.current,
      {
        scale: 1.05,
        duration: 0.3,
        ease: 'back.out(1.7)',
      }
    );

    // 3. The Aperture Exit (scales massively to reveal background)
    tl.to(
      imgRef.current,
      {
        scale: 20, // massive scale for mask/aperture effect
        opacity: 0,
        duration: 0.8,
        ease: 'power3.inOut',
        delay: 0.2, // Small hold before exit
      }
    ).to(
      containerRef.current,
      {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
      },
      '<' // Sync fade out of the grain/bg
    );
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A0A0A] overflow-hidden"
    >
      {/* Film grain noise overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20 filter contrast-150 mix-blend-overlay preloader-grain" />

      {/* Camflix Logo */}
      <div className="relative z-10 w-32 md:w-48 flex items-center justify-center">
        <img
          ref={imgRef}
          src="/assets/logo/logo.png"
          alt="Camflix Logo"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}
