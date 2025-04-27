
import { useEffect, useRef } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { Download } from "lucide-react";
import Link from "next/link";
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
            <a href=".//public/MustaphaResumeFr.pdf" download="Mustapha_Moutaki_Resume.pdf" style={{textDecoration: 'none'}}>
  <Button variant="outline" className="border-cyan/20 hover:bg-cyan/10">
    <Download className="mr-2 h-4 w-4" /> Download PDF
  </Button>
</a>
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
        <h4 className="font-bold">Full-Stack Developer</h4>
        <p className="text-sm text-cyan">Oct 2024 - Present</p>
      </div>
      <p className="text-muted-foreground/80 mb-2">YOUCODE | UM6P | Youssoufia</p>
      <ul className="list-disc list-inside text-muted-foreground space-y-1">
        <li>Designed and implemented course catalog, search features, and role management for students and teachers</li>
        <li>Created tools for teachers to add, manage, and track courses, with statistics and notifications</li>
        <li>Developed an admin panel for user management, content control, and global course statistics</li>
      </ul>
    </div>

    <div>
      <div className="flex justify-between items-start mb-1 flex-wrap gap-2">
        <h4 className="font-bold">PHP Developer - Eventhub Project</h4>
        <p className="text-sm text-cyan">Dec 2024 - Jan 2025</p>
      </div>
      <p className="text-muted-foreground/80 mb-2">Personal Project</p>
      <ul className="list-disc list-inside text-muted-foreground space-y-1">
        <li>Developed an Event Management System (Eventbrite clone) using PHP MVC, PostgreSQL, and AJAX</li>
        <li>Implemented secure authentication, role-based access control, and real-time dashboards</li>
        <li>Ensured security with CSRF, XSS, and SQL injection protection</li>
      </ul>
    </div>

    <div>
      <div className="flex justify-between items-start mb-1 flex-wrap gap-2">
        <h4 className="font-bold">Frontend Developer - Task Management App</h4>
        <p className="text-sm text-cyan">Aug 2023 - May 2024</p>
      </div>
      <p className="text-muted-foreground/80 mb-2">Academic Project</p>
      <ul className="list-disc list-inside text-muted-foreground space-y-1">
        <li>Developed task creation and management with dynamic status updates</li>
        <li>Added filtering options to sort tasks by status and criteria</li>
        <li>Integrated local storage for task persistence and implemented drag-and-drop functionality</li>
      </ul>
    </div>
  </div>
</section>

<section>
  <h3 className="text-2xl font-bold mb-4">Education</h3>
  <div className="space-y-4">
    <div>
      <div className="flex justify-between items-start mb-1">
        <h4 className="font-bold">YOUCODE | UM6P</h4>
        <p className="text-sm text-cyan">2022 - 2023</p>
      </div>
      <p className="text-muted-foreground">Full-stack Developer Training, Youssoufia</p>
    </div>

    <div>
      <div className="flex justify-between items-start mb-1">
        <h4 className="font-bold">IBN ZOHR UNIVERSITY</h4>
        <p className="text-sm text-cyan">2023 - 2024</p>
      </div>
      <p className="text-muted-foreground">Physics — Electronics and Systems, Agadir</p>
    </div>

    <div>
      <div className="flex justify-between items-start mb-1">
        <h4 className="font-bold">IDRISS THE SECOND HIGH SCHOOL</h4>
        <p className="text-sm text-cyan">Before 2022</p>
      </div>
      <p className="text-muted-foreground">Bachelor of Science in Physics and Chemistry, Tafraout</p>
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
