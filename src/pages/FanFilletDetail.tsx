import React from "react";

const fanFilletImages = [
  "https://www.americanostrichfarms.com/cdn/shop/products/2019SteveSmith_16MP_D5A8208_whole_fan_raw.jpg?v=1715093138",
  // Add more images if desired
];

const FanFilletDetail = () => (
  <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <h1 className="vintage-title text-3xl mb-4">Fan Fillet (Ostrich Fan)</h1>
    <div className="mb-6">
      <div className="flex flex-col sm:flex-row gap-4">
        {fanFilletImages.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt="Ostrich Fan Fillet"
            className="rounded-lg shadow-md object-cover w-full sm:w-1/2"
          />
        ))}
      </div>
    </div>
    <section className="mb-8">
      <h2 className="vintage-subtitle text-2xl mb-2">Description</h2>
      <p className="text-muted-foreground mb-2">
        The ostrich fan is a lean, red meat cut celebrated for its exceptional tenderness and premium flavor profile. This cut is low in fat, making it a healthy choice while still delivering a rich, satisfying taste. The ostrich fan is the most prized primal muscle cut, highly sought after by culinary professionals who appreciate its consistent texture and ability to enhance a variety of dishes.
      </p>
      <p className="text-muted-foreground">
        Perfect for marinating, grilling, or searing. Its lean nature allows it to absorb flavors well during marination, while its tenderness makes it ideal for cooking methods that lock in juices and enhance its natural flavors.
      </p>
    </section>
    <section className="mb-8">
      <h2 className="vintage-subtitle text-2xl mb-2">Nutritional Highlights</h2>
      <ul className="list-disc pl-6 text-muted-foreground">
        <li>Lower in saturated fat & cholesterol than beef, bison, deer, and even chicken</li>
        <li>Packs the most protein & iron per serving among red meats</li>
        <li>Alpha-Gal safe</li>
        <li>USDA inspected, flash-frozen at peak freshness</li>
        <li>Free from preservatives, fillers, and hormones</li>
      </ul>
    </section>
    <section className="mb-8">
      <h2 className="vintage-subtitle text-2xl mb-2">Recipe Ideas</h2>
      <ul className="list-disc pl-6 text-muted-foreground">
        <li><strong>Ostrich Carpaccio:</strong> A light, fresh, zero-carb plate that can be served as an impressive appetizer or a light meal.</li>
        <li><strong>Fan Fajitas:</strong> Marinate and grill for outstanding tenderness and flavor retention.</li>
        <li><strong>Bacon & Herb Wrapped Ostrich Fan:</strong> Wrapped in bacon and aromatic herbs, perfect for special occasions.</li>
      </ul>
    </section>
    <section>
      <h2 className="vintage-subtitle text-2xl mb-2">Why Choose Ostrich Fan?</h2>
      <ul className="list-disc pl-6 text-muted-foreground">
        <li>Lean, nutrient-dense red meat</li>
        <li>Exceptional tenderness and flavor</li>
        <li>Versatile for a variety of gourmet dishes</li>
      </ul>
    </section>
  </div>
);

export default FanFilletDetail; 