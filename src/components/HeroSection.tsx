import heroImage from "@/assets/hero-waffles.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium breakfast food supply"
          className="w-full h-full object-cover"
          loading="eager" />

        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <p
          className="text-primary uppercase tracking-[0.3em] text-sm mb-6 animate-fade-up"
          style={{ animationDelay: "0.2s" }}>

          Premium Food Supply
        </p>
        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 animate-fade-up leading-tight"
          style={{ animationDelay: "0.4s" }}>

          GB Premium
          <br />
          <span className="text-gradient-gold italic">Services</span>
        </h1>
        <p
          className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light animate-fade-up"
          style={{ animationDelay: "0.6s" }}>
          Premium breakfast food supplies for the finest hotels and hospitality venues across Europe.
From artisan waffles to pastries, fresh produce and more...
          <br className="hidden md:block" />
          From artisan waffles to pastries, fresh produce and more.
        </p>
        <div className="animate-fade-up" style={{ animationDelay: "0.8s" }}>
          <a
            href="#products"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-full text-sm font-medium tracking-widest uppercase transition-all hover:shadow-lg hover:shadow-primary/25">

            Discover Our Products
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-primary/40" />
      </div>
    </section>);

};

export default HeroSection;