
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Eye, Zap, Ruler, Heart, Egg, Feather, Ham, Leaf, Globe, Sun } from "lucide-react";

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
      icon: <Ruler className="w-8 h-8 text-accent" />,
      title: "Impressive Size",
      description: "Adult ostriches can weigh up to 350 pounds and stand 9 feet tall, making them the world's largest bird."
    },
    {
      icon: <Ham className="w-8 h-8 text-accent" />,
      title: "Healthy Meat",
      description: "Ostrich meat is 97% fat-free, high in protein, iron, and looks very much like lean beef."
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

  const nutritionData = [
    {
      nutrient: "Calories",
      Ostrich: 97,
      Beef: 217,
      Pork: 291,
      Chicken: 219,
    },
    {
      nutrient: "Protein (g)",
      Ostrich: 22,
      Beef: 19,
      Pork: 16,
      Chicken: 18,
    },
    {
      nutrient: "Fat (g)",
      Ostrich: 1.2,
      Beef: 15,
      Pork: 23,
      Chicken: 15,
    },
    {
      nutrient: "Iron (mg)",
      Ostrich: 3.2,
      Beef: 2.6,
      Pork: 1.0,
      Chicken: 1.2,
    },
    {
      nutrient: "Cholesterol (mg)",
      Ostrich: 58,
      Beef: 86,
      Pork: 86,
      Chicken: 89,
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

        {/* Nutrition Comparison Table - moved to top */}
        <div className="vintage-container mb-16">
          <h2 className="vintage-subtitle text-center mb-8">Nutritional Comparison (per 100g)</h2>
          <div className="overflow-x-auto">
            <div className="min-w-[600px] max-w-4xl mx-auto">
              <Table className="w-full table-fixed">
                <colgroup>
                  <col className="w-1/5" />
                  <col className="w-1/5" />
                  <col className="w-1/5" />
                  <col className="w-1/5" />
                  <col className="w-1/5" />
                </colgroup>
                <TableHeader>
                  <TableRow className="text-lg">
                    <TableHead className="font-semibold text-lg">Nutrient</TableHead>
                    <TableHead className="text-center font-semibold text-accent text-lg">Ostrich</TableHead>
                    <TableHead className="text-center font-semibold text-lg">Beef</TableHead>
                    <TableHead className="text-center font-semibold text-lg">Pork</TableHead>
                    <TableHead className="text-center font-semibold text-lg">Chicken</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {nutritionData.map((row) => (
                    <TableRow key={row.nutrient} className="text-lg">
                      <TableCell className="font-medium text-lg">{row.nutrient}</TableCell>
                      <TableCell className="text-center font-bold text-accent bg-accent/10 text-lg">{row.Ostrich}</TableCell>
                      <TableCell className="text-center text-lg">{row.Beef}</TableCell>
                      <TableCell className="text-center text-lg">{row.Pork}</TableCell>
                      <TableCell className="text-center text-lg">{row.Chicken}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
          <p className="text-center text-muted-foreground text-sm mt-4">
            *Values are approximate and may vary based on preparation method and cut
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
          <div className="vintage-container text-center">
            <h2 className="vintage-subtitle mb-6">Why Farm Ostriches?</h2>
            <div className="max-w-3xl mx-auto">
              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-4">
                  <span className="bg-accent/20 text-accent rounded-full w-12 h-12 flex items-center justify-center"><Leaf className="w-7 h-7" /></span>
                  <div className="text-left">
                    <span className="font-semibold text-primary text-lg md:text-xl">Sustainable meat production</span>
                    <p className="text-muted-foreground text-base md:text-lg">Ostriches require less land and water than traditional livestock.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="bg-accent/20 text-accent rounded-full w-12 h-12 flex items-center justify-center"><Globe className="w-7 h-7" /></span>
                  <div className="text-left">
                    <span className="font-semibold text-primary text-lg md:text-xl">Efficient land use</span>
                    <p className="text-muted-foreground text-base md:text-lg">More protein per acre compared to cattle or pigs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="bg-accent/20 text-accent rounded-full w-12 h-12 flex items-center justify-center"><Egg className="w-7 h-7" /></span>
                  <div className="text-left">
                    <span className="font-semibold text-primary text-lg md:text-xl">Multiple valuable products</span>
                    <p className="text-muted-foreground text-base md:text-lg">Meat, eggs, leather, feathers, and oil.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="bg-accent/20 text-accent rounded-full w-12 h-12 flex items-center justify-center"><Sun className="w-7 h-7" /></span>
                  <div className="text-left">
                    <span className="font-semibold text-primary text-lg md:text-xl">Environmentally friendly</span>
                    <p className="text-muted-foreground text-base md:text-lg">Lower carbon footprint and drought resistance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
