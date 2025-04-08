
import { useState, useEffect } from "react";
import CTAButton from "@/components/CTAButton";
import TestimonialCard from "@/components/TestimonialCard";

const Home = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}>
      {/* Hero Section */}
      <section className="min-h-[70vh] bg-therapy-light relative flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1500673922987-e212871fec22"
            alt="Beach boardwalk"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="therapy-container relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-5xl font-serif mb-6 text-therapy-dark">Healthy starts here.</h1>
            <p className="text-xl mb-8 leading-relaxed">
              You probably never expected to be here and that's okay. I'm ready to meet you where you are to help you find hope again.
            </p>
            <CTAButton text="Book an Appointment" />
          </div>
        </div>
      </section>

      {/* Subtitle Banner */}
      <div className="bg-therapy-light py-6 text-center">
        <p className="text-2xl font-serif text-therapy-text">Every journey begins with a simple step.</p>
      </div>

      {/* Testimonial Section */}
      <section className="therapy-section bg-white">
        <div className="therapy-container">
          <h2 className="text-3xl font-serif text-center mb-12 text-therapy-dark">Testimonials</h2>
          <div className="max-w-3xl mx-auto">
            <TestimonialCard 
              quote="Ms. Kristen was someone I could talk to when I was going through normal teenage girl drama. Of course, at the time, I thought it was the end of the world, but after her counseling, I saw how important it was to be true to myself and not to let girl drama affect me. She was a confidant, a friend, and someone I could reach out to her anytime to comfort me and give me her wise insight. I still feel like I could contact her at any time for guidance."
              author="Sadie S."
              className="animate-fade-in"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="therapy-section bg-therapy-light">
        <div className="therapy-container text-center">
          <h2 className="text-3xl font-serif mb-6">Your personal development begins here:</h2>
          <a 
            href="mailto:Kristen@GrowingontheGo.com"
            className="text-xl text-therapy-dark hover:underline font-medium"
          >
            Kristen@GrowingontheGo.com
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
