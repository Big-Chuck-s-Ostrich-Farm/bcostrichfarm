import React from "react";
import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

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

const recipeIdeas = [
  {
    title: "Ostrich Carpaccio",
    description: "A light, fresh, zero-carb plate that can be served as an impressive appetizer or a light meal."
  },
  {
    title: "Fan Fajitas",
    description: "Marinate and grill for outstanding tenderness and flavor retention."
  },
  {
    title: "Bacon & Herb Wrapped Ostrich Fan",
    description: "Wrapped in bacon and aromatic herbs, perfect for special occasions."
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="max-w-2xl mx-auto py-12 px-4">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <Link to="/products" className="text-primary underline">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Link to="/products" className="text-primary underline mb-6 inline-block">&larr; Back to Products</Link>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <div className="w-full aspect-video bg-muted rounded-lg mb-4 overflow-hidden shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-2 text-center md:text-left">
            <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold tracking-wide mb-2">
              {product.category}
            </span>
            <h1 className="vintage-title text-3xl font-bold mb-2">{product.name}</h1>
          </div>
        </div>
        {/* Product Details */}
        <div className="flex-1 flex flex-col gap-6">
          <section>
            <h2 className="vintage-subtitle text-2xl mb-2">Highlights</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              {highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="vintage-subtitle text-2xl mb-2">Description</h2>
            <p className="text-muted-foreground mb-2">{product.description}</p>
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
          </section>
          <section>
            <h2 className="vintage-subtitle text-2xl mb-2">Recipe Ideas</h2>
            <ul className="space-y-2">
              {recipeIdeas.map((r, i) => (
                <li key={i} className="bg-muted rounded-lg p-3 shadow-sm">
                  <span className="font-semibold text-primary">{r.title}:</span> {r.description}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 