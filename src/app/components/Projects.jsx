"use client";
import "@/app/styles/Projects.css"; 

const projects = [
  {
    title: "OneS",
    image: "/ones.webp",
    summary: "Developing an admin dashboard for Ones, a mutual fund distributor, to manage advisors and clients efficiently. The dashboard includes various functionalities essential for mutual fund distribution, ensuring seamless operations. Additionally, contributing to the main Ones app UI, built in Vue.js, by making small but impactful enhancements.",
  },
  {
    title: "Flavor Folio",
    image: "/flavour.jpg",
    summary: "A React-based CRUD application that enables users to add, edit, view, and delete recipes effortlessly. The app features an engaging home page showcasing various cuisines with visually appealing and user-friendly cards. A responsive login page with form validation ensures a seamless user experience. State management efficiently handles recipe data and editing functionalities. The UI/UX is designed with CSS and Bootstrap, ensuring a clean, responsive interface across multiple devices.",
  },
  {
    title: "TimeTrace",
    image: "/attendance.jpg",
    summary: "Developed a real-time attendance system using face recognition, significantly reducing manual tracking efforts. Designed a user-friendly interface for students, teachers, and administrators to seamlessly access records and resources. Integrated a ChatGPT-powered chatbot, enhancing user interaction and reducing support response time. Ensured data privacy with secure authentication, streamlining academic management for improved efficiency.",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="projects-section">
      <h2 className="h2">My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-img" />
            <h3 className="project-title">{project.title}</h3> 
            <div className="overlay">
              <p className="project-summary">{project.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;