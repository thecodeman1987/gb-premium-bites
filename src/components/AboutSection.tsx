const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary uppercase tracking-[0.25em] text-sm mb-3">About Us</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary-foreground">
              A Passion for
              <span className="text-gradient-gold italic"> Quality</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-secondary-foreground/80 leading-relaxed mb-6 text-lg">
                <span className="font-display text-2xl text-primary font-semibold">GB Premium Services</span>{" "}
                specialises in premium food supplies for the hotel and hospitality industry.
              </p>
              <p className="text-secondary-foreground/70 leading-relaxed mb-6">
                Based in Ireland, we serve luxury hotels and hospitality venues across Europe — 
                delivering the highest quality breakfast products your guests deserve.
              </p>
              <p className="text-secondary-foreground/70 leading-relaxed">
                From our signature Belgian waffles to a full range of pastries, fresh produce,
                cereals, and spreads — we provide everything needed to create an unforgettable
                breakfast experience.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { number: "0+", label: "Hotels Served" },
                { number: "12", label: "European Countries" },
                { number: "100%", label: "Quality Guaranteed" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-6">
                  <span className="font-display text-4xl font-bold text-gradient-gold min-w-[100px]">
                    {stat.number}
                  </span>
                  <span className="text-secondary-foreground/70 text-lg border-l border-primary/30 pl-6">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
