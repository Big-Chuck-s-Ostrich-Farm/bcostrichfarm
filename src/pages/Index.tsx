
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      <section className="relative h-[70vh] bg-[url('/bcostrichfarm/PXL_20220513_003944036.jpg')] bg-cover bg-center" aria-label="Welcome hero section">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl">
            <h1 className="vintage-title text-white mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)] font-bold">
              Welcome to Big Chuck's Ostrich Farm
            </h1>
            <p className="text-lg md:text-2xl text-white/90 mb-8">
              Experience the finest quality ostrich products, raised with care and love.
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
            <h2 className="vintage-subtitle mb-4">Cuisine Recipes</h2>
            <p className="text-muted-foreground mb-4">
              Discover a world of unique flavors with ostrich meat in your cooking. Whether grilled, stir-fried, or marinated, elevate your dishes and impress your guests. Start your culinary adventure now!
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
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4" role="img" aria-label="Ostrich icon">
                <img src="/bcostrichfarm/ostrich_icon.png" alt="Ostrich icon" className="w-10 h-10 object-contain" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Our Ranch</h3>
              <p className="text-muted-foreground text-base md:text-lg text-justify mb-8 px-4 md:px-8">
                Founded in 2020, our journey began with just two chicks on an ostrich farm. What started as a humble beginning has now grown into something we are truly proud of.
              </p>
            </article>
            <article className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4" role="img" aria-label="Paw prints icon">
                <span className="text-2xl">🐾</span>
              </div>
              <h3 className="font-semibold text-primary mb-2">The Journey</h3>
              <p className="text-muted-foreground text-base md:text-lg text-justify mb-8 px-4 md:px-8">
                With a passion for farming and a commitment to excellence, we strive to continuously improve and innovate in everything we do
              </p>
            </article>
            <article className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4" role="img" aria-label="Meat icon">
                <span className="text-2xl">🥩</span>
              </div>
              <h3 className="font-semibold text-primary mb-2">Quality Products</h3>
              <p className="text-muted-foreground text-base md:text-lg text-justify mb-8 px-4 md:px-8">
                Our mission is to deliver the finest ostrich meat and other related products to our customers, ensuring both quality and freshness.
              </p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
