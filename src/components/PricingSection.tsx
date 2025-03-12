
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type PricingCardProps = {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  index: number;
}

const PricingCard = ({ title, price, description, features, popular, index }: PricingCardProps) => {
  return (
    <div className={cn(
      "rounded-2xl p-8 transition-all duration-300 animate-scale-in relative",
      popular ? "bg-gradient-to-b from-blue-500 to-blue-600 text-white shadow-lg scale-105 border-0" : "bg-white border border-slate-200",
      index === 1 ? "animation-delay-200" : index === 2 ? "animation-delay-400" : ""
    )}>
      {popular && (
        <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-xs font-bold px-4 py-1 rounded-full">
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold">{price}</span>
        <span className={cn(popular ? "text-blue-100" : "text-muted-foreground")}>/month</span>
      </div>
      <p className={cn("mb-6", popular ? "text-blue-100" : "text-muted-foreground")}>
        {description}
      </p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <Check className={cn("h-5 w-5 mr-2 flex-shrink-0", popular ? "text-blue-200" : "text-blue-500")} />
            <span className={popular ? "text-blue-50" : ""}>{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        className={cn(
          "w-full transition-all duration-300 transform hover:translate-y-[-2px]",
          popular ? "bg-white text-blue-600 hover:bg-blue-50" : "bg-blue-500 text-white hover:bg-blue-600"
        )}
      >
        Get Started
      </Button>
    </div>
  );
};

const PricingSection = () => {
  const plans = [
    {
      title: "Starter",
      price: "$29",
      description: "Perfect for individuals and small teams just getting started.",
      features: [
        "All essential features",
        "Up to 5 team members",
        "20GB storage",
        "Basic analytics",
        "24/7 support"
      ]
    },
    {
      title: "Professional",
      price: "$79",
      description: "Advanced features for growing teams and businesses.",
      features: [
        "All Starter features",
        "Up to 20 team members",
        "100GB storage",
        "Advanced analytics",
        "Priority support",
        "Custom integrations"
      ],
      popular: true
    },
    {
      title: "Enterprise",
      price: "$149",
      description: "Complete solution for large organizations with complex needs.",
      features: [
        "All Professional features",
        "Unlimited team members",
        "500GB storage",
        "Premium analytics",
        "Dedicated support",
        "Custom development",
        "SLA guarantees"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full mb-6 animate-fade-in">
            Pricing Plans
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up">
            Choose the Perfect Plan
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground animate-slide-up animation-delay-200">
            Flexible options designed to meet the needs of teams of all sizes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <PricingCard 
              key={plan.title}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              popular={plan.popular}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
