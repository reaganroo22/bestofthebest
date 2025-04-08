
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-therapy-light py-8">
      <div className="therapy-container">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <Logo className="mb-2" />
          </div>
          <div className="text-center mb-6">
            <h3 className="text-xl font-serif mb-2">Your personal development begins here:</h3>
            <a 
              href="mailto:Kristen@GrowingontheGo.com"
              className="text-therapy-dark hover:underline font-medium"
            >
              Kristen@GrowingontheGo.com
            </a>
          </div>
          <hr className="w-1/3 border-therapy-dark/30 my-4" />
          <div className="text-sm text-therapy-text/80">
            © {new Date().getFullYear()} by Kristen Williams. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
