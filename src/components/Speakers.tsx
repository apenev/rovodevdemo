import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Building } from "lucide-react";

// Import speaker images
import speaker1 from "@/assets/speakers/speaker-1.jpg";
import speaker2 from "@/assets/speakers/speaker-2.jpg";
import speaker3 from "@/assets/speakers/speaker-3.jpg";
import speaker4 from "@/assets/speakers/speaker-4.jpg";
import speaker5 from "@/assets/speakers/speaker-5.jpg";
import speaker6 from "@/assets/speakers/speaker-6.jpg";
import speaker7 from "@/assets/speakers/speaker-7.jpg";
import speaker8 from "@/assets/speakers/speaker-8.jpg";
import speaker9 from "@/assets/speakers/speaker-9.jpg";
import speaker10 from "@/assets/speakers/speaker-10.jpg";
import speaker11 from "@/assets/speakers/speaker-11.jpg";
import speaker12 from "@/assets/speakers/speaker-12.jpg";
import speaker13 from "@/assets/speakers/speaker-13.jpg";
import speaker14 from "@/assets/speakers/speaker-14.jpg";
import speaker15 from "@/assets/speakers/speaker-15.jpg";
import speaker16 from "@/assets/speakers/speaker-16.jpg";

interface Speaker {
  id: number;
  name: string;
  title: string;
  company: string;
  location: string;
  image: string;
  expertise: string[];
  bio: string;
}

const speakers: Speaker[] = [
  {
    id: 1,
    name: "Jovana Dunisijevic",
    title: "Senior Technical Evangelist",
    company: "Atlassian",
    location: "Sydney, Australia",
    image: speaker1,
    expertise: ["Perf & Scale","Cloud Architecture"],
    bio: "Passionate about building scalable systems and developer tools."
  },
  {
    id: 2,
    name: "Shane Wolf",
    title: "Senior Engineering Manager",
    company: "Atlassian",
    location: "California, USA",
    image: speaker2,
    expertise: ["AI/ML", "Leadership"] ,
    bio: "Leading digital transformation initiatives across Europe with 15+ years of experience."

},
  {
    id: 3,
    name: "Willer Liu",
    title: "Senior Backend Engineer",
    company: "Atlassian",
    location: "Washington, USA",
    image: speaker3,
    expertise: ["Data Science", "Machine Learning"],
    bio: "Expert in applying ML to solve complex business problems at scale."
  },
  {
    id: 4,
    name: "Axel Sooriah",
    title: "Product Management Evangelist",
    company: "Atlassian",
    location: "Rennes, France",
    image: speaker4,
    expertise: ["Team Leadership", "Product Strategy"],
    bio: "Building world-class engineering teams and delivering innovative products."
  },
  {
    id: 5,
    name: "Laurena Alves",
    title: "Head of Product Marketing",
    company: "Atlassian",
    location: "Montreal, Canada",
    image: speaker5,
    expertise: ["Product Marketing", "GTM"],
    bio: "Bringing developer AI solutions to market end to end"
  },
  {
    id: 6,
    name: "Andrew Boyagi",
    title: "Customer CTO",
    company: "Atlassian",
    location: "Oxford, UK",
    image: speaker6,
    expertise: ["Developer Experience", "Tech Leadership"],
    bio: "Serial leadership in DevEx revolutionizing large tech organisations."
  },
  {
    id: 7,
    name: "Matt Colman",
    title: "Senior Engineering Manager",
    company: "Atlassian",
    location: "Sydney, Australia",
    image: speaker7,
    expertise: ["Product Development", "AI"],
    bio: "Driving product innovation and user engagement at scale."
  },
  {
    id: 8,
    name: "Ryan Jiang",
    title: "Principal Product Manager",
    company: "Atlassian",
    location: "Sydney, Australia",
    image: speaker8,
    expertise: ["Artificial Intelligence", "Product Management"],
    bio: "Advancing the frontiers of AI research and ethical AI development."
  },
  {
    id: 9,
    name: "Melissa Miller",
    title: "Product Marketing Manager",
    company: "Atlassian",
    location: "California, USA",
    image: speaker9,
    expertise: ["AI", "Product Marketing"],
    bio: "AI product marketing and GTM"
  },
  {
    id: 10,
    name: "Mike Cannon-Brookes",
    title: "CEO",
    company: "Atlassian",
    location: "Sydney, Australia",
    image: speaker10,
    expertise: ["CEO", "Tech"],
    bio: "Building the next generation of future in tech."
  },
  {
    id: 11,
    name: "Anu Bharadwaj",
    title: "President",
    company: "Atlassian",
    location: "California, USA",
    image: speaker11,
    expertise: ["Product", "Cloud Evolution"],
    bio: "Enabling rapid, reliable software delivery at massive scale."
  },
  {
    id: 12,
    name: "Carlos Sainz",
    title: "F1 Williams Driver",
    company: "Atlassian Williams Racing",
    location: "Barcelona, Spain",
    image: speaker12,
    expertise: ["Speed", "Efficientcy"],
    bio: "Leveraging technology to create sustainable wins at Grand Pris"
  },
  {
    id: 13,
    name: "Chris Clarke",
    title: "Head of Product Bitbucket Cloud",
    company: "Atlassian",
    location: "California, USA",
    image: speaker13,
    expertise: ["Cloud", "Product Management"],
    bio: "Designing and implementing enterprise-scale cloud solutions."
  },
  {
    id: 14,
    name: "Chris Davidson",
    title: "Lead Solutions Engineer",
    company: "Atlassian",
    location: "London, UK",
    image: speaker14,
    expertise: ["Digital Transformation", "Strategy"],
    bio: "Helping organizations navigate digital transformation and technology adoption."
  },
  {
    id: 15,
    name: "Taroon Mandhana",
    title: "Head of Product Engineering",
    company: "Atlassian",
    location: "Washingtong, USA",
    image: speaker15,
    expertise: ["Innovation", "Development"],
    bio: "Inspiring developers and fostering innovation in the tech community."
  },
  {
    id: 16,
    name: "Sherif Mansour",
    title: "Distinguished Product Manager",
    company: "Atlassian",
    location: "Sydney, Australia",
    image: speaker16,
    expertise: ["Product Development", "Leadership"],
    bio: "Creating engaging product experiences that connect billions of users worldwide."
  }
];

