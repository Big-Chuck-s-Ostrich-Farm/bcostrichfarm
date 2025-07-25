import React from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { recipes } from "@/data/recipes";

// Copy of the products array from Products.tsx
const products = [
  {
    id: 1,
    name: "Ground Ostrich",
    description: "Lean, flavorful ground ostrich meat—perfect for burgers, meatballs, tacos, and more.",
    category: "Ground",
    features: ["High protein", "Low fat", "Versatile"],
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Fajitas Strips",
    description: "Tender strips of ostrich, ideal for stir-fries, fajitas, and quick sautés.",
    category: "Strips",
    features: ["Quick-cooking", "Tender", "Great for marinades"],
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Oyster Steak",
    description: "A juicy, flavorful cut—great for grilling or pan-searing to medium-rare.",
    category: "Steak",
    features: ["Rich flavor", "Best grilled", "Medium-rare recommended"],
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Outside Strip",
    description: "Fan-shaped, boneless, extremely tender and lean—great for grilling or pan-frying.",
    category: "Strips",
    features: ["Lean", "Sliced for grilling", "Tender"],
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Inside Strip",
    description: "A tender, mild-flavored cut—perfect for quick pan-searing or stir-frying.",
    category: "Medallion",
    features: ["Tender", "Mild flavor", "Quick-cooking"],
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Top Loin",
    description: "Premium, steakhouse-quality cut—best cooked rare to medium for maximum juiciness.",
    category: "Steak",
    features: ["Premium cut", "Juicy", "Best rare to medium"],
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    name: "Tenderloin",
    description: "The most tender ostrich cut—roast whole or slice into medallions for a gourmet meal.",
    category: "Whole Cut",
    features: ["Extremely tender", "Gourmet", "Roast or medallions"],
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    name: "Fan Fillet",
    description: "Most prized, tender, and lean cut—ideal for marinating, grilling, or searing.",
    category: "Whole Cut",
    features: ["Lean", "Quick sear", "Great for salads"],
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    name: "Wings",
    description: "Meaty ostrich wings—delicious baked, grilled, or tossed in your favorite sauce.",
    category: "Specialty",
    features: ["Meaty", "Great for sauces", "Baked or grilled"],
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 10,
    name: "Liver",
    description: "Rich, iron-packed ostrich liver—excellent sautéed with onions or in pâté.",
    category: "Offal",
    features: ["Rich flavor", "High in iron", "Great for pâté"],
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 11,
    name: "Heart",
    description: "Unique, lean muscle—marinate and grill for a delicacy full of flavor.",
    category: "Offal",
    features: ["Lean", "Unique texture", "Best grilled"],
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 12,
    name: "Neck",
    description: "Flavorful, collagen-rich cut—ideal for slow-cooked stews and hearty broths.",
    category: "Specialty",
    features: ["Collagen-rich", "Great for stews", "Slow-cooked"],
    image: "https://images.unsplash.com/photo-1608500218987-0f2b3be34b47?q=80&w=687&auto=format&fit=crop"
  }
];

const highlights = [
  "Lower in saturated fat & cholesterol than beef, bison, deer, and even chicken",
  "Packs the most protein & iron per serving among red meats",
  "Alpha-Gal safe",
  "USDA inspected, flash-frozen at peak freshness",
  "Free from preservatives, fillers, and hormones"
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="vintage-title mb-4">Product Not Found</h1>
          <Link to="/products" className="text-primary underline">Back to Products</Link>
        </div>
      </div>
    );
  }

  // Filter recipes that use this product's cuts
  const relatedRecipes = recipes.filter(recipe => 
    recipe.cuts.some(cut => 
      product.name.toLowerCase().includes(cut.toLowerCase()) || 
      cut.toLowerCase().includes(product.name.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/products" className="inline-flex items-center mb-8 text-primary hover:underline">
          &larr; Back to Products
        </Link>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left column: Image and Highlights */}
          <div>
            <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-6">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <Card className="vintage-container mb-8">
              <CardHeader>
                <CardTitle className="vintage-subtitle">Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  {highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          {/* Right column: Description and Recipe Ideas */}
          <div className="space-y-8">
            <div>
              <h1 className="vintage-title mb-4">{product.name}</h1>
              <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold tracking-wide mb-2">
                {product.category}
              </span>
              <p className="text-lg text-muted-foreground mt-2">{product.description}</p>
            </div>
            <Card className="vintage-container mb-8">
              <CardHeader>
                <CardTitle className="vintage-subtitle">Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="vintage-container">
              <CardHeader>
                <CardTitle className="vintage-subtitle">Recipe Ideas</CardTitle>
              </CardHeader>
              <CardContent>
                {relatedRecipes.length > 0 ? (
                  <div className="space-y-3">
                    {relatedRecipes.slice(0, 3).map((recipe) => (
                      <Link key={recipe.id} to={`/recipe/${recipe.id}`} className="block">
                        <div className="bg-muted rounded-lg p-3 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-primary">{recipe.name}</h4>
                              <p className="text-sm text-muted-foreground mt-1">{recipe.description}</p>
                              <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                                <span>Prep: {recipe.prepTime}</span>
                                <span>Cook: {recipe.cookTime}</span>
                                <span>Difficulty: {recipe.difficulty}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                    {relatedRecipes.length > 3 && (
                      <div className="text-left pt-2">
                        <Link 
                          to={`/recipes?cut=${encodeURIComponent(product.category)}`}
                          className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                        >
                          See more recipes
                        </Link>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-muted-foreground">No specific recipes found for this cut. Check our recipes page for general ostrich cooking ideas!</p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 