import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, MapPin, Phone, GraduationCap, 
  Briefcase, Award, Code, Globe, MessageSquare,
  Facebook, Github, Chrome, Layout, Server, Wrench,
  X, Send 
} from "lucide-react";

// Assets
import profile from "../../assets/image/profile_graduate.jpg";
import cartoon from "../../assets/image/cartoon_profile.png";
import background from "../../assets/image/background.png";

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const AboutPage = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen py-4 md:py-8 px-4 md:px-0 overflow-hidden relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* --- HEADER SECTION --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-12 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl"
        >
          <div className="h-40 md:h-52 relative">
            <img 
              src={background} 
              alt="Background" 
              className="w-full h-full object-cover opacity-80" 
            />
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-white dark:to-slate-900" />
          </div>

          <div className="px-6 md:px-10 pb-8 flex flex-col md:flex-row items-center md:items-end -mt-20 md:-mt-24 gap-6 relative z-10">
            
          {/* ANIMATED PROFILE IMAGE SWAP */}
<motion.div 
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.3 }}
  className="relative group"
>
  {/* Hover Glow Effect */}
  <div className="absolute -inset-2 bg-green-500 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
  
  <motion.div 
    className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white dark:border-slate-900 overflow-hidden shadow-2xl cursor-pointer bg-slate-200"
    whileHover="hover"
  >
    {/* 1. CARTOON (The Background/Default Image) */}
    <img 
      src={cartoon} 
      alt="Cartoon Version" 
      className="absolute inset-0 w-full h-full object-cover" 
    />

    {/* 2. PROFILE (The Hover Image - Fades IN) */}
    <motion.img 
      src={profile} 
      alt="Graduate Version" 
      className="absolute inset-0 w-full h-full object-cover z-10"
      initial={{ opacity: 0 }} // Hidden by default
      variants={{
        hover: { 
          opacity: 1, // Becomes visible on hover
          scale: 1.05,
          transition: { duration: 0.4, ease: "easeInOut" }
        }
      }}
    />
  </motion.div>
