import { useEffect, useRef } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import gsap from "gsap";
import { Download, Mail, Phone, Github, Linkedin, Globe } from "lucide-react";

const ResumePage = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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

    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <Layout>
      <div className="min-h-screen w-full pb-20">
        <div className="container mx-auto px-4 py-16">
          <div ref={headingRef} className="flex justify-between items-center mb-12 flex-wrap gap-4">
            <div>
              <h1 className="text-5xl font-bold mb-2 text-gradient-cyan">Resume</h1>
              <h2 className="text-3xl text-muted-foreground">Professional Profile</h2>
            </div>
            <div className="flex gap-3">
              <a href="/public/MustaphaResumeEng.pdf" download="Mustapha_Moutaki_Resume_EN.pdf" style={{textDecoration: 'none'}}>
                <Button variant="outline" className="border-cyan/20 hover:bg-cyan/10 hover:border-cyan/40 transition-all duration-300">
                  <Download className="mr-2 h-4 w-4" /> Download EN
                </Button>
              </a>
              <a href="/public/MustaphaResumeFr.pdf" download="Mustapha_Moutaki_Resume_FR.pdf" style={{textDecoration: 'none'}}>
                <Button variant="outline" className="border-cyan/20 hover:bg-cyan/10 hover:border-cyan/40 transition-all duration-300">
                  <Download className="mr-2 h-4 w-4" /> Download FR
                </Button>
              </a>
            </div>
          </div>

          <div ref={contentRef} className="glass p-8 rounded-xl">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Header Section */}
              <section className="border-b border-cyan/10 pb-8">
                <h2 className="text-4xl font-bold mb-3 text-gradient-cyan">MUSTAPHA MOUTAKI</h2>
                <p className="text-2xl font-semibold text-muted-foreground mb-6">Full-Stack Developer | Java & Angular Specialist</p>
                
                {/* Contact Info */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <a href="tel:+212650744504" className="flex items-center gap-2 text-muted-foreground hover:text-cyan transition-colors">
                    <Phone className="h-4 w-4" />
                    <span>+212 650 744 504</span>
                  </a>
                  <a href="mailto:mustaphaamoutaki@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-cyan transition-colors">
                    <Mail className="h-4 w-4" />
                    <span>mustaphaamoutaki@gmail.com</span>
                  </a>
                  <a href="https://github.com/mustapha-moutaki" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-cyan transition-colors">
                    <Github className="h-4 w-4" />
                    <span>github.com/mustapha-moutaki</span>
                  </a>
                  <a href="https://linkedin.com/in/mustapha-moutaki" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-cyan transition-colors">
                    <Linkedin className="h-4 w-4" />
                    <span>linkedin.com/in/mustapha-moutaki</span>
                  </a>
                </div>

                {/* Professional Summary */}
                <div className="bg-cyan/5 border border-cyan/10 rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-3 text-cyan">Professional Summary</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Passionate Full-Stack Developer specialized in building scalable and high-performance web applications with strong attention to code quality, maintainability, and continuous improvement. Experienced in Java/Spring Boot backend development and Angular/React frontend frameworks. Seeking opportunities to contribute to innovative and impactful technology projects.
                  </p>
                </div>
              </section>

              {/* Technical Skills */}
              <section>
                <h3 className="text-2xl font-bold mb-6 text-gradient-cyan">Technical Skills</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="glass p-5 rounded-lg border border-cyan/10">
                    <h4 className="font-bold mb-3 text-cyan flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-cyan"></span>
                      Front-end
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["Angular", "TypeScript", "RxJS", "React", "Next.js", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"].map((skill) => (
                        <Badge key={skill} variant="outline" className="bg-cyan/5 border-cyan/20">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="glass p-5 rounded-lg border border-cyan/10">
                    <h4 className="font-bold mb-3 text-cyan flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-cyan"></span>
                      Back-end
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["Java", "JEE", "Spring Boot", "Spring MVC", "Spring Data JPA", "Hibernate", "Spring Security", "PHP", "Laravel"].map((skill) => (
                        <Badge key={skill} variant="outline" className="bg-cyan/5 border-cyan/20">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="glass p-5 rounded-lg border border-cyan/10">
                    <h4 className="font-bold mb-3 text-cyan flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-cyan"></span>
                      APIs & Architecture
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["RESTful APIs", "GraphQL", "MVC", "JWT Authentication", "Swagger/OpenAPI"].map((skill) => (
                        <Badge key={skill} variant="outline" className="bg-cyan/5 border-cyan/20">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="glass p-5 rounded-lg border border-cyan/10">
                    <h4 className="font-bold mb-3 text-cyan flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-cyan"></span>
                      Databases
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["MySQL", "PostgreSQL", "MongoDB", "H2"].map((skill) => (
                        <Badge key={skill} variant="outline" className="bg-cyan/5 border-cyan/20">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="glass p-5 rounded-lg border border-cyan/10">
                    <h4 className="font-bold mb-3 text-cyan flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-cyan"></span>
                      DevOps & Cloud
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["Docker", "Jenkins", "GitHub Actions", "CI/CD", "Grafana", "ELK Stack"].map((skill) => (
                        <Badge key={skill} variant="outline" className="bg-cyan/5 border-cyan/20">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="glass p-5 rounded-lg border border-cyan/10">
                    <h4 className="font-bold mb-3 text-cyan flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-cyan"></span>
                      Testing & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["JUnit 5", "Mockito", "Jasmine", "Maven", "Git", "Postman", "Jira", "Figma", "UML"].map((skill) => (
                        <Badge key={skill} variant="outline" className="bg-cyan/5 border-cyan/20">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="glass p-5 rounded-lg border border-cyan/10">
                    <h4 className="font-bold mb-3 text-cyan flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-cyan"></span>
                      Security
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["Spring Security", "JWT", "CSRF/XSS Protection"].map((skill) => (
                        <Badge key={skill} variant="outline" className="bg-cyan/5 border-cyan/20">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="glass p-5 rounded-lg border border-cyan/10">
                    <h4 className="font-bold mb-3 text-cyan flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-cyan"></span>
                      Methodologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["Agile", "Scrum", "Kanban"].map((skill) => (
                        <Badge key={skill} variant="outline" className="bg-cyan/5 border-cyan/20">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Professional Experience */}
              <section>
                <h3 className="text-2xl font-bold mb-6 text-gradient-cyan">Professional Experience</h3>
                <div className="space-y-6">
                  <div className="glass p-6 rounded-lg border border-cyan/10 hover:border-cyan/30 transition-all duration-300">
                    <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                      <div>
                        <h4 className="font-bold text-lg">Full-Stack Developer</h4>
                        <p className="text-cyan font-medium">Digital Partnership Group</p>
                        <p className="text-sm text-muted-foreground">Casablanca, Morocco</p>
                      </div>
                      <Badge className="bg-cyan/10 text-cyan border-cyan/30">May 2025 - July 2025</Badge>
                    </div>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                      <li>Developed full-stack web applications using PHP/Laravel, Next.js, and React following Agile methodologies</li>
                      <li>Designed secure RESTful APIs and optimized backend and frontend performance</li>
                      <li>Participated in the complete development and deployment cycle</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Key Projects */}
              <section>
                <h3 className="text-2xl font-bold mb-6 text-gradient-cyan">Key Projects</h3>
                <div className="space-y-6">
                  <div className="glass p-6 rounded-lg border border-cyan/10 hover:border-cyan/30 transition-all duration-300">
                    <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                      <h4 className="font-bold text-lg">SupplyChainX</h4>
                      <Badge className="bg-cyan/10 text-cyan border-cyan/30">Oct 2025 - Nov 2025</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Centralized backend system for managing and synchronizing key supply chain operations, from suppliers and raw materials to production and delivery.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Spring Boot", "PostgreSQL", "Docker", "REST API", "Swagger", "Postman"].map((tech) => (
                        <Badge key={tech} variant="outline" className="bg-cyan/5 border-cyan/20 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="glass p-6 rounded-lg border border-cyan/10 hover:border-cyan/30 transition-all duration-300">
                    <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                      <h4 className="font-bold text-lg">Client-Portal Mini ERP</h4>
                      <Badge className="bg-cyan/10 text-cyan border-cyan/30">Dec 2025</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Management of leads, clients, products, and claims with secure authentication and user role management.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Java", "Spring Boot", "React", "Next.js", "JWT", "PostgreSQL", "Docker"].map((tech) => (
                        <Badge key={tech} variant="outline" className="bg-cyan/5 border-cyan/20 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="glass p-6 rounded-lg border border-cyan/10 hover:border-cyan/30 transition-all duration-300">
                    <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                      <h4 className="font-bold text-lg">MedManager</h4>
                      <Badge className="bg-cyan/10 text-cyan border-cyan/30">Feb 2025 - Apr 2025</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Medical management web application for medications and patients with scheduling and reminders. Secure health data management with intuitive user interface.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["PHP", "Laravel", "MySQL", "Blade", "Healthcare"].map((tech) => (
                        <Badge key={tech} variant="outline" className="bg-cyan/5 border-cyan/20 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="glass p-6 rounded-lg border border-cyan/10 hover:border-cyan/30 transition-all duration-300">
                    <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                      <h4 className="font-bold text-lg">Recar.ma</h4>
                      <Badge className="bg-cyan/10 text-cyan border-cyan/30">May 2025 - July 2025</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Real internship project: web application for car reservation and management. Developed with React and Next.js, RESTful API integration, and interactive dashboards.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Next.js", "REST API", "Interactive Dashboards"].map((tech) => (
                        <Badge key={tech} variant="outline" className="bg-cyan/5 border-cyan/20 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Education */}
              <section>
                <h3 className="text-2xl font-bold mb-6 text-gradient-cyan">Education</h3>
                <div className="space-y-4">
                  <div className="glass p-5 rounded-lg border border-cyan/10">
                    <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                      <div>
                        <h4 className="font-bold">Full-Stack Developer Training</h4>
                        <p className="text-cyan">YOUCODE | UM6P</p>
                        <p className="text-sm text-muted-foreground">Youssoufia, Morocco</p>
                      </div>
                      <Badge variant="outline" className="bg-cyan/5 border-cyan/20">Oct 2024 - Present</Badge>
                    </div>
                  </div>

                  <div className="glass p-5 rounded-lg border border-cyan/10">
                    <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                      <div>
                        <h4 className="font-bold">Physics — Electronics and Systems (Bac +1)</h4>
                        <p className="text-cyan">Ibn Zohr University</p>
                        <p className="text-sm text-muted-foreground">Agadir, Morocco</p>
                      </div>
                      <Badge variant="outline" className="bg-cyan/5 border-cyan/20">Aug 2023 - May 2024</Badge>
                    </div>
                  </div>

                  <div className="glass p-5 rounded-lg border border-cyan/10">
                    <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                      <div>
                        <h4 className="font-bold">Bachelor of Science in Physics and Chemistry</h4>
                        <p className="text-cyan">Idriss II High School</p>
                        <p className="text-sm text-muted-foreground">Tafraout, Morocco</p>
                      </div>
                      <Badge variant="outline" className="bg-cyan/5 border-cyan/20">Aug 2022 - May 2023</Badge>
                    </div>
                  </div>
                </div>
              </section>

              {/* Certifications */}
              <section>
                <h3 className="text-2xl font-bold mb-6 text-gradient-cyan">Certifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="glass p-4 rounded-lg border border-cyan/10 hover:border-cyan/30 transition-all duration-300">
                    <h4 className="font-bold mb-1">Meta Back-End Developer Specialization</h4>
                    <p className="text-sm text-cyan mb-1">Meta</p>
                    <p className="text-xs text-muted-foreground">May 15, 2025 - June 12, 2025</p>
                  </div>

                  <div className="glass p-4 rounded-lg border border-cyan/10 hover:border-cyan/30 transition-all duration-300">
                    <h4 className="font-bold mb-1">Front-End Development</h4>
                    <p className="text-sm text-cyan mb-1">Great Learning</p>
                    <p className="text-xs text-muted-foreground">Oct 22, 2024 - Oct 23, 2025</p>
                  </div>

                  <div className="glass p-4 rounded-lg border border-cyan/10 hover:border-cyan/30 transition-all duration-300">
                    <h4 className="font-bold mb-1">PHP for Beginners</h4>
                    <p className="text-sm text-cyan mb-1">Scrum Learning Society</p>
                    <p className="text-xs text-muted-foreground">Nov 2, 2024 - Nov 3, 2024</p>
                  </div>

                  <div className="glass p-4 rounded-lg border border-cyan/10 hover:border-cyan/30 transition-all duration-300">
                    <h4 className="font-bold mb-1">Career Development in English</h4>
                    <p className="text-sm text-cyan mb-1">Open MOOCs USA</p>
                    <p className="text-xs text-muted-foreground">Sept 22, 2022</p>
                  </div>
                </div>
              </section>

              {/* Languages & Soft Skills */}
              <section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gradient-cyan">Languages</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">English</span>
                        <Badge variant="outline" className="bg-cyan/5 border-cyan/20">B1</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">French</span>
                        <Badge variant="outline" className="bg-cyan/5 border-cyan/20">A2</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Arabic & Tamazight</span>
                        <Badge variant="outline" className="bg-cyan/5 border-cyan/20">Native (C2)</Badge>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gradient-cyan">Soft Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Problem Solving",
                        "Teamwork",
                        "Effective Communication",
                        "Time Management",
                        "Adaptability",
                        "Continuous Learning"
                      ].map((skill) => (
                        <Badge key={skill} variant="outline" className="bg-cyan/5 border-cyan/20">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResumePage;