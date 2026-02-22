import { Github, Linkedin, Mail, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto max-w-4xl text-center animate-fade-up">
        <p className="text-primary font-mono text-sm mb-4 tracking-widest uppercase">Hello, I'm</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
          Madhumathi <span className="text-gradient">M</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Computer Science Engineering Student · Passionate about building solutions with code
        </p>
        <div className="flex items-center justify-center gap-4 mb-10">
          <a href="`https://www.linkedin.com/in/madhu-mathi-a3481b29a`" target="_blank" rel="noopener noreferrer"
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
        <div className="flex items-center justify-center gap-4">
          <a href="#contact" className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
            Get In Touch
          </a>
          <a href="/madhumathi_resume.docx" download className="px-6 py-3 rounded-md border border-border text-foreground font-semibold hover:border-primary hover:text-primary transition-all flex items-center gap-2">
            <Download size={18} /> Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
