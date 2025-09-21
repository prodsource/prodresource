import { ArrowRight, BookOpen, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container relative z-10 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Empowering Your
            <span className="block bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">
              Engineering Journey
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive resources, expert guidance, and collaborative learning for engineering excellence
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-accent hover:bg-accent-hover text-accent-foreground shadow-button group">
              Explore Courses
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              Meet Our Team
            </Button>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <BookOpen className="h-8 w-8 text-accent mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">50+</div>
            <p className="text-white/80">Course Resources</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <Users className="h-8 w-8 text-accent mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">Expert</div>
            <p className="text-white/80">Team Guidance</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <Zap className="h-8 w-8 text-accent mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">24/7</div>
            <p className="text-white/80">Resource Access</p>
          </div>
        </div>
      </div>
    </section>
  );
}