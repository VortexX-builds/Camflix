"use client";

import { useState, useEffect, useRef } from 'react';
import Button from './Button';

export function Navbar({ onSignIn, isAuthenticated = false }: { onSignIn?: () => void, isAuthenticated?: boolean }) {
  const isOpen = false;
  const [headerShapeClass, setHeaderShapeClass] = useState('rounded-full');
  const shapeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (shapeTimeoutRef.current) {
      clearTimeout(shapeTimeoutRef.current);
    }

    if (isOpen) {
      setHeaderShapeClass('rounded-xl');
    } else {
      shapeTimeoutRef.current = setTimeout(() => {
        setHeaderShapeClass('rounded-full');
      }, 300);
    }

    return () => {
      if (shapeTimeoutRef.current) {
        clearTimeout(shapeTimeoutRef.current);
      }
    };
  }, [isOpen]);

  return (
    <header className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center pl-6 pr-6 py-3 backdrop-blur-sm ${headerShapeClass} border border-[#333] bg-[#1f1f1f57] w-[calc(100%-2rem)] sm:w-auto transition-[border-radius] duration-0 ease-in-out`}>
      <div className="flex items-center justify-between w-full gap-x-6 sm:gap-x-8">
        <div className="flex items-center gap-6">
          <div className="flex items-center">
            <img src="/assets/logo/logo.png" alt="Camflix Logo" className="h-8 md:h-10 object-contain" />
          </div>
          {isAuthenticated && (
            <div className="hidden md:flex flex-row ml-8 gap-4 text-white text-sm">
              <span className="cursor-pointer hover:text-gray-300 transition">Home</span>
              <span className="cursor-pointer hover:text-gray-300 transition">Series</span>
              <span className="cursor-pointer hover:text-gray-300 transition">Films</span>
              <span className="cursor-pointer hover:text-gray-300 transition">New & Popular</span>
              <span className="cursor-pointer hover:text-gray-300 transition">My List</span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-4 sm:gap-6 text-white">
          {isAuthenticated ? (
             <div className="flex items-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <div className="w-8 h-8 rounded-md bg-blue-500 overflow-hidden cursor-pointer border border-[#333]">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Profile" className="w-full h-full object-cover" />
              </div>
             </div>
          ) : (
            <Button onClick={onSignIn || undefined}>Sign In</Button>
          )}
        </div>
      </div>
    </header>
  );
}