"use client";
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useAppStore } from '../store/useAppStore';
import MOCK_RESULTS from '@/components/MockResults';
import ProcessingView from '@/components/ProcessingView';
import ResultsView from '@/components/Resultview';
import UploadView from '@/components/Uploadview';
import LandingPage from '@/components/LandingPage';
import { 
  Upload, 
  FileText, 
  Brain, 
  Zap, 
  CheckCircle, 
  Clock, 
  BookOpen, 
  Share2, 
  Sparkles, 
  TrendingUp, 
  ArrowRight 
} from 'lucide-react';


// --- MAIN APP COMPONENT ---
const App = () => {
  const { 
    appMode, 
    processing, 
    resultsReady, 
    setScrolled 
  } = useAppStore();

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setScrolled]);

  return (
    <div className="font-sans antialiased selection:bg-[#2fcf9c] selection:text-[#0a1f33]">
      <Navbar />
      
      {!appMode && <LandingPage />}
      
      {appMode && !processing && !resultsReady && <UploadView />}
      
      {appMode && processing && <ProcessingView />}
      
      {appMode && resultsReady && <ResultsView />}

    </div>
  );
}

export default App;