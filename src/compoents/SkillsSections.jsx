import { useState } from "react";

const skills = [
    // Languages
    { name: "Java", category: "Languages", level: 95 },
    { name: "Python", category: "Languages", level: 90 },
    { name: "C#", category: "Languages", level: 70 },
    { name: "PHP", category: "Languages", level: 75 },

    // Frameworks
    { name: "Spring", category: "Frameworks", level: 90 },
    { name: "Spring Boot", category: "Frameworks", level: 95 },
    { name: "Laravel", category: "Frameworks", level: 70 },
    { name: "ASP.NET Framework", category: "Frameworks", level: 65 },
    { name: "Angular", category: "Frameworks", level: 75 },
    { name: "Spring MVC", category: "Frameworks", level: 90 },
    { name: "Spring Data JPA", category: "Frameworks", level: 85 },

    // Web Technologies
    { name: "HTML", category: "Web Technologies", level: 95 },
    { name: "CSS", category: "Web Technologies", level: 90 },
    { name: "JavaScript", category: "Web Technologies", level: 80 },
    { name: "TypeScript", category: "Web Technologies", level: 75 },
    { name: "React", category: "Web Technologies", level: 80 },
    { name: "Next.js", category: "Web Technologies", level: 75 }, 
    { name: "Tailwind", category: "Web Technologies", level: 70 },
    { name: "Thymeleaf", category: "Web Technologies", level: 75 },

    // APIs
    { name: "REST", category: "APIs", level: 90 },
    { name: "Microservices", category: "APIs", level: 85 },
    { name: "SOAP (Basics)", category: "APIs", level: 50 },

    // Databases
    { name: "MySQL", category: "Databases", level: 90 },
    { name: "MongoDB", category: "Databases", level: 70 },
    { name: "OracleSQL", category: "Databases", level: 85 },
    { name: "Microsoft SQL Server", category: "Databases", level: 70 },
    { name: "PostgreSQL", category: "Databases", level: 70 },
    { name: "SQLite", category: "Databases", level: 65 },
    { name: "SQL", category: "Databases", level: 90 },
    { name: "Firebase", category: "Databases", level: 60 },

    // Version Control
    { name: "Git", category: "Version Control", level: 95 },
    { name: "GitLab", category: "Version Control", level: 90 },

    // Build Tools
    { name: "Maven", category: "Build Tools", level: 90 },
    { name: "Gradle", category: "Build Tools", level: 75 },

    // DevOps & Tools
    { name: "Docker", category: "DevOps & Tools", level: 85 },
    { name: "Kubernetes", category: "DevOps & Tools", level: 70 },
    { name: "Jenkins", category: "DevOps & Tools", level: 85 },
    { name: "Grafana", category: "DevOps & Tools", level: 70 },
    { name: "Kibana", category: "DevOps & Tools", level: 70 },
    { name: "Postman", category: "DevOps & Tools", level: 90 },
    { name: "Swagger", category: "DevOps & Tools", level: 70 },
    { name: "Apache Kafka", category: "DevOps & Tools", level: 65 },
    { name: "RabbitMQ", category: "DevOps & Tools", level: 65 },
    { name: "ALDON", category: "DevOps & Tools", level: 60 },
    { name: "Windows System Administration", category: "DevOps & Tools", level: 70 },

    // Servers
    { name: "Apache Tomcat", category: "Servers", level: 85 },

    // Others
    { name: "JUnit", category: "Others", level: 85 },
    { name: "Mockito", category: "Others", level: 70 },

    // Cloud
    { name: "Google Cloud", category: "Cloud", level: 70 },

    // AI Development
    { name: "TensorFlow", category: "AI Development", level: 70 },
    { name: "PyTorch", category: "AI Development", level: 70 },
    { name: "Keras", category: "AI Development", level: 70 },
    { name: "OpenCV", category: "AI Development", level: 70 },
    { name: "scikit-learn", category: "AI Development", level: 75 },
    { name: "NumPy", category: "AI Development", level: 90 },
    { name: "Pandas", category: "AI Development", level: 85 },
    { name: "Matplotlib", category: "AI Development", level: 75 },
    { name: "Qdrant", category: "AI Development", level: 50 },
    { name: "OpenAI", category: "AI Development", level: 70 },
    { name: "Ollama", category: "AI Development", level: 50 },
    { name: "Anthropic", category: "AI Development", level: 50 },
    { name: "Machine Learning", category: "AI Development", level: 75 },
    { name: "Deep Learning", category: "AI Development", level: 75 },

    // Project Management Tools
    { name: "JIRA", category: "Project Management Tools", level: 85 },
    { name: "Grafana", category: "Project Management Tools", level: 70 },
    { name: "Kibana Logs", category: "Project Management Tools", level: 70 },

    // Soft Skills
    { name: "Agile", category: "Soft Skills", level: 90 },
    { name: "Scrum", category: "Soft Skills", level: 90 },
    { name: "Team Work", category: "Soft Skills", level: 95 },
    { name: "Customer Management", category: "Soft Skills", level: 90 },
    { name: "Customer Engagement", category: "Soft Skills", level: 90 },
    { name: "Critical Thinking", category: "Soft Skills", level: 90 },
    { name: "Project Management", category: "Soft Skills", level: 85 },
    { name: "Problem Solving", category: "Soft Skills", level: 90 },
    { name: "Time Management", category: "Soft Skills", level: 90 },
    { name: "Quick Learning", category: "Soft Skills", level: 95 },
    { name: "Good Communication", category: "Soft Skills", level: 90 },
    { name: "Adaptability", category: "Soft Skills", level: 90 },
    { name: "Creative Thinking", category: "Soft Skills", level: 85 },
    { name: "SLA Management", category: "Soft Skills", level: 80 },
];


