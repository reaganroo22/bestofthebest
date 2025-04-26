
import { useState, useEffect } from "react";

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
              Please download and complete the following forms before your first session. 
              This will allow us to make the most of our time together.
            </p>
            
            <div className="space-y-6">
              <div className="p-4 border border-therapy rounded-md hover:bg-therapy-light/50 transition-colors duration-200">
                <h3 className="text-xl font-serif mb-2">Client Information Form</h3>
                <p className="text-sm mb-4">Basic contact information and emergency contacts</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-therapy-dark hover:underline"
                  onClick={(e) => { e.preventDefault(); alert('Form download would be available here'); }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                  Download PDF
                </a>
              </div>
              
              <div className="p-4 border border-therapy rounded-md hover:bg-therapy-light/50 transition-colors duration-200">
                <h3 className="text-xl font-serif mb-2">Consent for Treatment</h3>
                <p className="text-sm mb-4">Information about the therapy process and client rights</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-therapy-dark hover:underline"
                  onClick={(e) => { e.preventDefault(); alert('Form download would be available here'); }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                  Download PDF
                </a>
              </div>
              
              <div className="p-4 border border-therapy rounded-md hover:bg-therapy-light/50 transition-colors duration-200">
                <h3 className="text-xl font-serif mb-2">Initial Assessment Questionnaire</h3>
                <p className="text-sm mb-4">Help me understand your background and goals</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-therapy-dark hover:underline"
                  onClick={(e) => { e.preventDefault(); alert('Form download would be available here'); }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                  Download PDF
                </a>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-sm text-therapy-text/80">
                If you're having trouble downloading or completing these forms, please contact me directly at{" "}
                <a href="mailto:kristen@growingonthego.com" className="text-therapy-dark hover:underline">
                  kristen@growingonthego.com
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
