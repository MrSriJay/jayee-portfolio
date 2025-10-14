import React, { useState } from "react";
import {
  Mail,
  Map,
  Phone,
  BookOpenText,
} from "lucide-react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaInstagram, FaResearchgate } from "react-icons/fa";
import { cn } from "../lib/Utils";

export const ContactSection = () => {
  const [profile] = useState({
    name: "Jayanga Palihena",
    bio: "Software Engineer & AI Enthusiast",
    photoUrl: "/1619099561066.png",
  });

  const socialLinks = [
    {
      name: "LinkedIn",
      description: "View full profile & recommendations",
      icon: <FaLinkedin className="text-[#0A66C2]" size={28} />,
      link: "https://www.linkedin.com/in/jayanga-palihena-33a69716a/",
      bg: "hover:bg-[#0A66C210]",
    },
    {
      name: "X (Twitter)",
      description: "Short updates & threads",
      icon: <FaTwitter className="text-[#1DA1F2]" size={28} />,
      link: "https://x.com/Jayanga_Sri",
      bg: "hover:bg-[#1DA1F210]",
    },
    {
      name: "Instagram",
      description: "Photos & life moments",
      icon: <FaInstagram className="text-[#E4405F]" size={28} />,
      link: "https://www.instagram.com/jayanga.palihena/",
      bg: "hover:bg-[#E4405F10]",
    },
    {
      name: "ResearchGate",
      description: "Papers & research contributions",
      icon: <FaResearchgate className="text-[#00CCBB]" size={28} />,
      link: "https://www.researchgate.net/profile/Jayanga-Palihena",
      bg: "hover:bg-[#00CCBB10]",
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I’m always open to exciting career opportunities in Artificial
          Intelligence and Software Engineering. If you’re a recruiter or hiring
          manager looking for a passionate researcher and developer with
          hands-on experience, feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Profile */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {profile.photoUrl ? (
                <img
                  src={profile.photoUrl}
                  alt={profile.name}
                  className="w-28 h-28 rounded-full object-cover shadow-md"
                />
              ) : (
                <div className="w-28 h-28 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-semibold">
                  J
                </div>
              )}
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold">{profile.name}</h3>
                <p className="text-muted-foreground">{profile.bio}</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  content: (
                    <a
                      href="mailto:jayanga.sl@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      target="_blank"
                      rel="noreferrer"
                    >
                      jayanga.sl@gmail.com
                    </a>
                  ),
                },
                {
                  icon: Phone,
                  title: "Phone",
                  content: (
                    <div className="text-muted-foreground">
                      <a
                        href="tel:+94766628878"
                        className="hover:text-primary transition-colors"
                      >
                        +94 766 662 8878
                      </a>
                      <span className="mx-2">|</span>
                      <a
                        href="tel:+94112412427"
                        className="hover:text-primary transition-colors"
                      >
                        +94 112 412 427
                      </a>
                    </div>
                  ),
                },
                {
                  icon: Map,
                  title: "Location",
                  content: (
                    <span className="text-muted-foreground">
                      Colombo, Sri Lanka
                    </span>
                  ),
                },
              ].map(({ icon: Icon, title, content }, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start space-x-4 hover:bg-primary/5 p-3 rounded-xl transition-all"
                >
                  <div className="p-3 rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="w-100">
                    <h4 className="font-medium">{title}</h4>
                    {content}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE: Social Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4 text-center md:text-left">
              <span className="text-primary">Connect</span> With Me
            </h3>

            {socialLinks.map(({ name, description, icon, link, bg }, idx) => (
              <motion.a
                key={idx}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={cn(
                  "flex items-center gap-4 bg-card p-4 rounded-lg border border-transparent shadow-sm transition-all duration-300",
                  "hover:shadow-lg hover:-translate-y-1",
                  bg
                )}
              >
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.15 }}
                  className="p-3 rounded-full bg-background transition-all"
                >
                  {icon}
                </motion.div>
                <div className="w-100">
                  <div className="font-medium transition-colors">{name}</div>
                  <div className="text-sm text-muted-foreground transition-colors">
                    {description}
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
