/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',                      // ← use the .dark class
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",         // ← include your JSX/TSX sources
    /* …other paths you need… */
  ],
  theme: { extend: {} },
  plugins: [],
};

const [darkMode, setDarkMode] = useState(() => {
  const saved = localStorage.getItem('theme');
  if (saved) return saved === 'dark';
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches;
});

useEffect(() => {
  document.documentElement.classList.toggle('dark', darkMode);
  localStorage.setItem('theme', darkMode ? 'dark' : 'light');
}, [darkMode]);

return (
  <div className={darkMode ? 'dark' : ''}>
    <div className="bg-white dark:bg-slate-950 … min-h-screen">
      <Sidebar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      …rest…
    </div>
  </div>
);

const Sidebar = ({ darkMode, setDarkMode, activeTab, setActiveTab }) => {
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="flex flex-col w-64 h-screen bg-white dark:bg-slate-950">
      <div className="flex items-center justify-between p-4 border-b">
        <h1 className="text-xl font-bold">My App</h1>
        <button onClick={toggleDarkMode}>
          {darkMode ? <SunIcon /> : <MoonIcon />}
          <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
        </button>
      </div>
      <nav className="flex-1 p-4">
        <ul>
          <li>
            <button onClick={() => setActiveTab('home')}>
              Home
            </button>
          </li>
          <li>
            <button onClick={() => setActiveTab('about')}>
              About
            </button>
          </li>
          <li>
            <button onClick={() => setActiveTab('contact')}>
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