const Speakers = () => {
  return (
    <section id="speakers" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-spanish-terracotta to-barcelona-blue bg-clip-text text-transparent">
            Meet Our Speakers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn from industry leaders, innovators, and visionaries who are shaping the future of technology across Europe and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {speakers.map((speaker) => (
            <Card 
              key={speaker.id} 
              className="group hover:shadow-xl hover:shadow-spanish-terracotta/10 transition-all duration-300 hover:-translate-y-2 cursor-pointer border-0 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="relative mb-4">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover ring-4 ring-spanish-gold/20 group-hover:ring-spanish-gold/50 transition-all duration-300"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <Badge 
                      variant="secondary" 
                      className="bg-gradient-to-r from-spanish-terracotta to-spanish-gold text-white text-xs px-2 py-1"
                    >
                      Speaker
                    </Badge>
                  </div>
                </div>

                <div className="text-center space-y-2">
                  <h3 className="font-bold text-lg text-foreground group-hover:text-spanish-terracotta transition-colors">
                    {speaker.name}
                  </h3>
                  <p className="text-sm font-medium text-primary">
                    {speaker.title}
                  </p>
                  <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                    <Building className="w-3 h-3" />
                    <span>{speaker.company}</span>
                  </div>
                  <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    <span>{speaker.location}</span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-1 justify-center">
                  {speaker.expertise.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="text-xs border-spanish-terracotta/30 text-spanish-terracotta hover:bg-spanish-terracotta/10"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                <p className="text-xs text-muted-foreground mt-3 line-clamp-2">
                  {speaker.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            More amazing speakers to be announced soon!
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="border-spanish-terracotta text-spanish-terracotta hover:bg-spanish-terracotta hover:text-white transition-all duration-300"
          >
            Become a Speaker
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Speakers;