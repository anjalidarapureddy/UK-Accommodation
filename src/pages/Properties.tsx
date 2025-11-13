import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { properties } from "@/data/properties";
import { Bed, Bath, MapPin } from "lucide-react";

const Properties = () => {
  const [cityFilter, setCityFilter] = useState<string>("all");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [roomsFilter, setRoomsFilter] = useState<string>("all");

  const filteredProperties = properties.filter((property) => {
    const cityMatch = cityFilter === "all" || property.city === cityFilter;
    const priceMatch = !maxPrice || property.price <= parseInt(maxPrice);
    const roomsMatch = roomsFilter === "all" || property.rooms === parseInt(roomsFilter);
    return cityMatch && priceMatch && roomsMatch;
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Available Properties</h1>
          <p className="text-muted-foreground">Browse our selection of quality rental properties across the UK</p>
        </div>

        {/* Filters */}
        <Card className="mb-8 shadow-card">
          <CardHeader>
            <CardTitle>Filter Properties</CardTitle>
            <CardDescription>Narrow down your search to find the perfect property</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Select value={cityFilter} onValueChange={setCityFilter}>
                  <SelectTrigger id="city">
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Cities</SelectItem>
                    <SelectItem value="London">London</SelectItem>
                    <SelectItem value="Manchester">Manchester</SelectItem>
                    <SelectItem value="Birmingham">Birmingham</SelectItem>
                    <SelectItem value="Edinburgh">Edinburgh</SelectItem>
                    <SelectItem value="Cotswolds">Cotswolds</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="price">Max Price (£/month)</Label>
                <Input
                  id="price"
                  type="number"
                  placeholder="e.g. 2000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="rooms">Bedrooms</Label>
                <Select value={roomsFilter} onValueChange={setRoomsFilter}>
                  <SelectTrigger id="rooms">
                    <SelectValue placeholder="Select rooms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any</SelectItem>
                    <SelectItem value="1">1 Bedroom</SelectItem>
                    <SelectItem value="2">2 Bedrooms</SelectItem>
                    <SelectItem value="3">3 Bedrooms</SelectItem>
                    <SelectItem value="4">4+ Bedrooms</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="mb-4">
          <p className="text-muted-foreground">
            Showing {filteredProperties.length} {filteredProperties.length === 1 ? "property" : "properties"}
          </p>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <Link key={property.id} to={`/property/${property.id}`}>
              <Card className="h-full shadow-card hover:shadow-hover transition-all cursor-pointer">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-xl">{property.name}</CardTitle>
                    <Badge variant="secondary" className="shrink-0">
                      {property.type}
                    </Badge>
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm gap-1">
                    <MapPin className="h-4 w-4" />
                    {property.location}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Bed className="h-4 w-4" />
                        {property.rooms}
                      </div>
                      <div className="flex items-center gap-1">
                        <Bath className="h-4 w-4" />
                        {property.bathrooms}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-primary">
                      £{property.price}
                      <span className="text-sm font-normal text-muted-foreground">/mo</span>
                    </div>
                  </div>
                  <Button className="w-full">View Details</Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No properties match your filters. Try adjusting your search criteria.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Properties;
