import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-spanish-terracotta via-barcelona-blue to-spanish-gold text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Conference Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-white/20"></div>
              <h3 className="text-2xl font-bold">Team 25 EU</h3>
            </div>
            <p className="text-white/80 mb-4">
              Europe's premier technology conference bringing together the brightest minds in tech.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>March 15-17, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Barcelona, Spain</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-spanish-gold transition-colors">Home</a></li>
              <li><a href="#speakers" className="hover:text-spanish-gold transition-colors">Speakers</a></li>
              <li><a href="#schedule" className="hover:text-spanish-gold transition-colors">Schedule</a></li>
              <li><a href="#sponsors" className="hover:text-spanish-gold transition-colors">Sponsors</a></li>
              <li><a href="#location" className="hover:text-spanish-gold transition-colors">Location</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@team25eu.com" className="hover:text-spanish-gold transition-colors">
                  info@team25eu.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+34123456789" className="hover:text-spanish-gold transition-colors">
                  +34 123 456 789
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-white/80 text-sm mb-4">
              Get the latest updates on speakers, schedule, and announcements.
            </p>
            <Button 
              variant="secondary"
              className="w-full bg-white/20 hover:bg-white/30 border-0 text-white"
            >
              Subscribe Newsletter
            </Button>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2024 Team 25 EU Conference. All rights reserved. Made with ❤️ in Barcelona.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;