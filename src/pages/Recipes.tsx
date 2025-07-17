
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, ChefHat } from "lucide-react";

const Recipes = () => {
  const recipes = [
    {
      id: 1,
      name: "Grilled Ostrich Steaks",
      description: "Tender, juicy ostrich steaks with herbs and garlic",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=500&h=400&fit=crop",
      prepTime: "15 min",
      cookTime: "20 min",
      servings: 4,
      difficulty: "Easy",
      ingredients: [
        "4 ostrich steaks (6 oz each)",
        "2 tbsp olive oil",
        "3 cloves garlic, minced",
        "2 tbsp fresh rosemary",
        "Salt and pepper to taste",
        "1 lemon, juiced"
      ],
      instructions: [
        "Let steaks come to room temperature for 30 minutes",
        "Mix olive oil, garlic, rosemary, salt, and pepper",
        "Rub mixture onto steaks and let marinate for 15 minutes",
        "Preheat grill to medium-high heat",
        "Grill steaks for 3-4 minutes per side for medium-rare",
        "Let rest for 5 minutes before serving with lemon juice"
      ]
    },
    {
      id: 2,
      name: "Ostrich Egg Omelet",
      description: "A giant omelet perfect for feeding the whole family",
      image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=500&h=400&fit=crop",
      prepTime: "10 min",
      cookTime: "15 min",
      servings: 8,
      difficulty: "Medium",
      ingredients: [
        "1 ostrich egg (equivalent to 24 chicken eggs)",
        "2 tbsp butter",
        "1 cup mixed vegetables (bell peppers, onions, mushrooms)",
        "1 cup cheese, shredded",
        "Salt and pepper to taste",
        "Fresh herbs for garnish"
      ],
      instructions: [
        "Carefully crack the ostrich egg into a large bowl",
        "Whisk thoroughly until well combined",
        "Sauté vegetables in butter until tender",
        "Pour egg mixture into a large pan over medium heat",
        "Add vegetables and cheese when eggs start to set",
        "Fold omelet in half and serve immediately"
      ]
    },
    {
      id: 3,
      name: "Ostrich Meatballs",
      description: "Flavorful meatballs with Mediterranean herbs",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=500&h=400&fit=crop",
      prepTime: "20 min",
      cookTime: "25 min",
      servings: 6,
      difficulty: "Easy",
      ingredients: [
        "2 lbs ground ostrich meat",
        "1 cup breadcrumbs",
        "1 egg",
        "1 onion, finely chopped",
        "2 cloves garlic, minced",
        "1 tsp dried oregano",
        "Salt and pepper to taste",
        "2 tbsp olive oil"
      ],
      instructions: [
        "Mix all ingredients except oil in a large bowl",
        "Form mixture into 2-inch meatballs",
        "Heat oil in a large skillet over medium heat",
        "Brown meatballs on all sides",
        "Reduce heat and cook for 15 minutes until done",
        "Serve with your favorite sauce"
      ]
    },
    {
      id: 4,
      name: "Slow-Cooked Ostrich Stew",
      description: "Hearty stew with root vegetables and rich broth",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=500&h=400&fit=crop",
      prepTime: "30 min",
      cookTime: "3 hours",
      servings: 8,
      difficulty: "Medium",
      ingredients: [
        "3 lbs ostrich stew meat, cubed",
        "2 cups beef broth",
        "4 carrots, chopped",
        "4 potatoes, cubed",
        "2 onions, chopped",
        "3 celery stalks, chopped",
        "2 tbsp tomato paste",
        "2 bay leaves",
        "Salt and pepper to taste"
      ],
      instructions: [
        "Brown meat in a large pot with oil",
        "Add vegetables and cook for 5 minutes",
        "Add broth, tomato paste, and seasonings",
        "Bring to a boil, then reduce heat to low",
        "Simmer covered for 2-3 hours until meat is tender",
        "Remove bay leaves before serving"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="vintage-title mb-4">Ostrich Recipes</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover delicious ways to prepare ostrich meat and eggs. Our family recipes 
            have been perfected over generations of farming.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {recipes.map((recipe) => (
            <Card key={recipe.id} className="vintage-container hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                <img 
                  src={recipe.image} 
                  alt={recipe.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="vintage-subtitle text-xl">{recipe.name}</CardTitle>
                <CardDescription>{recipe.description}</CardDescription>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-2">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {recipe.prepTime} prep
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {recipe.cookTime} cook
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {recipe.servings} servings
                  </div>
                  <div className="flex items-center">
                    <ChefHat className="w-4 h-4 mr-1" />
                    {recipe.difficulty}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Ingredients:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {recipe.ingredients.map((ingredient, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2"></span>
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Instructions:</h4>
                    <ol className="text-sm text-muted-foreground space-y-1">
                      {recipe.instructions.map((step, index) => (
                        <li key={index} className="flex items-start">
                          <span className="bg-accent text-accent-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">
                            {index + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="vintage-container max-w-2xl mx-auto">
            <h2 className="vintage-subtitle mb-4">Cooking Tips</h2>
            <div className="text-left space-y-3 text-muted-foreground">
              <p>• Ostrich meat is very lean, so don't overcook it - medium-rare is perfect</p>
              <p>• Let the meat rest at room temperature before cooking for best results</p>
              <p>• One ostrich egg equals about 24 chicken eggs</p>
              <p>• Ostrich meat pairs wonderfully with bold flavors and herbs</p>
              <p>• Always use a meat thermometer for best results</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
