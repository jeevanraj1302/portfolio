import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-primary/20 blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-accent/20 blur-xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="space-y-8 max-w-4xl mx-auto">
          {/* Name with gradient */}
          <h1 className="text-6xl md:text-8xl font-bold gradient-text animate-fade-in">
            JEEVANRAJ
          </h1>
          
          {/* Title */}
          <h2 className="text-2xl md:text-4xl text-muted-foreground font-light">
            Entry-Level Machine Learning Engineer
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate second-year engineering student specializing in AI & ML, 
            with hands-on experience in Python, web development, and data analysis.
          </p>
          
          {/* Contact buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Button variant="default" size="lg" className="glow transition-smooth hover:scale-105">
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </Button>
            <Button variant="outline" size="lg" className="transition-smooth hover:scale-105">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Button variant="outline" size="lg" className="transition-smooth hover:scale-105">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
          </div>
          
          {/* Quick contact */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-muted-foreground mt-8">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91 8015170849</span>
            </div>
            <div className="hidden sm:block">•</div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>jeevanalphal302@gmail.com</span>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;