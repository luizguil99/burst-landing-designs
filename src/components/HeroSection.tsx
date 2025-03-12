
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-3xl opacity-50" />
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-purple-400/20 rounded-full blur-3xl opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 flex flex-col items-center text-center">
        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full mb-6 animate-fade-in">
          Introducing Our Premium Product
        </span>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-slide-up">
          <span>Redefine Your</span>
          <span className="text-gradient block mt-2">Experience</span>
        </h1>
        
        <p className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-8 animate-slide-up animation-delay-200">
          Elevate your workflow with our minimalist, powerful solution. 
          Designed with precision and crafted for performance.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-400">
          <Button size="lg" className="bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:translate-y-[-2px] group">
            <span>Get Started</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline" className="transition-all duration-300 transform hover:translate-y-[-2px]">
            Learn More
          </Button>
        </div>
        
        <div className="mt-20 w-full max-w-5xl relative animate-scale-in animation-delay-600">
          <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30"></div>
          <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
              alt="Product Preview" 
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
