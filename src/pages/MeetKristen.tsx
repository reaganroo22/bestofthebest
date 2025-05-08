import { useState, useEffect } from "react";

const MeetKristen = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}>
      <section className="py-12">
        <div className="therapy-container max-w-3xl mx-auto">
          {/* Bio */}
          <div>
            <h1 className="text-5xl font-serif mb-8 text-center text-therapy-dark">Meet Kristen</h1>
            <div className="prose prose-lg max-w-none">
              <div className="flex flex-col items-center mb-8">
                <div className="w-32 h-auto flex-shrink-0 mb-4">
                  <img 
                    src="/lovable-uploads/4ef0d230-a4b6-468d-aea3-b51fc2974e47.png" 
                    alt="Kristen Williams" 
                    className="w-full object-contain"
                  />
                </div>
                <div className="text-center">
                  <h2 className="text-3xl font-serif mb-4">Kristen Williams</h2>
                  <p className="text-xl mb-4">Certified Professional Life Coach</p>
                </div>
              </div>
              <p className="text-xl mb-6">I'm a Certified Professional Life Coach, former 8th grade science teacher, and hold two master's degrees—one in School Counseling and one in Professional Counseling. My career has always centered around helping others thrive—whether in the classroom, in counseling sessions, or through conversations.</p>
              <p className="text-xl mb-6">After starting a family and stepping back from traditional roles, I earned my coaching certification and launched Growing on the Go—a space to help people move forward with intention, confidence, and joy.</p>
              <p className="text-xl mb-6">Outside of coaching, I'm a wife, a mother of two wonderful kids, 2 amazing dogs and also a Sulcata Tortoise. I love to volunteer and am the co-founder of a North Texas nonprofit that has donated nearly $200,000 to local organizations.</p>
              <p className="text-xl mb-6">Whether you're navigating a transition, chasing a goal, or simply feeling stuck—I'm here to help you grow.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MeetKristen;
