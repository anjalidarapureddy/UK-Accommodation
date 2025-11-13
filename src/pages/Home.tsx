import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Search, PlusCircle, Shield } from "lucide-react";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-home.jpg";

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
          <div className="flex justify-center mb-6">
            <Building2 className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Find Your Perfect Home in the UK
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in">
            Connecting property owners with renters across the United Kingdom. Simple, secure, and trusted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/properties">
              <Button size="lg" className="gap-2 w-full sm:w-auto">
                <Search className="h-5 w-5" />
                Browse Properties
              </Button>
            </Link>
            <Link to="/add-property">
              <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                <PlusCircle className="h-5 w-5" />
                List Your Property
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose UK Accommodation?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We make finding and listing rental properties easier than ever before
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-card hover:shadow-hover transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Easy Search</CardTitle>
                <CardDescription>
                  Filter by location, price, and property type to find exactly what you need
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-card hover:shadow-hover transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <PlusCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Simple Listing</CardTitle>
                <CardDescription>
                  List your property in minutes with our straightforward process
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-card hover:shadow-hover transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Trusted Platform</CardTitle>
                <CardDescription>
                  Secure and reliable platform with verified listings and users
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-hover">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to List Your Property?
              </h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Join hundreds of property owners who trust UK Accommodation to connect with quality renters
              </p>
              <Link to="/add-property">
                <Button size="lg" variant="secondary" className="gap-2">
                  <PlusCircle className="h-5 w-5" />
                  Get Started Now
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
