import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-24 px-4 bg-secondary/30">
    <div className="container mx-auto max-w-4xl text-center">
      <h2 className="text-3xl font-bold mb-2 text-foreground">Get In Touch</h2>
      <div className="section-divider mb-12" />
      <p className="text-muted-foreground max-w-lg mx-auto mb-10">
        I'm currently looking for entry-level opportunities. Feel free to reach out!
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <a href="mailto:madhumathi10507@gmail.com" className="card-glass rounded-lg p-5 border border-border hover:border-primary/50 transition-colors flex flex-col items-center gap-2">
          <Mail size={20} className="text-primary" />
          <span className="text-xs text-muted-foreground">Email</span>
          <span className="text-sm text-foreground break-all">madhumathi10507@gmail.com</span>
        </a>
        <a href="tel:9489358951" className="card-glass rounded-lg p-5 border border-border hover:border-primary/50 transition-colors flex flex-col items-center gap-2">
          <Phone size={20} className="text-primary" />
          <span className="text-xs text-muted-foreground">Phone</span>
          <span className="text-sm text-foreground">9489358951</span>
        </a>
        <div className="card-glass rounded-lg p-5 border border-border flex flex-col items-center gap-2">
          <MapPin size={20} className="text-primary" />
          <span className="text-xs text-muted-foreground">Location</span>
          <span className="text-sm text-foreground">Chennai, Tamil Nadu</span>
        </div>
        <a href="https://www.linkedin.com/in/madhu-mathi-a3481b29a" target="_blank" rel="noopener noreferrer" className="card-glass rounded-lg p-5 border border-border hover:border-primary/50 transition-colors flex flex-col items-center gap-2">
          <Linkedin size={20} className="text-primary" />
          <span className="text-xs text-muted-foreground">LinkedIn</span>
          <span className="text-sm text-foreground">Madhumathi M</span>
        </a>
      </div>
      <div className="flex items-center justify-center gap-4">
        <a href="https://www.linkedin.com/in/madhu-mathi-a3481b29a" target="_blank" rel="noopener noreferrer"
          className="p-3 rounded-full border border-border hover:border-primary hover:text-primary text-muted-foreground transition-all">
          <Linkedin size={20} />
        </a>
        <a href="https://github.com/madhu-mathi2005" target="_blank" rel="noopener noreferrer"
          className="p-3 rounded-full border border-border hover:border-primary hover:text-primary text-muted-foreground transition-all">
          <Github size={20} />
        </a>
        <a href="mailto:madhumathi10507@gmail.com"
          className="p-3 rounded-full border border-border hover:border-primary hover:text-primary text-muted-foreground transition-all">
          <Mail size={20} />
        </a>
      </div>
    </div>
  </section>
);

export default ContactSection;
