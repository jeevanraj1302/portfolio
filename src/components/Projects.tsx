import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Calculator, ShoppingCart, BarChart3 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: Calculator,
      title: "Python Calculator",
      description: "A comprehensive calculator application built with Python featuring basic arithmetic operations, scientific functions, and a user-friendly interface. Demonstrates solid understanding of Python programming fundamentals.",
      tech: ["Python", "Tkinter", "Object-Oriented Programming"],
      category: "Desktop Application"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Website",
      description: "A fully responsive e-commerce platform built from scratch using modern web technologies. Features product catalog, shopping cart functionality, and responsive design across all devices.",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      category: "Web Development"
    },
    {
      icon: BarChart3,
      title: "Sales Dashboard",
      description: "An interactive sales analytics dashboard created in Excel featuring dynamic charts, pivot tables, and KPI tracking. Provides comprehensive insights into sales performance and trends.",
      tech: ["MS Excel", "Pivot Tables", "Data Visualization", "VBA"],
      category: "Data Analysis"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of practical projects demonstrating technical skills 
            and problem-solving abilities across different domains
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="card-gradient border-border/50 overflow-hidden transition-smooth hover:scale-105 hover:glow group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="p-6">
                {/* Project header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-smooth">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                
                {/* Project title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:gradient-text transition-smooth">
                  {project.title}
                </h3>
                
                {/* Project description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                
                {/* Tech stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Action buttons */}
                <div className="flex gap-2">
                  <Button variant="default" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                  <Button variant="outline" size="sm">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;