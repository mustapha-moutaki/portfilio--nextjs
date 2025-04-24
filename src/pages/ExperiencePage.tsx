
import { useEffect, useRef } from "react";
import Layout from "@/components/Layout";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

gsap.registerPlugin(ScrollTrigger);

interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  skills: string[];
}

const ExperiencePage = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const experiences: Experience[] = [
    {
      id: "01",
      role: "FULL-STACK DEVELOPER",
      company: "YOUCODE",
      location: "POWERED BY SIMPLON, YOUSSOUFIA",
      startDate: "OCT 2024",
      endDate: "PRESENT",
      description: [
        "Developed and maintained web applications using HTML, CSS, JavaScript, and Laravel for full-stack solutions.",
        "Collaborated with a team to create scalable, high-performance applications.",
        "Worked with clients to understand requirements and deliver projects on time.",
        "Provided training and mentorship to junior developers.",
        "Participated in agile workflows and conducted sprint planning and retrospectives."
      ],
      skills: ["Laravel", "PHP", "JavaScript", "Full-Stack Development", "Team Collaboration", "Agile"]
    },
    {
      id: "02",
      role: "FRONT-END DEVELOPER",
      company: "GREENCHIP 2.0",
      location: "POWERED BY SIMPLON - OUJDA",
      startDate: "JUL 2021",
      endDate: "JUN 2022",
      description: [
        "Designed and developed responsive front-end interfaces using HTML, CSS, JavaScript, and React.js.",
        "Collaborated with back-end developers to integrate APIs and improve application performance.",
        "Implemented real-time data updates using AJAX and ensured cross-browser compatibility.",
        "Optimized website speed and performance, ensuring smooth user experiences."
      ],
      skills: ["React.js", "JavaScript", "HTML", "CSS", "AJAX", "Responsive Design"]
    },
    {
      id: "03",
      role: "SOFTWARE DEVELOPER",
      company: "BIDWIZ",
      location: "MARRAKECH | REMOTE",
      startDate: "SEPT 2020",
      endDate: "NOV 2020",
      description: [
        "Planned and developed user-friendly web interfaces using Angular and TypeScript.",
        "Integrated third-party APIs to enhance functionality and improve user experiences.",
        "Conducted comprehensive testing to ensure application stability and performance."
      ],
      skills: ["Angular", "TypeScript", "API Integration", "UI/UX Design", "Testing"]
    },
    {
      id: "04",
      role: "FRONTEND WEB DEVELOPER",
      company: "STORAPIDO",
      location: "CASABLANCA | REMOTE",
      startDate: "APR 2020",
      endDate: "SEPT 2020",
      description: [
        "Optimized existing websites for improved performance and cross-browser compatibility.",
        "Built front-end solutions according to client specifications using HTML, CSS, and JavaScript.",
        "Collaborated with back-end teams to integrate APIs and ensure seamless user interactions."
      ],
      skills: ["HTML", "CSS", "JavaScript", "Client Communication", "Frontend Optimization"]
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

    if (timelineRef.current) {
      gsap.fromTo(
        timelineRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.3,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: timelineRef.current,
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
            <h1 className="text-5xl font-bold mb-2 text-gradient-cyan">Experience</h1>
            <h2 className="text-3xl text-muted-foreground mb-12">Experience</h2>
          </div>

          <div ref={timelineRef} className="relative space-y-12 pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-cyan before:via-cyan/50 before:to-transparent">
            {experiences.map((experience) => (
              <div key={experience.id} className="relative">
                <div className="absolute left-[-33px] top-0 h-6 w-6 rounded-full bg-dark border-2 border-cyan flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-cyan animate-pulse-cyan"></div>
                </div>
                
                <Card className="glass border-cyan/10 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-6 flex-wrap gap-4">
                      <div className="text-sm text-cyan">{experience.id}</div>
                      <div className="text-sm text-muted-foreground">
                        {experience.startDate} - {experience.endDate}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{experience.role}</h3>
                    <div className="flex items-center mb-6">
                      <span className="text-muted-foreground">{experience.company}</span>
                      <span className="mx-2 text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground/70">{experience.location}</span>
                    </div>
                    
                    <ul className="list-disc pl-5 mb-6 space-y-2">
                      {experience.description.map((item, index) => (
                        <li key={index} className="text-muted-foreground">{item}</li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="bg-cyan/5 border-cyan/20">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ExperiencePage;
