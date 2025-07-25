import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, ChefHat, ArrowLeft, Timer, Utensils } from "lucide-react";
import { recipes } from "@/data/recipes";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === parseInt(id || "0"));

  if (!recipe) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="vintage-title mb-4">Recipe Not Found</h1>
          <Button asChild>
            <Link to="/recipes">Back to Recipes</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Button asChild variant="outline" className="mb-8">
          <Link to="/recipes" className="inline-flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Recipes
          </Link>
        </Button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left column: Image, Overview, Ingredients */}
          <div>
            <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-6">
              <img 
                src={recipe.image} 
                alt={recipe.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pt-8"></div>
            {/* Ingredients (left column) */}
            <Card className="vintage-container">
              <CardHeader>
                <CardTitle className="vintage-subtitle flex items-center">
                  <Utensils className="w-5 h-5 mr-2 text-accent" />
                  Ingredients
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {recipe.ingredients.map((ingredient, index) => {
                    if (ingredient === "") {
                      return <li key={index} className="h-4" aria-hidden="true" />;
                    }
                    if (ingredient === "Sauce:") {
                      return <li key={index} className="font-bold text-accent text-xl pt-2 pb-1">Sauce:</li>;
                    }
                    return (
                    <li key={index} className="flex items-start">
                      <span className="bg-accent text-accent-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground">{ingredient}</span>
                    </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          </div>
          {/* Right column: Overview and Instructions */}
          <div className="space-y-8">
            <div>
              <h1 className="vintage-title mb-4">{recipe.name}</h1>
              <p className="text-lg text-muted-foreground">{recipe.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {recipe.cuts.map((cut, index) => (
                  <span key={index} className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
                    {cut}
                  </span>
                ))}
              </div>
            </div>
            <Card className="vintage-container mb-8">
              <CardHeader>
                <CardTitle className="vintage-subtitle">Recipe Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="flex flex-col items-center p-4 bg-muted/50 rounded-lg">
                    <Timer className="w-6 h-6 text-accent mb-2" />
                    <span className="text-sm text-muted-foreground">Prep Time</span>
                    <span className="font-semibold">{recipe.prepTime}</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-muted/50 rounded-lg">
                    <Clock className="w-6 h-6 text-accent mb-2" />
                    <span className="text-sm text-muted-foreground">Cook Time</span>
                    <span className="font-semibold">{recipe.cookTime}</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-muted/50 rounded-lg">
                    <Users className="w-6 h-6 text-accent mb-2" />
                    <span className="text-sm text-muted-foreground">Servings</span>
                    <span className="font-semibold">{recipe.servings}</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-muted/50 rounded-lg">
                    <ChefHat className="w-6 h-6 text-accent mb-2" />
                    <span className="text-sm text-muted-foreground">Difficulty</span>
                    <span className="font-semibold">{recipe.difficulty}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="vintage-container">
              <CardHeader>
                <CardTitle className="vintage-subtitle flex items-center">
                  <ChefHat className="w-5 h-5 mr-2 text-accent" />
                  Instructions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4">
                  {recipe.instructions.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm mr-4 mt-0.5 flex-shrink-0 font-bold">
                        {index + 1}
                      </span>
                      <p className="text-muted-foreground pt-1">{step}</p>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;