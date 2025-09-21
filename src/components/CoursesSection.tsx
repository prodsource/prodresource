import { useState, useMemo } from "react";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CourseCard } from "./CourseCard";

interface Course {
  name: string;
  category: string;
  link: string;
}

// Course data - in a real app, this would come from props or API
const coursesData: Course[] = [
  { name: "Calculus and its Applications", category: "Mathematics", link: "https://drive.google.com/drive/folders/1gq_SBH1Owa-HKHGm8PBs1Qr4yJJ7IdFZ?usp=drive_link" },
  { name: "Physics", category: "Science", link: "https://drive.google.com/drive/folders/1pFi3H9ZQQLS-Gt8dgD60ZVLkUqhHqJ9q?usp=drive_link" },
  { name: "Chemistry", category: "Science", link: "https://drive.google.com/drive/folders/1YJJXHZ51FL10OIL_R2dSsN91AoZW9DYs?usp=drive_link" },
  { name: "Professional Ethics", category: "General", link: "https://drive.google.com/drive/folders/1R6sR5gNKfiwOSiIWbg0uZMRV-aSy37Ki?usp=drive_link" },
  { name: "English Language Proficiency", category: "Language", link: "https://drive.google.com/drive/folders/1rBuLuoM3AV3ronN_hQSCu-kHdbIP1vl9?usp=drive_link" },
  { name: "Engineering Graphics", category: "Engineering", link: "https://drive.google.com/drive/folders/1zUJ_rdBEqx2w3BkqsfSz0A5zJWPsPawO?usp=drive_link" },
  { name: "Basic Sciences Laboratory", category: "Laboratory", link: "https://drive.google.com/drive/folders/1Xv8pmeladVajH6Xgumd7t5F9z7iSkioL?usp=drive_link" },
  { name: "Engineering Practices", category: "Engineering", link: "https://drive.google.com/drive/folders/1ilpO12RvmNdqbAn84M7RK3TN-zSvh4ye?usp=drive_link" },
  { name: "Complex Variables and Transforms", category: "Mathematics", link: "https://drive.google.com/drive/folders/1bZOuCuzRrZl8eHs7StszkKVYJqZRer_x?usp=drive_link" },
  { name: "Materials Science", category: "Engineering", link: "https://drive.google.com/drive/folders/1navNSTMvU_d9raUAeBMlimd3jQfTcBE0?usp=drive_link" },
  { name: "Chemistry of Engineering Materials", category: "Science", link: "https://drive.google.com/drive/folders/1Lt4vuDyBr9mINf7I4HJ6PIo-4LNGCZOF?usp=drive_link" },
  { name: "Engineering Mechanics", category: "Engineering", link: "https://drive.google.com/drive/folders/1xpDwPEV-7-rjejDIP-Eykap7x0e5LRk1?usp=drive_link" },
  { name: "Basics of Electrical and Electronics Engineering", category: "Engineering", link: "https://drive.google.com/drive/folders/1edTxUVHpbLtJ7fv77xjNL8bhyHd5aWmU?usp=drive_link" },
  { name: "Language Elective", category: "Language", link: "https://drive.google.com/drive/folders/19tOo8imq2lxuBEiYDhLGKMQsGfDcuepz?usp=drive_link" },
  { name: "Electrical and Electronics Engineering Laboratory", category: "Laboratory", link: "https://drive.google.com/drive/folders/1pEjtNP8MEFfS8V5MTKF9cGTEOFTVuxl-?usp=drive_link" },
];

export function CoursesSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = useMemo(() => {
    const cats = [...new Set(coursesData.map(course => course.category))];
    return cats.sort();
  }, []);

  const filteredCourses = useMemo(() => {
    return coursesData.filter(course => {
      const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
      return matchesSearch && matchesCategory && course.link; // Only show courses with links
    });
  }, [searchTerm, selectedCategory]);

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Course Resources
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access comprehensive study materials and resources for your engineering courses
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48 pl-10">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map((course, index) => (
            <div key={`${course.name}-${index}`} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CourseCard course={course} />
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No courses found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
}