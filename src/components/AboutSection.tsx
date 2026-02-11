const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary uppercase tracking-[0.25em] text-sm mb-3">Chi Siamo</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary-foreground">
              Una Passione per la
              <span className="text-gradient-gold italic"> Qualità</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-secondary-foreground/80 leading-relaxed mb-6 text-lg">
                <span className="font-display text-2xl text-primary font-semibold">GB Premium Services</span>{" "}
                è un'azienda specializzata nella fornitura di prodotti alimentari premium per il settore
                alberghiero e della ristorazione.
              </p>
              <p className="text-secondary-foreground/70 leading-relaxed mb-6">
                Con sede operativa in Irlanda, serviamo hotel di lusso e strutture ricettive in tutta Europa,
                garantendo prodotti di altissima qualità per le colazioni dei vostri ospiti.
              </p>
              <p className="text-secondary-foreground/70 leading-relaxed">
                La nostra specialità sono i waffle belgi premium, prodotti artigianalmente con ingredienti
                selezionati e una ricetta tradizionale che assicura croccantezza e sapore inconfondibili.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { number: "500+", label: "Hotel Serviti" },
                { number: "12", label: "Paesi Europei" },
                { number: "100%", label: "Qualità Garantita" },
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
