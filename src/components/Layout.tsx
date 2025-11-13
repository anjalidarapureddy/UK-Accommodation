import { Link, useLocation } from "react-router-dom";
import { Home, Info, Mail, MapPin, Building2, PlusCircle, LogIn } from "lucide-react";
import { Button } from "./ui/button";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Building2 className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-foreground">UK Accommodation</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-1">
              <Link to="/">
                <Button
                  variant={isActive("/") ? "default" : "ghost"}
                  size="sm"
                  className="gap-2"
                >
                  <Home className="h-4 w-4" />
                  Home
                </Button>
              </Link>
              <Link to="/properties">
                <Button
                  variant={isActive("/properties") ? "default" : "ghost"}
                  size="sm"
                  className="gap-2"
                >
                  <Building2 className="h-4 w-4" />
                  Properties
                </Button>
              </Link>
              <Link to="/locations">
                <Button
                  variant={isActive("/locations") ? "default" : "ghost"}
                  size="sm"
                  className="gap-2"
                >
                  <MapPin className="h-4 w-4" />
                  Locations
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  variant={isActive("/about") ? "default" : "ghost"}
                  size="sm"
                  className="gap-2"
                >
                  <Info className="h-4 w-4" />
                  About
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant={isActive("/contact") ? "default" : "ghost"}
                  size="sm"
                  className="gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Contact
                </Button>
              </Link>
            </nav>

            <div className="flex items-center space-x-2">
              <Link to="/add-property" className="hidden sm:block">
                <Button variant="outline" size="sm" className="gap-2">
                  <PlusCircle className="h-4 w-4" />
                  List Property
                </Button>
              </Link>
              <Link to="/login">
                <Button size="sm" className="gap-2">
                  <LogIn className="h-4 w-4" />
                  <span className="hidden sm:inline">Sign In</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Navigation */}
          <nav className="md:hidden flex items-center space-x-1 pb-3 overflow-x-auto">
            <Link to="/">
              <Button variant={isActive("/") ? "default" : "ghost"} size="sm">
                Home
              </Button>
            </Link>
            <Link to="/properties">
              <Button variant={isActive("/properties") ? "default" : "ghost"} size="sm">
                Properties
              </Button>
            </Link>
            <Link to="/locations">
              <Button variant={isActive("/locations") ? "default" : "ghost"} size="sm">
                Locations
              </Button>
            </Link>
            <Link to="/about">
              <Button variant={isActive("/about") ? "default" : "ghost"} size="sm">
                About
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant={isActive("/contact") ? "default" : "ghost"} size="sm">
                Contact
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="h-5 w-5 text-primary" />
                <span className="font-bold">UK Accommodation</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Connecting property owners with renters across the UK.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/properties" className="text-muted-foreground hover:text-primary">Browse Properties</Link></li>
                <li><Link to="/locations" className="text-muted-foreground hover:text-primary">Locations</Link></li>
                <li><Link to="/add-property" className="text-muted-foreground hover:text-primary">List Property</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Email: info@ukaccommodation.co.uk</li>
                <li>Phone: +44 20 1234 5678</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} UK Accommodation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
