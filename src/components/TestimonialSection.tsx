
import { cn } from "@/lib/utils";

type TestimonialProps = {
  quote: string;
  author: string;
  role: string;
  index: number;
}

const TestimonialCard = ({ quote, author, role, index }: TestimonialProps) => {
  return (
    <div className={cn(
      "bg-white rounded-2xl p-8 shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-md",
      "animate-fade-in",
      index === 1 ? "animation-delay-200" : index === 2 ? "animation-delay-400" : ""
    )}>
      <svg className="h-8 w-8 text-slate-300 mb-4" fill="currentColor" viewBox="0 0 32 32">
        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
      </svg>
      <p className="mb-5 text-lg">{quote}</p>
      <footer>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </footer>
    </div>
  );
};

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "This product has completely transformed our workflow. The intuitive design and powerful features make it a joy to use every day.",
      author: "Sarah Johnson",
      role: "Product Manager at Acme Inc"
    },
    {
      quote: "I've tried many similar products, but none compare to the attention to detail and thoughtful design of this solution.",
      author: "Michael Chen",
      role: "CTO at TechStart"
    },
    {
      quote: "The simplicity and elegance of this tool has helped our team become significantly more productive.",
      author: "Emma Williams",
      role: "Design Director at Creative Co."
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-6 md:px-10 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full mb-6 animate-fade-in">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up">
            Loved by Teams Everywhere
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground animate-slide-up animation-delay-200">
            Hear what our customers have to say about their experience with our product.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
