import { Shield, Headphones, Download, Settings, Clock, Users, Zap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Security & Protection",
      description: "Advanced anti-detection technology keeps your account safe",
      features: [
        "Real-time anti-cheat bypass",
        "Server-safe guarantee",
        "Account protection protocols",
        "Regular security updates"
      ]
    },
    {
      icon: Headphones,
      title: "24/7 Customer Support",
      description: "Round-the-clock assistance from our expert team",
      features: [
        "Instant WhatsApp support",
        "Discord community",
        "Telegram channel",
        "Video call assistance"
      ]
    },
    {
      icon: Download,
      title: "Instant Setup & Installation",
      description: "Get up and running within minutes of purchase",
      features: [
        "One-click installation",
        "Automated configuration",
        "Video tutorials",
        "Remote assistance available"
      ]
    },
    {
      icon: Settings,
      title: "Custom Configuration",
      description: "Personalized settings tailored to your playstyle",
      features: [
        "Professional settings optimization",
        "Device-specific configuration",
        "Performance tuning",
        "Competitive advantages"
      ]
    },
    {
      icon: Clock,
      title: "Regular Updates",
      description: "Stay ahead with constant improvements and new features",
      features: [
        "Weekly security patches",
        "Feature enhancements",
        "Game compatibility updates",
        "Performance optimizations"
      ]
    },
    {
      icon: Users,
      title: "Community Access",
      description: "Join our exclusive community of elite gamers",
      features: [
        "Private Discord server",
        "Strategy sharing",
        "Tournament information",
        "Pro player insights"
      ]
    }
  ];

  const packages = [
    {
      name: "Basic Support",
      price: "Free",
      description: "Included with all purchases",
      features: [
        "WhatsApp support",
        "Installation guide",
        "Basic troubleshooting",
        "Community access"
      ]
    },
    {
      name: "Premium Support",
      price: "₹299/month",
      description: "Enhanced support experience",
      features: [
        "Priority support queue",
        "Video call assistance",
        "Custom configuration",
        "Performance optimization",
        "1-on-1 training sessions"
      ]
    },
    {
      name: "VIP Support",
      price: "₹599/month",
      description: "Ultimate support package",
      features: [
        "Dedicated support agent",
        "Instant response guarantee",
        "Custom feature requests",
        "Beta access to new features",
        "Personal gaming coach"
      ]
    }
  ];

  const stats = [
    { icon: Users, value: "10,000+", label: "Happy Customers" },
    { icon: Zap, value: "99.9%", label: "Uptime Guarantee" },
    { icon: Award, value: "24/7", label: "Support Available" },
    { icon: Shield, value: "100%", label: "Server Safe" }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-gradient-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white animate-fade-in">
            Professional <span className="text-gradient">Gaming Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in">
            Comprehensive support and services to ensure you get the most out of your gaming experience.
            From installation to optimization, we've got you covered.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              What We <span className="text-gradient">Offer</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive services designed to give you the ultimate gaming advantage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                  <CardDescription className="text-gray-300">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-white">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Packages */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Support <span className="text-gradient">Packages</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the level of support that matches your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`card-gaming ${index === 1 ? 'border-primary ring-2 ring-primary/20' : ''}`}
              >
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                  <CardDescription className="text-base">{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full btn-gaming"
                    onClick={() => window.open(`https://wa.me/919608831187?text=Hello! I want to subscribe to ${pkg.name} support package.`, "_blank")}
                  >
                    {pkg.price === "Free" ? "Included" : "Subscribe Now"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              How It <span className="text-gradient">Works</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Simple steps to get started with LUNOX CHEATS.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Choose Package", description: "Select the perfect gaming package for your needs" },
              { step: "2", title: "Contact Us", description: "Reach out via WhatsApp, Discord, or Telegram" },
              { step: "3", title: "Make Payment", description: "Secure payment through multiple methods" },
              { step: "4", title: "Get Started", description: "Instant setup and lifetime support" }
            ].map((step, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Get <span className="text-gradient">Started</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of gamers who have already transformed their gaming experience with LUNOX CHEATS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="btn-gaming"
              onClick={() => window.open("https://wa.me/919608831187?text=Hello! I want to get started with LUNOX CHEATS. Can you help me choose the right package?", "_blank")}
            >
              Contact Support
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="btn-outline-gaming"
              onClick={() => window.location.href = '/cheats'}
            >
              View Packages
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;