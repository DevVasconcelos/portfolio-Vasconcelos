import React from "react";
import { FaChevronLeft, FaChevronRight, FaCss3, FaGit, FaGithub, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import CardSkill from "../Atoms/CardSkill";
import { SiMongodb, SiTailwindcss, SiTypescript } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

function Skills({ setActiveSection }) {
  const skills = [
    { text: "HTML", icon: <FaHtml5 color="#e34f26" /> },
    { text: "CSS", icon: <FaCss3 color="#1572b6" /> },
    { text: "Javascript", icon: <FaJs color="#f7df1e" /> },
    { text: "React", icon: <FaReact color="#61dafb" /> },
    { text: "NodeJS", icon: <FaNodeJs color="#72ab63" /> },
    { text: "Git", icon: <FaGit color="#f05032" /> },
    { text: "Github", icon: <FaGithub color="#919191" /> },
    { text: "MongoDB", icon: <SiMongodb color="#47a248" /> },
    { text: "Tailwind", icon: <SiTailwindcss color="#06b6d4" /> },
    { text: "MySQL", icon: <GrMysql color="#06b6d4" /> },
    { text: "Typescript", icon: <SiTypescript color="#1572b6" /> },
  ]

  return (
    <>
      <h1 className="text-4xl font-bold mb-5">Skills & Tools</h1>
      <div className="flex gap-5 flex-wrap justify-center">
        {skills.map((skill, index) => (
            <CardSkill key={index} icon={skill.icon} text={skill.text} />
        ))}
      </div>
      <div className="flex justify-between">
        <button
          className="relative px-5 py-2 rounded-lg mt-5 cursor-pointer hover:bg-(--surface-hover)"
          onClick={() => setActiveSection("projects")}
        >
          <span className="ml-5">Projects</span>
          <FaChevronLeft className="absolute left-4 top-3 text-sm" />
        </button>
        <button
          className="relative px-5 py-2 rounded-lg mt-5 cursor-pointer hover:bg-(--surface-hover)"
          onClick={() => setActiveSection("education")}
        >
          <span className="mr-5">Education</span>
          <FaChevronRight className="absolute right-4 top-3 text-sm" />
        </button>
      </div>
    </>
  );
}

export default Skills;
