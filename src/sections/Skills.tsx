"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  FaJava,
  FaReact,
  FaPython,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGithubSquare,
  FaMicrochip,
  FaLinux,
  FaGitAlt,
  
} from "react-icons/fa";

import {
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";

import {
  PiFileSqlFill,
} from "react-icons/pi";

import {
  TbBrandFramerMotion,
} from "react-icons/tb";

import {
  SiCplusplus,
  SiTypescript,
  SiArm, 
  SiFlask,
  SiFirebase,
  SiOllama,
  SiJira,
} from "react-icons/si";





export const SkillsSection = () => {

  const skills = [
    { name: 'Java', icon: <FaJava size={35}/>, description: 'I used Java in my CS314 class' },
    { name: 'React', icon: <FaReact size={35}/>, description: 'I used React in my CS373 class' },
    { name: 'Python', icon: <FaPython size={35}/>, description: 'I used Python in my CS373 class' },
    { name: 'JavaScript', icon: <FaJsSquare size={35}/>, description: 'I used JavaScript in my CS373 class' },
    { name: 'HTML', icon: <FaHtml5 size={35}/>, description: 'I used HTML in my CS373 class' },
    { name: 'CSS', icon: <FaCss3Alt size={35}/>, description: 'I used CSS in my CS373 class' },
    { name: 'Next.js', icon: <RiNextjsFill size={35}/>, description: 'I used Next.js in my CS373 class' },
    { name: 'C++', icon: <SiCplusplus size={35}/>, description: 'I used C++ in my CS314 class' },
    { name: 'TypeScript', icon: <SiTypescript size={35}/>, description: 'I used TypeScript in my CS373 class' },
    { name: 'SQL', icon: <PiFileSqlFill size={35}/>, description: 'I used SQL in my CS373 class' },
    { name: 'ARM', icon: <SiArm size={35}/>, description: 'I used ARM in my CS314 class' },
    { name: 'Flask', icon: <SiFlask size={35}/>, description: 'I used Flask in my CS373 class' },
    { name: 'Firebase', icon: <SiFirebase size={35}/>, description: 'I used Firebase in my CS373 class' },
    { name: 'GitHub', icon: <FaGithubSquare size={35}/>, description: 'I used GitHub in my CS373 class' },
    { name: 'Git', icon: <FaGitAlt size={35}/>, description: 'I used Git in my CS373 class' },
    { name: 'Ollama', icon: <SiOllama size={35}/>, description: 'I used Llamaindex in my CS373 class' },
    { name: 'Microchip', icon: <FaMicrochip size={35}/>, description: 'I used ESP-32 in my CS314 class' },
    { name: 'Tailwind CSS', icon: <RiTailwindCssFill size={35}/>, description: 'I used Tailwind CSS in my CS373 class' },
    { name: 'Framer Motion', icon: <TbBrandFramerMotion size={35}/>, description: 'I used Framer Motion in my CS373 class' },
    { name: 'Linux', icon: <FaLinux size={35}/>, description: 'I used Linux in my CS314 class' },
    { name: 'Jira', icon: <SiJira size={35}/>, description: 'I used Jira in my CS373 class' },
  ];
  const [hoveredSkill, setHoveredSkill] = useState(skills[0].name);

  return(
    <div className="spacing grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-5 md:gap-0">

      {/* For each skill, display its icon and update it to be the hovered skill when hovered */}
      <div className="flex justify-center order-2 md:order-1">
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-6 p-7 gap-12 border border-heading rounded-3xl bg-text/10 backdrop-blur">
          {skills.map((skill, index) => (
            <div key={index} onMouseEnter={() => setHoveredSkill(skill.name)}>
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: hoveredSkill === skill.name ? 1.5 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {skill.icon}
                </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Display the description of the hovered skill */}
      <div className="flex flex-col justify-center items-center order-1 md:order-2">
        <h1 className="flex text-4xl font-bold text-text mt-12 md:my-5"> Skills </h1>
        <h2 className="text-2xl font-semibold text-heading p-1"> {hoveredSkill} </h2>
        <p className="text-gray-400"> {skills.find((skill) => skill.name === hoveredSkill)?.description}</p>
      </div>

    </div>
  );
};