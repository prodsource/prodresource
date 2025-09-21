import { Heart } from "lucide-react";

export function SponsorSection() {
  return (
    <section className="py-16 bg-gradient-subtle border-t border-border/50">
      <div className="container">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="h-5 w-5 text-accent fill-current" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Proudly Sponsored By
            </span>
          </div>
          
          <div className="inline-flex items-center justify-center px-8 py-4 bg-card rounded-2xl shadow-card border">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-1">
                SFA Global
              </h3>
              <p className="text-sm text-muted-foreground">
                Empowering Education Worldwide
              </p>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6 max-w-2xl mx-auto">
            Thanks to SFA Global's generous support, we can provide comprehensive educational 
            resources and maintain this platform for the engineering community.
          </p>
        </div>
      </div>
    </section>
  );
}