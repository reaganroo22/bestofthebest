
import { useState, useEffect } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const MeetKristen = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}>
      <section className="py-12">
        <div className="therapy-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Bio */}
            <div>
              <h1 className="text-4xl font-serif mb-8 text-therapy-dark">Meet Kristen</h1>
              <div className="prose max-w-none">
                <h2 className="text-2xl font-serif mb-4">Kristen Williams</h2>
                <p className="mb-4">Certified Professional Life Coach</p>
                <div className="w-32 h-32 rounded-lg overflow-hidden my-6">
                  <img 
                    src="https://i.imgur.com/jPpXXUK.png" 
                    alt="CPC Certification" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mb-4">I am a Certified Professional Life Coach, former teacher, active community volunteer, and mom on a mission. I've always had a passion for helping people achieve their goals.</p>
                <p className="mb-4">After a 7-year teaching career and starting a family, I earned my coaching certification and founded Growing on the Go to help others navigate life's challenges and discover their best selves.</p>
                <p className="mb-4">When I'm not coaching, I'm spending time with my family, creating cozy spaces at home, and staying active in my community. I served on the board for Frisco Santa Charities and enjoy finding ways to give back.</p>
              </div>
            </div>
            
            {/* Right Column - Photo and Logo */}
            <div className="rounded-lg overflow-hidden">
              <div className="h-full flex flex-col">
                <AspectRatio ratio={3/4} className="h-full">
                  <img 
                    src="https://i.imgur.com/pQVH1xd.jpg"
                    alt="Kristen Williams" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MeetKristen;
