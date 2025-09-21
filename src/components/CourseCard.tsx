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
    <Card className="group h-full bg-gradient-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border-border/50">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-shrink-0">
            <FolderOpen className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
          </div>
          <Badge 
            variant="secondary" 
            className={`${categoryColors[course.category] || categoryColors.General} text-xs font-medium`}
          >
            {course.category}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="pb-4">
        <CardTitle className="text-lg leading-tight text-card-foreground group-hover:text-primary transition-colors">
          {course.name}
        </CardTitle>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button 
          onClick={handleCourseClick}
          disabled={!course.link}
          className="w-full bg-primary hover:bg-primary-hover text-primary-foreground shadow-sm group-hover:shadow-button transition-all"
        >
          <span>Access Course</span>
          <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
}