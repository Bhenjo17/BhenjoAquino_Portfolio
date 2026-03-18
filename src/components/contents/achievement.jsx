import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, 
  ExternalLink, 
  ShieldCheck, 
  Globe, 
  Monitor, 
  X, 
  Download 
} from "lucide-react";

// Import PDFs
import dataPrivacy from "../../assets/certificate/data_privacy.pdf";
import wordpress from "../../assets/certificate/word_press.pdf";
import virtualbox from "../../assets/certificate/virtual_formmating.pdf";

const AchievementsPage = () => {
  // State to handle which PDF is currently being viewed in the modal
  const [selectedPdf, setSelectedPdf] = useState(null);

  const certificates = [
    {
      title: "PARAGON - DATA PRIVACY ACT",
      org: "Paragon Corp",
      icon: <ShieldCheck className="text-blue-500" />,
      file: dataPrivacy,
      date: "2024"
    },
    {
      title: "Web Development (WordPress)",
      org: "Professional Training",
      icon: <Globe className="text-green-500" />,
      file: wordpress,
      date: "2023"
    },
    {
      title: "PC Formatting (VirtualBox)",
      org: "IT Skills Workshop",
      icon: <Monitor className="text-purple-500" />,
      file: virtualbox,
      date: "2023"
    }
  ];

  return (
    <div className="relative min-h-screen p-6 md:p-12 space-y-10 bg-slate-50 dark:bg-slate-950">
      <header>
        <span className="px-4 py-1.5 rounded-full bg-green-500 text-white text-[10px] font-black uppercase tracking-widest">
          Credentials
        </span>
        <h1 className="text-4xl md:text-5xl font-black mt-4 dark:text-white">
          Certificates & <span className="text-green-500">Awards</span>
        </h1>
      </header>

      {/* Grid of Certificates */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            key={index}
            className="group p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] hover:border-green-500 transition-all duration-300 shadow-xl shadow-slate-200/50 dark:shadow-none"
          >
            <div className="flex items-start justify-between">
              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl group-hover:scale-110 transition-transform">
                {cert.icon}
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase">{cert.date}</span>
            </div>
            
            <div className="mt-6">
              <h3 className="text-xl font-bold dark:text-white leading-tight group-hover:text-green-500 transition-colors">
                {cert.title}
              </h3>
              <p className="text-slate-500 text-sm mt-1">{cert.org}</p>
            </div>

            <div className="mt-8 flex gap-3">
              {/* Trigger for Modal View */}
              <button 
                onClick={() => setSelectedPdf(cert.file)}
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-slate-100 dark:bg-slate-800 dark:text-white rounded-xl font-bold text-xs hover:bg-green-500 hover:text-white transition-all"
              >
                <FileText size={14} /> VIEW PDF
              </button>
              
              {/* Direct Download Link */}
              <a 
                href={cert.file} 
                download 
                className="p-3 bg-slate-100 dark:bg-slate-800 dark:text-white rounded-xl hover:bg-green-500 hover:text-white transition-all"
                title="Download PDF"
              >
                <Download size={14} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- Fullscreen PDF Modal --- */}
      <AnimatePresence>
        {selectedPdf && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full h-full max-w-6xl bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Modal Header/Controls */}
              <div className="absolute top-4 right-4 z-50 flex gap-2">
                <a 
                  href={selectedPdf} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2 bg-white/10 hover:bg-green-500 text-white rounded-full transition-colors backdrop-blur-md"
                  title="Open in new tab"
                >
                  <ExternalLink size={20} />
                </a>
                <button 
                  onClick={() => setSelectedPdf(null)}
                  className="p-2 bg-white/10 hover:bg-red-500 text-white rounded-full transition-colors backdrop-blur-md"
                  title="Close"
                >
                  <X size={20} />
                </button>
              </div>

              {/* PDF Viewer Iframe */}
              <div className="w-full h-full">
                <iframe
                  src={`${selectedPdf}#toolbar=0&navpanes=0`} 
                  title="Certificate Preview"
                  className="w-full h-full border-none"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AchievementsPage;