
import { ReactNode } from "react";
import CTAButton from "./CTAButton";

interface ServiceCardProps {
  title: string;
  image?: string;
  children?: ReactNode;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
  externalLink?: boolean;
}

const ServiceCard = ({
  title,
  image,
  children,
  buttonText = "Book Now",
  buttonLink = "/contact",
  externalLink = false,
  className = "",
}: ServiceCardProps) => {
  return (
    <div className={`overflow-hidden rounded-lg shadow-sm ${className}`}>
      {image && (
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6 bg-white">
        <h3 className="font-serif text-2xl mb-3">{title}</h3>
        {children && <div className="mb-4 text-therapy-text">{children}</div>}
        {externalLink ? (
          <a 
            href={buttonLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-therapy inline-block"
          >
            {buttonText}
          </a>
        ) : (
          <CTAButton text={buttonText} href={buttonLink} />
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
