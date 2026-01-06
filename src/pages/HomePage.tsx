import { useEffect, useRef } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const subHeadingRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

 
  useEffect(() => {
    const tl = gsap.timeline();

    if (
      headingRef.current &&
      subHeadingRef.current &&
      scrollIndicatorRef.current
    ) {
      tl.fromTo(
        headingRef.current.children,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, ease: "power3.out", duration: 1 },
      )
        .fromTo(
          subHeadingRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, ease: "power3.out", duration: 0.8 },
          "-=0.4",
        )
        .fromTo(
          scrollIndicatorRef.current,
          { y: -10, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "power3.out",
            duration: 0.5,
            yoyo: true,
            repeat: -1,
            repeatDelay: 0.5,
          },
          "-=0.2",
        );
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <Layout>
      <div className="min-h-screen w-full relative flex flex-col justify-center items-center px-4 md:px-10 lg:px-20">
        <motion.div
          className="absolute top-10 right-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Button
            asChild
            variant="ghost"
            className="border border-cyan/20 hover:bg-cyan/10"
          >
            <Link to="/contact">
              Contact <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="max-w-4xl mx-auto text-center">
          <div
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-7xl font-mono font-bold mb-6 overflow-hidden"
          >
            <div className="inline-block overflow-hidden">
              <span className="inline-block">I'M</span>
            </div>{" "}
            <div className="inline-block overflow-hidden">
              <span className="inline-block">Mustapha</span>
            </div>{" "}
            <div className="inline-block overflow-hidden">
              <span className="inline-block">MOUTAKI</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-gradient-cyan text-5xl md:text-6xl lg:text-8xl font-bold mb-2">
              Developer
            </div>
          </div>

          <div
            ref={subHeadingRef}
            className="mt-12 max-w-lg mx-auto text-lg text-muted-foreground"
          >
            Building innovative digital experiences with creativity and
            technical excellence.
          </div>
        </div>

        <div
          ref={scrollIndicatorRef}
          className="absolute bottom-10 flex flex-col items-center"
        >
          <div className="text-muted-foreground text-sm mb-2">
            Scroll to explore
          </div>
          <div className="h-16 w-px bg-gradient-to-b from-transparent via-cyan to-transparent"></div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
