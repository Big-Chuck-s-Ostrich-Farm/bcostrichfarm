import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Youtube, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="vintage-title mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you! Visit our farmers markets or get in touch to learn more about our ostrich products.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Farmers Market Info */}
          <Card className="vintage-container">
            <CardHeader>
              <CardTitle className="vintage-subtitle flex items-center">
                <MapPin className="w-6 h-6 mr-2 text-accent" />
                Farmers Markets
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary mb-2">Downtown Market</h4>
                <p className="text-muted-foreground text-sm">
                  Every Saturday, 8:00 AM - 2:00 PM<br />
                  Main Street Plaza, Downtown
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Riverside Market</h4>
                <p className="text-muted-foreground text-sm">
                  Sundays, 9:00 AM - 3:00 PM<br />
                  Riverside Park, East Side
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">What We Bring</h4>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• Fresh ostrich meat</li>
                  <li>• Ostrich eggs</li>
                  <li>• Leather products</li>
                  <li>• Farm-fresh produce</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Get In Touch */}
          <Card className="vintage-container">
            <CardHeader>
              <CardTitle className="vintage-subtitle flex items-center">
                <Phone className="w-6 h-6 mr-2 text-accent" />
                Get In Touch
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary mb-2">Phone</h4>
                <p className="text-muted-foreground">(555) 123-FARM (3276)</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Email</h4>
                <p className="text-muted-foreground">info@ostrichfarm.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Farm Address</h4>
                <p className="text-muted-foreground text-sm">
                  123 Ostrich Farm Road<br />
                  Countryside Valley, CV 12345
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Best Times to Call</h4>
                <p className="text-muted-foreground text-sm">
                  Tuesday - Sunday: 9:00 AM - 6:00 PM<br />
                  Closed Mondays
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Social Media */}
          <Card className="vintage-container">
            <CardHeader>
              <CardTitle className="vintage-subtitle">Follow Our Journey</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-primary mb-3">Social Media</h4>
                <div className="space-y-3">
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full justify-start hover:bg-red-50 hover:border-red-200"
                  >
                    <a 
                      href="https://youtube.com/@ostrichfarm" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Visit our YouTube channel"
                    >
                      <Youtube className="mr-2 h-4 w-4 text-red-600" />
                      YouTube Channel
                    </a>
                  </Button>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full justify-start hover:bg-purple-50 hover:border-purple-200"
                  >
                    <a 
                      href="https://instagram.com/ostrichfarm" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Follow us on Instagram"
                    >
                      <Instagram className="mr-2 h-4 w-4 text-purple-600" />
                      @ostrichfarm
                    </a>
                  </Button>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">What You'll See</h4>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• Daily farm life</li>
                  <li>• Cooking tutorials</li>
                  <li>• Behind-the-scenes</li>
                  <li>• Educational content</li>
                  <li>• Product updates</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;