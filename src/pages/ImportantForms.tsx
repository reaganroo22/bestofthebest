
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const ImportantForms = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}>
      <section className="py-12">
        <div className="therapy-container">
          <h1 className="text-4xl font-serif mb-12 text-center text-therapy-dark">Important Forms</h1>
          
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <p className="mb-8 text-center">
              Please complete the following forms through my secure client portal before your first session. 
              This will allow us to make the most of our time together.
            </p>
            
            <div className="text-center mb-8">
              <a 
                href="https://kmwellnessllc.clientsecure.me"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-therapy inline-block"
              >
                Access Client Portal
              </a>
            </div>
            
            <div className="space-y-6">
              <div className="p-4 border border-therapy rounded-md hover:bg-therapy-light/50 transition-colors duration-200">
                <h3 className="text-xl font-serif mb-2">Client Information Form</h3>
                <p className="text-sm mb-4">Basic contact information and emergency contacts</p>
                <p className="text-xs text-therapy-text/80">Complete this form in the client portal</p>
              </div>
              
              <div className="p-4 border border-therapy rounded-md hover:bg-therapy-light/50 transition-colors duration-200">
                <h3 className="text-xl font-serif mb-2">Consent for Treatment</h3>
                <p className="text-sm mb-4">Information about the therapy process and client rights</p>
                <p className="text-xs text-therapy-text/80">Complete this form in the client portal</p>
              </div>
              
              <div className="p-4 border border-therapy rounded-md hover:bg-therapy-light/50 transition-colors duration-200">
                <h3 className="text-xl font-serif mb-2">Initial Assessment Questionnaire</h3>
                <p className="text-sm mb-4">Help me understand your background and goals</p>
                <p className="text-xs text-therapy-text/80">Complete this form in the client portal</p>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-sm text-therapy-text/80">
                If you're having trouble accessing the client portal, please contact me directly at{" "}
                <a href="mailto:growingonthego@gmail.com" className="text-therapy-dark hover:underline">
                  growingonthego@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImportantForms;
