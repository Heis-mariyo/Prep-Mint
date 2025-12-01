"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  LayoutDashboard, 
  Library, 
  Zap, 
  BookOpen, 
  Target, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  Bell,
  Search,
  PanelLeftClose,
  PanelLeftOpen
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  // Separate states for mobile and desktop can offer better UX, 
  // but a single state toggled differently works well for simplicity.
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Overview', icon: LayoutDashboard, href: '/dashboard', active: true },
    { name: 'My Library', icon: Library, href: '/dashboard/library' },
    { name: 'Smart Prep', icon: Zap, href: '/dashboard/generate' },
    { name: 'Study Decks', icon: BookOpen, href: '/dashboard/decks' },
    { name: 'Exam Mode', icon: Target, href: '/dashboard/exam' },
  ];

  return (
    <div className="min-h-screen bg-[#0a1f33] text-white font-sans selection:bg-[#2fcf9c] selection:text-[#0a1f33]">
      
      {/* Mobile Header (Visible only on small screens) */}
      <div className="lg:hidden flex justify-between items-center p-4 border-b border-white/10 bg-[#0a1f33] sticky top-0 z-30">
        <div className="flex items-center gap-2">
          <div className="relative w-8 h-8">
             <Image src="/images/logo.png" alt="Logo" fill className="object-contain" />
          </div>
          <span className="font-bold text-lg">StudyBuckle</span>
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <div className="flex h-screen overflow-hidden">
        
        {/* Sidebar */}
        <aside className={`
          fixed lg:static inset-y-0 left-0 z-20 bg-[#050f19] border-r border-white/10 transition-all duration-300 ease-in-out flex flex-col
          ${isMobileMenuOpen ? 'translate-x-0 w-64' : '-translate-x-full lg:translate-x-0'}
          ${isSidebarOpen ? 'lg:w-64' : 'lg:w-20'} 
        `}>
          {/* Sidebar Header */}
          <div className={`p-6 flex items-center h-20 ${isSidebarOpen ? 'justify-start gap-3' : 'justify-center'}`}>
            <div className="relative w-8 h-8 flex-shrink-0">
               <Image src="/images/logo.png" alt="Logo" fill className="object-contain" />
            </div>
            {isSidebarOpen && (
              <span className="text-xl font-bold tracking-tight whitespace-nowrap overflow-hidden">
                StudyBuckle
              </span>
            )}
          </div>

          {/* Navigation Items */}
          <nav className="px-3 space-y-2 flex-1 overflow-y-auto">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group relative
                  ${item.active 
                    ? 'bg-[#2fcf9c] text-[#0a1f33] font-bold shadow-[0_0_15px_rgba(47,207,156,0.2)]' 
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'}
                  ${!isSidebarOpen && 'justify-center'}
                `}
                title={!isSidebarOpen ? item.name : ''}
              >
                <item.icon size={20} className="flex-shrink-0" />
                {isSidebarOpen && <span className="whitespace-nowrap overflow-hidden">{item.name}</span>}
                
                {/* Tooltip for collapsed state */}
                {!isSidebarOpen && (
                  <div className="absolute left-full ml-4 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none">
                    {item.name}
                  </div>
                )}
              </Link>
            ))}
          </nav>

          {/* Sidebar Footer */}
          <div className="p-3 border-t border-white/10 bg-[#050f19]">
            <Link 
              href="/settings" 
              className={`flex items-center gap-3 px-3 py-3 text-gray-400 hover:text-white rounded-xl hover:bg-white/5 transition-colors ${!isSidebarOpen && 'justify-center'}`}
              title="Settings"
            >
              <Settings size={20} className="flex-shrink-0" />
              {isSidebarOpen && <span>Settings</span>}
            </Link>
            <button 
              className={`flex items-center gap-3 px-3 py-3 text-red-400 hover:text-red-300 w-full rounded-xl hover:bg-red-500/10 transition-colors mt-1 ${!isSidebarOpen && 'justify-center'}`}
              title="Logout"
            >
              <LogOut size={20} className="flex-shrink-0" />
              {isSidebarOpen && <span>Logout</span>}
            </button>
          </div>
        </aside>

        {/* Overlay for mobile when menu is open */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-10 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
        )}

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto relative flex flex-col">
          {/* Top Bar */}
          <header className="sticky top-0 z-10 bg-[#0a1f33]/80 backdrop-blur-md border-b border-white/10 px-4 md:px-8 py-4 flex justify-between items-center h-20">
            
            <div className="flex items-center gap-4">
              {/* Desktop Sidebar Toggle Button */}
              <button 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="hidden lg:flex p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                title={isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
              >
                {isSidebarOpen ? <PanelLeftClose size={20} /> : <PanelLeftOpen size={20} />}
              </button>

              <div className="relative hidden md:block w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <input 
                  type="text" 
                  placeholder="Search your notes, questions..." 
                  className="w-full bg-[#050f19] border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-[#2fcf9c] transition-colors"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <button className="relative text-gray-400 hover:text-[#2fcf9c] transition-colors">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-3 pl-6 border-l border-white/10">
                <div className="text-right hidden md:block">
                  <p className="text-sm font-bold text-white">Student Name</p>
                  <p className="text-xs text-gray-400">Free Plan</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#2fcf9c] to-blue-500 border-2 border-[#0a1f33]"></div>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <div className="p-4 md:p-8 max-w-7xl mx-auto w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;