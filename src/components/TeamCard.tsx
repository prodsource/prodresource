import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TeamMember {
  name: string;
  role: string;
  program: string;
}

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <Card className="group h-full border-none shadow-md bg-background dark:bg-card hover:shadow-lg transition-all duration-300 rounded-xl">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
          {member.name}
        </h3>
        <Badge
          variant="secondary"
          className="mb-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium tracking-wide"
        >
          {member.role}
        </Badge>
        <p className="text-sm text-muted-foreground">{member.program}</p>
      </CardContent>
    </Card>
  );
}
