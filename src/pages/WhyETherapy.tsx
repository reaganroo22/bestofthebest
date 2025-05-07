
import { useState, useEffect } from "react";
import InfoCard from "@/components/InfoCard";
import { Leaf } from "lucide-react";

const WhyETherapy = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}>
      <section className="py-12 bg-therapy-light">
        <div className="therapy-container">
          <h1 className="text-4xl font-serif mb-12 text-center text-therapy-dark">Why e-therapy?</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InfoCard 
              title="Flexibility" 
              className="h-full"
              icon={<Leaf className="h-10 w-10 text-therapy" />}
            >
              <p>Log in from the comfort of your own location, without having to arrange for childcare or take extra time commuting.</p>
            </InfoCard>
            
            <InfoCard 
              title="Effectiveness" 
              className="h-full"
              icon={<Leaf className="h-10 w-10 text-therapy" />}
            >
              <p>Online therapy has proven to be just as effective for most people and many people are now preferring it.</p>
            </InfoCard>
            
            <InfoCard 
              title="Comfort" 
              className="h-full"
              icon={<Leaf className="h-10 w-10 text-therapy" />}
            >
              <p>The added bonus of being in a safe space of your choice.</p>
            </InfoCard>
          </div>

          <div className="mt-16 max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-serif mb-4 text-therapy-dark">Convenient and Accessible</h2>
            <p className="mb-4">
              In today's fast-paced world, finding time for personal development can be challenging. E-therapy eliminates geographical barriers and reduces time constraints, making it easier to prioritize your mental health.
            </p>
            <p className="mb-4">
              Whether you're a busy parent, working professional, or someone who simply values convenience, online therapy sessions with Growing on the Go provide the flexibility you need while maintaining the quality of care you deserve.
            </p>
            <p>
              Begin your journey toward greater peace and personal growth from wherever you are. All you need is a private space and an internet connection.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyETherapy;
