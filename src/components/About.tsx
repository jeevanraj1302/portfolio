import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate student with a strong foundation in AI/ML and 
            a drive to create innovative solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Summary */}
          <div className="space-y-6">
            <Card className="card-gradient border-border/50 p-6">
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Professional Summary
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I am a second-year engineering student with a keen interest in machine learning 
                and artificial intelligence. My academic journey has equipped me with fundamental 
                skills in Python programming and ML tools, while practical projects have strengthened 
                my problem-solving abilities.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently seeking my first internship opportunity to learn, grow, and contribute 
                to innovative projects in the field of machine learning and software development.
              </p>
            </Card>
            
            {/* Key highlights */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground">Key Highlights</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm text-muted-foreground">Quick Learner</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span className="text-sm text-muted-foreground">Team Player</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm text-muted-foreground">Problem Solver</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span className="text-sm text-muted-foreground">Detail Oriented</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Education */}
          <div className="space-y-6">
            <Card className="card-gradient border-border/50 p-6 transition-smooth hover:glow">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/20">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Bachelor's in Engineering
                  </h3>
                  <p className="text-primary font-semibold mb-2">
                    Artificial Intelligence and Machine Learning
                  </p>
                  <p className="text-muted-foreground mb-3">
                    Sree Sakthi Engineering College
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>2024 - 2028</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Award className="w-4 h-4" />
                      <span>CGPA: 8.21</span>
                    </div>
                  </div>
                  
                  <Badge variant="default" className="bg-primary/20 text-primary border-primary/30">
                    Currently Enrolled
                  </Badge>
                </div>
              </div>
            </Card>
            
            {/* Current focus */}
            <Card className="card-gradient border-border/50 p-6">
              <h4 className="text-lg font-semibold text-foreground mb-3">
                Current Focus Areas
              </h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm text-muted-foreground">Advanced Python Programming</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span className="text-sm text-muted-foreground">Machine Learning Algorithms</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm text-muted-foreground">Data Analysis & Visualization</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span className="text-sm text-muted-foreground">Web Development Frameworks</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;