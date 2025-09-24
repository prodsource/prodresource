import { ExternalLink, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Course {
  name: string;
  category: string;
  link: string;
}

interface CourseCardProps {
  course: Course;
}

const categoryColors: Record<string, string> = {
  Mathematics: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
  Science: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
  Engineering: "bg-primary-light text-primary dark:bg-primary-light/20 dark:text-primary",
  Laboratory: "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400",
  Language: "bg-pink-100 text-pink-800 dark:bg-pink-900/20 dark:text-pink-400",
  General: "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400",
  Manufacturing: "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400",
};

export function CourseCard({ course }: CourseCardProps) {
  const handleCourseClick = () => {
    if (course.link) {
      window.open(course.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Card className="group h-full relative border-none shadow-xl rounded-2xl overflow-hidden bg-white/60 dark:bg-gray-950/60 backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      {/* Decorative blurred gradient background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-primary/30 via-accent/20 to-transparent rounded-full blur-2xl opacity-60" />
        <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-gradient-to-tr from-secondary/30 via-primary/10 to-transparent rounded-full blur-2xl opacity-40" />
      </div>

      <CardHeader className="relative z-10 pb-2 pt-6 px-6 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center rounded-xl bg-primary/20 p-3 shadow-md transition-transform duration-300 group-hover:scale-110">
              <FolderOpen className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
            </span>
            <Badge 
              variant="secondary" 
              className={`shadow-sm ${categoryColors[course.category] || categoryColors.General} text-xs font-bold px-3 py-1 rounded-lg border border-border/30 backdrop-blur-sm`}
            >
              {course.category}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="relative z-10 pb-6 px-6">
        <CardTitle className="text-2xl font-extrabold leading-tight text-card-foreground group-hover:text-primary transition-colors mb-2 drop-shadow-sm">
          {course.name}
        </CardTitle>
      </CardContent>

      <CardFooter className="relative z-10 px-6 pb-6 pt-0">
        <Button 
          onClick={handleCourseClick}
          disabled={!course.link}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary/80 via-accent/70 to-primary/90 hover:from-primary-hover hover:to-accent-hover text-primary-foreground shadow-lg group-hover:shadow-xl transition-all py-3 rounded-xl text-base font-semibold tracking-wide backdrop-blur-md border border-primary/20"
        >
          <span className="transition-transform duration-300 group-hover:scale-105">Access Course</span>
          <ExternalLink className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:scale-110" />
        </Button>
      </CardFooter>
    </Card>
  );
}