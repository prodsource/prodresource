import { TeamCard } from "./TeamCard";
import { User } from "lucide-react";

const teamMembers = [
  {
    name: "Sathish P",
    role: "Developer",
    program: "Prod Reg 22-26",
    linkedin: "https://www.linkedin.com/in/sathishkumarp126"
  },
  {
    name: "Soorya Nivash J S",
    role: "Vision Architect",
    program: "Prod Reg 22-26",
    linkedin: ""
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
            Dedicated professionals committed to empowering your engineering
            education journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="animate-fade-in flex flex-col items-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <User className="h-12 w-12 text-primary" />
              </div>
              <TeamCard member={member} />
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-blue-600 hover:underline text-sm font-medium flex items-center gap-1"
                  aria-label={`LinkedIn profile of ${member.name}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="inline" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.996 3.595 4.59v5.606z"/></svg>
                  LinkedIn
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
