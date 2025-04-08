
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";

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
  const location = useLocation();

  return (
    <nav className="w-full bg-white border-b">
      <div className="therapy-container py-3">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <div className="flex items-center justify-between w-full sm:w-auto">
            <Logo className="py-2" />
            <button 
              className="sm:hidden p-2" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          
          <div className={`${mobileMenuOpen ? 'flex' : 'hidden'} flex-col w-full sm:flex sm:flex-row sm:items-center sm:w-auto mt-4 sm:mt-0`}>
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link mb-2 sm:mb-0 ${
                  location.pathname === link.path ? "active-nav-link" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/login" className="ml-0 sm:ml-6 mt-4 sm:mt-0">
              <button className="px-4 py-1 text-sm border border-therapy-dark text-therapy-dark rounded-full hover:bg-therapy-light transition-colors duration-200">
                Log In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
