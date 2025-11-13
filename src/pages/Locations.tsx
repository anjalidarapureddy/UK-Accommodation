import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cities } from "@/data/properties";
import { MapPin } from "lucide-react";

const Locations = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Available Locations</h1>
          <p className="text-muted-foreground">
            Explore properties across major cities and regions in the United Kingdom
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city) => (
            <Card key={city.name} className="shadow-card hover:shadow-hover transition-shadow">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      {city.name}
                    </CardTitle>
                    <CardDescription className="mt-2">{city.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <p className="text-muted-foreground">
                    {city.count} {city.count === 1 ? "property" : "properties"} available
                  </p>
                  <Link to={`/properties?city=${city.name}`}>
                    <Button>View Properties</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Don't See Your City?</h2>
            <p className="text-muted-foreground mb-6">
              We're constantly expanding to new locations. List your property and help us grow!
            </p>
            <Link to="/add-property">
              <Button size="lg">List Your Property</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Locations;
