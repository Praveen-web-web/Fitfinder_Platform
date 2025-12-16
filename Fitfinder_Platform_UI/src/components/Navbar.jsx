import { useState } from 'react';
import { Button } from './ui/button';
import { GraduationCap, Menu, X } from 'lucide-react';

export function Navbar({ currentPage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigate = (page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 lg:py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => handleNavigate('home')}
          >
            <div className="p-2 bg-gradient-to-br from-primary to-accent rounded-xl shadow-lg 
              group-hover:shadow-xl transition-all group-hover:scale-105"
            >
              <GraduationCap className="h-6 w-6 lg:h-7 lg:w-7 text-white" />
            </div>

            <span className="text-xl lg:text-2xl bg-gradient-to-r from-primary to-accent 
              bg-clip-text text-transparent"
            >
              FitFinder
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            
            <button
              onClick={() => handleNavigate('home')}
              className={`transition-all hover:text-primary relative group ${
                currentPage === 'home' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Home
              {currentPage === 'home' && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 
                  bg-gradient-to-r from-primary to-accent rounded-full"
                />
              )}
            </button>

            <button
              onClick={() => handleNavigate('about')}
              className={`transition-all hover:text-primary relative group ${
                currentPage === 'about' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              About Us
              {currentPage === 'about' && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 
                  bg-gradient-to-r from-primary to-accent rounded-full"
                />
              )}
            </button>

            <button
              onClick={() => handleNavigate('contact')}
              className={`transition-all hover:text-primary relative group ${
                currentPage === 'contact' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Contact
              {currentPage === 'contact' && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 
                  bg-gradient-to-r from-primary to-accent rounded-full"
                />
              )}
            </button>

          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              onClick={() => handleNavigate('login')}
              className="hover:bg-primary/10"
            >
              Login
            </Button>

            <Button
              onClick={() => handleNavigate('register')}
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg hover:shadow-xl transition-all"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-in slide-in-from-top-2">

            <button
              onClick={() => handleNavigate('home')}
              className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                currentPage === 'home'
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavigate('about')}
              className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                currentPage === 'about'
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted'
              }`}
            >
              About Us
            </button>

            <button
              onClick={() => handleNavigate('contact')}
              className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                currentPage === 'contact'
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted'
              }`}
            >
              Contact
            </button>

            <div className="pt-3 space-y-2">

              <Button
                variant="outline"
                className="w-full"
                onClick={() => handleNavigate('login')}
              >
                Login
              </Button>

              <Button
                className="w-full bg-gradient-to-r from-primary to-accent"
                onClick={() => handleNavigate('register')}
              >
                Get Started
              </Button>

            </div>

          </div>
        )}

      </div>
    </nav>
  );
}
