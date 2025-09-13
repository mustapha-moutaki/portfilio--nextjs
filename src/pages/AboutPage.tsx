import { useEffect, useRef } from "react";
import Layout from "@/components/Layout";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  years: string;
}

interface Achievement {
  title: string;
  description: string;
  date: string;
  organization: string;
}

const AboutPage = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);

  const education: Education[] = [
    {
      id: "01",
      school: "YOUCODE | UM6P | Youssoufia",
      degree: "Full-Stack Development Program",
      field: "Web Development",
      years: "Oct 2022 – May 2023",
    },
    {
      id: "02",
      school: "Ibn Zohr University | Agadir",
      degree: "Physics — Electronics and Systems",
      field: "Undergraduate Studies (Bac +1)",
      years: "Aug 2022 – May 2023",
    },
    {
      id: "03",
      school: "Idriss The Second High School | Tafraout",
      degree: "Bachelor of Science",
      field: "Physics and Chemistry",
      years: "Aug 2021 – July 2022",
    },
  ];

  const achievements: Achievement[] = [
    {
      // id: "401",
      title: " Meta Back-End Developer",
      description:
        " This 9-course program prepares learners for an entry-level career as a back-end developer.",
      date: "2025",
      organization: "Meta",
    },
    {
      // id: "401",
      title: "Front-End Development",
      description:
        "Completed a front-end development course focused on web fundamentals and modern UI techniques.",
      date: "2024",
      organization: "Great Learning",
    },
    {
      // id: "02",
      title: "PHP for Beginners",
      description:
        "Learned the fundamentals of PHP and applied them in web development projects.",
      date: "2024",
      organization: "Scrum Learning Society",
    },
    {
      // id: "03",
      title: "Advanced Google Analytics",
      description:
        "Gained expertise in using Google Analytics for web performance tracking and decision-making.",
      date: "2022",
      organization: "Google Analytics",
    },
    {
      // id: "04",
      title: "Career Development in English",
      description:
        "Focused on communication skills and career preparation in a professional English-speaking environment.",
      date: "2022",
      organization: "Open MOOCs USA",
    },
  ];

  useEffect(() => {
    if (headingRef.current && contentRef.current) {
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

    if (educationRef.current) {
      gsap.fromTo(
        educationRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: educationRef.current,
            start: "top 80%",
          },
        }
      );
    }

    if (achievementsRef.current) {
      gsap.fromTo(
        achievementsRef.current.children,
        { y: 50, opacity: 1 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: achievementsRef.current,
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
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <div ref={headingRef}>
                <h1 className="text-5xl font-bold mb-2 text-gradient-cyan">
                  About
                </h1>
                <h2 className="text-3xl text-muted-foreground mb-6">About</h2>
              </div>

              <div className="mb-8">
                <div className="glass w-full aspect-square relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan/30 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-8xl text-muted-foreground/20 font-mono">
                 <img src="/public/images/mustapha.webp" alt="profile picture" />
                 {/* <input type="file" src="/public/MustaphaResumeEng.pdf" /> */}
                 {/* <iframe src="/public/MustaphaResumeEng.pdf" width="200%" height="100%"></iframe> */}
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <Button asChild variant="outline" className="w-full">
                  <Link to="/resume">
                    <Download className="mr-2 h-4 w-4" /> Full Resume
                  </Link>
                </Button>
              </div>
            </div>

            <div className="lg:w-2/3">
              <div
                ref={contentRef}
                className="prose prose-invert max-w-none mb-16"
              >
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm Mustapha MOUTAKI, a passionate Full Stack Developer with
                  1.5 years of experience in building smart, scalable digital
                  solutions. Specializing in React, PHP, and modern web
                  technologies, I blend technical precision with a strong sense
                  of design to craft seamless and performance-driven user
                  experiences.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  With a strong foundation in computer science and physics, I
                  approach software development with both analytical depth and
                  creative problem-solving. I take pride in writing clean,
                  maintainable code that solves real-world challenges
                  efficiently and effectively.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  I'm also committed to continuous learning and always exploring
                  emerging technologies that push the boundaries of what's
                  possible in web development. Every project I take on is an
                  opportunity to grow, innovate, and create meaningful digital
                  experiences.
                </p>
              </div>

              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-8 text-gradient-cyan">
                  Education
                </h3>
                <div ref={educationRef} className="space-y-6">
                  {education.map((item) => (
                    <Card key={item.id} className="glass border-cyan/10">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="text-sm text-cyan">{item.id}</div>
                          <div className="text-sm text-muted-foreground">
                            {item.years}
                          </div>
                        </div>
                        <h4 className="text-xl font-mono font-bold mb-1">
                          {item.school}
                        </h4>
                        <p className="text-muted-foreground">{item.degree}</p>
                        <p className="text-sm text-muted-foreground/70">
                          {item.field}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-8 text-gradient-cyan">
                  Achievements & Certifications
                </h3>
                <div ref={achievementsRef} className="space-y-6">
                  {achievements.map((item, index) => (
                    <Card key={index} className="glass border-cyan/10">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="text-sm text-cyan">{index+1}</div>
                          <div className="text-sm text-muted-foreground">
                            {item.date}
                          </div>
                        </div>
                        <h4 className="text-xl font-mono font-bold mb-1">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground mb-2">
                          {item.description}
                        </p>
                        <p className="text-sm text-muted-foreground/70">
                          {item.organization}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
