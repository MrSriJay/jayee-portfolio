import { Mail, Map, Phone, Twitter, Linkedin, Instagram, BookOpenText, Send } from "lucide-react";
import { cn } from "../lib/Utils";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-24 px-4 relative bg-seconday/30">

      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In <span className="text-primary"> Touch</span></h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I’m always open to exciting career opportunities in the fields of Artificial Intelligence and Software Engineering. If you’re a recruiter or hiring manager looking for a passionate researcher and developer with hands-on experience in projects, feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>


            <div className="space-y-6 justify-center">

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="w-100 bg-primary/10 rounded-full p-2">
                  <h4 className="font-medium ">Email</h4>
                  <a href="mailto:jayanga.sl@gmail.com"
                    target="_blank"
                    className="text-muted-forground hover:text-primary trasition-colors">
                    jayanga.sl@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="w-100 bg-primary/10 rounded-full p-2">
                  <h4 className="font-medium ">Phone</h4>
                  <a href="tel:+94766628878"
                    target="_blank"
                    className="text-muted-forground hover:text-primary trasition-colors">
                    +94 766 662 8878
                  </a>
                  &nbsp; | &nbsp;
                   <a href="tel:+94112412427"
                    target="_blank"
                    className="text-muted-forground hover:text-primary trasition-colors">
                     +94 112 412 427
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Map className="h-6 w-6 text-primary" />
                </div>
                <div className="w-100 bg-primary/10 rounded-full p-2">
                  <h4 className="font-medium">Location</h4>
                  <span
                    className="text-muted-forground hover:text-primary trasition-colors">
                    Colombo, Sri Lanka
                  </span>
                </div>
              </div>

              <div className="pt-8">
                <h4 className="font-medium mb-4"> Connect With Me</h4>
                <div className="flex space-x-4 justify-center">
                  <a href="https://www.linkedin.com/in/jayanga-palihena-33a69716a/" target="_blank">
                    <Linkedin />
                  </a>
                  <a href="https://x.com/Jayanga_Sri" target="_blank">
                    <Twitter />
                  </a>
                  <a href="https://www.instagram.com/jayanga.palihena/" target="_blank">
                    <Instagram />
                  </a>
                  <a href="https://www.researchgate.net/profile/Jayanga-Palihena?ev=hdr_xprf&_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6ImxvZ2luIiwicGFnZSI6ImhvbWUiLCJwcmV2aW91c1BhZ2UiOiJsb2dpbiIsInBvc2l0aW9uIjoiZ2xvYmFsSGVhZGVyIn19" target="_blank">
                    <BookOpenText />
                  </a>
                </div>
              </div>
            </div>
            


          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs">
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                <form className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                      placeholder="Jayanga Palihena..."
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                      placeholder="jayanga.palihena@gmail.com"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Hello, I'd like to talk about..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
                  >
                    <Send size={16} />
                  </button>
                </form>
              </div>
        </div>
      </div>




    </section>
  )
}