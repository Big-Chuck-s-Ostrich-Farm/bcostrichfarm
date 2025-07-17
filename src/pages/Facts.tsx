
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Zap, Scale, Heart, Egg, Feather } from "lucide-react";

const Facts = () => {
  const facts = [
    {
      icon: <Eye className="w-8 h-8 text-accent" />,
      title: "Amazing Eyesight",
      description: "Ostriches have the largest eyes of any land animal, measuring about 2 inches in diameter - larger than their brain!"
    },
    {
      icon: <Zap className="w-8 h-8 text-accent" />,
      title: "Super Speed",
      description: "They can run up to 45 mph (72 km/h) and maintain speeds of 30 mph for long distances."
    },
    {
      icon: <Scale className="w-8 h-8 text-accent" />,
      title: "Impressive Size",
      description: "Adult ostriches can weigh up to 350 pounds and stand 9 feet tall, making them the world's largest bird."
    },
    {
      icon: <Heart className="w-8 h-8 text-accent" />,
      title: "Healthy Meat",
      description: "Ostrich meat is 97% fat-free, high in protein, iron, and tastes similar to lean beef."
    },
    {
      icon: <Egg className="w-8 h-8 text-accent" />,
      title: "Giant Eggs",
      description: "One ostrich egg weighs about 3 pounds and is equivalent to 24 chicken eggs - perfect for large families!"
    },
    {
      icon: <Feather className="w-8 h-8 text-accent" />,
      title: "Unique Feathers",
      description: "Their feathers are loose and soft, unlike other birds, which helps them stay cool in hot climates."
    }
  ];

  const additionalFacts = [
    "Ostriches don't actually bury their heads in sand - this is a myth!",
    "They can live up to 60-70 years in captivity",
    "A group of ostriches is called a flock",
    "They have two toes on each foot, unlike most birds which have three or four",
    "Ostriches are native to Africa but are now farmed worldwide",
    "They can go without water for several days, getting moisture from plants",
    "Male ostriches make a booming sound that can be heard from over a mile away",
    "They have been farmed for over 150 years",
    "Ostrich leather is considered one of the finest leathers in the world",
    "They are very social animals and prefer to live in groups"
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="vintage-title mb-4">Amazing Ostrich Facts</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the fascinating world of ostriches - these remarkable birds are full of surprises!
          </p>
        </div>

        {/* Main Facts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {facts.map((fact, index) => (
            <Card key={index} className="vintage-container hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {fact.icon}
                </div>
                <CardTitle className="vintage-subtitle text-xl">{fact.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{fact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Facts Section */}
        <div className="vintage-container">
          <h2 className="vintage-subtitle text-center mb-8">More Fascinating Facts</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {additionalFacts.map((fact, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
                <span className="bg-accent text-accent-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {index + 1}
                </span>
                <p className="text-muted-foreground">{fact}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Conservation Section */}
        <div className="mt-16">
          <div className="vintage-container max-w-4xl mx-auto text-center">
            <h2 className="vintage-subtitle mb-6">Conservation & Farming</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="font-semibold text-primary mb-3">Why Farm Ostriches?</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Sustainable meat production</li>
                  <li>• Efficient land use</li>
                  <li>• Multiple valuable products</li>
                  <li>• Environmentally friendly</li>
                  <li>• Drought resistant</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-3">Our Commitment</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Ethical treatment of animals</li>
                  <li>• Sustainable farming practices</li>
                  <li>• Supporting local ecosystem</li>
                  <li>• Educational outreach</li>
                  <li>• Quality assurance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
