import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-spanish-terracotta to-spanish-gold"></div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-spanish-terracotta to-barcelona-blue bg-clip-text text-transparent">
              Team 25 EU
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#speakers" className="text-foreground hover:text-primary transition-colors">
              Speakers
            </a>
            <a href="#schedule" className="text-foreground hover:text-primary transition-colors">
              Schedule
            </a>
            <a href="#location" className="text-foreground hover:text-primary transition-colors">
              Location
            </a>
          </nav>

          <Button 
            variant="default" 
            className="bg-gradient-to-r from-spanish-terracotta to-spanish-gold hover:shadow-lg hover:shadow-spanish-gold/25 transition-all duration-300"
          >
            Register Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;