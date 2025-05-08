import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTop";
import { Helmet } from "react-helmet-async";

// Page metadata for each route
const pageMetadata = {
  "/": {
    title: "Growing on The Go - Personal Development",
    description: "Personal development coaching that fits into your busy lifestyle with Kristen Williams, certified life coach.",
  },
  "/meet-kristen": {
    title: "Meet Kristen Williams | Growing on The Go",
    description: "Learn about Kristen Williams, certified professional life coach and founder of Growing on The Go.",
  },
  "/services": {
    title: "Personal Development Services | Growing on The Go",
    description: "Discover the personal development services offered by Growing on The Go, including one-on-one virtual coaching sessions.",
  },
  "/why-e-therapy": {
    title: "Benefits of E-Therapy | Growing on The Go",
    description: "Learn about the flexibility, effectiveness, and comfort of e-therapy with Growing on The Go.",
  },
  "/important-forms": {
    title: "Client Forms | Growing on The Go",
    description: "Access important client forms and documents for your personal development journey with Growing on The Go.",
  },
  "/contact": {
    title: "Contact Kristen Williams | Growing on The Go",
    description: "Get in touch with Kristen Williams for personal development coaching and inquiries.",
  },
  "/login": {
    title: "Client Login | Growing on The Go",
    description: "Secure login page for Growing on The Go clients.",
  },
};

// Scroll to top on page change
const ScrollToTopOnNavigate = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

// Analytics tracking
const AnalyticsTracker = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Track page views
    console.log(`Page view: ${pathname}`);
    
    // This is where you would call your analytics service
    // Example: gtag('config', 'GA_MEASUREMENT_ID', { page_path: pathname });
  }, [pathname]);
  
  return null;
};

// Performance monitoring
const PerformanceMonitor = () => {
  useEffect(() => {
    // Report performance metrics when available
    if ('performance' in window && 'getEntriesByType' in performance) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const perfData = performance.getEntriesByType('navigation')[0];
          console.log('Page load performance:', perfData);
        }, 0);
      });
    }
  }, []);
  
  return null;
};

const MainLayout = () => {
  const { pathname } = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);
  const metadata = pageMetadata[pathname as keyof typeof pageMetadata] || {
    title: "Growing on The Go - Personal Development",
    description: "Personal development coaching with Kristen Williams, certified life coach.",
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`flex flex-col min-h-screen ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={`https://growingonthego.com${pathname}`} />
        <link rel="canonical" href={`https://growingonthego.com${pathname}`} />
      </Helmet>
      
      <ScrollToTopOnNavigate />
      <AnalyticsTracker />
      <PerformanceMonitor />
      
      <Navigation />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default MainLayout;
