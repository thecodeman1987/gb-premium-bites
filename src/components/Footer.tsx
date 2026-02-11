const Footer = () => {
  return (
    <footer className="bg-secondary py-12 border-t border-primary/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-display text-xl font-bold text-secondary-foreground">
            <span className="text-gradient-gold">GB</span> Premium Services
          </div>
          <p className="text-secondary-foreground/50 text-sm">
            © {new Date().getFullYear()} GB Premium Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
