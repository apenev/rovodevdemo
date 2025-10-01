import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(213, 93, 51, 0.9) 0%, rgba(29, 77, 128, 0.8) 50%, rgba(255, 196, 81, 0.9) 100%), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Team 25 EU
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Atlassian's conference for teams, the people who lead them, and the AI-powered technology that fuels them.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center gap-2 text-lg">
              <Calendar className="w-5 h-5 text-spanish-gold" />
              <span>Oct 7-9, 2024</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <MapPin className="w-5 h-5 text-spanish-gold" />
              <span>Barcelona, Spain</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <Users className="w-5 h-5 text-spanish-gold" />
              <span>1500+ Attendees</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-spanish-terracotta hover:bg-white/90 hover:shadow-xl hover:shadow-white/25 transition-all duration-300 text-lg px-8 py-3"
            >
              Register Now
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white bg-black/40 text-white hover:bg-white hover:text-black backdrop-blur-sm transition-all duration-300 text-lg px-8 py-3 font-semibold"
            >
              View Schedule
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;