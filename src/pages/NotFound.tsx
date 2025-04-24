
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AlertCircle, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-dark-darker bg-mesh">
      <motion.div
        className="text-center max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="mx-auto w-20 h-20 rounded-full bg-cyan/10 flex items-center justify-center mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <AlertCircle className="h-10 w-10 text-cyan" />
        </motion.div>
        
        <h1 className="text-8xl font-bold text-gradient-cyan mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Oops! Page not found</p>
        
        <Button asChild>
          <Link to="/" className="inline-flex items-center">
            <Home className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </Button>
      </motion.div>
      
      <div className="fixed bottom-10 left-0 right-0 text-center text-muted-foreground text-sm">
        The page at <span className="text-cyan">{location.pathname}</span> does not exist.
      </div>
    </div>
  );
};

export default NotFound;
