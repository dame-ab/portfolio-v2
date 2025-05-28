import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Github, ExternalLink, Code2, Globe } from 'lucide-react';

const projects = [
  {
    title: "AI-Powered Chatbot",
    description: "A sophisticated chatbot built with React and OpenAI's GPT model, featuring real-time responses and context awareness.",
    technologies: ["React", "TypeScript", "OpenAI", "TailwindCSS"],
    github: "https://github.com/yourusername/chatbot",
    demo: "https://chatbot-demo.com",
    image: "/projects/chatbot.png"
  },
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://ecommerce-demo.com",
    image: "/projects/ecommerce.png"
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations and dark mode support.",
    technologies: ["React", "TailwindCSS", "Framer Motion", "TypeScript"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://portfolio-demo.com",
    image: "/projects/portfolio.png"
  }
];

export default function Projects() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Featured Projects
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            A collection of my recent work and personal projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-colors"
            >
              {/* Project Image */}
              <div className="aspect-video relative overflow-hidden bg-muted">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <Button variant="ghost" size="sm" className="gap-2">
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2">
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
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" className="gap-2">
            <Code2 className="h-5 w-5" />
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
  