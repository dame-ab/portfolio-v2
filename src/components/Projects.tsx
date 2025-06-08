import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Github, Code2, Globe, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  
  {
    title: "Tewanay Flutter Shop",
    description: "A modern e-commerce mobile application built with Flutter, featuring a clean UI, product catalog, and shopping cart functionality.",
    technologies: ["Flutter", "Dart", "Provider"],
    github: "https://github.com/Dame-Abera/TewanayShop-Mobile-app.git",
    demo: "https://github.com/Dame-Abera/TewanayShop-Mobile-app.git",
    image: "/tewanayfluttershop.png"
  },
  {
    title: "Green Leaf",
    description: "An eco-friendly platform promoting sustainable living and environmental awareness through interactive features and educational content.",
    technologies: ["Material UI", "Jetpack Compose", "Django", "Kotlin","SQLite"],
    github: "https://github.com/ke-kaa/GreenLeaf.git",
    demo: "https://github.com/ke-kaa/GreenLeaf.git",
    image: "/greenleaf.png"
  },
  {
    title: "E-Store Platform",
    description: "A full-featured e-commerce platform with real-time inventory management, secure payments, and an intuitive admin dashboard.",
    technologies: ["Next.js", "TypeScript"],
    github: "https://github.com/Dame-Abera/tewanay-frontend-track.git",
    demo: "https://github.com/Dame-Abera/tewanay-frontend-track.git",
    image: "/estore.png"
  },
  {
    title: "Bookmark API with NestJS",
    description: "A robust RESTful API for managing bookmarks, built with NestJS, featuring authentication, CRUD operations, and advanced filtering.",
    technologies: ["NestJS", "TypeScript", "PostgreSQL", "JWT","Docker"],
    github: "https://github.com/Dame-Abera/bookmark-api-nestjs.git",
    demo: "https://github.com/Dame-Abera/bookmark-api-nestjs.git",
    image: "/bookmarkapiwithnestjs.png"
  },
  {
    title: "Office Expense Tracker",
    description: "A comprehensive expense tracking application for office management, featuring expense categorization, reporting, and team collaboration features.",
    technologies: ["React", "Node.js", "Express", "Postgresql","Docker"],
    github: "https://github.com/Dame-Abera/office-expense-tracker.git",
    demo: "https://github.com/Dame-Abera/office-expense-tracker.git",
    image: "/officeexpensetracker.png"
  },
 
  
  {
    title: "Travel Tracker",
    description: "A travel companion app that helps users plan trips, track expenses, and share experiences with a beautiful and intuitive interface.",
    technologies: ["React", "Redux", "Node.js", "PostgreSQL"],
    github: "https://github.com/Dame-Abera/Family-Travel-tracker-project.git",
    demo: "https://github.com/Dame-Abera/Family-Travel-tracker-project.git",
    image: "/traveltracker project.png"
  }
];

export default function Projects() {
  return (
    <section className="py-4 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 dark:from-primary dark:to-primary/60">
            Featured Projects
          </h2>
          <p className="mt-4 text-xl text-muted-foreground dark:text-muted-foreground">
            A collection of my recent work and personal projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto px-4 sm:px-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-card/50 backdrop-blur-sm rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden bg-muted/50">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent z-10" />
                <div className="aspect-[16/9] w-full relative">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain bg-background/50"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                    onError={e => { e.currentTarget.src = 'https://via.placeholder.com/800x450?text=No+Image'; }}
                  />
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300 z-20" />
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 group-hover:from-primary group-hover:to-primary/60 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline"
                      className="text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 bg-background/50 text-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-105"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                  <Button 
                    variant="outline" 
                    size="default" 
                    className="gap-2 hover:text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300 text-foreground flex-1 hover:scale-[1.02] active:scale-[0.98]"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="text-sm sm:text-base">View Code</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="default" 
                    className="gap-2 hover:text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300 text-foreground flex-1 hover:scale-[1.02] active:scale-[0.98]"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <Globe className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="text-sm sm:text-base">Live Demo</span>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8 sm:mt-12 flex flex-col sm:flex-row justify-center gap-4 px-4 sm:px-6"
        >
          <Button 
            size="lg" 
            variant="outline" 
            className="gap-2 hover:bg-primary/10 hover:text-primary hover:border-primary transition-all duration-300 w-full sm:w-auto hover:scale-[1.02] active:scale-[0.98]"
            asChild
          >
            <a href="https://github.com/Dame-Abera" target="_blank" rel="noopener noreferrer">
              <Code2 className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm sm:text-base">View All Projects</span>
            </a>
          </Button>
          <Link to="/contact" className="w-full sm:w-auto">
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2 hover:bg-primary/10 hover:text-primary hover:border-primary transition-all duration-300 w-full hover:scale-[1.02] active:scale-[0.98]"
            >
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm sm:text-base">Contact Me</span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
  