import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Github, ExternalLink, Code2, Globe, Mail } from 'lucide-react';
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
        <div className="grid md:grid-cols-2 gap-8 min-h-[60vh]">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 dark:hover:shadow-primary/5"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden bg-gray-50 dark:bg-muted">
                <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-white/20 to-transparent dark:from-background/50 dark:via-background/20 dark:to-transparent z-10" />
                <motion.div 
                  className="relative w-full"
                  style={{ paddingTop: '56.25%' }}
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-contain p-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    onError={e => { e.currentTarget.src = 'https://via.placeholder.com/400x225?text=No+Image'; }}
                  />
                </motion.div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 dark:group-hover:bg-primary/5 transition-colors duration-300 z-20" />
              </div>

              {/* Project Content */}
              <div className="p-6 bg-white dark:bg-card">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline"
                      className="group-hover:border-primary/50 transition-colors duration-300 bg-gray-50 text-gray-700 dark:bg-background/50 dark:text-gray-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="gap-2 hover:text-primary hover:bg-primary/10 transition-colors duration-300 text-gray-700 dark:text-gray-300"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="gap-2 hover:text-primary hover:bg-primary/10 transition-colors duration-300 text-gray-700 dark:text-gray-300"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <Globe className="h-4 w-4" />
                    Live Demo
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
          className="text-center mt-12 flex justify-center gap-4"
        >
          <Button 
            
            size="lg" 
            variant="outline" 
            className="gap-2 hover:bg-primary/10 hover:text-primary hover:border-primary transition-colors duration-300 bg-white dark:bg-background/50 text-gray-700 dark:text-gray-300"
          >
            <Link to="https://github.com/Dame-Abera"></Link>
            <Code2 className="h-5 w-5" />
            View All Projects
          </Button>
          <Link to="/contact">
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2 hover:bg-primary/10 hover:text-primary hover:border-primary transition-colors duration-300 bg-white dark:bg-background/50 text-gray-700 dark:text-gray-300"
            >
              <Mail className="h-5 w-5" />
              Contact Me
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
  