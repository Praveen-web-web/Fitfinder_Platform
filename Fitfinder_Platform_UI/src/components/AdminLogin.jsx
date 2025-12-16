import { useState } from 'react'; 
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { Shield, ArrowRight, Lock } from 'lucide-react';

export function AdminLogin({ onNavigate }) {
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');

  const handleAdminLogin = (e) => {
    e.preventDefault();
    console.log('Admin Login:', { adminEmail, adminPassword });
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] py-8 md:py-12 lg:py-16 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-6 md:mb-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20 mb-2">
              <Lock className="h-4 w-4 text-secondary" />
              <span className="text-sm text-secondary">Restricted Access</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Admin Portal
            </h1>

            <p className="text-muted-foreground text-sm sm:text-base">
              Secure access for administrators only
            </p>
          </div>

          <Card className="border-2 shadow-2xl">
            <CardHeader className="space-y-2 pb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary/70 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-lg">
                <Shield className="h-7 w-7 text-white" />
              </div>

              <CardTitle className="text-xl sm:text-2xl text-center">
                Administrator Login
              </CardTitle>

              <CardDescription className="text-sm text-center">
                Enter your credentials to access the admin panel
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleAdminLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="admin-email">Admin Email</Label>
                  <Input
                    id="admin-email"
                    type="email"
                    placeholder="admin@testportal.com"
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

                <div className="flex items-center justify-between text-sm pt-2">
                  <button type="button" className="text-secondary hover:underline">
                    Forgot Password?
                  </button>
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 bg-gradient-to-r from-secondary to-secondary/90 hover:opacity-90 shadow-lg mt-6"
                >
                  <Shield className="mr-2 h-4 w-4" />
                  Secure Login
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <div className="pt-4 text-center">
                  <button
                    type="button"
                    onClick={() => onNavigate('login')}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    ← Back to main login
                  </button>
                </div>
              </form>

              {/* Security Notice */}
              <div className="mt-6 p-4 bg-secondary/5 border border-secondary/20 rounded-lg">
                <div className="flex items-start gap-2">
                  <Lock className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-muted-foreground">
                    This area is restricted to authorized administrators only. All login attempts are monitored and logged.
                  </p>
                </div>
              </div>

            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
