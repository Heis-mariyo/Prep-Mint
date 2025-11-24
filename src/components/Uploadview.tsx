import React from "react";
import { Upload, FileText, Clock, Brain } from "lucide-react";
import { useAppStore } from "../store/useAppStore";

const UploadView = () => {
    const { handleUpload, uploading, resetApp } = useAppStore();
    return (
        <div className="min-h-screen bg-[#0a1f33] relative overflow-hidden pt-24 flex items-center justify-center px-4">
            {/* Background Elements */}
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#2fcf9c] rounded-full opacity-5 blur-[120px]"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-600 rounded-full opacity-5 blur-[100px]"></div>

            <div className="w-full max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to Mint?</h2>
                <p className="text-gray-400 text-lg">Upload handouts, past questions, or handwritten notes.</p>
            </div>

            <div 
                className={`bg-white/5 backdrop-blur-lg border-2 border-dashed ${uploading ? 'border-[#2fcf9c]' : 'border-gray-600'} hover:border-[#2fcf9c] hover:bg-white/10 rounded-2xl p-12 text-center transition-all cursor-pointer group`}
                onClick={handleUpload}
            >
                <div className="w-20 h-20 bg-[#0a1f33] rounded-full mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-xl border border-gray-700">
                {uploading ? (
                    <div className="animate-spin w-8 h-8 border-2 border-white border-t-transparent rounded-full"></div>
                ) : (
                    <Upload className="w-8 h-8 text-[#2fcf9c]" />
                )}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                {uploading ? 'Uploading...' : 'Drop files here or click to upload'}
                </h3>
                <p className="text-gray-400 mb-8">PDF, JPG, PNG, DOCX supported</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto">
                    <div className="flex flex-col items-center gap-2 text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
                    <FileText size={20}/> Handouts
                    </div>
                    <div className="flex flex-col items-center gap-2 text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
                    <Clock size={20}/> Past Questions
                    </div>
                    <div className="flex flex-col items-center gap-2 text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
                    <Brain size={20}/> Lecture Notes
                    </div>
                </div>
            </div>
            
            <button onClick={resetApp} className="mt-8 text-gray-500 hover:text-white w-full text-center text-sm underline">
                Back to Home
            </button>
            </div>
        </div>
    );
};

export default UploadView;