
import { ReactNode } from "react";

interface InfoCardProps {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

const InfoCard = ({ title, children, icon, className = "" }: InfoCardProps) => {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-sm ${className}`}>
      {icon && <div className="flex justify-center mb-4">{icon}</div>}
      <h3 className="font-serif text-xl mb-3 text-therapy-dark">{title}</h3>
      <div className="text-therapy-text">{children}</div>
    </div>
  );
};

export default InfoCard;
