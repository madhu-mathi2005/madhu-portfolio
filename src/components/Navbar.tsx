import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#" className="text-xl font-bold text-gradient font-mono">
          {"<MM />"}
        </a>
        <div className="hidden md:flex gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
              {l.label}
            </a>
          ))}
        </div>
        <a href="/madhumathi_resume.docx" download className="hidden md:inline-flex px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
          Download Resume
        </a>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background px-4 pb-4 flex flex-col gap-3">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-muted-foreground hover:text-primary py-2 text-sm">
              {l.label}
            </a>
          ))}
          <a href="/madhumathi_resume.docx" download className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-semibold text-center">
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
