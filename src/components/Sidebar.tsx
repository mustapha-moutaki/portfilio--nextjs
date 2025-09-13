
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Home, User, Briefcase, FolderOpen, Mail, FileText, 
  ChevronLeft, ChevronRight, Linkedin, Github, Instagram 
} from "lucide-react";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  
  const navigationItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: User },
    { name: "Experience", path: "/experience", icon: Briefcase },
    { name: "Projects-not complete ", path: "/projects", icon: FolderOpen },
    { name: "Contact- not complete", path: "/contact", icon: Mail },
    { name: "Resume", path: "/resume", icon: FileText },
  ];
  
  const socialItems = [
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/mustapha-moutaki" },
    { name: "GitHub", icon: Github, href: "https://github.com/mustapha-moutaki" },
    { name: "Twitter", icon: Instagram, href: "https://twitter.com" },
  ];

  return (
    <motion.div
      className={`h-screen glass flex flex-col justify-between transform transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      }`}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="p-4">
        <div className="flex items-center mb-8">
          <Link to="/" className="flex items-center">
            <motion.div
              className="text-4xl font-bold text-cyan select-none"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              J<span className="text-cyan-light">.</span>
            </motion.div>
            {!isCollapsed && (
              <motion.div
                className="ml-2 text-xl font-mono text-foreground"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                Mustapha MOUTAKI
              </motion.div>
            )}
          </Link>
        </div>

        <nav>
          <ul className="space-y-2">
            {navigationItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              
              return (
                <motion.li
                  key={item.name}
                  className="relative"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
                >
                  <Link 
                    to={item.path}
                    className={`flex items-center p-2 rounded-md hover:bg-cyan/10 transition-colors relative ${
                      isActive ? "text-cyan" : "text-muted-foreground"
                    }`}
                  >
                    <item.icon className={`h-5 w-5 ${isActive ? "text-cyan" : "text-muted-foreground"}`} />
                    
                    {!isCollapsed && (
                      <span className="ml-3">{item.name}</span>
                    )}
                    
                    {isActive && (
                      <motion.div
                        layoutId="sidebar-indicator"
                        className="absolute left-0 w-1 h-full bg-cyan rounded-r-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </nav>
      </div>
      
      <div className="p-4">
        <div className={`flex ${isCollapsed ? "justify-center" : "justify-around"} mb-4`}>
          {socialItems.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-cyan transition-colors"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
              title={social.name}
            >
              <social.icon className="h-5 w-5" />
            </motion.a>
          ))}
        </div>
        
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full flex items-center justify-center p-2 rounded-md hover:bg-cyan/10 text-muted-foreground transition-colors"
        >
          {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
      </div>
    </motion.div>
  );
};

export default Sidebar;
