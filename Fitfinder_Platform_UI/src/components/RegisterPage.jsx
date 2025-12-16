import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { GraduationCap, Building2, ArrowRight, Sparkles } from 'lucide-react';

export function RegisterPage({ onNavigate }) {
  const [studentData, setStudentData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const [companyData, setCompanyData] = useState({
    companyName: '',
    email: '',
    phone: '',
    industry: '',
    password: '',
    confirmPassword: ''
  });

  const handleStudentRegister = (e) => {
    e.preventDefault();
    console.log('Student Registration:', studentData);
  };

  const handleCompanyRegister = (e) => {
    e.preventDefault();
    console.log('Company Registration:', companyData);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] py-8 md:py-12 lg:py-16 relative overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="text-center mb-6 md:mb-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 
              rounded-full border border-primary/20 mb-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary">Join FitFinder Today</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl 
              bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Create Your Account
            </h1>

            <p className="text-muted-foreground text-sm sm:text-base">
              Join our platform and start your journey
            </p>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="student" className="w-full">

            <TabsList className="grid w-full grid-cols-2 p-1 bg-muted/50 h-auto">

              {/* Student Tab */}
              <TabsTrigger 
                value="student"
                className="flex items-center gap-2 py-3 
                data-[state=active]:bg-gradient-to-r 
                data-[state=active]:from-primary 
                data-[state=active]:to-primary/90 
                data-[state=active]:text-white"
              >
                <GraduationCap className="h-4 w-4" />
                <span className="text-sm sm:text-base">Student</span>
              </TabsTrigger>

              {/* Company Tab */}
              <TabsTrigger 
                value="company"
                className="flex items-center gap-2 py-3 
                data-[state=active]:bg-gradient-to-r 
                data-[state=active]:from-accent 
                data-[state=active]:to-accent/90 
                data-[state=active]:text-white"
              >
                <Building2 className="h-4 w-4" />
                <span className="text-sm sm:text-base">Company</span>
              </TabsTrigger>

            </TabsList>

            {/* Student Registration */}
            <TabsContent value="student" className="mt-6">
              <Card className="border-2 shadow-xl">
                
                <CardHeader className="space-y-2 pb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 
                    rounded-xl flex items-center justify-center mb-2">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl">Student Registration</CardTitle>
                  <CardDescription className="text-sm">
                    Create an account to access tests and showcase your skills
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <form onSubmit={handleStudentRegister} className="space-y-4">

                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="student-name">Full Name</Label>
                      <Input
                        id="student-name"
                        type="text"
                        placeholder="John Doe"
                        value={studentData.name}
                        onChange={(e) => setStudentData({ ...studentData, name: e.target.value })}
                        className="h-11"
                        required
                      />
                    </div>

                    {/* Email & Phone */}
                    <div className="grid sm:grid-cols-2 gap-4">

                      <div className="space-y-2">
                        <Label htmlFor="student-email">Email</Label>
                        <Input
                          id="student-email"
                          type="email"
                          placeholder="student@example.com"
                          value={studentData.email}
                          onChange={(e) => setStudentData({ ...studentData, email: e.target.value })}
                          className="h-11"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="student-phone">Phone Number</Label>
                        <Input
                          id="student-phone"
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={studentData.phone}
                          onChange={(e) => setStudentData({ ...studentData, phone: e.target.value })}
                          className="h-11"
                          required
                        />
                      </div>

                    </div>

                    {/* Passwords */}
                    <div className="grid sm:grid-cols-2 gap-4">

                      <div className="space-y-2">
                        <Label htmlFor="student-password">Password</Label>
                        <Input
                          id="student-password"
                          type="password"
                          placeholder="••••••••"
                          value={studentData.password}
                          onChange={(e) => setStudentData({ ...studentData, password: e.target.value })}
                          className="h-11"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="student-confirm">Confirm Password</Label>
                        <Input
                          id="student-confirm"
                          type="password"
                          placeholder="••••••••"
                          value={studentData.confirmPassword}
                          onChange={(e) => setStudentData({ ...studentData, confirmPassword: e.target.value })}
                          className="h-11"
                          required
                        />
                      </div>

                    </div>

                    <Button 
                      type="submit" 
                      className="w-full h-11 bg-gradient-to-r from-primary to-primary/90 hover:opacity-90 shadow-lg mt-6"
                    >
                      Create Account
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>

                    <p className="text-sm text-center text-muted-foreground pt-2">
                      Already have an account?{' '}
                      <button
                        type="button"
                        onClick={() => onNavigate('login')}
                        className="text-primary hover:underline"
                      >
                        Sign in here
                      </button>
                    </p>

                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Company Registration */}
            <TabsContent value="company" className="mt-6">
              <Card className="border-2 shadow-xl">
                
                <CardHeader className="space-y-2 pb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/70 
                    rounded-xl flex items-center justify-center mb-2">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl">Company Registration</CardTitle>
                  <CardDescription className="text-sm">
                    Register your company to access candidate reports
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <form onSubmit={handleCompanyRegister} className="space-y-4">

                    {/* Company Name */}
                    <div className="space-y-2">
                      <Label htmlFor="company-name">Company Name</Label>
                      <Input
                        id="company-name"
                        type="text"
                        placeholder="Acme Inc."
                        value={companyData.companyName}
                        onChange={(e) => setCompanyData({ ...companyData, companyName: e.target.value })}
                        className="h-11"
                        required
                      />
                    </div>

                    {/* Email & Phone */}
                    <div className="grid sm:grid-cols-2 gap-4">

                      <div className="space-y-2">
                        <Label htmlFor="company-email">Company Email</Label>
                        <Input
                          id="company-email"
                          type="email"
                          placeholder="contact@company.com"
                          value={companyData.email}
                          onChange={(e) => setCompanyData({ ...companyData, email: e.target.value })}
                          className="h-11"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company-phone">Phone Number</Label>
                        <Input
                          id="company-phone"
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={companyData.phone}
                          onChange={(e) => setCompanyData({ ...companyData, phone: e.target.value })}
                          className="h-11"
                          required
                        />
                      </div>

                    </div>

                    {/* Industry */}
                    <div className="space-y-2">
                      <Label htmlFor="company-industry">Industry</Label>
                      <Input
                        id="company-industry"
                        type="text"
                        placeholder="Technology, Healthcare, Finance, etc."
                        value={companyData.industry}
                        onChange={(e) => setCompanyData({ ...companyData, industry: e.target.value })}
                        className="h-11"
                        required
                      />
                    </div>

                    {/* Passwords */}
                    <div className="grid sm:grid-cols-2 gap-4">

                      <div className="space-y-2">
                        <Label htmlFor="company-password">Password</Label>
                        <Input
                          id="company-password"
                          type="password"
                          placeholder="••••••••"
                          value={companyData.password}
                          onChange={(e) => setCompanyData({ ...companyData, password: e.target.value })}
                          className="h-11"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company-confirm">Confirm Password</Label>
                        <Input
                          id="company-confirm"
                          type="password"
                          placeholder="••••••••"
                          value={companyData.confirmPassword}
                          onChange={(e) => setCompanyData({ ...companyData, confirmPassword: e.target.value })}
                          className="h-11"
                          required
                        />
                      </div>

                    </div>

                    <Button 
                      type="submit" 
                      className="w-full h-11 bg-gradient-to-r from-accent to-accent/90 hover:opacity-90 shadow-lg mt-6"
                    >
                      Create Account
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>

                    <p className="text-sm text-center text-muted-foreground pt-2">
                      Already have an account?{' '}
                      <button
                        type="button"
                        onClick={() => onNavigate('login')}
                        className="text-accent hover:underline"
                      >
                        Sign in here
                      </button>
                    </p>

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
