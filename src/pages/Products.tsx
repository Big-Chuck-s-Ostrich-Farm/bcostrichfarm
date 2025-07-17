
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Premium Ostrich Meat",
      description: "Lean, healthy red meat with exceptional flavor. High in protein and low in fat.",
      category: "Meat",
      features: ["Grass-fed", "Hormone-free", "Locally raised"],
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=500&h=400&fit=crop"
    },
    {
      id: 2,
      name: "Ostrich Leather Goods",
      description: "Luxurious leather products made from our own ostriches. Durable and beautiful.",
      category: "Leather",
      features: ["Handcrafted", "Unique texture", "Long-lasting"],
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=500&h=400&fit=crop"
    },
    {
      id: 3,
      name: "Fresh Ostrich Eggs",
      description: "Giant eggs perfect for cooking and decoration. One egg feeds a family!",
      category: "Eggs",
      features: ["Farm fresh", "Nutrient-rich", "Unique size"],
      image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=500&h=400&fit=crop"
    },
    {
      id: 4,
      name: "Ostrich Feathers",
      description: "Beautiful plumes for decoration, crafts, and fashion accessories.",
      category: "Feathers",
      features: ["Natural colors", "Premium quality", "Various sizes"],
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=500&h=400&fit=crop"
    },
    {
      id: 5,
      name: "Ostrich Oil",
      description: "Pure ostrich oil with moisturizing and healing properties for skin care.",
      category: "Cosmetics",
      features: ["100% natural", "Hypoallergenic", "Anti-inflammatory"],
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=500&h=400&fit=crop"
    },
    {
      id: 6,
      name: "Jerky & Dried Meat",
      description: "Delicious ostrich jerky made with traditional methods and natural spices.",
      category: "Processed",
      features: ["No preservatives", "High protein", "Long shelf life"],
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=500&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="vintage-title mb-4">Our Premium Products</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our range of high-quality ostrich products, all raised with care on our family farm. 
            Visit our farm store to experience these unique offerings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
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

        <div className="mt-16 text-center">
          <div className="vintage-container max-w-2xl mx-auto">
            <h2 className="vintage-subtitle mb-4">Visit Our Farm Store</h2>
            <p className="text-muted-foreground mb-6">
              All our products are available for purchase at our on-site farm store. 
              We're open Tuesday through Sunday, 9 AM to 5 PM. Come experience the 
              freshness and quality of our ostrich products firsthand.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>📍 123 Farm Road, Countryside Valley</p>
              <p>📞 (555) 123-FARM</p>
              <p>🕘 Tue-Sun: 9 AM - 5 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
