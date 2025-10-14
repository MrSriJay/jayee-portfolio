import { Github, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Carbon Footprint Management System",
    description: "Developed for JAT Holdings (Pvt) Ltd. using PHP Laravel, Bootstrap, jQuery, and MySQL. Designed to streamline data entry, calculation, and reporting of carbon emissions for organizational sustainability tracking. Key features included basic CRUD operations, automated report generation, and a dashboard interface for real-time monitoring and analysis.",
    image: "projects/project1.png",
    skills: ["PHP", "Laravel", "Bootstrap", "jQuery", "MySQL"]
  },
  {
    id: 2,
    title: "RESTful API",
    description: "Developed a RESTful API using ASP.NET Core and SQL to support both web and mobile client applications as part of the final year Bachelor's project. The web client was built with ASP.NET MVC and C#, while the mobile client was developed using Android Studio with Java. Utilized technologies such as ASP.NET Core, SQL, Java, Bootstrap, Node.js, and C# to deliver a multi-platform solution.",
    image: "projects/project2.png",
    skills: ["ASP.NET Core", "SQL", "Java", "C#", "Bootstrap", "Node.js", "Android Studio"]
  },
  {
    id: 3,
    title: "#Find - Predict Social Media Hashtags",
    description: "Designed a deep learning and computer vision model combining CNN and LSTM architectures to classify video clips and predict relevant hashtags. Trained on a modified UCF101 dataset enriched with web-scraped hashtags, effectively capturing visual-temporal patterns for accurate tag generation. Applied hyperparameter tuning and regularization techniques to improve model performance and ensure better generalization across unseen data.",
    image: "projects/project3.png",
    skills: ["Python", "Deep Learning", "Computer Vision", "CNN", "LSTM", "Data Science"]
  }
];



export const ProjectsSections = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">

            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">My <span className="text-primary"> Projects</span></h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Here are some of the key projects I’ve developed throughout my professional career.</p>
       
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {projects.map((project, key) => (
                <div
                    key={key}
                    className="group relative bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                >
                    {/* Project Image */}
                    <div className="h-48 overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    </div>

                    {/* Main Content */}
                    <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.skills.map((skill, i) => (
                        <span
                            key={i}
                            className="text-primary text-sm font-medium bg-primary/10 px-2 py-1 rounded-full"
                        >
                            {skill}
                        </span>
                        ))}
                    </div>

                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>

                    {/* Short preview */}
                    <p className="text-muted-foreground text-sm line-clamp-2">
                    {project.description}
                    </p>
                    </div>

                    {/* Hover Popup */}
                    <div className="absolute left-1/2 top-1/2 z-10 w-11/12 max-w-md -translate-x-1/2 -translate-y-1/2 
                        rounded-lg bg-white p-4 sm:p-6 shadow-lg 
                        opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto 
                        transition-opacity duration-300 ease-in-out">
                    <h4 className="font-semibold mb-2 text-primary text-center">{project.title}</h4>
                    <p className="text-sm text-gray-700 max-h-48 overflow-y-auto scrollbar-none">
                        {project.description}
                    </p>
                    </div>
                </div>
            ))}
                
            </div>
             
            <div className="text-center mt-12">
                <a
                    className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    target="_blank"
                    href="https://github.com/MrSriJay"
                >
                    Check My Github <Github className="w-6 h-6" /> <ArrowRight size={16} />
                </a>
            </div>
        </div>
    </section>
  )
}