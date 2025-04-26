
import { useState, useEffect } from "react";

const MeetKristen = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}>
      <section className="py-12">
        <div className="therapy-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Bio Information */}
            <div className="bg-therapy-light rounded-lg p-8">
              <h1 className="text-3xl font-serif mb-3">Meet <br />Kristen <br />Williams</h1>
              <div className="mb-6">
                <p className="mb-1">MA, Professional Counseling</p>
                <p className="mb-1">MA, School Counseling</p>
                <p className="mb-4">Certified Professional Life Coach</p>
                <div className="w-32 h-32 rounded-lg overflow-hidden my-6">
                  <img 
                    src="/lovable-uploads/4a00d163-cd94-45d5-9ebf-d082df9eee85.png" 
                    alt="CPC Certification" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Photo and Logo */}
            <div className="rounded-lg overflow-hidden">
              <div className="h-full flex flex-col">
                <div className="h-96 overflow-hidden">
                  <img 
                    src="/lovable-uploads/77fb5b2b-1f39-4c44-8559-56c83cd00c14.png"
                    alt="Kristen Williams" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Biography */}
          <div className="mt-8 bg-white p-8 rounded-lg shadow-sm">
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
                Whether you have barriers that make it difficult to attend face-to-face sessions, or you simply prefer the convenience of your own home, consider trying e-therapy. Online sessions are proven to be just as effective for most people and in today's busy world, many people prefer it. At Growing on the Go, we're dedicated to providing personal development coaching that fits into your busy life. Log in from your home, office, the car — or from a closet while hiding from your kids! Whatever you're facing, if you're eager to take steps to improve your life, I'm ready to help you.
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
