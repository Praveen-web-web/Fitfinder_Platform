import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact Form Submitted:', formData);
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-8 md:mb-12 lg:mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
              <MessageCircle className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary">Get In Touch</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Contact Us
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12 lg:mb-16">

            <Card className="border-2 hover:border-primary hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="pt-6 text-center space-y-3">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform">
                  <Mail className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl">Email</h3>
                <p className="text-muted-foreground text-sm">support@FitFinder.com</p>
                <p className="text-muted-foreground text-sm">info@FitFinder.com</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="pt-6 text-center space-y-3">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-accent to-accent/70 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform">
                  <Phone className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl">Phone</h3>
                <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
                <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
                  <Clock className="h-3 w-3" /> Mon-Fri 9am-6pm IST
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary hover:shadow-2xl transition-all duration-300 group sm:col-span-2 lg:col-span-1">
              <CardContent className="pt-6 text-center space-y-3">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-secondary to-secondary/70 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform">
                  <MapPin className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl">Office</h3>
                <p className="text-muted-foreground text-sm">123 Innovation Street</p>
                <p className="text-muted-foreground text-sm">Agra Tech City, Agra-282006</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="max-w-3xl mx-auto border-2 shadow-2xl">
            <CardHeader className="space-y-3 pb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <Send className="h-6 w-6 text-white" />
              </div>

              <CardTitle className="text-2xl sm:text-3xl">Send us a Message</CardTitle>

              <CardDescription className="text-sm sm:text-base">
                Fill out the form below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="h-11"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="h-11"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="What is this regarding?"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="h-11"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg text-base sm:text-lg"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* FAQ */}
          <div className="mt-12 md:mt-16 lg:mt-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-8 md:mb-12 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">

              {/* FAQ 1 */}
              <Card className="border-2 hover:shadow-xl transition-all">
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mt-1">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <CardTitle className="text-base sm:text-lg">
                      How do I register as a student?
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Click on "Get Started" or "Register", select the Student tab, and fill in your details.
                  </p>
                </CardContent>
              </Card>

              {/* FAQ 2 */}
              <Card className="border-2 hover:shadow-xl transition-all">
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mt-1">
                      <CheckCircle className="h-4 w-4 text-accent" />
                    </div>
                    <CardTitle className="text-base sm:text-lg">
                      How can companies access reports?
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Companies must register first. Once approved, they can log in and access detailed candidate reports.
                  </p>
                </CardContent>
              </Card>

              {/* FAQ 3 */}
              <Card className="border-2 hover:shadow-xl transition-all">
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center mt-1">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                    </div>
                    <CardTitle className="text-base sm:text-lg">
                      What is the filtering process?
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Students are filtered based on criteria like skills, education, experience before test eligibility.
                  </p>
                </CardContent>
              </Card>

              {/* FAQ 4 */}
              <Card className="border-2 hover:shadow-xl transition-all">
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mt-1">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <CardTitle className="text-base sm:text-lg">
                      How long does it take to get results?
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Reports are generated instantly after test completion and accessible to both students and companies.
                  </p>
                </CardContent>
              </Card>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
