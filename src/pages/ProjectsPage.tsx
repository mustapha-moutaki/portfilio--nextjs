import { useEffect, useRef } from "react";
import Layout from "@/components/Layout";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Define the default project image (Abstract tech/code theme)
const DEFAULT_PROJECT_IMAGE = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop";

interface Project {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  skills: string[];
  demoLink?: string;
  repoLink?: string;
  frontendRepo?: string;
  image?: string; // Optional: can be overridden if needed
  backendRepo?: string;
}

const ProjectsPage = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      title: "SupplyChain IX - Enterprise Management System",
      description: "A comprehensive enterprise-grade supply chain management system built with microservices architecture. Features include real-time inventory tracking, automated order processing, and advanced analytics.",
      startDate: "Jan 2025",
      endDate: "Present",
      skills: ["Java 17", "Spring Boot", "Angular", "PostgreSQL", "Docker", "Jenkins"],
      repoLink: "https://github.com/mustapha-moutaki/supplyChainIX",
      frontendRepo: "https://github.com/mustapha-moutaki/supplyChainIX-front",
    },
    {
      title: "Client Portal – Full Stack Web Application",
      description: "A modern client portal designed to manage users, authentication, and business data through a secure and scalable full-stack architecture. The application features JWT-based authentication, role-based access, responsive UI, and a clean separation between frontend and backend services.",
      startDate: "Feb 2025",
      endDate: "Present",
      skills: [
        "Java 17",
        "Spring Boot 3",
        "Spring Security",
        "JWT",
        "PostgreSQL",
        "Spring Data JPA",
        "Docker",
        "Maven",
        "Next.js 14",
        "React 18",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn UI",
        "Radix UI"
      ],
      repoLink: "https://github.com/mustapha-moutaki/Client-Portal-Backend",
      frontendRepo: "https://github.com/mustapha-moutaki/Client-Portal-Frontend"
    }
    ,
    {
      title: "MedManager - Hospital Management System",
      description: "Developed a comprehensive hospital management system using PHP MVC - Laravel, MySQL, and AJAX for appointment booking, patient records, and healthcare platform integration.",
      startDate: "May 2025",
      endDate: "July 2025",
      skills: ["Laravel", "PHP", "MySQL", "AJAX", "MVC", "Security"],
      repoLink: "https://github.com/mustapha-moutaki/medmanager",
      demoLink: "https://github.com/mustapha-moutaki/medmanager"
    },
    {
      title: "Event Management System (Eventbrite Clone)",
      description: "Developed an event management system using PHP MVC, PostgreSQL, and AJAX for event creation, ticket booking, and PayPal payment integration.",
      startDate: "Oct 2024",
      endDate: "Oct 2024",
      skills: ["PHP", "PostgreSQL", "AJAX", "MVC", "PayPal Integration"],
      repoLink: "https://github.com/mustapha-moutaki/eventHub-platforme",
      demoLink: "#"
    },
    {
      title: "Online Learning Platform",
      description: "Designed and implemented a course catalog, search features, and role management for students and teachers, including a full admin panel.",
      startDate: "Dec 2024",
      endDate: "Jan 2025",
      skills: ["PHP", "Laravel", "MySQL", "Role Management", "Admin Panel"],
      repoLink: "",
      demoLink: "#"
    },
    {
      title: "Task Management Web Application",
      description: "Developed a task management system with dynamic status updates, filtering, local storage integration, and drag-and-drop functionality.",
      startDate: "Oct 2024",
      endDate: "Oct 2024",
      skills: ["JavaScript", "HTML", "CSS", "Local Storage", "Drag-and-Drop"],
      repoLink: "https://github.com/mustapha-moutaki/task-manager-api",
      demoLink: "https://github.com/mustapha-moutaki/task-manager-api"
    },
    {
      title: "E-Commerce Platform with NextJS",
      description: "Built a scalable e-commerce solution with Stripe integration and dynamic product management using NextJS and Tailwind CSS.",
      startDate: "Apr 2022",
      endDate: "Jul 2022",
      skills: ["NextJS", "Stripe", "MongoDB", "Tailwind CSS"],
      repoLink: "#",
      demoLink: "#"
    }
  ];

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(headingRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
    }

    if (projectsRef.current) {
      gsap.fromTo(projectsRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  return (
    <Layout>
      <div className="min-h-screen w-full pb-20">
        <div className="container mx-auto px-4 py-16">
          <div ref={headingRef}>
            <h1 className="text-5xl font-bold mb-2 text-gradient-cyan">Projects</h1>
            <h2 className="text-3xl text-muted-foreground mb-12">My Work</h2>
          </div>

          <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="glass border-cyan/20 overflow-hidden hover:border-cyan/40 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan/20 group relative flex flex-col h-full"
              >
                {/* 1. Image Header Section */}
                <div className="relative h-48 w-full overflow-hidden border-b border-cyan/10">
                  <div className="absolute inset-0 bg-cyan/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <img 
                    src={project.image || DEFAULT_PROJECT_IMAGE} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-20"></div>
                </div>

                {/* 2. Hover Gradient Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 via-transparent to-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <CardContent className="p-8 relative z-10 flex-grow">
                  <div className="flex justify-between items-start mb-6 flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                      <div className="text-sm font-mono text-cyan bg-cyan/10 px-3 py-1 rounded-full border border-cyan/30">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      {index === 0 && (
                        <Badge className="bg-gradient-to-r from-cyan/20 to-blue/20 text-cyan border-cyan/30">
                          Latest
                        </Badge>
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground font-mono">
                      {project.startDate}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-gradient-cyan transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-8 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.skills.slice(0, 6).map((skill, i) => (
                      <Badge 
                        key={i} 
                        variant="outline" 
                        className="bg-cyan/5 border-cyan/20 text-[10px] uppercase tracking-wider py-1 transition-all duration-300 hover:bg-cyan/15 hover:border-cyan/40"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="bg-muted/20 px-8 py-5 flex flex-wrap gap-3 border-t border-cyan/10 relative z-10">
                  {project.repoLink && (
                    <Button 
                      variant="outline" 
                      className="flex-1 border-cyan/30 hover:bg-cyan hover:text-black font-bold transition-all duration-300 group/btn" 
                      asChild
                    >
                      <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        {project.frontendRepo ? "Backend" : "Code"}
                      </a>
                    </Button>
                  )}
                  
                  {project.frontendRepo && (
                    <Button 
                      variant="outline" 
                      className="flex-1 border-cyan/30 hover:bg-cyan hover:text-black font-bold transition-all duration-300 group/btn" 
                      asChild
                    >
                      <a href={project.frontendRepo} target="_blank" rel="noopener noreferrer">
                        <Code2 className="h-4 w-4 mr-2" />
                        Frontend
                      </a>
                    </Button>
                  )}

                  {project.demoLink && !project.frontendRepo && (
                    <Button 
                      variant="outline" 
                      className="flex-1 border-cyan/30 hover:bg-cyan hover:text-black font-bold transition-all duration-300 group/btn" 
                      asChild
                    >
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectsPage;