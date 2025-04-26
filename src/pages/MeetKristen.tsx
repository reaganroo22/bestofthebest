
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
          {/* Grid layout for top content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Left Column - Bio Information */}
            <div className="bg-therapy-light rounded-lg p-6 md:col-span-2">
              <div className="flex flex-col h-full">
                <div>
                  <h1 className="text-2xl md:text-3xl font-serif mb-3">Meet Kristen Williams</h1>
                  <div className="mb-4">
                    <p className="mb-1">MA, Professional Counseling</p>
                    <p className="mb-1">MA, School Counseling</p>
                    <p className="mb-4">Certified Professional Life Coach</p>
                  </div>
                </div>
                
                <div className="mt-auto flex justify-center max-w-[120px]">
                  <img 
                    src="/lovable-uploads/4a00d163-cd94-45d5-9ebf-d082df9eee85.png" 
                    alt="CPC Certification"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Profile Photo */}
            <div className="rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/77fb5b2b-1f39-4c44-8559-56c83cd00c14.png"
                alt="Kristen Williams" 
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Logo Section */}
          <div className="mb-12 flex justify-center">
            <img
              src="/lovable-uploads/d4b8d471-d568-46af-92ab-5b5012f2214e.png"
              alt="Growing on The Go Logo"
              className="max-w-full h-auto max-h-40"
            />
          </div>

          {/* Biography */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
            <div className="prose max-w-none">
              <p className="mb-4">
                Hi, I'm Kristen Williams. I have a passion for helping people discover greater happiness and peace of mind through personal development coaching. I offer virtual sessions for youth and adults; anyone looking to experience a change in their lives.
              </p>
              
              <p className="mb-4">
                I earned my undergraduate degree in Psychology from Southern Methodist University and I hold master's degrees in both School Counseling and Professional Counseling. While my career began as an 8th grade teacher, it wasn't long before I discovered that my heart was drawn toward counseling. I was more fulfilled when I could walk alongside someone on their journey toward mental wellness and personal growth.
              </p>
              
              <p className="mb-4">
                Following eight years serving as a school counselor, I made the decision to stay home as a full-time mother. While raising my kids is my most important role in life, there remains a tug on my heart to support others in their journey toward happier, healthier lives. Now, more than ever before, many people are stressed, anxious, or lacking peace of mind or vision for their future.
              </p>
              
              <p className="mb-4">
                As a busy mother of two with a husband who travels often, I understand the pressures that we're all facing. Talking through it with a qualified personal development coach may help alleviate some of the anxiety that often accompanies those pressures.
              </p>
              
              <p className="mb-4">
                Whether you have barriers that make it difficult to attend face-to-face sessions, or you simply prefer the convenience of your own home, consider trying e-therapy. Online sessions are proven to be just as effective for most people and in today's busy world, many people prefer it. At Growing on the Go, we're dedicated to providing personal development coaching that fits into your busy life. Log in from your home, office, the car -- or from a closet while hiding from your kids! Whatever you're facing, if you're eager to take steps to improve your life, I'm ready to help you.
              </p>
              
              <p className="italic border-l-4 border-therapy pl-4 text-sm">
                On a personal note: When Kristen isn't busy serving her clients at Growing on the Go, she also manages KMWellness, LLC, which offers CBD, liquid collagens, and other wellness products. Kristen serves as co-founder of Frisco Santa Charities, a nonprofit organization that has raised over $100,000 for local charities. She and her family enjoy spending time on their farm, playing sports, and taking care of their sweet pets (two dogs and a tortoise).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MeetKristen;
