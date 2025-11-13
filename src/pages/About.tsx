import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, Users, Shield, Heart } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">About UK Accommodation</h1>
            <p className="text-xl text-muted-foreground">
              Connecting property owners with renters across the United Kingdom
            </p>
          </div>

          <div className="space-y-8">
            <Card className="shadow-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  UK Accommodation was created to simplify the rental process for both property owners
                  and tenants. We understand that finding the right home or the right tenant can be
                  challenging, time-consuming, and stressful.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our platform bridges the gap between property owners and renters, providing a
                  straightforward, trustworthy space where quality properties meet quality tenants.
                  We emphasize simplicity, transparency, and trust in every interaction.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-card">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>For Property Owners</CardTitle>
                  <CardDescription>
                    List your property quickly and easily. Reach thousands of potential tenants
                    actively searching for their next home. Manage inquiries and viewings all in
                    one place.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>For Renters</CardTitle>
                  <CardDescription>
                    Browse verified listings across the UK. Filter by location, price, and property
                    type to find exactly what you're looking for. Connect directly with property
                    owners.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Trust & Security</CardTitle>
                  <CardDescription>
                    We verify all listings and users to ensure a safe, secure experience for
                    everyone. Your data and privacy are protected with industry-standard security
                    measures.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Built for Everyone</CardTitle>
                  <CardDescription>
                    Whether you're a first-time renter, experienced landlord, or property
                    management company, our platform is designed to make your life easier and the
                    rental process smoother.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-hover">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
                <p className="text-lg mb-6 opacity-90">
                  Become part of a growing community of property owners and renters who trust UK
                  Accommodation for their rental needs
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/add-property">
                    <Button size="lg" variant="secondary">
                      List Your Property
                    </Button>
                  </Link>
                  <Link to="/properties">
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                      Browse Properties
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
