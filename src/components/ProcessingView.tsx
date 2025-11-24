import React from "react";
import { Brain, CheckCircle } from "lucide-react";

const ProcessingView = () => (
  <div className="min-h-screen bg-[#0a1f33] pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center">
    <div className="relative w-32 h-32 mb-8">
      <div className="absolute inset-0 border-4 border-[#2fcf9c]/20 rounded-full animate-ping"></div>
      <div className="absolute inset-0 border-4 border-t-[#2fcf9c] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <Brain className="w-12 h-12 text-[#2fcf9c]" />
      </div>
    </div>
    <h2 className="text-3xl font-bold text-white mb-4">Minting Your Success...</h2>
    <div className="flex flex-col gap-2 text-gray-400 max-w-md">
      <div className="flex items-center gap-3 animate-pulse">
        <CheckCircle className="w-4 h-4 text-[#2fcf9c]" /> Scanning document structure
      </div>
      <div className="flex items-center gap-3 animate-pulse delay-75">
        <CheckCircle className="w-4 h-4 text-[#2fcf9c]" /> Extracting key concepts
      </div>
      <div className="flex items-center gap-3 animate-pulse delay-150">
        <CheckCircle className="w-4 h-4 text-[#2fcf9c]" /> Predicting exam patterns
      </div>
    </div>
  </div>
);

export default ProcessingView;