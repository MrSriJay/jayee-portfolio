import React from "react";
import { motion } from "framer-motion";
import nanjingLogo from "../assets/timeline_logos/nanjing-logo.png";
import axiataLogo from "../assets/timeline_logos/axiata-logo.png";
import esoftLogo from "../assets/timeline_logos/esoft-logo.png";
import plyLogo from "../assets/timeline_logos/ply-logo.png";
import cdrdLogo from "../assets/timeline_logos/cdrdt-logo.png";
import freelancerLogo from "../assets/timeline_logos/freelancer-logo.png";
// Education data
const educationData = [
  {
    type: "education",
    title: "MSc in Artificial Intelligence",
    institution: "Nanjing University of Information Science and Technology, China",
    start: "2022-09",
    end: "2024-07",
    logo: nanjingLogo, // Link to university logo
  },
  {
    type: "education",
    title: "BSc (Hons) Software Engineering",
    institution: "University of Plymouth, UK",
    start: "2017-09",
    end: "2020-07",
    logo: plyLogo, 
  },
  {
    type: "education",
    title: "Diploma in Web Engineering",
    institution: "ESOFT Metro Campus, Sri Lanka",
    start: "2018-01",
    end: "2019-12",
    logo: esoftLogo, 
  },
];

// Work data
const workData = [
   {
    type: "work",
    title: "Research Assistant in AI",
    company: "Nanjing University of Information Science and Technology, China",
    start: "2025-01",
    end: "2025-07",
    logo: nanjingLogo, 
  },
  {
    type: "work",
    title: "Senior Software Engineer",
    company: "Axiata Digital Labs - Sri Lanka",
    start: "2023-04",
    end: "2024-11",
    logo: axiataLogo, 
  },
  {
    type: "work",
    title: "Software Engineer",
    company: "Axiata Digital Labs - Sri Lanka",
    start: "2021-08",
    end: "2023-03",
    logo: axiataLogo, 
  },
  {
    type: "work",
    title: "Software Engineer | Research Assistant",
    company: "Centre for Defence Research & Development, Ministry of Defence - Sri Lanka",
    start: "2021-04",
    end: "2021-07",
    logo: cdrdLogo, 
  },
  {
    type: "work",
    title: "Software Engineering Intern",
    company: "Centre for Defence Research & Development, Ministry of Defence - Sri Lanka",
    start: "2020-09",
    end: "2021-03",
    logo: cdrdLogo, 
  },
  {
    type: "work",
    title: "Freelance Graphic Designer",
    company: "Worked with diverse local businesses, YouTube channels, and international clients on graphic design and video editing projects.",
    start: "2017",
    end: "Present",
    logo: freelancerLogo, 
  },
];

// Merge and sort recent first
const timelineData = [
  ...educationData.map(e => ({ ...e, type: "education" })),
  ...workData.map(w => ({ ...w, type: "work" }))
].sort((a, b) => new Date(b.start) - new Date(a.start));

export const EducationSection = () => {
  return (
    <section id="highlights" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Journey <span className="text-primary"> So Far</span></h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">A snapshot of my academic achievements and professional experiences, showcasing the journey that shaped my skills and expertise in software engineering and artificial intelligence</p>

        <div className="relative flex flex-col items-center">
          {/* Center vertical line */}
          <div className="absolute w-1 bg-primary top-0 bottom-0 left-1/2 transform -translate-x-1/2 z-0"></div>

          {timelineData.map((item, index) => {
            const isEducation = item.type === "education";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="mb-12 w-full flex justify-between items-center relative"
              >
                {/* Left Card (Education) */}
                {isEducation ? (
                  <div className="w-full md:w-1/2 flex justify-end pr-6">
                    <div className="bg-card p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 w-full text-right">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted">{item.institution}</p>
                      <span className="text-sm text-primary">{`${item.start} - ${item.end}`}</span>
                    </div>
                  </div>
                ) : (
                  <div className="w-full md:w-1/2"></div>
                )}

                {/* Timeline Dot with Logo */}
                <span className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-white bg-opacity-30 backdrop-blur-lg border-2 border-primary-foreground shadow-2xl z-10">
                  {item.logo ? (
                      <img
                        src={item.logo}
                        alt={item.type === "education" ? "Education" : "Work"}
                        className="w-10 h-10 object-contain rounded-full border-2 border-white"
                      />
                    ) : (
                      // Fallback if no logo is available (use an icon or a placeholder)
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                        <span className="text-primary text-xl font-semibold">?</span>
                      </div>
                    )}
                </span>

                {/* Right Card (Work) */}
                {!isEducation ? (
                  <div className="w-full md:w-1/2 flex justify-start pl-6">
                    <div className="bg-card p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 w-full text-left">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted">{item.company}</p>
                      <span className="text-sm text-primary">{`${item.start} - ${item.end}`}</span>
                    </div>
                  </div>
                ) : (
                  <div className="w-full md:w-1/2"></div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
