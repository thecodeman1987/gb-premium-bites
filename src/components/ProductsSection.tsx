import wafflesImage from "@/assets/waffles-product.jpg";
import buffetImage from "@/assets/breakfast-buffet.jpg";
import { UtensilsCrossed, Truck, Award, Coffee, Croissant, Apple } from "lucide-react";

const products = [
  {
    title: "Premium Waffles",
    description: "Artisan Belgian waffles — crispy on the outside, fluffy on the inside. Made with carefully selected ingredients and a traditional recipe.",
    image: wafflesImage,
    alt: "Stack of golden Belgian waffles",
  },
  {
    title: "Full Breakfast Supply",
    description: "Complete hotel breakfast supply including pastries, croissants, fresh fruit, cereals, jams, spreads, and much more — everything your guests expect.",
    image: buffetImage,
    alt: "Elegant hotel breakfast buffet spread",
  },
];

const categories = [
  { icon: UtensilsCrossed, label: "Waffles & Pancakes" },
  { icon: Croissant, label: "Pastries & Baked Goods" },
  { icon: Coffee, label: "Cereals & Granola" },
  { icon: Apple, label: "Fresh Produce" },
];

const features = [
  {
    icon: UtensilsCrossed,
    title: "Artisan Quality",
    description: "Carefully selected ingredients and traditional recipes for an authentic taste your guests will love.",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    description: "Dedicated logistics with punctual deliveries across Europe. Cold chain guaranteed.",
  },
  {
    icon: Award,
    title: "Premium Standards",
    description: "Quality certifications and rigorous controls on every single batch we produce.",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-primary uppercase tracking-[0.25em] text-sm mb-3">Our Products</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Premium Supplies for Your
            <span className="text-gradient-gold italic"> Breakfast</span>
          </h2>
        </div>

        {/* Categories strip */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card text-muted-foreground text-sm font-medium"
            >
              <cat.icon className="w-4 h-4 text-primary" />
              {cat.label}
            </div>
          ))}
        </div>

        {/* Product cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {products.map((product) => (
            <div
              key={product.title}
              className="group relative overflow-hidden rounded-lg bg-card border border-border hover:border-primary/40 transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                  {product.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
