import { create } from 'zustand';

interface AppState {
  // State Variables
  scrolled: boolean;
  mobileMenuOpen: boolean;
  appMode: boolean;
  uploading: boolean;
  processing: boolean;
  resultsReady: boolean;
  activeTab: string;

  // Actions
  setScrolled: (isScrolled: boolean) => void;
  setMobileMenuOpen: (isOpen: boolean) => void;
  startApp: () => void;
  resetApp: () => void;
  setActiveTab: (tab: string) => void;
  
  // Complex Actions
  handleUpload: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  // Initial State
  scrolled: false,
  mobileMenuOpen: false,
  appMode: false,
  uploading: false,
  processing: false,
  resultsReady: false,
  activeTab: 'questions',

  // Simple Setters
  setScrolled: (scrolled) => set({ scrolled }),
  setMobileMenuOpen: (mobileMenuOpen) => set({ mobileMenuOpen }),
  setActiveTab: (activeTab) => set({ activeTab }),

  // Logic Actions
  startApp: () => {
    set({ appMode: true });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  resetApp: () => set({ 
    resultsReady: false, 
    appMode: false, 
    activeTab: 'questions' 
  }),

  handleUpload: () => {
    set({ uploading: true });
    // Simulate upload delay
    setTimeout(() => {
      set({ uploading: false, processing: true });
      // Simulate AI processing
      setTimeout(() => {
        set({ processing: false, resultsReady: true });
      }, 2500);
    }, 1500);
  },
}));