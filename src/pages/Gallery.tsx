
import { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop",
      alt: "Ostriches roaming in the pasture",
      category: "Farm Life"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=800&h=600&fit=crop",
      alt: "Young ostriches in the field",
      category: "Farm Life"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=800&h=600&fit=crop",
      alt: "Adult ostrich portrait",
      category: "Our Birds"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&h=600&fit=crop",
      alt: "Farm landscape with flowers",
      category: "Farm Life"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800&h=600&fit=crop",
      alt: "Farm cat resting",
      category: "Farm Life"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop",
      alt: "Sunset over the farm",
      category: "Scenery"
    },
    // User-uploaded images in public/
    {
      id: 101,
      src: "/ostrich1.jpg",
      alt: "Ostrich photo 1",
      category: "Our Birds"
    },
    {
      id: 102,
      src: "/ostrich2.jpg",
      alt: "Ostrich photo 2",
      category: "Our Birds"
    },
    {
      id: 103,
      src: "/ostrich3.jpg",
      alt: "Ostrich photo 3",
      category: "Our Birds"
    },
    {
      id: 104,
      src: "/ostrich4.jpg",
      alt: "Ostrich photo 4",
      category: "Our Birds"
    },
    {
      id: 105,
      src: "/ostrich5.jpg",
      alt: "Ostrich photo 5",
      category: "Our Birds"
    },
    {
      id: 106,
      src: "/ostrich6.jpg",
      alt: "Ostrich photo 6",
      category: "Our Birds"
    },
    {
      id: 107,
      src: "/ostrich7.jpg",
      alt: "Ostrich photo 7",
      category: "Our Birds"
    },
    {
      id: 108,
      src: "/ostrich8.jpg",
      alt: "Ostrich photo 8",
      category: "Our Birds"
    },
    {
      id: 109,
      src: "/ostrich9.jpg",
      alt: "Ostrich photo 9",
      category: "Our Birds"
    },
    {
      id: 110,
      src: "/ostrich10.jpg",
      alt: "Ostrich photo 10",
      category: "Our Birds"
    },
  ];

  const categories = ["All", "Farm Life", "Our Birds", "Scenery"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="vintage-title mb-4">Farm Gallery</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a visual journey through our ostrich farm. From our magnificent birds to 
            the beautiful countryside that surrounds us.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 bg-card p-2 rounded-lg border border-primary/20 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted text-muted-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className="vintage-container cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-contain bg-black hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4">
                <p className="text-sm text-accent font-medium">{image.category}</p>
                <p className="text-muted-foreground">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for full-size image */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl max-h-full">
              <img 
                src={selectedImage} 
                alt="Full size" 
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
