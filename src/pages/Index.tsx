
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="relative h-[70vh] bg-[url('/placeholder.svg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl">
            <h1 className="vintage-title text-white mb-6">
              Welcome to Our Family Ostrich Farm
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Experience the finest quality ostrich products, raised with care in our traditional farm setting.
            </p>
            <Button asChild className="bg-accent hover:bg-accent/90">
              <Link to="/products" className="inline-flex items-center">
                Explore Our Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="vintage-container fade-in">
            <h2 className="vintage-subtitle mb-4">Traditional Recipes</h2>
            <p className="text-muted-foreground mb-4">
              Discover delicious ways to prepare ostrich meat and eggs with our 
              family recipes, passed down through generations. From grilled steaks 
              to hearty stews, explore the unique flavors of ostrich cuisine.
            </p>
            <Button asChild variant="outline">
              <Link to="/recipes" className="inline-flex items-center">
                View Recipes
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="vintage-container fade-in">
            <h2 className="vintage-subtitle mb-4">Get In Touch</h2>
            <p className="text-muted-foreground mb-4">
              Visit our farm store, schedule a tour, or simply ask us questions 
              about our ostrich products. We're here to help and would love to 
              share our passion for sustainable farming with you.
            </p>
            <Button asChild variant="outline">
              <Link to="/contact" className="inline-flex items-center">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* New About Us Section */}
        <div className="vintage-container fade-in">
          <h2 className="vintage-subtitle text-center mb-8">About Our Farm</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🦆</span>
              </div>
              <h3 className="font-semibold text-primary mb-2">Our Heritage</h3>
              <p className="text-muted-foreground text-sm">
                Since 1985, our family has been dedicated to raising the finest ostriches 
                in a sustainable and ethical manner. We take pride in our traditional farming 
                methods while embracing modern practices for the best quality products.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="font-semibold text-primary mb-2">Sustainable Farming</h3>
              <p className="text-muted-foreground text-sm">
                We believe in responsible farming that respects the environment and our animals. 
                Our ostriches roam freely on natural pastures, and we use sustainable practices 
                that protect the land for future generations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="font-semibold text-primary mb-2">Quality Products</h3>
              <p className="text-muted-foreground text-sm">
                From premium ostrich meat to beautiful leather goods, we offer a wide range 
                of products. Visit our farm store to experience the unique taste and quality 
                of our ostrich products, all raised with care and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
