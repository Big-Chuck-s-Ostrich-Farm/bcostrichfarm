
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Car, Users } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="vintage-title mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you! Visit our farm, ask questions, or learn more about our ostrich products.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="vintage-container">
              <CardHeader>
                <CardTitle className="vintage-subtitle flex items-center">
                  <MapPin className="w-6 h-6 mr-2 text-accent" />
                  Visit Our Farm
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Address</h4>
                  <p className="text-muted-foreground">
                    123 Ostrich Farm Road<br />
                    Countryside Valley, CV 12345<br />
                    United States
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Directions</h4>
                  <p className="text-muted-foreground">
                    Take Highway 45 north for 15 miles, turn right on Farm Road 123. 
                    Follow signs for "Ostrich Farm" - we're at the end of the road.
                  </p>
                </div>
              </CardContent>
            </Card>

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
                  <h4 className="font-semibold text-primary mb-2">Emergency</h4>
                  <p className="text-muted-foreground">(555) 123-4567</p>
                </div>
              </CardContent>
            </Card>

            <Card className="vintage-container">
              <CardHeader>
                <CardTitle className="vintage-subtitle flex items-center">
                  <Clock className="w-6 h-6 mr-2 text-accent" />
                  Farm Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Tuesday - Friday:</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday - Sunday:</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monday:</span>
                    <span>Closed</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  *Hours may vary during holidays and special events
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Services and What to Expect */}
          <div className="space-y-6">
            <Card className="vintage-container">
              <CardHeader>
                <CardTitle className="vintage-subtitle flex items-center">
                  <Users className="w-6 h-6 mr-2 text-accent" />
                  Farm Tours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Guided Tours</h4>
                    <p className="text-muted-foreground">
                      Join our 90-minute guided tour to learn about ostrich farming, 
                      meet our birds, and discover our sustainable practices.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Group Visits</h4>
                    <p className="text-muted-foreground">
                      Perfect for schools, clubs, and organizations. 
                      Educational programs available for all ages.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Pricing</h4>
                    <div className="text-muted-foreground">
                      <p>Adults: $15</p>
                      <p>Children (5-12): $10</p>
                      <p>Under 5: Free</p>
                      <p>Groups (10+): $12 per person</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="vintage-container">
              <CardHeader>
                <CardTitle className="vintage-subtitle flex items-center">
                  <Car className="w-6 h-6 mr-2 text-accent" />
                  Visitor Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">What to Bring</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Comfortable walking shoes</li>
                      <li>• Sun hat and sunscreen</li>
                      <li>• Camera for photos</li>
                      <li>• Water bottle</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Facilities</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Free parking</li>
                      <li>• Restrooms</li>
                      <li>• Gift shop</li>
                      <li>• Picnic area</li>
                      <li>• Wheelchair accessible</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="vintage-container">
              <CardHeader>
                <CardTitle className="vintage-subtitle">Special Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-muted-foreground">
                  <p>• Annual Ostrich Festival (Spring)</p>
                  <p>• Farm-to-Table Dinners (Monthly)</p>
                  <p>• Educational Workshops</p>
                  <p>• Birthday Party Packages</p>
                  <p>• Corporate Team Building</p>
                </div>
                <p className="text-sm mt-4">
                  Call us to schedule special events or learn about upcoming activities!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-16">
          <Card className="vintage-container">
            <CardHeader>
              <CardTitle className="vintage-subtitle text-center">Find Us</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-12 h-12 mx-auto mb-4" />
                  <p>Interactive map would be embedded here</p>
                  <p className="text-sm">123 Ostrich Farm Road, Countryside Valley, CV 12345</p>
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
