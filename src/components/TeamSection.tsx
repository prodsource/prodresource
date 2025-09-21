import { TeamCard } from "./TeamCard";

const teamMembers = [
  {
    name: "Sathish P",
    role: "Developer",
    program: "Prod Reg 22-26",
    description: "Passionate about creating innovative solutions and leading technical development initiatives."
  },
  {
    name: "Soorya Nivash J S",
    role: "Vision Architect",
    program: "Prod Reg 22-26",
    description: "Strategic thinker focused on designing scalable systems and architectural excellence."
  },
  {
    name: "Gurpreet Paul",
    role: "Resource Champion",
    program: "Prod Reg 22-26",
    description: "Dedicated to curating and organizing educational resources for optimal learning experiences."
  },
  {
    name: "Judah F",
    role: "Resource Champion",
    program: "Prod Reg 24-28",
    description: "Committed to maintaining high-quality educational content and resource accessibility."
  },
  {
    name: "Thayanithi N D",
    role: "Developer",
    program: "Prod SW 24-29",
    description: "Software engineering enthusiast with expertise in modern development technologies."
  },
  {
    name: "Aravind R",
    role: "Resource Champion",
    program: "Prod SW 24-29",
    description: "Focused on building comprehensive learning materials and study guides."
  },
  {
    name: "Aadhav Sundhar R",
    role: "Resource Champion",
    program: "Prod Reg 23-27",
    description: "Specializes in educational content curation and learning resource optimization."
  }
];

export function TeamSection() {
  return (
    <section id="team" className="py-20 bg-gradient-subtle">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dedicated professionals committed to empowering your engineering education journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name} 
              className="animate-fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}