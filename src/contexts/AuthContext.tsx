
import { createContext, useContext, useState, useEffect } from "react";

interface User {
  id: string;
  email: string;
  name: string;
  role: "admin";
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // For demo purposes, we'll use a mock login
    // In production, this would call an API endpoint
    if (email === "admin@mustapha.com" && password === "password") {
      const mockUser = {
        id: "1",
        email: "aadmin@mustapha.com",
        name: "Admin User",
        role: "admin" as const,
      };
  

      setUser(mockUser);
      localStorage.setItem("user", JSON.stringify(mockUser));
      return Promise.resolve();
    } else {
      return Promise.reject(new Error("Invalid credentials"));
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  
  const value = {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
