import { Briefcase } from "lucide-react";

const internships = [
  { company: "Method Hub", role: "Intern", duration: "1 Month", points: ["Gained hands-on experience in software development fundamentals", "Assisted in understanding real-time project workflow and team collaboration"] },
  { company: "DLK Technologies", role: "Java Intern", duration: "1 Month", points: ["Hands-on experience in Java programming and OOP concepts", "Worked on core Java topics: classes, objects, methods, loops"] },
  { company: "Elewayte", role: "Python Intern", duration: "1 Month", points: ["Hands-on experience in Python programming and logical problem solving", "Practiced variables, control statements, functions, and basic programs"] },
];

const ExperienceSection = () => (
  <section id="experience" className="py-24 px-4 bg-secondary/30">
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-3xl font-bold text-center mb-2 text-foreground">Experience</h2>
      <div className="section-divider mb-12" />
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-border hidden md:block" />
        <div className="space-y-8">
          {internships.map((item, i) => (
            <div key={i} className="md:pl-12 relative">
              <div className="hidden md:flex absolute left-0 top-2 w-8 h-8 rounded-full bg-muted border border-border items-center justify-center">
                <Briefcase size={14} className="text-primary" />
              </div>
              <div className="card-glass rounded-lg p-6 border border-border">
                <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                  <div>
                    <h3 className="font-semibold text-foreground">{item.company}</h3>
                    <p className="text-sm text-primary font-mono">{item.role}</p>
                  </div>
                  <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">{item.duration}</span>
                </div>
                <ul className="space-y-1">
                  {item.points.map((p, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1.5">•</span> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
