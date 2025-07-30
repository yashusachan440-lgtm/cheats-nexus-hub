import { Shield, Zap, Users, Clock, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: "Server-Safe",
      description: "All our cheats are completely undetectable and server-safe"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your needs"
    },
    {
      icon: Zap,
      title: "Instant Updates",
      description: "Get immediate updates when new versions are released"
    },
    {
      icon: Users,
      title: "Community",
      description: "Join thousands of satisfied gamers worldwide"
    }
  ];

  const testimonials = [
    {
      name: "ProGamer2024",
      rating: 5,
      comment: "Best cheats I've ever used! Completely undetectable and amazing support."
    },
    {
      name: "ElitePlayer",
      rating: 5,
      comment: "Been using LUNOX for 6 months. Never been banned, always works perfectly."
    },
    {
      name: "CompetitiveGamer",
      rating: 5,
      comment: "The Internal Preview package is incredible. Worth every penny!"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-dark py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Professional 
                <span className="text-gradient block">Gaming Enhancement</span>
                Tools
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                Dominate the competition with our server-safe, undetectable gaming tools. 
                Professional grade cheats with 1-year updates and 24/7 support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="btn-discord"
                  onClick={() => window.open("https://discord.com/invite/7Kyh8nzuZH", "_blank")}
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                  Join Discord
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="btn-outline-gaming"
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="relative">
                <img 
                  src="/lovable-uploads/0cc76d85-f6fc-43d8-a558-dd9a66bc39b5.png" 
                  alt="LUNOX CHEATS - Professional Gaming Tools" 
                  className="w-full max-w-md mx-auto gaming-glow animate-float rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose <span className="text-gradient">LUNOX CHEATS</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide the most advanced, secure, and reliable gaming enhancement tools in the industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-gaming animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center">
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              Premium <span className="text-gradient">Gaming Packages</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose from our range of professional gaming enhancement tools.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-gaming bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-primary">Internal Preview</CardTitle>
                <CardDescription className="text-2xl font-bold">₹1,499</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center"><Shield className="h-4 w-4 text-green-500 mr-2" />Advanced ESP</li>
                  <li className="flex items-center"><Shield className="h-4 w-4 text-green-500 mr-2" />Aimbot</li>
                  <li className="flex items-center"><Shield className="h-4 w-4 text-green-500 mr-2" />Anti-ban protection</li>
                  <li className="flex items-center"><Shield className="h-4 w-4 text-green-500 mr-2" />1-year updates</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-gaming bg-card/80 backdrop-blur-sm border-primary">
              <CardHeader>
                <CardTitle className="text-primary">Phone Panel</CardTitle>
                <CardDescription className="text-2xl font-bold">₹1,999</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center"><Shield className="h-4 w-4 text-green-500 mr-2" />Mobile control panel</li>
                  <li className="flex items-center"><Shield className="h-4 w-4 text-green-500 mr-2" />Remote activation</li>
                  <li className="flex items-center"><Shield className="h-4 w-4 text-green-500 mr-2" />All Internal features</li>
                  <li className="flex items-center"><Shield className="h-4 w-4 text-green-500 mr-2" />Priority support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-gaming bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-primary">Aim Kill</CardTitle>
                <CardDescription className="text-2xl font-bold">₹999</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center"><Shield className="h-4 w-4 text-green-500 mr-2" />Perfect accuracy</li>
                  <li className="flex items-center"><Shield className="h-4 w-4 text-green-500 mr-2" />Headshot guarantee</li>
                  <li className="flex items-center"><Shield className="h-4 w-4 text-green-500 mr-2" />Customizable settings</li>
                  <li className="flex items-center"><Shield className="h-4 w-4 text-green-500 mr-2" />Regular updates</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="btn-gaming"
              onClick={() => window.location.href = '/cheats'}
            >
              View All Packages
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What Our <span className="text-gradient">Customers Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied gamers who trust LUNOX CHEATS.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-gaming animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <div className="flex">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
            Ready to Dominate the Game?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join the elite gaming community and experience unparalleled performance with our premium tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-gaming-red hover:bg-gray-100"
              onClick={() => window.open("https://wa.me/919608831187?text=Hello! I want to purchase LUNOX CHEATS premium package.", "_blank")}
            >
              Contact on WhatsApp
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={() => window.location.href = '/contact'}
            >
              Get Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;