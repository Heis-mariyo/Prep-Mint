"use client";
import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import { 
  Upload, 
  FileText, 
  Brain, 
  Zap, 
  MoreVertical, 
  Clock, 
  TrendingUp,
  ArrowRight,
  Plus
} from 'lucide-react';

export default function Dashboard() {
  return (
    <DashboardLayout>
      {/* 1. Welcome Header */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Welcome back, <span className="text-[#2fcf9c]">Mario!</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Your study companion, one upload away.
        </p>
      </div>

      {/* 2. Stats Overview Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Total Uploads', value: '12', icon: FileText, color: 'text-blue-400', bg: 'bg-blue-400/10' },
          { label: 'Cards Mastered', value: '85', icon: Zap, color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
          { label: 'Questions Practiced', value: '124', icon: Brain, color: 'text-purple-400', bg: 'bg-purple-400/10' },
          { label: 'Study Streak', value: '3 Days', icon: TrendingUp, color: 'text-[#2fcf9c]', bg: 'bg-[#2fcf9c]/10' },
        ].map((stat, i) => (
          <div key={i} className="bg-[#050f19] border border-white/5 p-5 rounded-2xl flex items-center gap-4 hover:border-white/10 transition-colors">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column (Main Actions) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Smart Prep Generator */}
          <section>
            <div className="flex justify-between items-end mb-4">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Brain className="text-[#2fcf9c]" size={24}/> Smart Prep Generator
                </h2>
                <p className="text-sm text-gray-400">Prep smarter, not harder.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="bg-gradient-to-br from-[#050f19] to-[#0a1f33] border border-white/10 p-6 rounded-2xl text-left hover:border-[#2fcf9c] group transition-all">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                  <FileText size={20} />
                </div>
                <h3 className="font-bold text-white mb-1">Question Gen</h3>
                <p className="text-xs text-gray-400">AI-generated likely exam questions.</p>
              </button>

              <button className="bg-gradient-to-br from-[#050f19] to-[#0a1f33] border border-white/10 p-6 rounded-2xl text-left hover:border-[#2fcf9c] group transition-all">
                <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center text-yellow-400 mb-4 group-hover:scale-110 transition-transform">
                  <Zap size={20} />
                </div>
                <h3 className="font-bold text-white mb-1">Flashcards</h3>
                <p className="text-xs text-gray-400">Bite-sized cards for fast revision.</p>
              </button>

              <button className="bg-gradient-to-br from-[#050f19] to-[#0a1f33] border border-white/10 p-6 rounded-2xl text-left hover:border-[#2fcf9c] group transition-all">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                  <Brain size={20} />
                </div>
                <h3 className="font-bold text-white mb-1">Auto-Summary</h3>
                <p className="text-xs text-gray-400">Clean chapter-by-chapter notes.</p>
              </button>
            </div>
          </section>

          {/* Recent Uploads */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-white">Recent Uploads</h2>
              <button className="text-sm text-[#2fcf9c] hover:underline flex items-center gap-1">
                View All <ArrowRight size={14} />
              </button>
            </div>
            
            <div className="bg-[#050f19] border border-white/10 rounded-2xl overflow-hidden">
              {/* Empty State (Commented out for demo) */}
              {/* <div className="p-8 text-center">
                <p className="text-gray-400 mb-4">No uploads yet. Add your first handout to unlock tools.</p>
                <button className="px-4 py-2 bg-[#2fcf9c] text-[#0a1f33] rounded-lg font-bold">Upload Document</button>
              </div> */}

              {/* List State */}
              <div className="divide-y divide-white/5">
                {[
                  { name: 'Introduction to Microeconomics.pdf', date: '2 hours ago', size: '2.4 MB' },
                  { name: 'GST 101 - Logic and Philosophy.docx', date: 'Yesterday', size: '1.1 MB' },
                  { name: 'Advanced Calculus Handout.pdf', date: '3 days ago', size: '4.5 MB' },
                ].map((file, i) => (
                  <div key={i} className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400">
                        <FileText size={20} />
                      </div>
                      <div>
                        <h4 className="text-white font-medium text-sm group-hover:text-[#2fcf9c] transition-colors">{file.name}</h4>
                        <p className="text-xs text-gray-500">{file.date} • {file.size}</p>
                      </div>
                    </div>
                    <button className="text-gray-500 hover:text-white p-2">
                      <MoreVertical size={18} />
                    </button>
                  </div>
                ))}
              </div>
              
              {/* Add New Button Row */}
              <div className="p-4 border-t border-white/10 bg-[#0a1f33]/50">
                <button className="w-full py-3 border border-dashed border-gray-600 rounded-xl text-gray-400 flex items-center justify-center gap-2 hover:border-[#2fcf9c] hover:text-[#2fcf9c] transition-colors">
                  <Plus size={18} /> Upload New Handout
                </button>
              </div>
            </div>
          </section>

        </div>

        {/* Right Column (Side Widgets) */}
        <div className="space-y-8">
          
          {/* Exam Mode Widget */}
          <div className="bg-gradient-to-b from-[#2fcf9c] to-[#0a6b4d] rounded-2xl p-6 text-[#0a1f33] relative overflow-hidden group cursor-pointer">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl -mr-10 -mt-10"></div>
            <div className="relative z-10">
              <div className="w-10 h-10 bg-[#0a1f33] rounded-lg flex items-center justify-center text-[#2fcf9c] mb-4 shadow-lg">
                <Clock size={20} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Exam Mode</h3>
              <p className="text-[#0a1f33]/80 text-sm mb-6 font-medium">
                Get exam confidence, one session at a time.
              </p>
              <button className="w-full bg-[#0a1f33] text-white py-3 rounded-xl font-bold hover:bg-[#050f19] transition-colors shadow-lg flex items-center justify-center gap-2">
                Start Mock Test
              </button>
            </div>
          </div>

          {/* Recent Decks */}
          <div className="bg-[#050f19] border border-white/10 rounded-2xl p-6">
            <h3 className="font-bold text-white mb-4 flex items-center gap-2">
              <Zap size={18} className="text-yellow-400"/> Study Decks
            </h3>
            <div className="space-y-3">
              {[
                { title: 'Econ 101: Market Forces', count: '24 cards' },
                { title: 'Philosophy Definitions', count: '15 cards' },
              ].map((deck, i) => (
                <div key={i} className="flex justify-between items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 cursor-pointer transition-colors">
                  <div>
                    <p className="text-sm font-bold text-white">{deck.title}</p>
                    <p className="text-xs text-gray-500">{deck.count}</p>
                  </div>
                  <ArrowRight size={14} className="text-gray-500" />
                </div>
              ))}
              <button className="w-full py-2 text-xs text-center text-gray-500 hover:text-[#2fcf9c] border border-dashed border-gray-700 rounded-lg mt-2">
                + Create New Deck
              </button>
            </div>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}