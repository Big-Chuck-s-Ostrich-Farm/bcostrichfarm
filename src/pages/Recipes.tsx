
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, ChefHat } from "lucide-react";
import { Link } from "react-router-dom";
import { recipes } from "@/data/recipes";

const Recipes = () => {

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

        {/* Cooking Tips at the top */}
        <div className="vintage-container max-w-7xl mx-auto mb-12">
          <h2 className="vintage-subtitle text-center mb-6">Essential Cooking Tips</h2>
          <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
            <div className="space-y-3">
              <p className="flex items-start">
                <span className="bg-accent text-accent-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                One ostrich egg equals about 24 chicken eggs
              </p>
              <p className="flex items-start">
                <span className="bg-accent text-accent-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                Ostrich meat is very lean, so cook quickly over high heat for best results
              </p>
              <p className="flex items-start">
                <span className="bg-accent text-accent-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                Don&apos;t overcook - ostrich is best served medium-rare to medium
              </p>
            </div>
            <div className="space-y-3">
              <p className="flex items-start">
                <span className="bg-accent text-accent-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">4</span>
                Always use a meat thermometer for best results (135&deg; F for medium rare; 165&deg; F for well done)
              </p>
              <p className="flex items-start">
                <span className="bg-accent text-accent-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">5</span>
                Let the meat rest for 5-10 minutes after cooking
              </p>
              <p className="flex items-start">
                <span className="bg-accent text-accent-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">6</span>
                Marinate for enhanced flavor and tenderness
              </p>
              <p className="flex items-start">
                <span className="bg-accent text-accent-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">7</span>
                Ostrich pairs beautifully with bold herbs and robust sauces
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
              <Card className="vintage-container hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer h-full">
                <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={recipe.image} 
                    alt={recipe.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="vintage-subtitle text-lg">{recipe.name}</CardTitle>
                  <CardDescription className="text-sm">{recipe.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {recipe.prepTime}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      {recipe.servings}
                    </div>
                    <div className="flex items-center">
                      <ChefHat className="w-3 h-3 mr-1" />
                      {recipe.difficulty}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Recipes;
