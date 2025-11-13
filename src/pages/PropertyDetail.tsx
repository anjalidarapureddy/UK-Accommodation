import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { properties } from "@/data/properties";
import { Bed, Bath, MapPin, ArrowLeft, Mail, Phone } from "lucide-react";

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
          <Link to="/properties">
            <Button>Back to Properties</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Link to="/properties">
          <Button variant="ghost" className="gap-2 mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to Properties
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="aspect-video overflow-hidden rounded-lg">
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{property.name}</h1>
                  <div className="flex items-center text-muted-foreground gap-2">
                    <MapPin className="h-5 w-5" />
                    <span className="text-lg">{property.location}</span>
                  </div>
                </div>
                <Badge variant="secondary" className="text-base px-4 py-2">
                  {property.type}
                </Badge>
              </div>

              <div className="flex items-center gap-6 text-lg mb-6">
                <div className="flex items-center gap-2">
                  <Bed className="h-5 w-5 text-primary" />
                  <span>{property.rooms} Bedrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="h-5 w-5 text-primary" />
                  <span>{property.bathrooms} Bathrooms</span>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {property.description}
                </p>
              </div>

              <Card className="bg-muted/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Property Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      Modern Kitchen
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      Central Heating
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      Double Glazing
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      Garden/Outdoor Space
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      Parking Available
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      Excellent Transport Links
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24 shadow-card">
              <CardContent className="p-6 space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Monthly Rent</p>
                  <p className="text-4xl font-bold text-primary">
                    £{property.price}
                    <span className="text-lg font-normal text-muted-foreground">/month</span>
                  </p>
                </div>

                <div className="space-y-3">
                  <Button className="w-full gap-2" size="lg">
                    <Mail className="h-5 w-5" />
                    Contact Owner
                  </Button>
                  <Button variant="outline" className="w-full gap-2" size="lg">
                    <Phone className="h-5 w-5" />
                    Request Viewing
                  </Button>
                </div>

                <div className="pt-6 border-t space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Property Type</span>
                    <span className="font-medium capitalize">{property.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Bedrooms</span>
                    <span className="font-medium">{property.rooms}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Bathrooms</span>
                    <span className="font-medium">{property.bathrooms}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Availability</span>
                    <Badge variant={property.available ? "default" : "secondary"}>
                      {property.available ? "Available" : "Occupied"}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PropertyDetail;
