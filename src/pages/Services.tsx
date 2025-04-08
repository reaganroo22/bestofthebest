
import { useState, useEffect } from "react";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  const [loaded, setLoaded] = useState(false);
  const serviceAreas = [
    "Anxiety",
    "Stress",
    "ADD/ADHD",
    "Communication Issues",
    "Autism Spectrum Disorder",
    "Bullying",
    "Coping Skills",
    "Divorce",
    "Family Conflict",
    "Life Coaching",
    "Parenting",
    "Relationship Issues",
    "School Issues",
    "Self Esteem"
  ];

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}>
      <section className="py-12">
        <div className="therapy-container">
          <h1 className="text-4xl font-serif mb-12 text-center text-therapy-dark">Services</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <ServiceCard 
                title="50 Minute Personal Development"
                image="/lovable-uploads/edeb7df3-ce51-45bb-93f8-b3bd75fd3c85.png"
                buttonText="Book Now >"
              >
                <p>One-on-one virtual sessions focused on your unique needs and goals.</p>
              </ServiceCard>
            </div>
            
            <div>
              <h2 className="text-2xl font-serif mb-6 text-therapy-dark">Personal Development areas of focus include, but are not limited to:</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
                {serviceAreas.map((area, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-therapy-dark rounded-full mr-2"></span>
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-16 max-w-3xl mx-auto bg-therapy-light p-8 rounded-lg">
            <h2 className="text-2xl font-serif mb-4 text-center text-therapy-dark">Personalized Approach</h2>
            <p className="text-center">
              At Growing on the Go, each client receives a customized approach tailored to their specific needs and goals. 
              Your journey is unique, and your personal development plan should be too.
            </p>
          </div>

          <div className="mt-8 text-center">
            <img 
              src="/lovable-uploads/4a00d163-cd94-45d5-9ebf-d082df9eee85.png" 
              alt="Certified Professional Coach" 
              className="w-48 h-48 object-contain mx-auto"
            />
            <p className="mt-2 text-sm text-therapy-text/80">Coaching 101: Professional Coach Certification</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
