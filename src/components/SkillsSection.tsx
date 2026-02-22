const skillGroups = [
  { title: "Languages", items: ["C", "Java", "Python"] },
  { title: "Web", items: ["HTML", "CSS", "JavaScript"] },
  { title: "Database", items: ["MySQL"] },
  { title: "Tools", items: ["Git", "VS Code", "MS Excel"] },
  { title: "OS", items: ["Windows", "Linux"] },
  { title: "Soft Skills", items: ["Communication", "Teamwork", "Problem Solving", "Time Management"] },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 px-4 bg-secondary/30">
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-3xl font-bold text-center mb-2 text-foreground">Skills</h2>
      <div className="section-divider mb-12" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((g) => (
          <div key={g.title} className="card-glass rounded-lg p-6 border border-border">
            <h3 className="text-sm font-mono text-primary mb-4 uppercase tracking-wider">{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span key={s} className="px-3 py-1.5 text-xs rounded-full bg-muted text-muted-foreground font-medium">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
