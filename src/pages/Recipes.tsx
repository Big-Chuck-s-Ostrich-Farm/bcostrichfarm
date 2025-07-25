
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, ChefHat } from "lucide-react";
import { Link } from "react-router-dom";
import { recipes } from "@/data/recipes";
import React from "react";

const Recipes = () => {
  // Extract unique cuts from all recipes
  const allCuts = recipes.flatMap(recipe => recipe.cuts);
  const cuts = Array.from(new Set(allCuts));
  const [selectedCut, setSelectedCut] = React.useState<string | null>(null);

  // Filter recipes by selected cut
  const filteredRecipes = selectedCut ? recipes.filter(recipe => recipe.cuts.includes(selectedCut)) : recipes;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="vintage-title mb-4">Ostrich Recipes</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover delicious ways to prepare ostrich meat and eggs. Our family recipes 
            have been perfected over generations of farming.
          </p>
          {/* Cuts filter buttons */}
          <div className="flex justify-center mt-6 mb-8">
            <div className="flex space-x-2 bg-card p-2 rounded-lg border border-primary/20 overflow-x-auto">
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${!selectedCut ? 'bg-primary text-primary-foreground' : 'hover:bg-muted text-muted-foreground'}`}
                onClick={() => setSelectedCut(null)}
              >
                All
              </button>
              {cuts.map((cut) => (
                <button
                  key={cut}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${selectedCut === cut ? 'bg-primary text-primary-foreground' : 'hover:bg-muted text-muted-foreground'}`}
                  onClick={() => setSelectedCut(cut)}
                >
                  {cut}
                </button>
              ))}
            </div>
          </div>
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
                Enhance the flavor of ostrich meat with bold herbs and spices, or simply season with salt and pepper
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
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => (
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
                  <div className="flex flex-wrap gap-1 mt-2">
                    {recipe.cuts.map((cut, index) => (
                      <span key={index} className="inline-block bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-semibold tracking-wide">
                        {cut}
                      </span>
                    ))}
                  </div>
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
