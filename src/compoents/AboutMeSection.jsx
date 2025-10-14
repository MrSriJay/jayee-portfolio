import { Briefcase, Code, User } from "lucide-react"

export const AboutMeSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative min-h-screen">
      <div className="container mx-auto max-w-5xl">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary "> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
          <div className="space-y-6">
            <h3 className="text-2xl text-bold">Passionate Software Engineer</h3>
            <p className="text-muted-foreground">
              With over four years of experience in software engineering, including my role as a Senior Software Engineer at Axiata Digital Labs Sri Lanka, I have contributed to the development and maintenance of scalable, reliable Java-based enterprise systems.
            </p>
            <p className="text-muted-foreground">
              I am a quick learner, effective communicator, and proactive problem-solver who thrives in collaborative and agile environments. I am enthusiastic about contributing to innovative projects and further developing my expertise in Java and modern cloud technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {""}
                Get In Touch
              </a>
              <a href="/Jayanga-Chathurya-CV.pdf"
                 download="Jayanga-Chathurya-CV.pdf"
                 className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 trasition-colors duration-300 ">
                 {""}
                 Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 items-center">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="w-6 h-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semiboild">Software Engineering</h4>
                  <p className="text-muted-foreground">
                    I’m a Software Engineer with of experience in building scalable, high-performance systems using Java Spring Boot, Python, PHP, and Angular, specializing in cloud-native microservices, CI/CD automation, and Docker/Kubernetes deployments.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="w-6 h-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semiboild">Work Experience</h4>
                  <p className="text-muted-foreground">
                    I have 3+ years of experience, including my role as a Senior Software Engineer at Axiata Digital Labs, developing telco based cloud-native systems with the microservices architecture, and earlier at the Centre for Defence Research & Development, contributing to a forensic image analysis project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}