import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { GraduationCap, Users, Building2, ArrowRight, Sparkles, ShieldCheck, Search, CheckCircle } from "lucide-react";

export function HomePage({ onNavigate }) {
  return (
    <div className="relative overflow-hidden">

      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-secondary/5 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Section */}
          <div className="space-y-6">

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm">
              <Sparkles className="h-4 w-4" />
              India's Most Efficient Assessment Platform
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Find Your Perfect Career Fit With Precision & Speed
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl">
              FitFinder connects students, companies, and admins in a seamless assessment ecosystem —
              enabling efficient filtering, fair evaluations, and accurate hiring decisions.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={() => onNavigate("register")}
                className="h-12 px-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg text-base"
              >
                Get Started
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>

              <Button
                onClick={() => onNavigate("about")}
                variant="outline"
                className="h-12 px-6 border-2 text-base hover:bg-primary/10"
              >
                Learn More
              </Button>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-3 gap-4 pt-6">

              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Verified Results</span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">Fast Filtering</span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium">Fair Assessments</span>
              </div>

            </div>
          </div>

          {/* Right Section */}
          <div className="relative">
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />

            <Card className="border-2 shadow-2xl backdrop-blur-xl bg-white/40 dark:bg-black/40">
              <CardContent className="p-6 space-y-6">

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center shadow-md">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Students</h3>
                </div>

                <p className="text-muted-foreground">
                  Showcase your skills, take assessments, and stand out to top companies based on merit.
                </p>

                <Button
                  onClick={() => onNavigate("register")}
                  className="w-full bg-primary hover:opacity-90"
                >
                  Join as Student
                </Button>

              </CardContent>
            </Card>

            <Card className="border-2 mt-6 shadow-2xl backdrop-blur-xl bg-white/40 dark:bg-black/40">
              <CardContent className="p-6 space-y-6">

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center shadow-md">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Companies</h3>
                </div>

                <p className="text-muted-foreground">
                  Access filtered and test-verified candidates backed by data-driven reports.
                </p>

                <Button
                  onClick={() => onNavigate("register")}
                  className="w-full bg-accent hover:opacity-90"
                >
                  Register Company
                </Button>

              </CardContent>
            </Card>

          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16 md:py-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-12 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
          Why Choose FitFinder?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Feature 1 */}
          <Card className="border-2 p-6 hover:shadow-2xl transition-all">
            <CardContent className="space-y-4">

              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                <Search className="h-7 w-7 text-primary" />
              </div>

              <h3 className="text-xl">Smart Student Filtering</h3>

              <p className="text-muted-foreground">
                Advanced filters ensure companies only see the most suitable candidates.
              </p>

            </CardContent>
          </Card>

          {/* Feature 2 */}
          <Card className="border-2 p-6 hover:shadow-2xl transition-all">
            <CardContent className="space-y-4">

              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center">
                <ShieldCheck className="h-7 w-7 text-accent" />
              </div>

              <h3 className="text-xl">Fair & Verified Assessments</h3>

              <p className="text-muted-foreground">
                Tests are designed to ensure unbiased evaluation and accurate performance scores.
              </p>

            </CardContent>
          </Card>

          {/* Feature 3 */}
          <Card className="border-2 p-6 hover:shadow-2xl transition-all">
            <CardContent className="space-y-4">

              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center">
                <Users className="h-7 w-7 text-secondary" />
              </div>

              <h3 className="text-xl">Built for Everyone</h3>

              <p className="text-muted-foreground">
                Students, companies, and admins — all on a single platform working in sync.
              </p>

            </CardContent>
          </Card>

        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 pb-20">
        <div className="bg-gradient-to-r from-primary via-accent to-secondary rounded-3xl p-10 md:p-16 text-white text-center shadow-xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6">
            Ready to Start Your Career Journey?
          </h2>

          <p className="max-w-2xl mx-auto text-lg opacity-90 mb-8">
            Join FitFinder today and take your first step toward a smarter, faster hiring ecosystem.
          </p>

          <Button
            onClick={() => onNavigate("register")}
            className="h-12 px-8 bg-white text-black hover:bg-white/80 text-base shadow-lg"
          >
            Create Account <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>

    </div>
  );
}
