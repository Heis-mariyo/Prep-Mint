"use client";
import React from 'react';
import { Zap, Menu, X } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';

const Navbar = () => {
  // Connect to the store
  const { 
    scrolled, 
    appMode, 
    resetApp, 
    startApp, 
    mobileMenuOpen, 
    setMobileMenuOpen 
  } = useAppStore();

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || appMode ? 'bg-[#0a1f33]/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={resetApp}>
          <div className="w-8 h-8 bg-[#2fcf9c] rounded-lg flex items-center justify-center transform rotate-3">
            <Zap className="text-[#0a1f33] w-5 h-5" fill="currentColor" />
          </div>
          <span className={`text-2xl font-bold tracking-tight ${scrolled || appMode ? 'text-white' : 'text-[#0a1f33]'} md:text-white`}>
            PrepMint
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#features" className="hover:text-[#2fcf9c] transition-colors">Login</a>
          <a href="#how-it-works" className="hover:text-[#2fcf9c] transition-colors">Sign Up</a>
          <a href="#pricing" className="hover:text-[#2fcf9c] transition-colors">Pricing</a>
          <button 
            onClick={startApp}
            className="px-6 py-2.5 bg-[#2fcf9c] hover:bg-[#3ddc95] text-[#0a1f33] font-bold rounded-full transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(47,207,156,0.3)]"
          >
            {appMode ? 'New Upload' : 'Try Demo'}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0a1f33] border-t border-gray-800 p-6 flex flex-col gap-4 md:hidden animate-fade-in">
          <a href="#" className="text-gray-300 hover:text-[#2fcf9c]">Login</a>
          <a href="#" className="text-gray-300 hover:text-[#2fcf9c]">Sign Up</a>
          <button onClick={() => { startApp(); setMobileMenuOpen(false); }} className="w-full py-3 bg-[#2fcf9c] text-[#0a1f33] font-bold rounded-lg">
            Try Demo
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;