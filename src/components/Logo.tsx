
import { Link } from "react-router-dom";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <Link to="/" className={`block ${className}`}>
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="w-16 h-16 flex items-center justify-center">
            {/* Simplified logo representation */}
            <div className="border-2 border-therapy-dark w-12 h-12 transform rotate-45 relative">
              <div className="absolute -top-2 -left-2 w-2 h-2 bg-therapy-light rounded-full border border-therapy"></div>
              <div className="absolute -top-2 -right-2 w-2 h-2 bg-therapy-light rounded-full border border-therapy"></div>
              <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-therapy-light rounded-full border border-therapy"></div>
              <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-therapy-light rounded-full border border-therapy"></div>
            </div>
          </div>
          <div className="mt-1 text-center">
            <div className="text-lg font-serif italic tracking-wider text-therapy-dark">Growing on The Go</div>
            <div className="text-xs uppercase tracking-wider text-therapy text-center">PERSONAL DEVELOPMENT</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
