import { GraduationCap } from "lucide-react";

const education = [
  { degree: "B.E – Computer Science Engineering", school: "Panimalar Engineering College", year: "2027", score: "CGPA: 7.98/10" },
  { degree: "Class XII (CBSE)", school: "Ramachandra Public School", year: "2023", score: "73%" },
  { degree: "Class X (ICSE)", school: "St. Patrick's High School ICSE", year: "2021", score: "85.6%" },
];

const AboutSection = () => (
  <section id="about" className="py-24 px-4">
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-3xl font-bold text-center mb-2 text-foreground">About Me</h2>
      <div className="section-divider mb-12" />
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 leading-relaxed">
        Computer Science Engineer driven by the intersection of logical problem-solving and scalable technology. With a technical foundation in Java, Python, and C, I specialize in transforming complex requirements into functional digital solutions. My approach is defined by a commitment to continuous learning and collaborative efficiency, backed by hands-on experience in IoT systems and software development workflows. I aim to contribute technical precision and a growth-oriented mindset to high-impact engineering teams.
      </p>
      <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-foreground">
        <GraduationCap size={22} className="text-primary" /> Education
      </h3>
      <div className="space-y-4">
        {education.map((e, i) => (
          <div key={i} className="card-glass rounded-lg p-5 border border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <p className="font-semibold text-foreground">{e.degree}</p>
              <p className="text-sm text-muted-foreground">{e.school}</p>
            </div>
            <div className="text-right sm:text-right">
              <span className="text-primary font-mono text-sm font-semibold">{e.score}</span>
              <p className="text-xs text-muted-foreground">{e.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
