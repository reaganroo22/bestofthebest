import { useState, useEffect, useRef } from "react";
import CTAButton from "../components/CTAButton";
import TestimonialCard from "../components/TestimonialCard";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonialInterval = useRef<number | null>(null);

  const testimonials = [
    {
      quote: "Ms. Kristen was someone I could talk to when I was going through normal teenage girl drama. Of course, at the time, I thought it was the end of the world, but after her counseling, I saw how important it was to be true to myself and not to let girl drama affect me. She was a confidant, a friend, and someone I could reach out to her anytime to comfort me and give me her wise insight.",
      author: "Sadie S."
    },
    {
      quote: "Kristen has been an incredible guide during a difficult period in my life. Her compassionate approach and practical strategies helped me find clarity and move forward with confidence.",
      author: "Jennifer W."
    },
    {
      quote: "Working with Kristen has transformed my outlook on life. Her coaching helped me identify patterns that were holding me back and develop tools to overcome them. I'm grateful for her support and expertise.",
      author: "Michael T."
    },
    {
      quote: "As a mother struggling to balance work and family life, Kristen's guidance was exactly what I needed. She helped me establish healthy boundaries and prioritize self-care without guilt.",
      author: "Rachel D."
    }
  ];

  useEffect(() => {
    setLoaded(true);
    
    // Automatically rotate testimonials
    testimonialInterval.current = window.setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 8000);
    
    return () => {
      if (testimonialInterval.current) {
        clearInterval(testimonialInterval.current);
      }
    };
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className={`transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}>
      {/* Hero Section */}
      <section className="min-h-[70vh] bg-therapy-light relative flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/lovable-uploads/d1def335-509c-4eac-b05b-886bc9966740.png"
            alt="Mountain landscape with river"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="therapy-container relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-serif mb-6 text-therapy-dark"
            >
              Healthy starts here.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl mb-8 leading-relaxed"
            >
              You probably never expected to be here and that's okay. I'm ready to meet you where you are to help you find hope again.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a 
                href="https://growingonthego.clientsecure.me"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-therapy inline-block hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                Book an Appointment
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Subtitle Banner */}
      <div className="bg-therapy-light py-6 text-center">
        <p className="text-2xl font-serif text-therapy-text">Every journey begins with a simple step.</p>
      </div>

      {/* Testimonial Section */}
      <section className="therapy-section bg-white py-16">
        <div className="therapy-container">
          <h2 className="text-3xl font-serif text-center mb-12 text-therapy-dark">What Clients Say</h2>
          <div className="max-w-3xl mx-auto relative">
            <div className="relative h-64 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <TestimonialCard 
                    quote={testimonials[currentTestimonial].quote}
                    author={testimonials[currentTestimonial].author}
                    className="h-full"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentTestimonial === index ? "bg-therapy-dark" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={prevTestimonial} 
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center text-therapy-dark hover:bg-therapy-light transition-colors"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextTestimonial} 
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center text-therapy-dark hover:bg-therapy-light transition-colors"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="therapy-section bg-therapy-light py-16">
        <div className="therapy-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif mb-6">Ready to take the first step?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Your journey to personal growth and well-being begins with a simple conversation. 
              Reach out today to schedule your first session.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://growingonthego.clientsecure.me"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-therapy inline-block hover:scale-105 transition-transform duration-300"
              >
                Book Now
              </a>
              
              <a 
                href="mailto:growingonthego@gmail.com"
                className="text-therapy-dark hover:text-therapy-dark/80 font-medium border-2 border-therapy-dark px-6 py-3 rounded-md hover:bg-therapy-dark/10 transition-colors inline-flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Me
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
