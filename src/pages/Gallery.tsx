
import { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    // Only ostrichN.jpg images below
    {
      id: 101,
      src: "/ostrich1.jpg",
      alt: "Young Chuck and Cinamon in the paddock.",
      category: "Our Birds",
      objectPosition: "object-top"
    },
    {
      id: 102,
      src: "/ostrich2.jpg",
      alt: "2 ostrich chicks in the field.",
      category: "Our Birds",
      objectPosition: "object-center"
    },
    {
      id: 103,
      src: "/ostrich3.jpg",
      alt: "Majestic Fowler.",
      category: "Our Birds",
      objectPosition: "object-top"
    },
    {
      id: 104,
      src: "/ostrich4.jpg",
      alt: "A flock of ostriches.",
      category: "Our Birds",
      objectPosition: "object-center"
    },
    {
      id: 105,
      src: "/ostrich5.jpg",
      alt: "Chuck, Cinamon and Dephane in the forest.",
      category: "Our Birds",
      objectPosition: "object-top"
    },
    {
      id: 106,
      src: "/ostrich6.jpg",
      alt: "Baby in the shell.",
      category: "Our Birds",
      objectPosition: "object-center"
    },
    {
      id: 107,
      src: "/ostrich7.jpg",
      alt: "Ostrich foot up close.",
      category: "Our Birds",
      objectPosition: "object-center"
    },
    {
      id: 108,
      src: "/ostrich8.jpg",
      alt: "Dephane in the trees.",
      category: "Our Birds",
      objectPosition: "object-top"
    },
    {
      id: 109,
      src: "/ostrich9.jpg",
      alt: "baby, look at me.",
      category: "Our Birds",
      objectPosition: "object-top"
    },
    {
      id: 110,
      src: "/ostrich10.jpg",
      alt: "Ostrich closeup.",
      category: "Our Birds",
      objectPosition: "object-center"
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
              <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
                {['ostrich1.jpg','ostrich3.jpg','ostrich5.jpg','ostrich8.jpg','ostrich9.jpg'].includes(image.src.replace('/', '')) ? (
                  <>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110"
                      aria-hidden="true"
                    />
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="relative w-full h-full object-contain z-10"
                    />
                  </>
                ) : (
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`w-full h-full object-cover ${image.objectPosition || 'object-center'} hover:scale-105 transition-transform duration-300`}
                  />
                )}
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
