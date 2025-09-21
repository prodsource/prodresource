import { GraduationCap } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">ProdResource</h1>
            <p className="text-xs text-muted-foreground">Engineering Excellence</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#courses" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Courses
          </a>
          <a href="#team" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Team
          </a>
          <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </nav>
        
        <ThemeToggle />
      </div>
    </header>
  );
}