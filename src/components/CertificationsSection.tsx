import { Award } from "lucide-react";

const certs = [
  "Acquiring Data Certification – NASSCOM",
  "AI Fundamentals – IBM SkillsBuild",
  "Python Programming Internship – Elewayte",
  "Internship Trainee – Method Hub",
  "HTML5 Certification – Infosys",
  "Java Development Internship – DLK Solutions",
  "Automation Starter – UiPath",
  "Automation Developer Associate Training – UiPath",
];

const CertificationsSection = () => (
  <section className="py-24 px-4">
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-3xl font-bold text-center mb-2 text-foreground">Certifications</h2>
      <div className="section-divider mb-12" />
      <div className="grid sm:grid-cols-2 gap-3">
        {certs.map((c) => (
          <div key={c} className="flex items-center gap-3 card-glass rounded-lg px-5 py-4 border border-border">
            <Award size={16} className="text-primary shrink-0" />
            <span className="text-sm text-foreground">{c}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
