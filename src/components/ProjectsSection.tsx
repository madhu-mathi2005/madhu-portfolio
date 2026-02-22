import { Cpu, Siren, ShieldCheck } from "lucide-react";

const projects = [
  {
    title: "IoT-Based Gas Detection System",
    icon: <Cpu size={24} className="text-primary" />,
    description: "Developed an IoT-based gas detection system to monitor gas leakage using gas sensors. Implemented real-time alert system using microcontroller and IoT technology to enhance safety.",
  },
  {
    title: "Ambulance Simulation Project",
    icon: <Siren size={24} className="text-primary" />,
    description: "Designed and executed an ambulance simulation system to demonstrate emergency response and patient transport workflow. Simulated real-time ambulance movement and emergency handling scenarios.",
  },
  {
    title: "PhishGuardAI",
    icon: <ShieldCheck size={24} className="text-primary" />,
    description: "Developed PhishGuardAI, an AI-powered detection system to identify and flag phishing attempts in digital communications. Implemented machine learning algorithms to analyze URL structures and email content for malicious patterns. Designed a user-friendly interface to provide real-time security warnings.",
  },
];
const ProjectsSection = () => (
  <section id="projects" className="py-24 px-4">
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-3xl font-bold text-center mb-2 text-foreground">Projects</h2>
      <div className="section-divider mb-12" />
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div key={p.title} className="card-glass rounded-lg p-6 border border-border hover:border-primary/50 transition-colors group">
            <div className="mb-4">{p.icon}</div>
            <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
