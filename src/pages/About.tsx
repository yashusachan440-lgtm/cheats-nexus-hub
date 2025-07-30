import { Users, Target, Shield, Award, Zap, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "We prioritize your account safety with advanced anti-detection technology and server-safe guarantees."
    },
    {
      icon: Target,
      title: "Performance Excellence",
      description: "Our tools are designed to give you the competitive edge you need to dominate the game."
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "We build tools for gamers, by gamers. Our community drives everything we do."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Every product goes through rigorous testing to ensure reliability and effectiveness."
    }
  ];

  const team = [
    {
      name: "Lead Developer",
      role: "Security & Anti-Cheat Expert",
      description: "10+ years in game security and bypass technology development."
    },
    {
      name: "Product Manager",
      role: "Gaming Strategy Specialist",
      description: "Professional esports background with deep understanding of competitive gaming."
    },
    {
      name: "Support Lead",
      role: "Customer Success Manager",
      description: "Dedicated to ensuring every customer has the best possible experience."
    }
  ];

  const achievements = [
    { icon: Users, value: "10,000+", label: "Satisfied Customers" },
    { icon: Globe, value: "50+", label: "Countries Served" },
    { icon: Zap, value: "99.9%", label: "Success Rate" },
    { icon: Award, value: "3+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-gradient-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white animate-fade-in">
            About <span className="text-gradient">LUNOX CHEATS</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in">
            We are passionate gamers who understand the need for competitive advantage. 
            Our mission is to provide the most advanced, secure, and reliable gaming enhancement tools in the industry.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Our <span className="text-gradient">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  LUNOX CHEATS was born from a simple idea: every gamer deserves the tools to reach their full potential. 
                  What started as a small project among friends has grown into a trusted platform serving thousands of gamers worldwide.
                </p>
                <p>
                  Our team consists of experienced developers, professional gamers, and security experts who work tirelessly 
                  to create tools that not only give you an advantage but also keep your account completely safe.
                </p>
                <p>
                  We understand the gaming community because we are part of it. Every feature we develop, every security measure 
                  we implement, and every support interaction we have is driven by our passion for gaming excellence.
                </p>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src="/lovable-uploads/3d247ad3-cf1e-4d03-9e16-a4aabb18c213.png" 
                alt="LUNOX CHEATS" 
                className="w-full max-w-md mx-auto gaming-glow animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do and every decision we make.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl text-white">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-center">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Achievements</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and customer satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <achievement.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{achievement.value}</div>
                <div className="text-muted-foreground">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Dedicated professionals working around the clock to serve the gaming community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card 
                key={index} 
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-white">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-center text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our <span className="text-gradient">Mission</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              To empower gamers worldwide with the most advanced, secure, and reliable gaming enhancement tools, 
              while building a community that values fair play, security, and excellence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">Innovation</h3>
                <p className="text-muted-foreground">
                  Continuously developing cutting-edge technology to stay ahead of anti-cheat systems.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">Security</h3>
                <p className="text-muted-foreground">
                  Ensuring every tool is completely undetectable and safe for long-term use.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">Support</h3>
                <p className="text-muted-foreground">
                  Providing 24/7 assistance to help every customer achieve their gaming goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
            Join the LUNOX Family
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the difference that passion, expertise, and dedication can make in your gaming journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-gaming-red hover:bg-gray-100"
              onClick={() => window.open("https://wa.me/919608831187?text=Hello! I want to learn more about LUNOX CHEATS and join the community.", "_blank")}
            >
              Get Started Today
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;