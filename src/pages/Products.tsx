
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const Products = () => {
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

  // Extract unique tags (categories)
  const tags = Array.from(new Set(products.map((p) => p.category)));
  const [selectedTag, setSelectedTag] = React.useState<string | null>(null);

  // Filter products by selected tag
  const filteredProducts = selectedTag ? products.filter((p) => p.category === selectedTag) : products;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="vintage-title mb-4">Our Premium Products</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our range of high-quality ostrich products, all raised with care on our family farm.
          </p>
          {/* Tag filter buttons */}
          <div className="flex justify-center mt-6 mb-8">
            <div className="flex space-x-2 bg-card p-2 rounded-lg border border-primary/20 overflow-x-auto">
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${!selectedTag ? 'bg-primary text-primary-foreground' : 'hover:bg-muted text-muted-foreground'}`}
                onClick={() => setSelectedTag(null)}
              >
                All
              </button>
              {tags.map((tag) => (
                <button
                  key={tag}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${selectedTag === tag ? 'bg-primary text-primary-foreground' : 'hover:bg-muted text-muted-foreground'}`}
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="vintage-container hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="vintage-subtitle text-xl">{product.name}</CardTitle>
                <CardDescription className="text-accent font-medium">{product.category}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
