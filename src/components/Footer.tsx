import { GraduationCap, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-card-foreground">ProdResource</h3>
                <p className="text-xs text-muted-foreground">Engineering Excellence</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering engineering students with comprehensive resources and collaborative learning opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-card-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#courses" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Course Resources
              </a>
              <a href="#team" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Our Team
              </a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-card-foreground">Contact</h4>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <a 
                href="mailto:prodsource.20@gmail.com" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                prodsource.20@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 ProdResource. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-sm text-muted-foreground mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-accent fill-current" />
            <span>for engineering students</span>
          </div>
        </div>
      </div>
    </footer>
  );
}