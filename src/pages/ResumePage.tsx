
import { useEffect, useRef } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { Download } from "lucide-react";

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
              <h2 className="text-3xl text-muted-foreground">Resume</h2>
            </div>
            <Button variant="outline" className="border-cyan/20 hover:bg-cyan/10">
              <Download className="mr-2 h-4 w-4" /> Download PDF
            </Button>
          </div>

          <div ref={contentRef} className="glass p-8 rounded-xl">
            <div className="max-w-4xl mx-auto space-y-12">
              <section>
                <h2 className="text-3xl font-bold mb-6 text-gradient-cyan">Mustapha MOUTAKI</h2>
                <p className="text-xl text-muted-foreground mb-4">Full Stack Developer</p>
                <p className="text-muted-foreground">
                Experienced software engineer with a strong background in web development, 
                  specializing in modern JavaScript frameworks and backend technologies. 
                  Passionate about creating elegant, efficient, and user-friendly applications.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-bold mb-4">Skills</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  <div>
                    <h4 className="font-bold mb-2 text-cyan">Frontend</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>React, Next.js <s>Vue.js</s></li>
                  <li><s>TypeScript/JavaScript</s></li>
                    <li>HTML5/CSS3, <s>SASS</s> Tailwind</li>
                    <li><s>Redux</s> Context API</li>
                    <li>GraphQL <s>REST API integration</s></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-cyan">Backend</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li><s>Node.js, Express</s></li>
                      
                      <li>SQL  databases</li>
                      <li>RESTful API design</li>
                      <li>Authentication & Authorization</li>
                    </ul>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mt-4">
                  <div>
                    <h4 className="font-bold mb-2 text-cyan">DevOps & Tools</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Git, CI/CD pipelines</li>
                      <li>Docker, Kubernetes</li>
                      <li>AWS, Azure, Vercel</li>
                      <li>Testing (Jest, Cypress)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-cyan">Other Skills</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Agile/Scrum methodology</li>
                      <li>UI/UX design principles</li>
                      <li>Performance optimization</li>
                      <li>Technical documentation</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-bold mb-4">Experience</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-start mb-1 flex-wrap gap-2">
                      <h4 className="font-bold">Lead Web Developer</h4>
                      <p className="text-sm text-cyan">Jan 2021 - Present</p>
                    </div>
                    <p className="text-muted-foreground/80 mb-2">ACME Technologies, New York, NY</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Lead a team of 5 developers to build scalable web applications</li>
                      <li>Implemented CI/CD pipelines that reduced deployment time by 40%</li>
                      <li>Architected microservices that improved system reliability</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-start mb-1 flex-wrap gap-2">
                      <h4 className="font-bold">Full Stack Developer</h4>
                      <p className="text-sm text-cyan">Mar 2018 - Dec 2020</p>
                    </div>
                    <p className="text-muted-foreground/80 mb-2">TechStart Inc., Boston, MA</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Developed and maintained multiple client-facing applications</li>
                      <li>Optimized database queries that improved performance by 35%</li>
                      <li>Implemented responsive designs that enhanced mobile user experience</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-start mb-1 flex-wrap gap-2">
                      <h4 className="font-bold">Frontend Developer</h4>
                      <p className="text-sm text-cyan">Jun 2016 - Feb 2018</p>
                    </div>
                    <p className="text-muted-foreground/80 mb-2">WebDev Solutions, Seattle, WA</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Built interactive UI components using React and Redux</li>
                      <li>Collaborated with designers to implement pixel-perfect layouts</li>
                      <li>Reduced bundle size by 30% through code splitting techniques</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-bold mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold">UNIVERSITY OF DELAWARE</h4>
                      <p className="text-sm text-cyan">2020 - 2024</p>
                    </div>
                    <p className="text-muted-foreground">Master's Degree, Computer Science</p>
                  </div>

                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold">R.V. COLLEGE OF ENGINEERING</h4>
                      <p className="text-sm text-cyan">2016 - 2020</p>
                    </div>
                    <p className="text-muted-foreground">Bachelor's Degree, Software Engineering</p>
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
