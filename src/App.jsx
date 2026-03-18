import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ExternalLink, Briefcase, FolderRoot, PenTool, 
  Code2, Database, Globe, Cpu, Smartphone, Layout,
  Github, Figma, Layers, Monitor, Wind, Zap, Terminal, X, Download 
} from "lucide-react"; 

// Component Imports
import Sidebar from "./components/sidebar/menubar";
import AboutPage from "./components/contents/about"; 
import ProjectsPage from "./components/contents/project";

// Media Imports
import resumeFile from "./assets/resume/bhenjo_advincula_aquino_resume.pdf"; 
import backgroundVideo from "./assets/video/background_video.mp4";
import loadingAppImg from "./assets/image/loading_app.png";
import paragonImg from "./assets/image/paragon_system.png";
import repairImg from "./assets/image/repair_system.png";
import carwashImg from "./assets/image/carwash_system.png";
import fosImg from "./assets/image/fos_system.png";
import RegisterImg from "./assets/image/registration_system.png";

// --- ANIMATION VARIANTS ---
const sectionVariants = { 
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};    

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1, 
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

const App = () => {
  // 1. Initialize Theme from LocalStorage or System Preference
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  });

  const [activeTab, setActiveTab] = useState("dashboard");
  const [loading, setLoading] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // 2. Synchronize Theme with HTML class and LocalStorage
  useEffect(() => {
  const root = window.document.documentElement; // This selects the <html> tag
  if (darkMode) {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
}, [darkMode]);

  // Preloader Logic per tab change
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const projects = [
    { title: "S2S Loading App System", category: "Product Design", image: loadingAppImg, link: "https://s2sinternet.paragoncorp.com.ph/" },
    { title: "Paragon Management System", category: "Full Stack", image: paragonImg, link: "https://paragoncorpmms.com/Paragon_MS/login" },
    { title: "Repair Management Monitoring System", category: "Full Stack", image: repairImg, link: "https://repair.paragoncorpmms.com/auth/login.php" },
    { title: "Online Registration Management System", category: "Full Stack Development", image: RegisterImg, link: "#", tag: "Latest" },
    { title: "AI Fraud Detection Online Booking", category: "AI & Full Stack", image: fosImg, link: "#" },
    { title: "Carwash Location System", category: "Web Application", image: carwashImg, link: "#" },
  ];

  const skills = [
    { name: "React", icon: <Globe className="text-blue-400" />, level: "Intermediate" },
    { name: "PHP", icon: <Code2 className="text-indigo-500" />, level: "Advanced" },
    { name: "MySQL", icon: <Database className="text-orange-500" />, level: "Advanced" },
    { name: "JavaScript", icon: <Cpu className="text-yellow-400" />, level: "Advanced" },
    { name: "Tailwind", icon: <Wind className="text-cyan-400" />, level: "Advanced" },
    { name: "Vite", icon: <Zap className="text-yellow-500" />, level: "Intermediate" },
    { name: "Git", icon: <Terminal className="text-red-500" />, level: "Advanced" },
    { name: "GitHub", icon: <Github className="text-slate-700 dark:text-white" />, level: "Advanced" },
    { name: "Figma", icon: <Figma className="text-purple-500" />, level: "Intermediate" },
    { name: "Adobe XD", icon: <PenTool className="text-pink-600" />, level: "Intermediate" },
    { name: "Canva", icon: <Layout className="text-blue-500" />, level: "Advanced" },
    { name: "MS Office", icon: <Monitor className="text-red-400" />, level: "Advanced" },
    { name: "Google Workspace", icon: <Globe className="text-green-600" />, level: "Advanced" },
    { name: "Mobile", icon: <Smartphone className="text-green-500" />, level: "Learning" },
  ];

  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white min-h-screen transition-colors duration-300 selection:bg-green-500/30">
      
      {/* PRELOADER */}
      <AnimatePresence>
        {loading && (
          <motion.div 
            initial={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-white dark:bg-slate-950"
          >
            <div className="relative">
              <div className="w-20 h-20 border-4 border-slate-100 dark:border-slate-800 rounded-full"></div>
              <div className="absolute top-0 left-0 w-20 h-20 border-4 border-t-green-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
            </div>
            <motion.h2 className="mt-6 font-black text-xl tracking-tighter dark:text-white uppercase">
              BHENJO <span className="text-green-500">AQUINO</span>
            </motion.h2>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SIDEBAR */}
      <Sidebar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />

      {/* MAIN CONTENT */}
      <main className="flex-1 ml-0 md:ml-72 transition-all duration-500">
        
        {/* TAB: DASHBOARD */}
        {activeTab === "dashboard" && (
          <div className="overflow-hidden">
            {/* HERO SECTION */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative w-full h-[65vh] overflow-hidden"
            >
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                <source src={backgroundVideo} type="video/mp4" />
              </video>
              {/* Corrected gradient to blend with dark mode background */}
              <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-white dark:to-slate-950" />
              
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-12 left-6 md:left-12"
              >
                <span className="px-4 py-1.5 rounded-full bg-green-500 text-white text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">Welcome Back</span>
                <h1 className="text-white text-4xl md:text-6xl font-black mt-4 drop-shadow-2xl">
                  Building Digital <span className="text-slate-900 dark:text-green-500">Experiences</span>
                </h1>
              </motion.div>
            </motion.div>

            <div className="p-6 md:p-12 -mt-10 relative z-10 space-y-32">
              
              {/* CAREER STATUS */}
              <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 group relative p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
                    <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                      <div>
                        <p className="text-green-500 font-bold text-xs uppercase tracking-widest mb-2">Current Status</p>
                        <h2 className="text-3xl font-black mb-2 dark:text-white">Available for Hire</h2>
                        <p className="text-slate-500 dark:text-slate-400 max-w-md">Focused on building scalable full-stack applications and intuitive user experiences.</p>
                      </div>
                      <button 
                        onClick={() => setIsResumeOpen(true)}
                        className="px-8 py-4 bg-slate-900 dark:bg-green-500 text-white rounded-2xl font-bold hover:scale-105 transition-transform shadow-lg flex items-center gap-2"
                      >
                        <Briefcase size={18} /> View Resume
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <StatCard icon={<Briefcase size={20} />} val="3 Years" label="Experience" />
                    <StatCard icon={<FolderRoot size={20} />} val="6" label="Projects" />
                  </div>
                </div>
              </motion.section>

              {/* FEATURED WORK */}
              <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                <div className="flex items-end justify-between mb-10">
                  <h2 className="text-4xl font-black tracking-tight dark:text-white">Featured <span className="text-green-500">Work</span></h2>
                  <div className="hidden md:block h-0.5 flex-1 mx-10 bg-slate-200 dark:bg-slate-800 mb-4" />
                  <button onClick={() => setActiveTab("projects")} className="text-sm font-bold text-green-500 hover:underline">View All</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.slice(0, 3).map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                  ))}
                </div>
              </motion.section>

              {/* TECHNICAL ARSENAL */}
              <motion.section className="pb-20" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
                <h2 className="text-3xl font-black mb-10 tracking-tight flex items-center gap-4 dark:text-white">
                  Technical Arsenal <span className="h-px w-20 bg-green-500"></span>
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {skills.map((skill, i) => (
                    <motion.div key={i} variants={itemVariants} className="group p-6 rounded-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-green-500 transition-all duration-300 text-center flex flex-col items-center shadow-sm hover:shadow-green-500/10">
                      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 group-hover:scale-110 transition-transform mb-4">
                        {skill.icon}
                      </div>
                      <h3 className="font-bold text-[13px] leading-tight dark:text-white">{skill.name}</h3>
                      <span className="text-[9px] uppercase font-black text-slate-400 mt-1">{skill.level}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            </div>
          </div>
        )}

        {/* PAGE CONTENT SWITCHER */}
        <AnimatePresence mode="wait">
          {activeTab === "projects" && (
            <motion.div key="projects" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
              <ProjectsPage />
            </motion.div>
          )}
          {activeTab === "about" && (
            <motion.div key="about" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
              <AboutPage />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* RESUME MODAL */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} fileUrl={resumeFile} />
    </div>
  );
};

// --- REUSABLE COMPONENTS ---

const ResumeModal = ({ isOpen, onClose, fileUrl }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }} 
        className="fixed inset-0 z-150 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md" 
        onClick={onClose}
      >
        <motion.div 
          initial={{ scale: 0.9, y: 30 }} 
          animate={{ scale: 1, y: 0 }} 
          exit={{ scale: 0.9, y: 30 }} 
          onClick={(e) => e.stopPropagation()} 
          className="bg-white dark:bg-slate-900 w-full max-w-5xl h-[90vh] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col"
        >
          <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
            <div>
              <h3 className="text-xl font-black dark:text-white">Professional Resume</h3>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">aquino_resume.pdf</p>
            </div>
            <div className="flex gap-2">
              <a href={fileUrl} download className="p-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors shadow-lg">
                <Download size={20} />
              </a>
              <button onClick={onClose} className="p-3 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-white rounded-xl hover:bg-red-500 hover:text-white transition-all">
                <X size={20} />
              </button>
            </div>
          </div>
          <div className="flex-1 bg-slate-200 dark:bg-slate-950 p-2">
            <iframe src={`${fileUrl}#toolbar=0`} className="w-full h-full rounded-2xl border-none shadow-inner" title="Resume" />
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const StatCard = ({icon, val, label}) => (
  <motion.div whileHover={{ y: -5 }} className="p-6 rounded-4xl bg-green-500 text-white flex flex-col justify-center items-center text-center shadow-lg shadow-green-500/20">
    {icon}
    <span className="text-2xl font-black mt-2">{val}</span>
    <span className="text-[10px] uppercase font-bold opacity-80">{label}</span>
  </motion.div>
);

const ProjectCard = ({ project, index }) => (
  <motion.a 
    initial={{ opacity: 0, y: 20 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    viewport={{ once: true }} 
    transition={{ delay: index * 0.1 }} 
    href={project.link} 
    target={project.link === "#" ? "_self" : "_blank"} 
    rel="noopener noreferrer" 
    className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2.5rem] overflow-hidden hover:shadow-2xl transition-all duration-500 block relative"
  >
    {project.tag && (
      <span className="absolute top-4 right-4 z-20 bg-green-500 text-white text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
        {project.tag}
      </span>
    )}
    <div className="relative h-56 overflow-hidden">
      <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <div className="bg-white p-3 rounded-full text-green-500"><ExternalLink size={20} /></div>
      </div>
    </div>
    <div className="p-8">
      <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">{project.category}</span>
      <h3 className="text-xl font-bold mt-2 group-hover:text-green-500 transition-colors dark:text-white leading-tight">
        {project.title}
      </h3>
    </div>
  </motion.a>
);

export default App;