const categories = [
  "All",
  "Languages",
  "Frameworks",
  "Web Technologies",
  "APIs",
  "Databases",
  "Version Control",
  "Build Tools",
  "DevOps & Tools",
  "Servers",
  "Others",
  "Cloud",
  "AI Development",
  "Project Management Tools",
  "Soft Skills",
];

const skillsPerPage = 9;

export const SkillsSections = () => {
  const [activeCateogry, setActiveCateogry] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredSkills = skills.filter(
    (skill) =>
      activeCateogry === "all" || skill.category.toLowerCase() === activeCateogry
  );

  const totalPages = Math.ceil(filteredSkills.length / skillsPerPage);
  const startIndex = (currentPage - 1) * skillsPerPage;
  const currentSkills = filteredSkills.slice(
    startIndex,
    startIndex + skillsPerPage
  );

  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  const handleCategoryChange = (category) => {
    setActiveCateogry(category.toLowerCase());
    setCurrentPage(1);
  };

  return (
    <section className="py-24 px-4 relative bg-secondary/30" id="skills">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              className={`px-4 py-2 rounded-full text-sm border ${
                activeCateogry === category.toLowerCase()
                  ? "bg-primary text-white border-primary"
                  : "border-foreground/50 text-foreground/80 hover:bg-primary/10"
              } transition-colors duration-300`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {currentSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        {totalPages > 1 && (
  <div className="flex justify-center items-center gap-2 mt-6">
    {Array.from({ length: totalPages }).map((_, index) => {
      const pageNumber = index + 1;
      return (
        <button
          key={pageNumber}
          onClick={() => setCurrentPage(pageNumber)}
          className={`w-3 h-3 rounded-full transition-colors duration-300 ${
            currentPage === pageNumber
              ? "bg-primary"
              : "bg-white dark:bg-gray-500 hover:dark:bg-primary/70 hover:bg-primary/70"
          }`}
        ></button>
      );
    })}
  </div>
)}
      </div>
    </section>
  );
};
