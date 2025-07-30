import { Shield, Smartphone, Target, Gamepad2, Zap, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Cheats = () => {
  const packages = [
    {
      name: "Internal Preview",
      price: "₹1,499",
      originalPrice: "₹2,000",
      icon: Shield,
      popular: false,
      features: [
        "Advanced ESP (Player locations)",
        "Professional Aimbot",
        "Anti-ban protection",
        "Undetectable by anti-cheat",
        "1-year free updates",
        "24/7 support access",
        "Custom settings panel",
        "Multiple game support"
      ],
      description: "Perfect for competitive players who need reliable tools",
      whatsappMessage: "Hello! I want to purchase the Internal Preview package (₹1,499). Please provide payment details."
    },
    {
      name: "Phone Panel",
      price: "₹1,999",
      originalPrice: "₹2,500",
      icon: Smartphone,
      popular: true,
      features: [
        "All Internal Preview features",
        "Mobile control panel",
        "Remote activation/deactivation",
        "Phone-based configuration",
        "Stealth mode activation",
        "Priority customer support",
        "Advanced customization",
        "Multi-device compatibility"
      ],
      description: "Most popular choice - control everything from your phone",
      whatsappMessage: "Hello! I want to purchase the Phone Panel package (₹1,999). Please provide payment details."
    },
    {
      name: "Paid Sensi",
      price: "₹199",
      originalPrice: "₹300",
      icon: Gamepad2,
      popular: false,
      features: [
        "Professional sensitivity settings",
        "Pre-configured for pro players",
        "Instant improvement",
        "Easy one-click setup",
        "Compatible with all devices",
        "Regular updates",
        "Performance optimization",
        "Setup tutorial included"
      ],
      description: "Enhance your gameplay with professional sensitivity settings",
      whatsappMessage: "Hello! I want to purchase the Paid Sensi package (₹199). Please provide payment details."
    },
    {
      name: "Paid Push",
      price: "₹499",
      originalPrice: "₹700",
      icon: Zap,
      popular: false,
      features: [
        "Aggressive gameplay enhancement",
        "Push rank optimization",
        "Advanced movement assist",
        "Tactical advantage tools",
        "Rank boosting features",
        "Performance analytics",
        "Strategy recommendations",
        "Competitive edge tools"
      ],
      description: "Perfect for ranking up quickly and efficiently",
      whatsappMessage: "Hello! I want to purchase the Paid Push package (₹499). Please provide payment details."
    },
    {
      name: "Aim Kill",
      price: "₹999",
      originalPrice: "₹1,200",
      icon: Target,
      popular: false,
      features: [
        "Perfect accuracy guarantee",
        "Headshot optimization",
        "Recoil compensation",
        "Bullet trajectory assist",
        "Customizable aim settings",
        "Multiple weapon support",
        "Training mode included",
        "Professional-grade precision"
      ],
      description: "Ultimate aiming solution for competitive gaming",
      whatsappMessage: "Hello! I want to purchase the Aim Kill package (₹999). Please provide payment details."
    }
  ];

  const guarantees = [
    "100% Server-Safe - Never get banned",
    "Instant activation after payment",
    "1-year free updates included",
    "24/7 customer support",
    "Money-back guarantee",
    "Regular security updates"
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-gradient-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white animate-fade-in">
            Premium <span className="text-gradient">Gaming Packages</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in">
            Choose from our range of professional-grade gaming enhancement tools. 
            All packages include server-safe protection and 1-year updates.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`card-gaming relative animate-fade-in ${pkg.popular ? 'border-primary ring-2 ring-primary/20' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center">
                  <pkg.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                      <span className="text-lg text-muted-foreground line-through">{pkg.originalPrice}</span>
                    </div>
                    <CardDescription className="text-base">{pkg.description}</CardDescription>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full btn-gaming"
                    onClick={() => window.open(`https://wa.me/919608831187?text=${encodeURIComponent(pkg.whatsappMessage)}`, "_blank")}
                  >
                    Purchase Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-16 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              Our <span className="text-gradient">Guarantee</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We stand behind our products with industry-leading guarantees and support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guarantees.map((guarantee, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-white">{guarantee}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="card-gaming">
              <CardHeader>
                <CardTitle>Are these cheats safe to use?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, all our cheats are completely server-safe and undetectable. We use advanced bypass 
                  techniques and regularly update our systems to ensure maximum security.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-gaming">
              <CardHeader>
                <CardTitle>How long do the cheats last?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All packages come with 1-year access including free updates. After purchase, 
                  you'll receive lifetime support for any issues or questions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-gaming">
              <CardHeader>
                <CardTitle>What payment methods do you accept?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We accept UPI, PayTM, bank transfers, and cryptocurrency. Contact us on WhatsApp 
                  for specific payment instructions after selecting your package.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
            Need Help Choosing?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our team is available 24/7 to help you select the perfect package for your gaming needs.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-gaming-red hover:bg-gray-100"
            onClick={() => window.open("https://wa.me/919608831187?text=Hello! I need help choosing the right LUNOX CHEATS package for my needs.", "_blank")}
          >
            Get Personal Recommendation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Cheats;