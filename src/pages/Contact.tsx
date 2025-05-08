import { useState, useEffect, useRef } from "react";
import { useToast } from "../hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [loaded, setLoaded] = useState(false);
  const [sending, setSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
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
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // EmailJS public keys - these are safe to expose in client-side code
    const serviceId = "service_7exq1pv"; // Replace with your EmailJS service ID
    const templateId = "template_b5e4r06"; // Replace with your EmailJS template ID
    const publicKey = "nqQbupC2rTKTLz-Hx"; // Replace with your EmailJS public key
    
    try {
      setSending(true);
      
      // Prepare the template parameters
      const templateParams = {
        to_email: "growingonthego@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        preferred_contact: formData.preferredContact,
        message: formData.message
      };
      
      // Send the email
      const result = await emailjs.send(
        serviceId, 
        templateId,
        templateParams,
        publicKey
      );
      
      console.log("Email sent successfully:", result.text);
      
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
      
    } catch (error) {
      console.error("Failed to send email:", error);
      
      // Show error toast
      toast({
        title: "Message Failed",
        description: "There was an error sending your message. Please try again or email me directly.",
        variant: "destructive"
      });
    } finally {
      setSending(false);
    }
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
              
              <form ref={formRef} onSubmit={handleSubmit}>
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
                  className="btn-therapy w-full flex justify-center items-center"
                  disabled={sending}
                >
                  {sending ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : "Send Message"}
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
