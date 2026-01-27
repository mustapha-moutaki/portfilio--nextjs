import { useEffect, useRef } from "react";
import Layout from "@/components/Layout";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

gsap.registerPlugin(ScrollTrigger);

interface Experience {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  skills: string[];
}

interface ExperiencePeriod {
  period: string;
  experiences: Experience[];
}

const ExperiencePage = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const experiencesByPeriod: ExperiencePeriod[] = [
    {
      period: "2025 - PRESENT",
      experiences: [
        {
          role: "JAVA & ANGULAR DEVELOPER",
          company: "Your Company",
          location: "Location",
          startDate: "2024",
          endDate: "PRESENT",
          description: [
            "Built enterprise applications using Java Spring Boot and Angular framework.",
            "Implemented RESTful APIs and GraphQL endpoints for seamless data integration.",
            "Developed secure authentication systems using JWT and Spring Security.",
            "Managed databases including MySQL, PostgreSQL, and MongoDB.",
            "Implemented CI/CD pipelines using Docker, Jenkins, and GitHub Actions."
          ],
          skills: [
            "Angular", "TypeScript", "RxJS", "JavaScript", "HTML5", "CSS3",
            "Bootstrap", "Tailwind CSS", "Java", "JEE", "Spring Boot",
            "Spring MVC", "Spring Data JPA", "Hibernate", "Spring Security",
            "RESTful APIs", "GraphQL", "JWT", "MySQL", "PostgreSQL",
            "MongoDB", "Docker", "Jenkins", "CI/CD", "JUnit", "Mockito"
          ]
        }
      ]
    },
    {
      period: "2024 - 2025",
      experiences: [
        {
          role: "FRONT-END DEVELOPER INTERN",
          company: "Digital-partnership Group - DPG",
          location: "Mohammed Zerqtouni Street, Casablanca, Morocco",
          startDate: "MAY 2023",
          endDate: "JULY 2023",
          description: [
            "Developed and maintained web applications using modern front-end technologies.",
            "Collaborated with a team to create scalable, high-performance applications.",
            "Worked with clients to understand requirements and deliver projects on time.",
            "Participated in agile workflows and conducted sprint planning and retrospectives."
          ],
          skills: ["Next.js", "React", "TypeScript", "Full-Stack Development", "Team Collaboration", "Agile"]
        },
        {
          role: "FULL-STACK DEVELOPER",
          company: "YOUCODE",
          location: "POWERED BY SIMPLON, YOUSSOUFIA",
          startDate: "OCT 2022",
          endDate: "MAY 2023",
          description: [
            "Developed and maintained web applications using HTML, CSS, JavaScript, and Laravel for full-stack solutions.",
            "Collaborated with a team to create scalable, high-performance applications.",
            "Worked with clients to understand requirements and deliver projects on time.",
            "Provided training and mentorship to junior developers.",
            "Participated in agile workflows and conducted sprint planning and retrospectives."
          ],
          skills: ["Laravel", "PHP", "JavaScript", "Full-Stack Development", "Team Collaboration", "Agile"]
        }
      ]
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


  let experienceCounter = 0;

  return (
    <Layout>
      <div className="min-h-screen w-full pb-20">
        <div className="container mx-auto px-4 py-16">
          <div ref={headingRef}>
            <h1 className="text-5xl font-bold mb-2 text-gradient-cyan">Experiences</h1>
            <h2 className="text-3xl text-muted-foreground mb-12">Discover My Experiences</h2>
          </div>

          <div ref={timelineRef} className="relative space-y-12 pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-cyan before:via-cyan/50 before:to-transparent">
            {experiencesByPeriod.map((periodData, periodIndex) => (
              <div key={periodIndex} className="space-y-12">
                {/* Period Header */}
                <div className="relative mb-8">
                  <div className="absolute left-[-41px] top-0 h-10 w-10 rounded-full bg-cyan/20 border-2 border-cyan flex items-center justify-center backdrop-blur-sm">
                    <div className="h-4 w-4 rounded-full bg-cyan"></div>
                  </div>
                  <div className="inline-block px-4 py-2 rounded-lg bg-cyan/10 border border-cyan/30">
                    <h3 className="text-lg font-bold text-cyan">{periodData.period}</h3>
                  </div>
                </div>

                {/* Experiences in this period */}
                {periodData.experiences.map((experience, index) => {
                  experienceCounter++;
                  return (
                    <div key={index} className="relative group">
                      <div className="absolute left-[-33px] top-0 h-6 w-6 rounded-full bg-dark border-2 border-cyan flex items-center justify-center transition-all duration-300 group-hover:scale-125">
                        <div className="h-2 w-2 rounded-full bg-cyan animate-pulse-cyan group-hover:h-3 group-hover:w-3 transition-all duration-300"></div>
                      </div>

                      <Card className="glass border-cyan/10 overflow-hidden transition-all duration-500 hover:border-cyan/30 hover:shadow-lg hover:shadow-cyan/20 hover:-translate-y-2 hover:scale-[1.02] cursor-pointer">
                        <CardContent className="p-6 relative overflow-hidden">
                          {/* Animated gradient overlay on hover */}
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan/0 via-cyan/5 to-cyan/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                          
                          <div className="flex justify-between items-start mb-6 flex-wrap gap-4 relative z-10">
                            <div className="text-sm text-cyan font-mono transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-400">
                              {String(experienceCounter).padStart(2, '0')}
                            </div>
                            <div className="text-sm text-muted-foreground transition-all duration-300 group-hover:text-cyan-400">
                              {experience.startDate} - {experience.endDate}
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-bold mb-2 transition-all duration-300 group-hover:text-cyan-400 group-hover:translate-x-2">
                            {experience.role}
                          </h3>
                          
                          <div className="flex items-center mb-6 transition-all duration-300 group-hover:translate-x-1">
                            <span className="text-muted-foreground group-hover:text-slate-300 transition-colors duration-300">
                              {experience.company}
                            </span>
                            <span className="mx-2 text-muted-foreground">•</span>
                            <span className="text-sm text-muted-foreground/70 group-hover:text-muted-foreground transition-colors duration-300">
                              {experience.location}
                            </span>
                          </div>

                          <ul className="list-disc pl-5 mb-6 space-y-2">
                            {experience.description.map((item, descIndex) => (
                              <li 
                                key={descIndex} 
                                className="text-muted-foreground transition-all duration-300 group-hover:text-slate-300 group-hover:translate-x-1"
                                style={{ transitionDelay: `${descIndex * 50}ms` }}
                              >
                                {item}
                              </li>
                            ))}
                          </ul>

                          <div className="flex flex-wrap gap-2">
                            {experience.skills.map((skill, skillIndex) => (
                              <Badge 
                                key={skillIndex} 
                                variant="outline" 
                                className="bg-cyan/5 border-cyan/20 transition-all duration-300 hover:bg-cyan/20 hover:border-cyan/40 hover:scale-110 hover:-translate-y-1 hover:shadow-md hover:shadow-cyan/30 cursor-pointer"
                                style={{ transitionDelay: `${skillIndex * 30}ms` }}
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ExperiencePage;