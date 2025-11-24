import React from "react";
import { Clock, Share2, Zap, FileText, Brain, Sparkles, BookOpen, CheckCircle, TrendingUp } from "lucide-react";
import { useAppStore } from "../store/useAppStore";
import MOCK_RESULTS from "./MockResults";

const ResultsView = () => {
  const { resetApp, activeTab, setActiveTab } = useAppStore();

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-[#0a1f33]">Econ 101: Lecture 4</h2>
            <p className="text-gray-500 flex items-center gap-2"><Clock size={14}/> Minted just now • 3 pages processed</p>
          </div>
          <div className="flex gap-3">
             <button className="px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-lg flex items-center gap-2 hover:bg-gray-50">
               <Share2 size={16} /> Share
             </button>
             <button onClick={resetApp} className="px-4 py-2 bg-[#0a1f33] text-white rounded-lg hover:bg-[#111827]">
               Upload New
             </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">85%</div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold">Predictability</p>
              <p className="font-semibold text-[#0a1f33]">High Confidence</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600"><Brain size={20}/></div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold">Key Topics</p>
              <p className="font-semibold text-[#0a1f33]">5 Identified</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-[#2fcf9c]/20 rounded-full flex items-center justify-center text-[#0a6b4d]"><Sparkles size={20}/></div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold">Lecturer Pattern</p>
              <p className="font-semibold text-[#0a1f33]">Graph Heavy</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#0a1f33] to-[#112d4a] p-4 rounded-xl shadow-lg text-white flex flex-col justify-center cursor-pointer hover:scale-[1.02] transition-transform">
             <div className="flex items-center justify-between mb-1">
               <span className="font-bold text-[#2fcf9c]">Exam Mode</span>
               <Zap size={16} className="text-[#2fcf9c]" fill="currentColor"/>
             </div>
             <p className="text-xs text-gray-400">Generate Mock Test</p>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Navigation */}
          <div className="w-full lg:w-64 flex-shrink-0 space-y-2">
            <button 
              onClick={() => setActiveTab('questions')}
              className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 font-medium transition-all ${activeTab === 'questions' ? 'bg-[#2fcf9c] text-[#0a1f33] shadow-md' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
            >
              <FileText size={18} /> Likely Questions
            </button>
            <button 
              onClick={() => setActiveTab('flashcards')}
              className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 font-medium transition-all ${activeTab === 'flashcards' ? 'bg-[#2fcf9c] text-[#0a1f33] shadow-md' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
            >
              <Zap size={18} /> Flashcards
            </button>
            <button 
              onClick={() => setActiveTab('summary')}
              className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 font-medium transition-all ${activeTab === 'summary' ? 'bg-[#2fcf9c] text-[#0a1f33] shadow-md' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
            >
              <BookOpen size={18} /> Smart Summary
            </button>
          </div>

          {/* Content Panel */}
          <div className="flex-1">
            {activeTab === 'questions' && (
              <div className="space-y-4 animate-fade-in-up">
                <div className="flex justify-between items-center mb-2">
                   <h3 className="text-xl font-bold text-[#0a1f33]">Predicted Exam Questions</h3>
                   <span className="text-sm text-[#2fcf9c] font-semibold cursor-pointer hover:underline">Export PDF</span>
                </div>
                {MOCK_RESULTS.questions.map((q) => (
                  <div key={q.id} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${q.type === 'mcq' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'}`}>
                        {q.type}
                      </span>
                      {q.difficulty && <span className="text-xs text-gray-400">{q.difficulty}</span>}
                    </div>
                    <p className="text-lg font-medium text-gray-800 mb-4">{q.q}</p>
                    {q.options && (
                      <div className="space-y-2 pl-4 border-l-2 border-gray-100">
                        {q.options.map(opt => (
                          <div key={opt} className={`text-sm p-2 rounded cursor-pointer ${opt === q.correct ? 'bg-green-50 text-green-700 font-medium border border-green-100' : 'text-gray-600 hover:bg-gray-50'}`}>
                            {opt === q.correct && <CheckCircle size={14} className="inline mr-2"/>}
                            {opt}
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="mt-4 pt-4 border-t border-gray-50 flex gap-4 text-sm text-gray-400">
                       <button className="hover:text-[#2fcf9c]">Reveal Answer</button>
                       <button className="hover:text-[#2fcf9c]">Locate in Notes</button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'flashcards' && (
              <div className="animate-fade-in-up">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {MOCK_RESULTS.flashcards.map((card) => (
                    <div key={card.id} className="group perspective h-64 cursor-pointer">
                      <div className="relative preserve-3d group-hover:rotate-y-180 w-full h-full duration-700">
                        <div className="absolute backface-hidden w-full h-full bg-[#0a1f33] rounded-xl p-8 flex flex-col items-center justify-center text-center shadow-lg border border-gray-700">
                          <Zap className="text-[#2fcf9c] mb-4 w-8 h-8" />
                          <h4 className="text-2xl font-bold text-white">{card.front}</h4>
                          <p className="text-gray-400 text-sm mt-4 absolute bottom-6">Hover to flip</p>
                        </div>
                        <div className="absolute rotate-y-180 backface-hidden w-full h-full bg-white rounded-xl p-8 flex flex-col items-center justify-center text-center shadow-xl border-2 border-[#2fcf9c]">
                          <p className="text-lg font-medium text-gray-800">{card.back}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="h-64 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center text-gray-400 hover:border-[#2fcf9c] hover:text-[#2fcf9c] cursor-pointer transition-colors bg-white/50">
                    <span className="text-4xl mb-2">+</span>
                    <span>Add Card</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'summary' && (
               <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 animate-fade-in-up">
                 <h3 className="text-2xl font-bold text-[#0a1f33] mb-2">{MOCK_RESULTS.summary.title}</h3>
                 <div className="p-4 bg-blue-50 rounded-lg mb-6 border-l-4 border-blue-500">
                   <h5 className="font-bold text-blue-800 text-sm mb-1 flex items-center gap-2"><TrendingUp size={16}/> Lecturer Insight</h5>
                   <p className="text-blue-700 text-sm">{MOCK_RESULTS.summary.lecturerFocus}</p>
                 </div>
                 <h4 className="font-bold text-gray-700 mb-4 uppercase tracking-wide text-sm">Core Concepts</h4>
                 <ul className="space-y-3 mb-8">
                   {MOCK_RESULTS.summary.keyPoints.map((pt, i) => (
                     <li key={i} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                       <div className="mt-1.5 w-2 h-2 bg-[#2fcf9c] rounded-full flex-shrink-0"></div>
                       {pt}
                     </li>
                   ))}
                 </ul>
                 <div className="h-32 bg-gray-100 rounded flex items-center justify-center text-gray-400 text-sm">
                   [Diagram: Supply vs Demand Curve generated from Image]
                 </div>
               </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsView; 