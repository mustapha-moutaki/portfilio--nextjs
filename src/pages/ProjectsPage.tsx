
import { useEffect, useRef } from "react";
import Layout from "@/components/Layout";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  // id: string;// we will  use index to fitch them 
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  skills: string[];
  demoLink?: string;
  repoLink?: string;
}

const ProjectsPage = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      // id: "01",
      title: "Medmanager(Hospital management system & booking platforme",
      description: "DEVELOPED AN EVENT MANAGEMENT SYSTEM USING PHP MVC - laravel, MySQL, AND AJAX FOR EVENT CREATION, TICKET BOOKING, AND PAYPAL PAYMENT INTEGRATION.",
      startDate: "May 2025",
      endDate: "July 2025",
      skills: ["PHP", "MySQL", "AJAX", "MVC", "PayPal Integration", "Security"],
      demoLink: "#",
      repoLink: "#"
    },
    {
      // id: "01",
      title: "Event Management System (Eventbrite clone)",
      description: "DEVELOPED AN EVENT MANAGEMENT SYSTEM USING PHP MVC, POSTGRESQL, AND AJAX FOR EVENT CREATION, TICKET BOOKING, AND PAYPAL PAYMENT INTEGRATION.",
      startDate: "Oct 2024",
      endDate: "Oct 2024",
      skills: ["PHP", "PostgreSQL", "AJAX", "MVC", "PayPal Integration", "Security"],
      demoLink: "#",
      repoLink: "#"
    },
    {
      // id: "02",
      title: "Online Learning Platform",
      description: "DESIGNED AND IMPLEMENTED A COURSE CATALOG, SEARCH FEATURES, AND ROLE MANAGEMENT FOR STUDENTS AND TEACHERS, INCLUDING A FULL ADMIN PANEL.",
      startDate: "Dec 2024",
      endDate: "Jan 2025",
      skills: ["PHP", "Laravel", "MySQL", "Role Management", "Admin Panel", "UI/UX"],
      demoLink: "#",
      repoLink: "#"
    },
    {
      // id: "03",
      title: "Task Management Web Application",
      description: "DEVELOPED A TASK MANAGEMENT SYSTEM WITH DYNAMIC STATUS UPDATES, FILTERING, LOCAL STORAGE INTEGRATION, AND DRAG-AND-DROP FUNCTIONALITY.",
      startDate: "Oct 2024",
      endDate: "Oct 2024",
      skills: ["JavaScript", "HTML", "CSS", "Local Storage", "Drag-and-Drop", "Task Management"],
      demoLink: "#",
      repoLink: "#"
    },
    {
      // id: "04",
      title: "E-Commerce Platform with NextJS",
      description: "BUILT A SCALABLE E-COMMERCE SOLUTION WITH STRIPE INTEGRATION AND DYNAMIC PRODUCT MANAGEMENT USING NEXTJS AND TAILWIND CSS.",
      startDate: "Apr 2022",
      endDate: "Jul 2022",
      skills: ["NextJS", "Stripe", "MongoDB", "Tailwind CSS", "E-Commerce", "Web Development"],
      demoLink: "#",
      repoLink: "#"
    },
    {
      // id: "05",
      title: "AI-Powered Content Generator",
      description: "CREATED A WEB TOOL USING MACHINE LEARNING TO GENERATE CUSTOM CONTENT BASED ON USER PREFERENCES.",
      startDate: "Jan 2022",
      endDate: "Mar 2022",
      skills: ["React", "TensorFlow.js", "Node.js", "NLP", "AI", "Web Development"],
      demoLink: "#",
      repoLink: "#"
    }
  ];
  

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      );
    }

    if (projectsRef.current) {
      gsap.fromTo(
        projectsRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 80%",
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
            <h2 className="text-3xl text-muted-foreground mb-12">Projects</h2>
          </div>

          <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="glass border-cyan/10 overflow-hidden hover:border-cyan/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan/5 group">
                <CardContent className="p-6 pt-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="text-sm text-cyan">{project.id}</div>
                    <div className="text-sm text-muted-foreground">
                      {project.startDate} - {project.endDate}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-gradient-cyan transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="bg-cyan/5 border-cyan/20">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="bg-muted/20 px-6 py-4 flex justify-between">
                  {project.demoLink && (
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-cyan" asChild>
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" /> Demo
                      </a>
                    </Button>
                  )}
                  {project.repoLink && (
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-cyan" asChild>
                      <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" /> Code
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
