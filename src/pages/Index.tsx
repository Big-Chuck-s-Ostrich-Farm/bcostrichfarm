
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
        <div className="grid md:grid-cols-2 gap-8">
          <div className="vintage-container fade-in">
            <h2 className="vintage-subtitle mb-4">Our Heritage</h2>
            <p className="text-muted-foreground">
              Since 1985, our family has been dedicated to raising the finest ostriches 
              in a sustainable and ethical manner. We take pride in our traditional farming 
              methods while embracing modern practices for the best quality products.
            </p>
          </div>
          <div className="vintage-container fade-in">
            <h2 className="vintage-subtitle mb-4">Farm Fresh Products</h2>
            <p className="text-muted-foreground">
              From premium ostrich meat to beautiful leather goods, we offer a wide range 
              of products. Visit our farm store to experience the unique taste and quality 
              of our ostrich products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
