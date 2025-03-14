"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import "@/app/styles/Experience.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const experiences = [
  {
    role: "Jr Web Developer @ Kerala Innovative Technology and Entrepreneurship Zone",
    date: " December 2024 - Present",
    location: "Thrissur, Kerala, India",
    // website: "https://lifecoachelevate.com",
    description:
      "Working on multiple live projects, implementing designs, tackling various issues, conducting basic testing, and collaborating effectively in a team environment.",
    logo: "/Kitez.jpg", 
    skills: ["React", "Next.jS", "Git", "Figma", "JS", "CSS" ],
  },
  {
    role: "Java Full Stack Development Intern @ Kompetenzen Technologies",
    date: "July 2024 - January 2025",
    location: "Thiruvananthapuram, Kerala, India",
    // website: "https://saimonglobal.com",
    description:
      "Gained hands-on experience in full-stack web development, UI/UX design, and React by building responsive applications, troubleshooting front-end issues, and upskilling in back-end technologies.",
    logo: "/komp.jpg",
    skills: ["React", "Bootstrap", "HTML", "CSS", "JavaScript", "Java"],
  },
];

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    setExpandedIndex(0); 
  }, []);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div id="experience" className="experience">
      <h2 className="experience-title">Professional Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className={`experience-card ${expandedIndex === index ? "expanded" : ""}`}>
            <div className="experience-header" onClick={() => toggleExpand(index)}>
              <span className="role">{exp.role}</span>
              <span className="date">{exp.date}</span>
              <span className="expand-icon">{expandedIndex === index ? "−" : "+"}</span>
            </div>
            {expandedIndex === index && (
              <div className="experience-details">
                <div className="experience-info">
                  <p>
                    <FaMapMarkerAlt className="icon" /> {exp.location}{" "}
                    <a href={exp.website} target="_blank" rel="noopener noreferrer">
                      {/* <FiExternalLink className="icon" /> */}
                    </a>
                  </p>
                  <p>{exp.description}</p>
                  <div className="skills">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="skill">{skill}</span>
                    ))}
                  </div>
                </div>
                <div className="company-logo">
                  <img src={exp.logo} alt={`${exp.role} Logo`} />
                </div>
              </div>
            )}
          </div>
        ))}
        <button className="res">Resumé</button>
      </div>
    </div>
  );
};

export default Experience;