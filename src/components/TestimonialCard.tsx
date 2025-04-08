
interface TestimonialCardProps {
  quote: string;
  author: string;
  className?: string;
}

const TestimonialCard = ({ quote, author, className = "" }: TestimonialCardProps) => {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-sm italic ${className}`}>
      <p className="mb-4 text-lg">&ldquo;{quote}&rdquo;</p>
      <p className="font-medium text-right">— {author}</p>
    </div>
  );
};

export default TestimonialCard;
