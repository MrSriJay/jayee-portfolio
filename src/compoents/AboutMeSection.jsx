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
            <h3 className="text-2xl text-bold">Senior Software Engineer</h3>
            <p className="text-muted-foreground">
              I am a Senior Software Engineer at Arenberg AG, building backend and AI systems for financial intelligence and healthcare platforms. My work covers scalable APIs, data pipelines, and cloud infrastructure with Python, FastAPI, Java, PostgreSQL, and AWS.
            </p>
            <p className="text-muted-foreground">
              I have 5+ years of experience across product engineering, telecom systems, and applied AI research, including senior work at Axiata Digital Labs and medical imaging research. I like turning complex data and AI workflows into reliable production systems.
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
                    I build scalable systems with Python, FastAPI, Java Spring Boot, and modern web stacks, specializing in cloud-native microservices, event-driven processing, CI/CD, and Docker/Kubernetes on AWS and Google Cloud.
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
                    Since January 2026 I have been a Senior Software Engineer at Arenberg AG, working on financial intelligence and medical AI platforms. Before that I spent over three years at Axiata Digital Labs on telco microservices, and earlier built software and research tools at the Centre for Defence Research & Development.
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