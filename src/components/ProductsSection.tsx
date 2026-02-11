import wafflesImage from "@/assets/waffles-product.jpg";
import buffetImage from "@/assets/breakfast-buffet.jpg";
import { UtensilsCrossed, Truck, Award } from "lucide-react";

const products = [
  {
    title: "Waffle Belgi Premium",
    description: "Waffle artigianali croccanti fuori, morbidi dentro. Prodotti con ingredienti selezionati e ricetta tradizionale belga.",
    image: wafflesImage,
    alt: "Stack of golden Belgian waffles",
  },
  {
    title: "Buffet Colazione Completo",
    description: "Fornitura completa per buffet colazione: waffle, croissant, pasticceria, frutta fresca e molto altro.",
    image: buffetImage,
    alt: "Elegant hotel breakfast buffet spread",
  },
];

const features = [
  {
    icon: UtensilsCrossed,
    title: "Qualità Artigianale",
    description: "Ingredienti selezionati e ricette tradizionali per un gusto autentico.",
  },
  {
    icon: Truck,
    title: "Consegna Affidabile",
    description: "Logistica dedicata con consegne puntuali in tutta Europa.",
  },
  {
    icon: Award,
    title: "Standard Premium",
    description: "Certificazioni di qualità e controlli rigorosi su ogni lotto.",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-primary uppercase tracking-[0.25em] text-sm mb-3">I Nostri Prodotti</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Eccellenza per la Tua
            <span className="text-gradient-gold italic"> Colazione</span>
          </h2>
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
