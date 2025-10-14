import { ThemeToggle } from "../compoents/ThemeToggle"
import { StartBackground } from "../compoents/StartBackground"
import { Navbar } from "../compoents/Navbar"
import { MainSection } from "../compoents/MainSection"
import { AboutMeSection } from "../compoents/AboutMeSection"
import { SkillsSections } from "../compoents/SkillsSections"
import { ProjectsSections } from "../compoents/ProjectsSection"
import { ContactSection } from "../compoents/ConstactSection.jsx"
import { Footer } from "../compoents/Footer.jsx"


export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground text-overflow-hidden">

        {/* Theme Toggles */}
        <ThemeToggle/>

        {/* BAckground Effects */}
        <StartBackground/>

        {/* Nav Bar */}
        <Navbar/>

        {/* Main Content */}
        <main>
          <MainSection/>
          <AboutMeSection/>
          <SkillsSections/>
          <ProjectsSections/>
          <ContactSection/>
        </main>

         {/* Footer */}
         <Footer/>





    </div>
  )
}
    