import React from "react";
import { ArrowRight, Brain, Zap, TrendingUp, FileText } from "lucide-react";
import { useAppStore } from "../store/useAppStore";
 
const LandingPage = () => {
  const { startApp } = useAppStore();
  
  return (
    <div className="bg-[#f5f7fa]">
      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col overflow-hidden bg-[#0a1f33]">
        {/* Background Image/Texture */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" 
            alt="Modern Office" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f33] via-[#0a1f33]/90 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 flex-1 flex items-center">
          <div className="grid md:grid-cols-2 gap-12 items-center w-full">
            
            {/* Left Content (Typography) */}
            <div className="space-y-8 pt-32 md:pt-32">
               <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                 FRESH <br/>
                 <span className="text-[#2fcf9c]">EXAM PREP.</span><br/>
                 INSTANTLY.
               </h1>
               <p className="text-xl text-gray-300 max-w-md">
                 <span className="font-extrabold italic">Mint Your Success</span>  <br/>
                 Turn raw notes into exam-ready questions, summaries, and flashcards in seconds.
               </p>
               <button 
                 onClick={startApp}
                 className="bg-[#2fcf9c] text-[#0a1f33] hover:bg-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(47,207,156,0.4)] flex items-center gap-3"
               >
                 START MINTING <ArrowRight size={20}/>
               </button>
            </div>

            {/* Right Content (Floating UI Card) */}
            <div className="relative hidden md:block h-[500px]">
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-[400px] bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-full border border-white/30 text-white text-xs">AI Engine</span>
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4">Smart Exam<br/>Intelligence</h3>
                <p className="text-gray-300 text-sm mb-6">From messy handouts to A+ prep materials.</p>
                
                <div className="bg-[#0a1f33] rounded-2xl p-4 relative overflow-hidden h-40 flex items-center justify-between">
                   <FileText className="text-gray-500 w-10 h-10" />
                   <div className="flex-1 h-1 bg-gray-700 mx-4 relative">
                      <div className="absolute inset-0 bg-[#2fcf9c] animate-load-bar"></div>
                   </div>
                   <Zap className="text-[#2fcf9c] w-10 h-10 shadow-[0_0_15px_#2fcf9c]" fill="currentColor"/>
                </div>
                
                <div className="absolute -right-6 bottom-10 w-16 h-16 bg-[#2fcf9c] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg" onClick={startApp}>
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-[#0a1f33] border-b-[10px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Overlay Area */}
        <div className="relative z-20 mt-auto pt-3 pb-8 px-6 md:px-12">
           <div className="flex flex-col md:flex-row gap-6 md:items-end">
              
              <div className="bg-[#b89f80] md:bg-[#c2a888] bg-[#2fcf9c] text-[#0a1f33] p-8 rounded-[2rem] md:rounded-tr-[4rem] w-full md:w-1/3 relative overflow-hidden">
                <h4 className="text-2xl font-bold mb-2">Upload Anything!</h4>
                <p className="text-[#0a1f33]/80 text-sm mb-8 max-w-[200px]">Handouts, Screenshots, Past Questions supported.</p>
                <div className="absolute bottom-0 right-0 w-32 h-32 opacity-50 translate-x-4 translate-y-4">
                   <FileText size={120} strokeWidth={1} />
                </div>
              </div>

              <div className="flex-1 flex justify-between items-end text-white pb-4 border-b border-white/20">
                 <div className="max-w-md">
                    <div className="flex -space-x-3 mb-4">
                       <div className="w-10 h-10 rounded-full border-2 border-[#0a1f33] bg-gray-300 bg-[url('https://randomuser.me/api/portraits/women/44.jpg')] bg-cover"></div>
                       <div className="w-10 h-10 rounded-full border-2 border-[#0a1f33] bg-gray-300 bg-[url('https://randomuser.me/api/portraits/men/32.jpg')] bg-cover"></div>
                       <div className="w-10 h-10 rounded-full border-2 border-[#0a1f33] bg-[#2fcf9c] flex items-center justify-center text-xs font-bold text-[#0a1f33]">12k+</div>
                    </div>
                    <p className="text-2xl uppercase font-light tracking-wider">
                       Lecturer Pattern <br/><span className="font-bold">Intelligence Included</span>
                    </p>
                 </div>
                 <a href="#how-it-works" className="hidden md:block uppercase text-sm font-bold tracking-widest hover:text-[#2fcf9c] transition-colors pb-1 border-b-2 border-transparent hover:border-[#2fcf9c]">
                    Learn More
                 </a>
              </div>
           </div>
        </div>
      </header>
      {/* Features & Other Sections */}
      <section id="features" className="py-24 container mx-auto px-6">
        {/* ... (Features Content) ... */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Brain size={32}/>, title: "Lecturer Pattern Intel", desc: "Upload past questions and we'll detect repeating topics and question styles specific to your prof." },
            { icon: <Zap size={32}/>, title: "Instant Flashcards", desc: "Don't waste hours writing cards. Get mint-fresh decks generated instantly from your PDF." },
            { icon: <TrendingUp size={32}/>, title: "Exam Week Mode", desc: "Panic button? We got you. Get the 10 most likely topics and a compressed summary in one click." }
          ].map((feature, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center text-[#0a1f33] group-hover:bg-[#2fcf9c] group-hover:text-[#0a1f33] transition-colors mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0a1f33] mb-3">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works / CTA */}
      <section id="how-it-works" className="bg-[#0a1f33] py-24 relative overflow-hidden">
         {/* ... (How it Works Content) ... */}
         <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-16">
               <div className="flex-1 space-y-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-white">Mint your exam <br/>success today.</h2>
                  <div className="space-y-6">
                     {[
                        { step: "01", title: "Upload Material", desc: "PDFs, Handouts, or Screenshots" },
                        { step: "02", title: "AI Processing", desc: "We extract facts, formulas & patterns" },
                        { step: "03", title: "Practice", desc: "Take mock tests & flip flashcards" }
                     ].map((s) => (
                        <div key={s.step} className="flex items-center gap-6">
                           <span className="text-4xl font-bold text-[#2fcf9c]/20">{s.step}</span>
                           <div>
                              <h4 className="text-white font-bold">{s.title}</h4>
                              <p className="text-gray-400 text-sm">{s.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
                  <button onClick={startApp} className="mt-8 bg-[#2fcf9c] px-8 py-4 rounded-lg font-bold text-[#0a1f33] hover:bg-white transition-colors w-full md:w-auto">
                     Get Started For Free
                  </button>
               </div>
               {/* Mobile UI Mockup */}
               <div className="flex-1 relative">
                  <div className="bg-gradient-to-br from-gray-800 to-black p-4 rounded-3xl border border-gray-700 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                      <div className="bg-white rounded-2xl overflow-hidden aspect-[9/16] max-w-sm mx-auto border-4 border-[#0a1f33]">
                         <div className="bg-[#0a1f33] p-6 pb-12 text-white text-center">
                            <h3 className="font-bold text-xl">Exam Week Mode</h3>
                            <p className="text-xs opacity-70">Generating your survival kit...</p>
                         </div>
                         <div className="bg-white -mt-6 rounded-t-3xl p-6 space-y-4">
                            <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                            <div className="h-4 bg-gray-100 rounded w-1/2"></div>
                            <div className="h-32 bg-blue-50 rounded-xl border-2 border-blue-100 p-4 flex items-center justify-center">
                               <span className="text-blue-800 font-bold text-2xl">A+</span>
                            </div>
                         </div>
                      </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      
      <footer className="bg-[#050f19] py-12 text-center text-gray-600 text-sm border-t border-gray-800">
        <p>© 2025 PrepMint. Study Smart. Score Higher.</p>
      </footer>
    </div>
  );
};

export default LandingPage;