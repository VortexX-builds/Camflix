import React, { useEffect, useRef } from 'react';
import { Tv, Download, Monitor, Users } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Enjoy on your TV",
    description: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    icon: Tv,
    reverse: false
  },
  {
    title: "Download your shows to watch offline",
    description: "Save your favorites easily and always have something to watch.",
    icon: Download,
    reverse: true
  },
  {
    title: "Watch everywhere",
    description: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    icon: Monitor,
    reverse: false
  },
  {
    title: "Create profiles for kids",
    description: "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
    icon: Users,
    reverse: true
  }
];

export function FeatureZigZag() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray<HTMLElement>('.feature-row');
      
      rows.forEach((row) => {
        gsap.fromTo(
          row,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: row,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-black text-white overflow-hidden">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <div key={index} className="border-b-8 border-neutral-800">
            <div className={`feature-row max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col items-center justify-between gap-8 ${feature.reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
              <div className="flex-1 text-center md:text-left space-y-4 md:space-y-6">
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                  {feature.title}
                </h2>
                <p className="text-lg md:text-xl font-medium">
                  {feature.description}
                </p>
              </div>
              <div className="flex-1 flex justify-center items-center relative">
                <div className="relative z-10">
                  <Icon className="w-64 h-64 md:w-96 md:h-96 text-white/90 drop-shadow-2xl" strokeWidth={1} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FeatureZigZag;
