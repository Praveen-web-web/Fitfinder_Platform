import { Card, CardContent } from './ui/card';
import { Target, Users, Zap, Shield, TrendingUp, Award } from 'lucide-react';

export function AboutUs() {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 lg:mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
              <Award className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary">Our Story</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              About FitFinder
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Bridging the gap between talented students and forward-thinking companies through innovative assessment solutions
            </p>
          </div>

          {/* Mission Section */}
          <div className="mb-12 md:mb-16 lg:mb-20">
            <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 rounded-3xl p-6 md:p-8 lg:p-12 border-2 border-border shadow-xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-4">
                At FitFinder, we're revolutionizing the way students connect with potential employers. Our platform provides a streamlined, efficient, and fair assessment process that benefits everyone involved.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                We believe that talent deserves to be recognized, and companies deserve access to the best candidates. Our comprehensive testing and filtering system ensures that only the most qualified students advance, while providing companies with detailed insights to make informed hiring decisions.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-8 md:mb-12 text-center bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              
              {/* Excellence */}
              <Card className="border-2 hover:border-primary hover:shadow-2xl transition-all duration-300 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardContent className="pt-6 relative z-10">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <Target className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl mb-2">Excellence</h3>
                      <p className="text-muted-foreground text-sm sm:text-base">
                        We strive for excellence in every assessment, ensuring accurate and meaningful evaluation of candidates
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Inclusivity */}
              <Card className="border-2 hover:border-accent hover:shadow-2xl transition-all duration-300 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardContent className="pt-6 relative z-10">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-accent to-accent/70 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <Users className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl mb-2">Inclusivity</h3>
                      <p className="text-muted-foreground text-sm sm:text-base">
                        We provide equal opportunities for all students, ensuring fair and unbiased assessments
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Innovation */}
              <Card className="border-2 hover:border-secondary hover:shadow-2xl transition-all duration-300 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardContent className="pt-6 relative z-10">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-secondary to-secondary/70 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <Zap className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl mb-2">Innovation</h3>
                      <p className="text-muted-foreground text-sm sm:text-base">
                        We continuously improve our platform with cutting-edge technology and assessment methodologies
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Integrity */}
              <Card className="border-2 hover:border-primary hover:shadow-2xl transition-all duration-300 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardContent className="pt-6 relative z-10">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary via-accent to-secondary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <Shield className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl mb-2">Integrity</h3>
                      <p className="text-muted-foreground text-sm sm:text-base">
                        We maintain the highest standards of data security and ethical assessment practices
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>

          {/* What We Do Section */}
          <div className="mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-8 md:mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              What We Do
            </h2>

            <div className="space-y-6">
              
              {/* Students */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="border-l-4 border-primary pl-6 md:pl-8 py-4 relative">
                  <h3 className="text-xl sm:text-2xl md:text-3xl mb-3 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-white" />
                    </div>
                    For Students
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base lg:text-lg">
                    We provide a platform where you can showcase your abilities through well-designed assessments. Get filtered based on merit, take comprehensive tests, and stand out to potential employers with detailed performance reports.
                  </p>
                </div>
              </div>

              {/* Companies */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="border-l-4 border-accent pl-6 md:pl-8 py-4 relative">
                  <h3 className="text-xl sm:text-2xl md:text-3xl mb-3 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center">
                      <Target className="h-5 w-5 text-white" />
                    </div>
                    For Companies
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base lg:text-lg">
                    Access a pool of pre-screened, qualified candidates who have been evaluated through rigorous testing. Review detailed performance reports and make confident hiring decisions based on objective data.
                  </p>
                </div>
              </div>

              {/* Administrators */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="border-l-4 border-secondary pl-6 md:pl-8 py-4 relative">
                  <h3 className="text-xl sm:text-2xl md:text-3xl mb-3 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/70 rounded-xl flex items-center justify-center">
                      <Shield className="h-5 w-5 text-white" />
                    </div>
                    For Administrators
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base lg:text-lg">
                    Manage the entire assessment lifecycle with powerful admin tools. Oversee student filtering, test administration, report generation, and maintain quality control across the platform.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Stats Section */}
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary" />
            <div className="relative z-10 p-8 md:p-12 lg:p-16 text-white">
              <h2 className="text-3xl sm:text-4xl text-center mb-8 md:mb-12">Our Impact</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 text-center">
                
                <div className="space-y-2">
                  <div className="text-4xl sm:text-5xl md:text-6xl">10K+</div>
                  <p className="text-base sm:text-lg opacity-90">Students Assessed</p>
                  <p className="text-sm opacity-75">and counting</p>
                </div>

                <div className="space-y-2">
                  <div className="text-4xl sm:text-5xl md:text-6xl">500+</div>
                  <p className="text-base sm:text-lg opacity-90">Partner Companies</p>
                  <p className="text-sm opacity-75">across industries</p>
                </div>

                <div className="space-y-2">
                  <div className="text-4xl sm:text-5xl md:text-6xl">95%</div>
                  <p className="text-base sm:text-lg opacity-90">Success Rate</p>
                  <p className="text-sm opacity-75">in placements</p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
