import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Youtube, Instagram, MessageSquareHeart } from "lucide-react";
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
                Farmers Market
              </CardTitle>
              <CardContent className="space-y-4"></CardContent>
              <div className="mt-8 mb-0">
                <h4 className="font-semibold text-primary text-lg">Japan Town Farmers' Market</h4>
                <p className="text-muted-foreground text-base font-semibold">Every Sunday, 9:00 AM - 12:00 PM</p>
                <p className="text-muted-foreground text-sm">357 E Taylor St, San Jose, CA 95112</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary mb-2 ">What We Bring</h4>
                <ul className="text-muted-foreground text-base space-y-1 mb-2">
                  <li>• Frozen vacuum sealed ostrich meat</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Get In Touch */}
          <Card className="vintage-container">
            <CardHeader>
              <CardTitle className="vintage-subtitle flex items-center">
                <Mail className="w-6 h-6 mr-2 text-accent" />
                Get In Touch
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary mb-2">Email</h4>
                <p className="text-muted-foreground">bigchucksostrichfarm@gmail.com</p>
              </div>
              <div>
                <p className="text-muted-foreground text-base">Contact us any time and we will get back to you as soon as possible.</p>
              </div>
            </CardContent>
          </Card>

          {/* Social Media */}
          <Card className="vintage-container">
            <CardHeader>
              <CardTitle className="vintage-subtitle flex items-center"><MessageSquareHeart className="w-6 h-6 mr-2 text-accent" />Follow Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-primary mb-3">Social Media</h4>
                <div className="space-y-3">
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full justify-start hover:bg-red-50 hover:border-red-200 hover:text-black"
                  >
                    <a 
                      href="https://www.youtube.com/@bigchucksostrichfarm" 
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
                    className="w-full justify-start hover:bg-purple-50 hover:border-purple-200 hover:text-black"
                  >
                    <a 
                      href="https://www.instagram.com/bigchucksostrichfarm/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Follow us on Instagram"
                    >
                      <Instagram className="mr-2 h-4 w-4 text-purple-600" />
                      @bigchucksostrichfarm
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;