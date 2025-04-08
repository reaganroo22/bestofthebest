
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import CTAButton from "@/components/CTAButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <section className="py-24 bg-therapy-light">
      <div className="therapy-container">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-5xl font-serif mb-6 text-therapy-dark">Page Not Found</h1>
          <p className="text-xl mb-8">
            We couldn't find the page you're looking for. Let's get you back on track.
          </p>
          <CTAButton text="Return to Home" href="/" />
        </div>
      </div>
    </section>
  );
};

export default NotFound;
