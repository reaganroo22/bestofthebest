import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ScrollToTopButtonProps {
  threshold?: number;
  smooth?: boolean;
  color?: "green" | "blue" | "gray";
  position?: "right" | "left" | "center";
  showLabel?: boolean;
  label?: string;
  ariaLabel?: string;
}

export default function ScrollToTopButton({
  threshold = 300,
  smooth = true,
  color = "green",
  position = "right",
  showLabel = false,
  label = "Top",
  ariaLabel = "Scroll to top"
}: ScrollToTopButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > threshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    const scrollOptions: ScrollToOptions = {
      top: 0,
      behavior: smooth ? "smooth" : "auto"
    };
    
    window.scrollTo(scrollOptions);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [threshold]);

  // Color variants
  const colorVariants = {
    green: "bg-green-600 hover:bg-green-700 text-white",
    blue: "bg-blue-600 hover:bg-blue-700 text-white",
    gray: "bg-gray-600 hover:bg-gray-700 text-white",
  };

  // Position variants
  const positionVariants = {
    right: "right-4",
    left: "left-4",
    center: "left-1/2 transform -translate-x-1/2"
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className={`fixed bottom-4 ${positionVariants[position]} ${colorVariants[color]} ${showLabel ? 'px-4' : 'w-12'} h-12 rounded-full flex items-center justify-center shadow-lg transition-all z-50 focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:outline-none`}
          aria-label={ariaLabel}
        >
          <motion.div
            animate={{ 
              y: isHovered ? -3 : 0 
            }}
            transition={{ duration: 0.2 }}
            className="flex items-center"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              aria-hidden="true"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 10l7-7m0 0l7 7m-7-7v18" 
              />
            </svg>
            {showLabel && <span className="ml-2">{label}</span>}
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
} 