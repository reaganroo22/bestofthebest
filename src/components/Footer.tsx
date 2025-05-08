import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, Heart } from "lucide-react";

const currentYear = new Date().getFullYear();

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your newsletter service (Mailchimp, etc.)
    console.log("Subscribing email:", email);
    setSubscribed(true);
    setEmail("");
    
    // Reset subscribed message after 5 seconds
    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
  };
  
  return (
    <footer className="bg-therapy-light py-12 no-print">
      <div className="therapy-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-serif mb-4">Growing on The Go</h3>
            <p className="text-sm mb-4">
              Personal development coaching designed to fit into your busy lifestyle.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-therapy-dark hover:text-therapy transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-therapy-dark hover:text-therapy transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-therapy-dark hover:text-therapy transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:growingonthego@gmail.com" 
                className="text-therapy-dark hover:text-therapy transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/meet-kristen" className="text-therapy-dark hover:text-therapy transition-colors">
                Meet Kristen
              </Link>
              <Link to="/services" className="text-therapy-dark hover:text-therapy transition-colors">
                Services
              </Link>
              <Link to="/why-e-therapy" className="text-therapy-dark hover:text-therapy transition-colors">
                Why E-Therapy
              </Link>
              <Link to="/important-forms" className="text-therapy-dark hover:text-therapy transition-colors">
                Important Forms
              </Link>
              <Link to="/contact" className="text-therapy-dark hover:text-therapy transition-colors">
                Contact
              </Link>
              <a 
                href="https://growingonthego.clientsecure.me" 
                className="text-therapy-dark hover:text-therapy transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Client Portal
              </a>
            </nav>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-serif mb-4">Stay Updated</h3>
            <p className="text-sm mb-4">
              Subscribe to receive tips, updates, and information about personal development.
            </p>
            
            {subscribed ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-3 bg-therapy bg-opacity-20 rounded-md"
              >
                <p className="text-therapy-dark text-sm">
                  Thank you for subscribing!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="flex-grow p-2 text-sm border border-r-0 rounded-l-md focus:outline-none focus:ring-1 focus:ring-therapy"
                  />
                  <button
                    type="submit"
                    className="bg-therapy px-4 py-2 text-white text-sm rounded-r-md hover:bg-therapy-dark transition-colors focus:outline-none focus:ring-2 focus:ring-therapy focus:ring-offset-2"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-gray-500">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            )}
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-200 text-center text-sm">
          <p className="text-gray-600">
            © {currentYear} Growing on The Go. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-gray-500 flex items-center justify-center">
            Made with <Heart size={12} className="mx-1 text-therapy" /> by Kristen Williams
          </p>
        </div>
      </div>
    </footer>
  );
}
