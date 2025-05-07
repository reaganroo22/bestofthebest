import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [loaded, setLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferredContact: "email"
  });
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted to growingonthego@gmail.com:", formData);
    
    // Show success toast
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      preferredContact: "email"
    });
  };

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}>
      <section className="py-12">
        <div className="therapy-container">
          <h1 className="text-4xl font-serif mb-12 text-center text-therapy-dark">Contact</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-therapy-light p-8 rounded-lg">
              <h2 className="text-2xl font-serif mb-6">Get In Touch</h2>
              <p className="mb-6">
                Whether you're ready to book an appointment or just have questions about my services, 
                I'm here to help. Please fill out the form and I'll get back to you as soon as possible.
              </p>
              
              <div className="mb-6">
                <h3 className="text-lg font-serif mb-2">Email</h3>
                <a 
                  href="mailto:growingonthego@gmail.com"
                  className="text-therapy-dark hover:underline"
                >
                  growingonthego@gmail.com
                </a>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-serif mb-2">Response Time</h3>
                <p>I typically respond to all inquiries within 24-48 business hours.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-serif mb-2">Session Information</h3>
                <p>
                  Virtual sessions are conducted via a secure HIPAA-compliant video platform.
                  Complete details will be provided upon scheduling your appointment.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-serif mb-6">Send a Message</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    Your Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-therapy-dark"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    Email Address<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-therapy-dark"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-therapy-dark"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="preferredContact" className="block mb-2 text-sm font-medium">
                    Preferred Contact Method
                  </label>
                  <select
                    id="preferredContact"
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-therapy-dark"
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    Message<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-therapy-dark"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn-therapy w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
