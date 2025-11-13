import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              Get in touch with our team - we're here to help
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll respond within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john.smith@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number (Optional)</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+44 20 1234 5678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="How can we help you?"
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:info@ukaccommodation.co.uk" className="text-sm text-muted-foreground hover:text-primary">
                        info@ukaccommodation.co.uk
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+442012345678" className="text-sm text-muted-foreground hover:text-primary">
                        +44 20 1234 5678
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-sm text-muted-foreground">
                        123 Property Lane<br />
                        London, UK<br />
                        SW1A 1AA
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Office Hours:</strong><br />
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
