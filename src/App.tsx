import React, { useState, useEffect, ReactNode, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const MeetKristen = lazy(() => import("./pages/MeetKristen"));
const Services = lazy(() => import("./pages/Services"));
const WhyETherapy = lazy(() => import("./pages/WhyETherapy"));
const ImportantForms = lazy(() => import("./pages/ImportantForms"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Login = lazy(() => import("./pages/Login"));

// Error boundary component
class ErrorBoundary extends React.Component<{children: ReactNode}, {hasError: boolean}> {
  constructor(props: {children: ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-therapy-light">
          <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-serif text-therapy-dark mb-4">Something went wrong</h2>
            <p className="mb-6">We're experiencing technical difficulties. Please try refreshing the page.</p>
            <button 
              onClick={() => this.setState({ hasError: false })}
              className="btn-therapy inline-block"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// A simple component to handle page transitions
interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div
      className={`transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

// Enhanced loading component
const LoadingScreen = () => (
  <div className="fixed inset-0 bg-white flex items-center justify-center flex-col z-50">
    <div className="w-16 h-16 border-4 border-gray-200 rounded-full border-t-green-600 animate-spin mb-4"></div>
    <h1 className="text-2xl font-serif text-therapy-dark">Growing on The Go</h1>
    <p className="text-gray-600 mt-2">Personal Development</p>
    <div className="mt-6 w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
      <div className="h-full bg-green-600 animate-pulse"></div>
    </div>
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Preload critical assets
    const preloadImages = [
      "/lovable-uploads/logoicon.png",
      "/lovable-uploads/d1def335-509c-4eac-b05b-886bc9966740.png"
    ];
    
    const imagePromises = preloadImages.map(src => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(imagePromises)
      .catch(err => console.warn("Error preloading images:", err))
      .finally(() => {
        setTimeout(() => setIsLoading(false), 1000);
      });
  }, []);
  
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="/meet-kristen" element={<MeetKristen />} />
              <Route path="/services" element={<Services />} />
              <Route path="/why-e-therapy" element={<WhyETherapy />} />
              <Route path="/important-forms" element={<ImportantForms />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
