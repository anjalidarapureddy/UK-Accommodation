import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Upload } from "lucide-react";

const AddProperty = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    location: "",
    city: "",
    rooms: "",
    bathrooms: "",
    type: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Property Listed!",
      description: "Your property has been successfully added to UK Accommodation.",
    });
    setFormData({
      name: "",
      price: "",
      location: "",
      city: "",
      rooms: "",
      bathrooms: "",
      type: "",
      description: "",
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">List Your Property</h1>
            <p className="text-muted-foreground">
              Fill in the details below to add your property to our platform
            </p>
          </div>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Property Details</CardTitle>
              <CardDescription>
                Provide accurate information to attract quality tenants
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Property Name</Label>
                  <Input
                    id="name"
                    placeholder="e.g., Modern City Centre Apartment"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="price">Monthly Rent (£)</Label>
                    <Input
                      id="price"
                      type="number"
                      placeholder="e.g., 1500"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="type">Property Type</Label>
                    <Select
                      value={formData.type}
                      onValueChange={(value) => setFormData({ ...formData, type: value })}
                    >
                      <SelectTrigger id="type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="house">House</SelectItem>
                        <SelectItem value="cottage">Cottage</SelectItem>
                        <SelectItem value="townhouse">Townhouse</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Select
                      value={formData.city}
                      onValueChange={(value) => setFormData({ ...formData, city: value })}
                    >
                      <SelectTrigger id="city">
                        <SelectValue placeholder="Select city" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="London">London</SelectItem>
                        <SelectItem value="Manchester">Manchester</SelectItem>
                        <SelectItem value="Birmingham">Birmingham</SelectItem>
                        <SelectItem value="Edinburgh">Edinburgh</SelectItem>
                        <SelectItem value="Cotswolds">Cotswolds</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Specific Location</Label>
                    <Input
                      id="location"
                      placeholder="e.g., Kensington"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="rooms">Number of Bedrooms</Label>
                    <Input
                      id="rooms"
                      type="number"
                      min="1"
                      placeholder="e.g., 2"
                      value={formData.rooms}
                      onChange={(e) => setFormData({ ...formData, rooms: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bathrooms">Number of Bathrooms</Label>
                    <Input
                      id="bathrooms"
                      type="number"
                      min="1"
                      placeholder="e.g., 2"
                      value={formData.bathrooms}
                      onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Property Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your property, including key features and amenities..."
                    rows={6}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Photos & Videos</Label>
                  <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                    <Upload className="h-8 w-8 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground">
                      PNG, JPG, MP4 up to 10MB
                    </p>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  List Property
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="mt-6 bg-muted/30">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Need Help?</h3>
              <p className="text-sm text-muted-foreground">
                If you have any questions about listing your property, please{" "}
                <a href="/contact" className="text-primary hover:underline">
                  contact our support team
                </a>
                .
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default AddProperty;
