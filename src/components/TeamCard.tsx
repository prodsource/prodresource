import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  program: string;
  description?: string;
}

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <Card className="group h-full bg-gradient-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <User className="h-8 w-8 text-white" />
          </div>
          
          <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
            {member.name}
          </h3>
          
          <Badge variant="secondary" className="mb-3 bg-accent-light text-accent-foreground">
            {member.role}
          </Badge>
          
          <p className="text-sm text-muted-foreground mb-4">
            {member.program}
          </p>
          
          {member.description && (
            <p className="text-xs text-muted-foreground leading-relaxed">
              {member.description}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}