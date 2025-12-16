import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function Footer({ onNavigate }) {
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Add newsletter subscription logic here
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white mt-20">
      
      {/* Decorative Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12 md:h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#f8f9ff"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-20 md:pt-24 pb-8">

        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">

          {/* Brand */}
          <div className="space-y-4">
            <div
              className="flex items-center gap-2 cursor-pointer group"
              onClick={() => onNavigate('home')}
            >
              <div className="p-2 bg-gradient-to-br from-primary to-accent rounded-xl shadow-lg group-hover:shadow-xl transition-all group-hover:scale-105">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>

              <span className="text-2xl bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                FitFinder
              </span>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              Bridging the gap between talented students and forward-thinking companies through innovative assessment solutions.
            </p>

            <div className="flex gap-3">
              {/* Social Icons */}
              <button className="w-9 h-9 rounded-lg bg-white/10 hover:bg-gradient-to-r hover:from-primary hover:to-accent transition-all flex items-center justify-center">
                <Facebook className="h-4 w-4 text-white" />
              </button>

              <button className="w-9 h-9 rounded-lg bg-white/10 hover:bg-gradient-to-r hover:from-primary hover:to-accent transition-all flex items-center justify-center">
                <Twitter className="h-4 w-4 text-white" />
              </button>

              <button className="w-9 h-9 rounded-lg bg-white/10 hover:bg-gradient-to-r hover:from-primary hover:to-accent transition-all flex items-center justify-center">
                <Linkedin className="h-4 w-4 text-white" />
              </button>

              <button className="w-9 h-9 rounded-lg bg-white/10 hover:bg-gradient-to-r hover:from-primary hover:to-accent transition-all flex items-center justify-center">
                <Instagram className="h-4 w-4 text-white" />
              </button>

              <button className="w-9 h-9 rounded-lg bg-white/10 hover:bg-gradient-to-r hover:from-primary hover:to-accent transition-all flex items-center justify-center">
                <Github className="h-4 w-4 text-white" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-slate-300 hover:text-white hover:translate-x-1 transition-all text-sm"
                >
                  Home
                </button>
              </li>

              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-slate-300 hover:text-white hover:translate-x-1 transition-all text-sm"
                >
                  About Us
                </button>
              </li>

              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-slate-300 hover:text-white hover:translate-x-1 transition-all text-sm"
                >
                  Contact
                </button>
              </li>

              <li>
                <button
                  onClick={() => onNavigate('login')}
                  className="text-slate-300 hover:text-white hover:translate-x-1 transition-all text-sm"
                >
                  Login
                </button>
              </li>

              <li>
                <button
                  onClick={() => onNavigate('register')}
                  className="text-slate-300 hover:text-white hover:translate-x-1 transition-all text-sm"
                >
                  Register
                </button>
              </li>

              <li>
                <button
                  onClick={() => onNavigate('admin')}
                  className="text-slate-300 hover:text-white hover:translate-x-1 transition-all text-sm"
                >
                  Admin
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg mb-4 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Services
            </h3>

            <ul className="space-y-3">
              <li className="text-slate-300 text-sm">Student Assessment</li>
              <li className="text-slate-300 text-sm">Candidate Filtering</li>
              <li className="text-slate-300 text-sm">Report Generation</li>
              <li className="text-slate-300 text-sm">Company Dashboard</li>
              <li className="text-slate-300 text-sm">Admin Management</li>
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h3 className="text-lg mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Get in Touch
            </h3>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-slate-300 text-sm">
                <Mail className="h-4 w-4 mt-0.5 text-primary" />
                <span>support@FitFinder.com</span>
              </li>

              <li className="flex items-start gap-2 text-slate-300 text-sm">
                <Phone className="h-4 w-4 mt-0.5 text-accent" />
                <span>+1 (555) 123-4567</span>
              </li>

              <li className="flex items-start gap-2 text-slate-300 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 text-secondary" />
                <span>
                  123 Innovation Street
                  <br />
                  Agra Tech City, Agra-282006
                </span>
              </li>
            </ul>

            <div>
              <h4 className="text-sm mb-3">Subscribe to Newsletter</h4>

              <form onSubmit={handleSubscribe} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="h-9 bg-white/10 border-white/20 text-white placeholder:text-slate-400 text-sm"
                  required
                />

                <Button
                  type="submit"
                  size="sm"
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-sm px-3"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} FitFinder. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <button className="text-slate-400 hover:text-white transition-colors">
              Privacy Policy
            </button>

            <button className="text-slate-400 hover:text-white transition-colors">
              Terms of Service
            </button>

            <button className="text-slate-400 hover:text-white transition-colors">
              Cookie Policy
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary"></div>
    </footer>
  );
}
