import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.25em] text-sm mb-3">Contact</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Let's Talk About Your
            <span className="text-gradient-gold italic"> Needs</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Mail,
                title: "Email",
                value: "info@gbpremiumservices.com",
                href: "mailto:info@gbpremiumservices.com",
              },
              {
                icon: MapPin,
                title: "Location",
                value: "Ireland",
                href: null,
              },
              {
                icon: Phone,
                title: "Phone",
                value: "Get in touch via email",
                href: null,
              },
            ].map((item) => (
              <div key={item.title} className="text-center p-8 rounded-lg bg-card border border-border">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                {item.href ? (
                  <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors text-sm break-all">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground text-sm">{item.value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="mailto:info@gbpremiumservices.com"
              className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-sm text-sm font-medium tracking-widest uppercase transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
