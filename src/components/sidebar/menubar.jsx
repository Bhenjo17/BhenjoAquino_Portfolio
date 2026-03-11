import React, { useState } from "react";
import { Sun, Moon, User, LayoutDashboard, Briefcase, PenTool, Menu, X, Info } from "lucide-react";
import profile from "../../assets/image/profile_graduate.jpg";
import cartoon from "../../assets/image/cartoon_profile.png";

const Sidebar = ({ darkMode, setDarkMode, activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: 'about', label: 'About', icon: <Info size={20} /> },
    { id: 'projects', label: 'Projects', icon: <Briefcase size={20} /> },
  ];

  return (
    <>
      {/* Mobile Toggle */}
      <button onClick={() => setIsOpen(!isOpen)} className="fixed top-6 right-6 z-70 p-3 bg-green-500 text-white rounded-full md:hidden">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside className={`fixed inset-y-0 left-0 z-60 w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
        <div className="flex flex-col h-full p-8">
          {/* Avatar Section */}
          <div className="flex flex-col items-center mb-10 group">
             <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-green-500">
                <img src={profile} className="w-full h-full object-cover group-hover:opacity-0 transition-opacity" alt="Profile" />
                <img src={cartoon} className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity" alt="Cartoon" />
             </div>
             <h2 className="mt-4 font-black text-xl dark:text-white">Bhenjo Aquino</h2>
             <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Full Stack Developer</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { setActiveTab(item.id); setIsOpen(false); }}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl font-bold transition-all ${
                  activeTab === item.id 
                  ? "bg-green-500 text-white" 
                  : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {item.icon} {item.label}
              </button>
            ))}
          </nav>

          {/* THE TOGGLE BUTTON */}
        {/* THE TOGGLE BUTTON */}
<button
  onClick={() => setDarkMode(!darkMode)}
  className="mt-auto flex items-center justify-center gap-3 p-4 rounded-2xl 
             bg-slate-100 dark:bg-slate-800 
             text-slate-900 dark:text-slate-100 
             hover:bg-green-500 hover:text-white 
             dark:hover:bg-green-500 dark:hover:text-white 
             transition-all duration-300 font-bold uppercase text-xs"
>
  {darkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-slate-600" />}
  <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
</button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;