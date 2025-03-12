
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 px-6 md:px-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden">
          {/* Background gradient blur effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
          
          {/* Content */}
          <div className="relative z-10 p-12 md:p-20 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 animate-slide-up">
              Ready to Transform Your Experience?
            </h2>
            <p className="max-w-2xl text-lg md:text-xl text-blue-100 mb-10 animate-slide-up animation-delay-200">
              Join thousands of satisfied customers who have already elevated their workflow with our premium solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-400">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:translate-y-[-2px] group">
                <span>Get Started</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 transition-all duration-300 transform hover:translate-y-[-2px]">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
