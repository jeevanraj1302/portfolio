import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Globe, 
  Brain, 
  MessageCircle, 
  Lightbulb,
  FileSpreadsheet
} from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: Code,
      name: "Python Programming",
      description: "Object-oriented programming, data structures, algorithms"
    },
    {
      icon: FileSpreadsheet,
      name: "MS Excel",
      description: "Data analysis, pivot tables, dashboard creation"
    },
    {
      icon: Globe,
      name: "Web Development",
      description: "HTML, CSS, JavaScript, responsive design"
    },
    {
      icon: Brain,
      name: "Machine Learning",
      description: "ML algorithms, data preprocessing, model training"
    },
    {
      icon: MessageCircle,
      name: "Communication Skills",
      description: "Technical documentation, team collaboration"
    },
    {
      icon: Lightbulb,
      name: "Problem Solving",
      description: "Analytical thinking, debugging, optimization"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive set of technical and soft skills developed through 
            academic projects and practical experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={skill.name}
              className="card-gradient border-border/50 p-6 transition-smooth hover:scale-105 hover:glow group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-smooth">
                  <skill.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground">
                  {skill.name}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {skill.description}
                </p>
                
                <Badge variant="secondary" className="mt-2">
                  Proficient
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;