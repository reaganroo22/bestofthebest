
import { Link } from "react-router-dom";

interface CTAButtonProps {
  text: string;
  href?: string;
  className?: string;
}

const CTAButton = ({ text, href = "/contact", className = "" }: CTAButtonProps) => {
  return (
    <Link 
      to={href} 
      className={`btn-therapy inline-block ${className}`}
    >
      {text}
    </Link>
  );
};

export default CTAButton;
