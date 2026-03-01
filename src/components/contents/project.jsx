import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ShieldCheck, Zap, Layers, Server, Activity } from "lucide-react";

// Image imports
import loadingAppImg from "../../assets/image/loading_app.png";
import paragonImg from "../../assets/image/paragon_system.png";
import carwashImg from "../../assets/image/carwash_system.png";
import fosImg from "../../assets/image/fos_system.png";
import RegisterImg from "../../assets/image/registration_system.png";
// NEW REPAIR SYSTEM IMPORT
import repairImg from "../../assets/image/repair_system.png";

const ProjectsPage = () => {
  const allProjects = [
    {
      title: "Repair Management Monitoring System",
      category: "Operations & Maintenance",
      description: "A real-time monitoring solution for tracking repair workflows, equipment maintenance status, and technician assignments.",
      image: repairImg,
      link: "https://repair.paragoncorpmms.com/login/login.php",
      tech: ["PHP", "MySQLi", "JavaScript", "Tailwind"],
      featured: true
    },
    {
      title: "Online Registration Management System",
      category: "Full Stack Development",
      description: "A comprehensive digital enrollment system featuring automated data validation and administrative oversight.",
      image: RegisterImg,
      link: "#",
      tech: ["PHP", "MySQL", "JavaScript"],
      featured: false
    },
    {
      title: "AI Fraud Detection Online Booking",
      category: "AI & Web Security",
      description: "An intelligent booking platform designed to identify and mitigate fraudulent transactions using pattern recognition.",
      image: fosImg,
      link: "#",
      tech: ["PHP", "MySQL", "JavaScript"],
      featured: false
    },
    {
      title: "Paragon Management System",
      category: "Enterprise Solution",
      description: "A robust internal management infrastructure deployed on Hostinger for handling corporate workflows and data.",
      image: paragonImg,
      link: "https://paragoncorpmms.com/Paragon_MS/login",
      tech: ["PHP", "JavaScript", "MySQL", "Hostinger"],
      featured: false
    },
    {
      title: "S2S Loading App System",
      category: "UI/UX Design",
      description: "A high-fidelity logistics interface design focused on seamless inventory movement and user experience.",
      image: loadingAppImg,
      link: "https://s2sinternet.paragoncorp.com.ph/",
      tech: ["Canva", "Adobe XD"],
      featured: false
    },
    {
      title: "Carwash Location System",
      category: "Web Application",
      description: "A geospatial application helping users find and book nearby carwash services efficiently.",
      image: carwashImg,
      link: "#",
      tech: ["JavaScript", "HTML/CSS", "MySQL"],
      featured: false
    },
  ];

  return (
    <div className="min-h-screen p-6 md:p-12 bg-slate-50 dark:bg-[#0f172a]">
      {/* Header Section */}
      <div className="mb-16">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-green-500 font-black text-xs uppercase tracking-[0.3em]"
        >
          Case Studies
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black dark:text-white mt-4 tracking-tighter"
        >
          Featured <span className="text-green-500">Works.</span>
        </motion.h1>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {allProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white dark:bg-slate-900 rounded-[3rem] overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-green-500/50 transition-all duration-500"
          >
            {/* Image Section */}
            <div className="relative h-80 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
              
              {/* Tech Tags on Image */}
              <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-green-500 text-white text-[10px] font-black rounded-full uppercase tracking-tighter">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-10">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mt-2 dark:text-white group-hover:text-green-500 transition-colors">
                    {project.title}
                  </h3>
                </div>
                {project.link !== "#" && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 bg-slate-100 dark:bg-slate-800 rounded-2xl text-slate-600 dark:text-slate-300 hover:bg-green-500 hover:text-white transition-all shadow-lg"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
              
              <p className="text-slate-500 dark:text-slate-400 mt-4 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Bottom Decorative Info */}
              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                   <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                     {project.link.includes("paragoncorpmms") ? "Live System" : "Internal App"}
                   </span>
                </div>
                <div className="flex gap-3 text-slate-300 dark:text-slate-700">
                   <Activity size={16} />
                   <ShieldCheck size={16} />
                   <Server size={16} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;