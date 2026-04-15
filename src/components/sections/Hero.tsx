import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Button from '../ui/Button';
import EmailInput from '../ui/EmailInput';

export default function Hero({ isVisible, onGetStarted }: { isVisible: boolean, onGetStarted?: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible && containerRef.current) {
      // Small entry animation for hero content after preloader reveals it
      gsap.fromTo(
        containerRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.2 // Slightly offset to happen alongside aperture finish
        }
      );
    }
  }, [isVisible]);

  return (
    <section 
      className={`relative min-h-screen flex items-center justify-center p-8 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80 z-10 pointer-events-none" />
      
      {/* Background visual representing high-end media cover */}
      <img
        src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop"
        alt="Cinematic Background"
        className="absolute inset-0 w-full h-full object-cover transform scale-105 opacity-50 filter brightness-50"
      />

      <div ref={containerRef} className="relative z-20 text-center max-w-4xl mx-auto flex flex-col items-center gap-4 mt-8 px-4">
        <h1 className="text-4xl md:text-6xl font-black tracking-normal text-white">
          Unlimited movies, TV shows, and more.
        </h1>
        <p className="text-xl md:text-2xl font-semibold text-white mt-2">
          Watch anywhere. Cancel anytime.
        </p>
        <p className="text-lg md:text-xl text-white mt-4 mb-2">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="w-full max-w-3xl flex flex-col sm:flex-row items-center gap-3 w-full mt-2">
          <div className="w-full sm:flex-grow">
            <EmailInput />
          </div>
          <Button 
            onClick={onGetStarted || undefined}
            className="w-auto h-full text-2xl font-bold py-4 px-8 flex-shrink-0"
          >
            Get Started &gt;
          </Button>
        </div>
      </div>
    </section>
  );
}

