import { useEffect, useState } from "react";
import { Github, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


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
  const [repos, setRepos] = useState([]);
    useEffect(() => {
        fetch("https://api.github.com/users/MrSriJay/repos?sort=updated")
        .then((res) => res.json())
        .then((data) => {
            const ownRepos = data.filter((repo) => !repo.fork);
            setRepos(ownRepos);
        })
        .catch((err) => console.error("Error fetching repos:", err));
    }, []);  


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
                 <h3 className="text-2xl font-foreground-semibold text-center text-primary mb-10">GitHub Projects</h3>
                 <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="pb-10"
                    >
                    {repos.map((repo) => (
                        <SwiperSlide key={repo.id}>
                        <div className="bg-card p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 h-full flex flex-col justify-between">
                            <div>
                            <h3 className="text-xl font-semibold mb-2 text-primary">{repo.name}</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                {repo.description || "No description available."}
                            </p>
                            </div>
                            <div className="flex justify-between text-xs text-gray-500 mb-3">
                            <span>{repo.language || "Unknown"}</span>
                            <span>⭐ {repo.stargazers_count}</span>
                            </div>
                            <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-primary hover:underline mt-auto"
                            >
                            View on GitHub →
                            </a>
                        </div>
                        </SwiperSlide>
                    ))}
                    </Swiper>
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