</motion.div>
            <div className="flex-1 text-center md:text-left">
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight"
              >
                Bhenjo Advincula Aquino
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-green-500 font-bold uppercase tracking-[0.2em] text-sm mt-2"
              >
                Data Analyst / Graphics Designer
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap justify-center md:justify-start gap-4 mt-6 text-slate-500 dark:text-slate-400 text-xs md:text-sm font-medium"
              >
                <ContactBadge icon={<MapPin size={14}/>} text="Alcala, Pangasinan" />
                <ContactBadge icon={<Phone size={14}/>} text="+639512719313" />
                <ContactBadge icon={<Mail size={14}/>} text="bhenjoadvinculaaquino@gmail.com" />
              </motion.div>
            </div>

            <motion.button 
              onClick={() => setIsChatOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-2xl font-black text-sm uppercase transition-all shadow-lg shadow-green-500/20"
            >
              <MessageSquare size={18} /> Message Me
            </motion.button>
          </div>
        </motion.div>

        {/* --- LEFT COLUMN --- */}
        <div className="lg:col-span-8 space-y-6">
          <motion.section 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white dark:bg-slate-900 p-8 rounded-4xl border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            <h3 className="text-xl font-black mb-4 dark:text-white flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
                <Globe size={18} />
              </span>
              About Me
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
             I am a detail-oriented Full-Stack Developer with a strong foundation in web development, graphic design, and administrative support, allowing me to approach projects with both technical expertise and creative insight. I have hands-on experience in building responsive and user-friendly web applications, working confidently with both front-end and back-end technologies to deliver efficient, scalable, and secure systems. My skill set includes database management, system integration, and optimizing application performance to ensure smooth and reliable operations. Beyond coding, my background in graphic design helps me create visually appealing and intuitive interfaces, while my administrative experience strengthens my organizational skills, documentation practices, and ability to manage multiple tasks effectively. I am highly adaptable, quick to learn new technologies, and committed to continuous improvement, ensuring that every project I handle is completed with accuracy, innovation, and a focus on delivering real value to users and stakeholders.
            </p>
          </motion.section>

          {/* RESTORED FULL SKILLS SECTION */}
          <motion.section 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white dark:bg-slate-900 p-8 rounded-4xl border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            <h3 className="text-xl font-black mb-10 dark:text-white flex items-center gap-3">
               <span className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
                <Code size={18} />
              </span>
              Technical Expertise
            </h3>
            
            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-12"
            >
              <SkillGroup 
                icon={<Layout size={20} />} 
                title="Front End" 
                list={["HTML", "CSS", "Javascript", "Bootstrap", "Tailwind", "React JS", "Vite"]} 
              />
              <SkillGroup 
                icon={<Server size={20} />} 
                title="Back End" 
                list={["Javascript", "PHP", "MySQL Database"]} 
              />
              <SkillGroup 
                icon={<Wrench size={20} />} 
                title="Tools & Applications" 
                list={["Figma", "Canva", "AdobeXD", "VS Code", "GitHub", "Hostinger", "MS Office"]} 
              />
              
              <motion.div variants={fadeInUp}>
                <h4 className="font-black text-green-500 text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Award size={16} /> Awards & Activities
                </h4>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-2xl border-l-4 border-green-500">
                  <p className="text-sm font-bold dark:text-white italic leading-relaxed">
                    "Received the 'Capstone Project of the Year' Thesis Title, Pangasinan Online Products Management System"
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.section>
        </div>

        {/* --- RIGHT COLUMN --- */}
        <div className="lg:col-span-4 space-y-6">
          <motion.section 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-900 p-8 rounded-4xl border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            <h3 className="text-xl font-black mb-6 dark:text-white flex items-center gap-3">
              <GraduationCap className="text-green-500" /> Education
            </h3>
            <div className="relative pl-6 border-l-2 border-green-500/30">
              <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-1.75 top-1 shadow-lg shadow-green-500/50"></div>
              <h4 className="font-black text-slate-900 dark:text-white leading-tight">BS Information Technology</h4>
              <p className="text-green-500 text-xs font-bold mt-1">Sept 2019 - Oct 2023</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-3 font-medium">Pangasinan State University</p>
            </div>
          </motion.section>

          <motion.section 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-900 p-8 rounded-4xl border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            <h3 className="text-xl font-black mb-6 dark:text-white flex items-center gap-3">
              <Briefcase className="text-green-500" /> Work Experience
            </h3>
            <div>
              <h4 className="font-black text-slate-900 dark:text-white">Paragon Communication Corp.</h4>
              <p className="text-green-500 text-xs font-bold">2026 - Present</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-bold mt-2">Full Stack Software Developer</p>
            </div>
          </motion.section>

          <motion.section 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-slate-900 dark:bg-green-600 p-8 rounded-4xl text-white shadow-2xl overflow-hidden relative"
          >
            <h3 className="text-xl font-black mb-6 flex items-center gap-3 relative z-10">Get in Touch</h3>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" className="grid grid-cols-2 gap-3 mb-8 relative z-10">
              <SocialBtn icon={<Facebook size={16}/>} label="Facebook" />
              <SocialBtn icon={<Mail size={16}/>} label="Email" />
              <SocialBtn icon={<Github size={16}/>} label="GitHub" />
              <SocialBtn icon={<Chrome size={16}/>} label="Tiktok" />
            </motion.div>
          </motion.section>
        </div>
      </div>

      {/* --- CHAT POPUP --- */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 w-96 z-50 shadow-2xl"
          >
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden flex flex-col">
              <div className="bg-green-500 p-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 border border-white/30 overflow-hidden">
                    <img src={cartoon} alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-sm">Bhenjo Aquino</h4>
                    <p className="text-white/80 text-[10px] font-bold uppercase tracking-widest">Active Now</p>
                  </div>
                </div>
                <button onClick={() => setIsChatOpen(false)} className="text-white hover:bg-white/10 p-1.5 rounded-lg">
                  <X size={20} />
                </button>
              </div>

              <div className="h-80 p-4 overflow-y-auto bg-slate-50 dark:bg-slate-950 flex flex-col gap-4">
                <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none border border-slate-100 dark:border-slate-700 text-sm dark:text-slate-300 max-w-[85%]">
                  Hello! How can I help you today?
                </div>
              </div>

              <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
                <div className="relative">
                  <input type="text" placeholder="Type message..." className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-2xl py-3 pl-4 pr-12 text-sm focus:ring-2 focus:ring-green-500 dark:text-white" />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-green-500 text-white rounded-xl flex items-center justify-center hover:bg-green-600">
                    <Send size={14} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- HELPER COMPONENTS ---
const ContactBadge = ({ icon, text }) => (
  <span className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-full hover:bg-green-500/10 transition-colors border border-transparent hover:border-green-500/20">
    <span className="text-green-500">{icon}</span> {text}
  </span>
);

const SkillGroup = ({ icon, title, list }) => (
  <motion.div variants={fadeInUp} className="group">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all duration-300 shadow-sm">
        {icon}
      </div>
      <h4 className="font-black text-slate-900 dark:text-white text-xs uppercase tracking-wider">
        {title}
      </h4>
    </div>
    <div className="flex flex-wrap gap-2">
      {list.map((item, idx) => (
        <span key={idx} className="text-[10px] font-bold px-3 py-1.5 bg-slate-50 dark:bg-slate-800/40 text-slate-500 dark:text-slate-400 rounded-lg border border-slate-100 dark:border-slate-800 group-hover:border-green-500/30 transition-colors">
          {item}
        </span>
      ))}
    </div>
  </motion.div>
);

const SocialBtn = ({ icon, label }) => (
  <motion.button 
    variants={fadeInUp}
    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center justify-center gap-2 py-3 px-2 bg-white/10 rounded-xl transition-colors text-[10px] font-bold uppercase tracking-tighter"
  >
    {icon} {label}
  </motion.button>
);

export default AboutPage;