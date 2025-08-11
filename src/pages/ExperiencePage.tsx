
import { useEffect, useRef } from "react";
import Layout from "@/components/Layout";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

gsap.registerPlugin(ScrollTrigger);

interface Experience {
  // id: string;// we will use index
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
      // id: "01",
      role: "FRONT-END DEVELOPER",
      company: "Digital-partinership Group -dpg",
      location: "Mohammed Zerqtouni Street, Casablanca, Morocco",
      startDate: "12/ 05 /2025",
      endDate: "12/ 07 /2025",
      description: [
        "Developed and maintained web applications using HTML, CSS, JavaScript, and Laravel for full-stack solutions.",
        "Collaborated with a team to create scalable, high-performance applications.",
        "Worked with clients to understand requirements and deliver projects on time.",
        "Provided training and mentorship to junior developers.",
        "Participated in agile workflows and conducted sprint planning and retrospectives."
      ],
      skills: ["Next.js", "Laravel", "Full-Stack Development", "Team Collaboration", "Agile"]
    },
    {
    
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
      skills: ["Laravel", "PHP", "JavaScript", "Full-Stack Development", "Team Collaboration", "Agile", '.  .  .']
    },
    
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
            {experiences.map((experience, index) => (
              <div key={index} className="relative">
                <div className="absolute left-[-33px] top-0 h-6 w-6 rounded-full bg-dark border-2 border-cyan flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-cyan animate-pulse-cyan"></div>
                </div>
                
                <Card className="glass border-cyan/10 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-6 flex-wrap gap-4">
                      <div className="text-sm text-cyan">{index+1}</div>
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
