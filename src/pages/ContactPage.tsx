
import { useEffect, useRef, useState } from "react";
import Layout from "@/components/Layout";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import gsap from "gsap";
import { toast } from "sonner";
import { Mail, MapPin, Phone } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const ContactPage = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log(values);
    toast.success("Message sent successfully! I'll get back to you soon.");
    
    form.reset();
    setIsSubmitting(false);
  };

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

    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
        }
      );
    }

    if (infoRef.current) {
      gsap.fromTo(
        infoRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 0.5,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <Layout>
      <div className="min-h-screen w-full pb-20">
        <div className="container mx-auto px-4 py-16">
          <div ref={headingRef}>
            <h1 className="text-5xl font-bold mb-2 text-gradient-cyan">Contact</h1>
            <h2 className="text-3xl text-muted-foreground mb-12">Contact</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div ref={formRef} className="glass p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
              <p className="text-muted-foreground mb-8">
                Want to work together? I'm looking for work in software engineering in tech, medical, or fintech fields. Let's connect!
              </p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Mustapha MOUTAKI" {...field} className="bg-dark border-cyan/20 focus:border-cyan" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="mustaphaamoutaki@gmail.com" {...field} className="bg-dark border-cyan/20 focus:border-cyan" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell me about your project or inquiry..." 
                            className="min-h-32 bg-dark border-cyan/20 focus:border-cyan" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan to-cyan-dark hover:from-cyan-light hover:to-cyan text-primary-foreground"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>

            <div ref={infoRef} className="flex flex-col justify-between">
              <div className="glass p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-cyan mr-4 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Email</h4>
                      <p className="text-muted-foreground">mustaphaamoutaki@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-cyan mr-4 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Phone</h4>
                      <p className="text-muted-foreground">+212 (650) 744-504</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-cyan mr-4 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Location</h4>
                      <p className="text-muted-foreground">07-Lhed,Youssoufia, morocco</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6">Connect</h3>
                <p className="text-muted-foreground mb-6">
                  Follow me on social media or check out my work on GitHub.
                </p>
                
                <div className="grid grid-cols-3 gap-4">
                  <Button variant="outline" className="border-cyan/20 hover:bg-cyan/10 w-full">
                    GitHub
                  </Button>
                  <Button variant="outline" className="border-cyan/20 hover:bg-cyan/10 w-full">
                    LinkedIn
                  </Button>
                  <Button variant="outline" className="border-cyan/20 hover:bg-cyan/10 w-full">
                    Twitter
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
