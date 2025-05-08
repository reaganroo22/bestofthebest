import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";
import { useMediaQuery } from "../hooks/useMediaQuery";

const links = [
  { path: "/", label: "Home" },
  { path: "/meet-kristen", label: "Meet Kristen" },
  { path: "/why-e-therapy", label: "Why E-Therapy" },
  { path: "/services", label: "Services" },
  { path: "/important-forms", label: "Important Forms" },
  { path: "/contact", label: "Contact" },
];

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width: 639px)");
  const navRef = useRef<HTMLDivElement>(null);
  
  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setMobileMenuOpen(false);
    }
  };
  
  // Handle scroll for navbar style changes
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (mobileMenuOpen && navRef.current && !navRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <motion.nav 
      className={`w-full bg-white border-b sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? "shadow-md py-2" : "py-3"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      ref={navRef}
      onKeyDown={handleKeyDown}
    >
      <div className="therapy-container">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <div className="flex items-center justify-between w-full sm:w-auto">
            <Logo className="py-2" />
            <div className="flex items-center sm:hidden">
              <button 
                className="p-2" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="h-6 w-6 text-therapy-dark" /> : <Menu className="h-6 w-6 text-therapy-dark" />}
              </button>
            </div>
          </div>
          
          <div className={`${mobileMenuOpen ? 'flex' : 'hidden'} flex-col w-full sm:flex sm:flex-row sm:items-center sm:w-auto mt-4 sm:mt-0`}>
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link relative mb-2 sm:mb-0 text-therapy-dark hover:text-therapy transition-colors ${
                  location.pathname === link.path ? "font-medium" : ""
                }`}
                aria-current={location.pathname === link.path ? "page" : undefined}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-therapy-dark w-full"
                    layoutId="underline"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <div className="flex items-center mt-4 sm:mt-0 sm:ml-4">
              <Link to="/login">
                <button className="px-4 py-1 text-sm border border-therapy-dark text-therapy-dark rounded-full hover:bg-therapy-light transition-colors duration-200">
                  Log In
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
