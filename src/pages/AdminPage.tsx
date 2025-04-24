
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Activity,
  BarChart,
  BookOpen,
  Briefcase,
  FileText,
  LogOut,
  Settings,
  User,
  Users,
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Mock data for the dashboard
const trafficData = [
  { name: "Jan", visitors: 400, pageviews: 1200 },
  { name: "Feb", visitors: 300, pageviews: 900 },
  { name: "Mar", visitors: 500, pageviews: 1500 },
  { name: "Apr", visitors: 700, pageviews: 2100 },
  { name: "May", visitors: 600, pageviews: 1800 },
  { name: "Jun", visitors: 800, pageviews: 2400 },
  { name: "Jul", visitors: 1000, pageviews: 3000 },
];

const AdminPage = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" />;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 h-screen bg-sidebar fixed left-0 top-0 bottom-0 glass border-r border-cyan/20">
          <div className="p-6">
            <div className="flex items-center mb-8">
              <div className="h-10 w-10 rounded-full bg-cyan/20 flex items-center justify-center mr-3">
                <User className="h-5 w-5 text-cyan" />
              </div>
              <div>
                <h2 className="font-bold">{user?.name}</h2>
                <p className="text-xs text-muted-foreground">{user?.email}</p>
              </div>
            </div>

            <nav className="space-y-1">
              <Button variant="ghost" className="w-full justify-start" asChild>
                <div className="flex items-center text-cyan">
                  <BarChart className="h-4 w-4 mr-3" /> Dashboard
                </div>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-3" /> Profile
                </div>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <div className="flex items-center">
                  <Briefcase className="h-4 w-4 mr-3" /> Experience
                </div>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-3" /> Projects
                </div>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <div className="flex items-center">
                  <FileText className="h-4 w-4 mr-3" /> Blog Posts
                </div>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-3" /> Messages
                </div>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <div className="flex items-center">
                  <Settings className="h-4 w-4 mr-3" /> Settings
                </div>
              </Button>
            </nav>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <Button 
              variant="ghost" 
              className="w-full justify-start text-destructive hover:bg-destructive/10 hover:text-destructive"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4 mr-3" /> Logout
            </Button>
          </div>
        </div>

        {/* Main content */}
        <div className="ml-64 w-[calc(100%-16rem)] p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <Button 
              variant="outline" 
              className="border-cyan/20 hover:border-cyan"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4 mr-2" /> Logout
            </Button>
          </div>

          {/* Dashboard Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="glass border-cyan/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Visitors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end space-x-2">
                  <div className="text-3xl font-bold">4,300</div>
                  <div className="text-sm text-green-500">+12%</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass border-cyan/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Messages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end space-x-2">
                  <div className="text-3xl font-bold">24</div>
                  <div className="text-sm text-green-500">+3 new</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass border-cyan/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Active Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end space-x-2">
                  <div className="text-3xl font-bold">5</div>
                  <div className="text-sm text-muted-foreground">of 12 total</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Content Tabs */}
          <Tabs defaultValue="traffic">
            <TabsList className="mb-6">
              <TabsTrigger value="traffic">
                <Activity className="h-4 w-4 mr-2" /> Traffic
              </TabsTrigger>
              <TabsTrigger value="content">
                <FileText className="h-4 w-4 mr-2" /> Content
              </TabsTrigger>
              <TabsTrigger value="settings">
                <Settings className="h-4 w-4 mr-2" /> Settings
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="traffic" className="space-y-6">
              <Card className="glass border-cyan/20">
                <CardHeader>
                  <CardTitle>Website Traffic</CardTitle>
                  <CardDescription>
                    Overview of your website visitors and pageviews over time.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={trafficData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#2D3748" />
                        <XAxis dataKey="name" stroke="#718096" />
                        <YAxis stroke="#718096" />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: "#1A1F2C",
                            border: "1px solid rgba(0, 229, 229, 0.2)",
                            borderRadius: "8px"
                          }} 
                        />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="pageviews"
                          stroke="#00E5E5"
                          strokeWidth={2}
                          dot={{ r: 4, strokeWidth: 2 }}
                          activeDot={{ r: 6 }}
                        />
                        <Line
                          type="monotone"
                          dataKey="visitors"
                          stroke="#9B8DFF"
                          strokeWidth={2}
                          dot={{ r: 4, strokeWidth: 2 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="content" className="space-y-6">
              <Card className="glass border-cyan/20">
                <CardHeader>
                  <CardTitle>Content Management</CardTitle>
                  <CardDescription>
                    Manage your website content including projects, experience, and blog posts.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    This section will allow you to edit and update the content displayed on your portfolio website.
                  </p>
                  
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-start">
                      <BookOpen className="h-4 w-4 mr-2" /> Manage Projects
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Briefcase className="h-4 w-4 mr-2" /> Update Experience
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-2" /> Edit Blog Posts
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <User className="h-4 w-4 mr-2" /> Update Profile Information
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="settings" className="space-y-6">
              <Card className="glass border-cyan/20">
                <CardHeader>
                  <CardTitle>Website Settings</CardTitle>
                  <CardDescription>
                    Configure your website settings and preferences.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Adjust various settings to customize your portfolio website's appearance and functionality.
                  </p>
                  
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-start">
                      <Settings className="h-4 w-4 mr-2" /> General Settings
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <User className="h-4 w-4 mr-2" /> Account Settings
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Activity className="h-4 w-4 mr-2" /> SEO Settings
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
