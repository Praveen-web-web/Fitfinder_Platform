import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { GraduationCap, Building2, Shield, ArrowRight, Sparkles } from 'lucide-react';

export function LoginPage({ onNavigate }) {
  const [studentEmail, setStudentEmail] = useState('');
  const [studentPassword, setStudentPassword] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyPassword, setCompanyPassword] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');

  const handleStudentLogin = (e) => {
    e.preventDefault();
    console.log('Student Login:', { studentEmail, studentPassword });
  };

  const handleCompanyLogin = (e) => {
    e.preventDefault();
    console.log('Company Login:', { companyEmail, companyPassword });
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    console.log('Admin Login:', { adminEmail, adminPassword });
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] py-8 md:py-12 lg:py-16 relative overflow-hidden">
      
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto">

          {/* Header */}
          <div className="text-center mb-6 md:mb-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 
              rounded-full border border-primary/20 mb-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary">Secure Login</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl 
              bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Welcome Back
            </h1>

            <p className="text-muted-foreground text-sm sm:text-base">
              Sign in to your account to continue
            </p>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="student" className="w-full">
            
            <TabsList className="grid w-full grid-cols-2 p-1 bg-muted/50 h-auto">
              
              <TabsTrigger
                value="student"
                className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 py-2 sm:py-3 
                data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary 
                data-[state=active]:to-primary/90 data-[state=active]:text-white"
              >
                <GraduationCap className="h-4 w-4" />
                <span className="text-xs sm:text-sm">Student</span>
              </TabsTrigger>

              <TabsTrigger
                value="company"
                className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 py-2 sm:py-3 
                data-[state=active]:bg-gradient-to-r data-[state=active]:from-accent 
                data-[state=active]:to-accent/90 data-[state=active]:text-white"
              >
                <Building2 className="h-4 w-4" />
                <span className="text-xs sm:text-sm">Company</span>
              </TabsTrigger>

            </TabsList>

            {/* Student Login */}
            <TabsContent value="student" className="mt-6">
              <Card className="border-2 shadow-xl">

                <CardHeader className="space-y-2 pb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl 
                    flex items-center justify-center mb-2">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>

                  <CardTitle className="text-xl sm:text-2xl">Student Login</CardTitle>
                  <CardDescription className="text-sm">
                    Access your dashboard and view your test results
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <form onSubmit={handleStudentLogin} className="space-y-4">

                    <div className="space-y-2">
                      <Label htmlFor="student-email">Email</Label>
                      <Input
                        id="student-email"
                        type="email"
                        placeholder="student@example.com"
                        value={studentEmail}
                        onChange={(e) => setStudentEmail(e.target.value)}
                        className="h-11"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="student-password">Password</Label>
                      <Input
                        id="student-password"
                        type="password"
                        placeholder="••••••••"
                        value={studentPassword}
                        onChange={(e) => setStudentPassword(e.target.value)}
                        className="h-11"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full h-11 bg-gradient-to-r from-primary to-primary/90 hover:opacity-90 shadow-lg"
                    >
                      Sign In
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>

                    <p className="text-sm text-center text-muted-foreground pt-2">
                      Don't have an account?{' '}
                      <button
                        type="button"
                        onClick={() => onNavigate('register')}
                        className="text-primary hover:underline"
                      >
                        Register here
                      </button>
                    </p>

                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Company Login */}
            <TabsContent value="company" className="mt-6">
              <Card className="border-2 shadow-xl">

                <CardHeader className="space-y-2 pb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/70 rounded-xl 
                    flex items-center justify-center mb-2">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>

                  <CardTitle className="text-xl sm:text-2xl">Company Login</CardTitle>
                  <CardDescription className="text-sm">
                    Access candidate reports and manage your recruitment
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <form onSubmit={handleCompanyLogin} className="space-y-4">

                    <div className="space-y-2">
                      <Label htmlFor="company-email">Email</Label>
                      <Input
                        id="company-email"
                        type="email"
                        placeholder="company@example.com"
                        value={companyEmail}
                        onChange={(e) => setCompanyEmail(e.target.value)}
                        className="h-11"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company-password">Password</Label>
                      <Input
                        id="company-password"
                        type="password"
                        placeholder="••••••••"
                        value={companyPassword}
                        onChange={(e) => setCompanyPassword(e.target.value)}
                        className="h-11"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full h-11 bg-gradient-to-r from-accent to-accent/90 hover:opacity-90 shadow-lg"
                    >
                      Sign In
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>

                    <p className="text-sm text-center text-muted-foreground pt-2">
                      Don't have an account?{' '}
                      <button
                        type="button"
                        onClick={() => onNavigate('register')}
                        className="text-accent hover:underline"
                      >
                        Register here
                      </button>
                    </p>

                  </form>
                </CardContent>

              </Card>
            </TabsContent>

            {/* Admin Login */}
            <TabsContent value="admin" className="mt-6">
              <Card className="border-2 shadow-xl">

                <CardHeader className="space-y-2 pb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/70 rounded-xl 
                    flex items-center justify-center mb-2">
                    <Shield className="h-6 w-6 text-white" />
                  </div>

                  <CardTitle className="text-xl sm:text-2xl">Admin Login</CardTitle>
                  <CardDescription className="text-sm">
                    Access the admin panel to manage the platform
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <form onSubmit={handleAdminLogin} className="space-y-4">

                    <div className="space-y-2">
                      <Label htmlFor="admin-email">Email</Label>
                      <Input
                        id="admin-email"
                        type="email"
                        placeholder="admin@example.com"
                        value={adminEmail}
                        onChange={(e) => setAdminEmail(e.target.value)}
                        className="h-11"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="admin-password">Password</Label>
                      <Input
                        id="admin-password"
                        type="password"
                        placeholder="••••••••"
                        value={adminPassword}
                        onChange={(e) => setAdminPassword(e.target.value)}
                        className="h-11"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full h-11 bg-gradient-to-r from-secondary to-secondary/90 hover:opacity-90 shadow-lg"
                    >
                      Sign In
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>

                  </form>
                </CardContent>

              </Card>
            </TabsContent>

          </Tabs>

        </div>
      </div>
    </div>
  );
}
