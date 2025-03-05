"use client";
import "@/app/styles/Hero2.css";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const skills = [
  { src: "https://imgs.search.brave.com/IKcZXl7ILDvNWILGGf-dwNTTcSVdhZ1Ub2x_4yeKTbY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL3RodW1icy81/ODQ3ZjVjM2NlZjEw/MTRjMGI1ZTQ4OWQu/cG5n", alt: "HTML" },
  { src: "https://imgs.search.brave.com/b0DOEo3oYCByjwMy0O2e6c2h7PYgJU0faK2tKfTJbTQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91eHdp/bmcuY29tL3dwLWNv/bnRlbnQvdGhlbWVz/L3V4d2luZy9kb3du/bG9hZC9icmFuZHMt/YW5kLXNvY2lhbC1t/ZWRpYS9jc3MtaWNv/bi5zdmc", alt: "CSS" },
  { src: "https://imgs.search.brave.com/7Jn3dzwYPuLdLMVryAYoYuMxg35Hiari8-vUg3vH4JA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIy/LzA0L2phdmFzY3Jp/cHQtbG9nby5wbmc", alt: "JavaScript" },
  { src: "https://imgs.search.brave.com/CQbryDwdAyF7tzJAkmgUm2GiqjquFjxuCYJeDI9GRJI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbG9nb3MtMy82/MDAvUmVhY3QuanNf/bG9nby01MTIucG5n", alt: "React" },
  { src: "https://imgs.search.brave.com/FWFXBFbp54UwfCK163RYhm5AAPwcPiMBnU1gJpgIiLM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dC5icmFuZGZldGNo/LmlvL2lkMmFsdWUt/cngvaWRHdThJSkJk/My5zdmc_dXBkYXRl/ZD0xNzE0NTU2MjIx/Mjky", alt: "Next" },
  { src: "https://imgs.search.brave.com/DP8DXrD4DETBX8pWzMma8_ME-eCkFJ65jcHaOiP2gQQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL3RodW1icy82/MmE3NjQ5MmJkNzNh/NGFmNWM1ZDRmYjku/cG5n", alt: "Bootstrap" },
  { src: "https://imgs.search.brave.com/j6wDiqSrRFDP94uhwRKdlhWIBQIlAFSR2Gs8DgWOs_s/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbG9nb3MtYW5k/LWJyYW5kcy81MTIv/MTgxX0phdmFfbG9n/b19sb2dvcy01MTIu/cG5n", alt: "Java" },
  { src: "https://imgs.search.brave.com/YG4JAUJFDLXH24Jw5diRgzDySHcPX7JnwTWKOGrC0Tw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvbGV0dGVyX2Mv/c21hbGwvbGV0dGVy/X2NfUE5HMjIucG5n", alt: "C" },
  { src: "https://imgs.search.brave.com/vJx8kamIX3xx3_fB4P07lwfjoDVmU6-Um-ckOaZbrLU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIy/LzEyL2ZpZ21hLWxv/Z28tMC5wbmc", alt: "Figma" }
];

const Hero2 = () => {
  return (
    <div id="home" className="hero-parent">
      <div className="hero-child">
        <motion.p 
          className="para"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Hi, My name is 
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          Muhammed Al Faris
        </motion.h1>

        <motion.h3
          className="tag"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        >
          Bringing the web to life, one line at a time.
        </motion.h3>

        <motion.p 
          className="summary"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 1.2 }} 
        >
          <Typewriter
            words={[
              "I'm a Computer Science Engineer passionate about front-end development, currently working as a Web Developer at Kitez, Thrissur, Kerala. I focus on building responsive and user-friendly web applications, integrating APIs, and optimizing performance. Always eager to learn, I continuously explore new technologies to enhance my skills and create innovative web solutions."
            ]}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={30} 
            deleteSpeed={0} 
            delaySpeed={2500} 
          />
        </motion.p>

        {/* Skills Scroller with Delay */}
        <motion.div 
          className="skills-container"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: "easeOut", delay: 3 }} // Delay after summary
        >
          <h3 style={{textAlign:"center"}}>Technologies Driving my Creations</h3>
          <motion.div 
            className="skills-scroller"
            animate={{ x: ["0%", "-50%"] }} 
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          >
            {[...skills, ...skills].map((skill, index) => (
              <img key={index} src={skill.src} alt={skill.alt} className="skill-icon" />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero2;