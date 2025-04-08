
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempted with:", { email });
    
    toast({
      title: "Login Feature",
      description: "This is a demo login screen. In a real application, authentication would be processed here.",
    });
  };

  return (
    <section className="py-12">
      <div className="therapy-container max-w-md mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h1 className="text-3xl font-serif mb-6 text-center text-therapy-dark">Log In</h1>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-therapy-dark"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-therapy-dark"
                required
              />
            </div>
            
            <button
              type="submit"
              className="btn-therapy w-full mb-4"
            >
              Log In
            </button>
            
            <div className="text-center">
              <Link to="/" className="text-therapy-dark hover:underline text-sm">
                Forgot Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
