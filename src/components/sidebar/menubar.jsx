import React, { useState } from "react";
import { Sun, Moon, User, LayoutDashboard, Briefcase, PenTool, Menu, X, Info } from "lucide-react";
import profile from "../../assets/image/profile_graduate.jpg";
import cartoon from "../../assets/image/cartoon_profile.png";

const Sidebar = ({ darkMode, setDarkMode, activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Helper to change page and close mobile menu
  const navigateTo = (tab) => {
    setActiveTab(tab);
    setIsOpen(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-[60] p-3 rounded-full bg-green-500 text-white shadow-lg md:hidden hover:scale-110 transition-transform"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[51] md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={`
        fixed inset-y-0 left-0 z-[55] w-72 
        bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl border-r border-slate-200 dark:border-slate-800 
        flex flex-col transition-transform duration-500 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0
      `}>

        <div className="flex flex-col items-center py-10 px-8">
          <div className="relative group w-28 h-28 cursor-pointer">
            <div className="absolute -inset-1 bg-gradient-to-tr from-green-500 to-emerald-400 rounded-full blur opacity-20 animate-pulse" />
            <div className="relative w-28 h-28 overflow-hidden rounded-full border-2 border-white dark:border-slate-800">
              <img src={profile} className="w-full h-full object-cover group-hover:opacity-0 transition-opacity" alt="Profile" />
              <img src={cartoon} className="w-full h-full object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity" alt="Cartoon" />
            </div>
          </div>
          
          <div className="text-center mt-6">
            <h2 className="text-xl font-black dark:text-white">Bhenjo Aquino</h2>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Full Stack Developer</p>
          </div>

          <button 
            onClick={() => navigateTo('about')}
            className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-2 bg-green-500 text-white rounded-xl font-bold text-xs uppercase shadow-lg shadow-green-500/30 hover:bg-green-600 transition-all"
          >
            <User size={14} /> View Profile
          </button>
        </div>

        <hr className="mx-8 border-slate-100 dark:border-slate-800 mb-6" />

        <nav className="flex-1 px-8 space-y-2">
          <NavItem 
            icon={<LayoutDashboard size={18} />} 
            label="Dashboard" 
            active={activeTab === 'dashboard'} 
            onClick={() => navigateTo('dashboard')} 
          />
          <NavItem 
            icon={<Info size={18} />} 
            label="About" 
            active={activeTab === 'about'} 
            onClick={() => navigateTo('about')} 
          />
          <NavItem 
            icon={<Briefcase size={18} />} 
            label="Projects" 
            active={activeTab === 'projects'}
            onClick={() => navigateTo('projects')} 
          />
          <NavItem 
            icon={<PenTool size={18} />} 
            label="Blog" 
            active={activeTab === 'blog'}
            onClick={() => navigateTo('blog')} 
          />
        </nav>

        <div className="p-8">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-full flex items-center justify-center gap-3 p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/50 dark:text-white hover:bg-green-500 hover:text-white transition-all duration-300 font-bold text-xs uppercase"
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>
      </aside>
    </>
  );
};

const NavItem = ({ icon, label, active = false, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-4 px-5 py-3 rounded-xl transition-all duration-300 cursor-pointer font-bold text-sm ${
    active 
      ? "bg-slate-100 dark:bg-slate-800 text-green-500" 
      : "text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800/80 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
  }`}>
    {icon}
    <span>{label}</span>
  </button>
);

export default Sidebar;