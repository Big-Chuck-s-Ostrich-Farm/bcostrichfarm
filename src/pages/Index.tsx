
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      <section className="relative h-[70vh] bg-[url('/placeholder.svg')] bg-cover bg-center" aria-label="Welcome hero section">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl">
            <h1 className="vintage-title text-white mb-6">
              Welcome to Our Family Ostrich Farm
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Experience the finest quality ostrich products, raised with care in our traditional farm setting.
            </p>
            <Button asChild className="bg-accent hover:bg-accent/90 focus:ring-2 focus:ring-accent focus:ring-offset-2">
              <Link to="/products" className="inline-flex items-center">
                Explore Our Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="grid md:grid-cols-2 gap-8 mb-16" aria-label="Featured sections">
          <article className="vintage-container fade-in">
            <h2 className="vintage-subtitle mb-4">Traditional Recipes</h2>
            <p className="text-muted-foreground mb-4">
              Discover delicious ways to prepare ostrich meat and eggs with our 
              family recipes, passed down through generations. From grilled steaks 
              to hearty stews, explore the unique flavors of ostrich cuisine.
            </p>
            <Button asChild variant="farm" size="lg" className="w-full sm:w-auto focus:ring-2 focus:ring-accent focus:ring-offset-2">
              <Link to="/recipes" className="inline-flex items-center text-base font-semibold">
                View Recipes
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </article>
          <article className="vintage-container fade-in">
            <h2 className="vintage-subtitle mb-4">Get In Touch</h2>
            <p className="text-muted-foreground mb-4">
              Visit our farmers markets or get in touch to learn more about our 
              ostrich products. We're here to help and would love to share our 
              passion for sustainable farming with you.
            </p>
            <Button asChild variant="farm" size="lg" className="w-full sm:w-auto focus:ring-2 focus:ring-accent focus:ring-offset-2">
              <Link to="/contact" className="inline-flex items-center text-base font-semibold">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </article>
        </section>

        {/* About Us Section */}
        <section className="vintage-container fade-in" aria-labelledby="about-heading">
          <h2 id="about-heading" className="vintage-subtitle text-center mb-8">About Our Farm</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <article className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4" role="img" aria-label="Heritage icon">
                <span className="text-2xl">🦆</span>
              </div>
              <h3 className="font-semibold text-primary mb-2">Our Heritage</h3>
              <p className="text-muted-foreground text-sm">
                Since 1985, our family has been dedicated to raising the finest ostriches 
                in a sustainable and ethical manner. We take pride in our traditional farming 
                methods while embracing modern practices for the best quality products.
              </p>
            </article>
            <article className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4" role="img" aria-label="Sustainability icon">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="font-semibold text-primary mb-2">Sustainable Farming</h3>
              <p className="text-muted-foreground text-sm">
                We believe in responsible farming that respects the environment and our animals. 
                Our ostriches roam freely on natural pastures, and we use sustainable practices 
                that protect the land for future generations.
              </p>
            </article>
            <article className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4" role="img" aria-label="Quality icon">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="font-semibold text-primary mb-2">Quality Products</h3>
              <p className="text-muted-foreground text-sm">
                From premium ostrich meat to beautiful leather goods, we offer a wide range 
                of products. All our products are raised with care and attention to detail, 
                ensuring the highest quality for our customers.
              </p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
