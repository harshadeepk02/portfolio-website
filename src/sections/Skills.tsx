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
  SiOpengl,
  SiGnubash,
} from "react-icons/si";





export const SkillsSection = () => {

  const skills = [
    { name: 'React', icon: <FaReact size={35}/>, description: 'I have used React extensively across most of my different fullstack projects, especially for hackathons, as my frontend framework of choice. When designing FactFlow, an AI-powered academic query engine designed for UT research labs, I developed an engaging frontend interface through React.' },
    { name: 'Git', icon: <FaGitAlt size={35}/>, description: 'When creating Charon, a micrarchitectural secure cache system designed in the gem5 simulator, I used Git to manage version control and workflow across multiple collaborators seamlessly. Git allowed us to prototype and develop multiple ideas at once, with easy rollback and separation with branches.' },
    { name: 'Java', icon: <FaJava size={35}/>, description: 'Java was the very first programming language I formally learned and was exposed to OOP in. I worked in Java throughout my Data Structures course at UT, implementing linked lists, BSTs, graphs, and even a basic Huffman encoding compression algorithm.' },
    { name: 'JavaScript', icon: <FaJsSquare size={35}/>, description: 'Beyond just regular web development, I have analyzed JavaScript code searching for web vulnerabilities across UT subdomains as part of the HackerOne bug bounty program. I have also used JavaScript for this personal website, and rely on the WebGL JavaScript API for simple rendering tasks.' },
    { name: 'C++', icon: <SiCplusplus size={35}/>, description: 'When working on an embedded ESP-32 microcontroller robot project, I developed various autonomous navigation routines in C++. I have also worked with C++ extensively in various computer architecture projects and simulators such as ChampSim and gem5. Additionally, I have implemented various GPU parallelized algorithms using CUDA in C++. Lastly, many of my graphics projects, such as my accelerated ray tracer, rely on the OpenGL rendering pipeline in C++.' },
    { name: 'TypeScript', icon: <SiTypescript size={35}/>, description: 'I have used TypeScript across a few of my web dev projects when doing frontend work. I also used TypeScript in creating a skinning and animation system for 3D models, as it relied on the WebGL rendering pipeline, so all skeleton logic and data structures were written in TypeScript.' },
    { name: 'SQL', icon: <PiFileSqlFill size={35}/>, description: 'For some of the fullstack projects I have worked on in the past, when Firebase no-SQL databases end up being insufficient, I have relied on SQL databases for the backend. I have also analyzed datasets provided to me by performing SQL queries to interact with and derive information from the data.' },
    { name: 'ARM', icon: <SiArm size={35}/>, description: 'When developing a simulated pipelined in-order processor for ARM instructions in C, I extensively worked with the ARM ISA manual to translate instruction opcodes and learn how to pipeline different operations. I found out how ARM instructions are broken down into different stages and how to extract input parameters from opcodes. ' },
    { name: 'Flask', icon: <SiFlask size={35}/>, description: 'When I was working on FactFlow, one of my fullstack ML projects that utilized a Python backend, I developed a basic Flask API to enable interfacing between the frontend/backend over HTTP. This allowed user input queries to easily be passed into the Python backend for processing, and return a generated response back to the client over HTTP.' },
    { name: 'Firebase', icon: <SiFirebase size={35}/>, description: 'When developing my Digital Wardrobe fullstack app, an app designed to allow users to store and manage clothing and outfits, I utilized Firebase as a no-SQL simple database solution to identify users via the Firebase Google accounts integration and manage databases of uploaded clothing and created outfits for each user.' },
    { name: 'GitHub', icon: <FaGithubSquare size={35}/>, description: 'I have used GitHub to collaborate and manage version control across almost all of my projects. When creating Charon, a micrarchitectural secure cache system designed in the gem5 simulator, we used GitHub to collaborate on the code, manage version control for different implementations using split branches, share scripts for running benchmarks, and even for sharing and providing public instructions for our codebase.' },
    { name: 'LlamaIndex', icon: <SiOllama size={35}/>, description: 'When working on FactFlow, an AI-powered query engine designed to reduce hallucination, I utilized the LlamaIndex retrieval-augmented generation (RAG) framework to embed and identify relevant context in each source most closely related to the user query. This specific source information is then used to generate the best response.' },
    { name: 'Microcontrollers', icon: <FaMicrochip size={35}/>, description: 'I have worked with various microcontrollers for embedded projects. When designing an autonomous navigation robot that relied on several different sensors, I used an ESP-32 to program the robot and interface with the sensors. I also used a Raspberry Pi 3B+ as a victim SSH server when conducting research into the costs of SSH brute force attacks.' },
    { name: 'Framer Motion', icon: <TbBrandFramerMotion size={35}/>, description: 'I have used Framer Motion as a useful animation library to make more interactive and engaging frontend experiences for my web dev projects, including this very personal website.' },
    { name: 'Linux', icon: <FaLinux size={35}/>, description: 'I have utilized Ubuntu, a Linux distribution, as the environment for developing microarchitectural predictors and running benchmark scripts in the gem5 simulator. Additionally, when researching SSH brute force attacks, I set up various SSH servers on Raspberry Pi OS, a Debian Linux distro, to serve as a victim SSH server.' },
    { name: 'Jira', icon: <SiJira size={35}/>, description: 'During my time at Code2College, I utilized Jira as an agile project management and sprint-based development platform to coordinate with other teams on larger projects' },
    { name: 'OpenGL', icon: <SiOpengl size={35}/>, description: 'Across various graphics projects that require more powerful rendering pipelines, like my accelerated ray tracer or skinning and animation rig, I have used OpenGL (or WebGL) to process and render data using the GPU, or simply leverage compute shaders for faster computations. I have also used the OpenGL GLM mathematics library to easily perform any linear algebra operations needed for my projects.' },
    { name: 'Bash', icon: <SiGnubash size={35}/>, description: 'When developing Charon, a secure cache system designed using the gem5 computer architecture simulator, I wrote BASH scripts to run different test benchmarks, parallellize workloads, parse and pass in parameters appropriately, manage piping test results into output files, and parse output stat dumps easily for key data.' },
    { name: 'Python', icon: <FaPython size={35}/>, description: 'I have used Python in most machine learning projects I have worked on, including FactFlow, an AI-powered query engine built using Python + Flask API for the backend.' },
    { name: 'Next.js', icon: <RiNextjsFill size={35}/>, description: 'Building off my knowledge of React, I worked with Next.js as my frontend framework to create this very personal portfolio site.' },
    { name: 'Tailwind CSS', icon: <RiTailwindCssFill size={35}/>, description: 'Across several different projects, including this very personal website, I have used Tailwind as a very quick and easy-to-prototype with CSS framework to design engaging UI experiences.' },
    { name: 'HTML', icon: <FaHtml5 size={35}/>, description: 'Across all of my web dev projects, I have used HTML to create interactive front-end experiences (including this very website).' },
    { name: 'CSS', icon: <FaCss3Alt size={35}/>, description: 'I have used vanilla CSS along with different CSS frameworks (Tailwind, Bootstrap) in designing and styling interactive front-end experiences.' },


  ];
  const [hoveredSkill, setHoveredSkill] = useState(skills[0].name);

  return(
    <div className="spacing grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-5 md:gap-0">

      {/* For each skill, display its icon and update it to be the hovered skill when hovered */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="flex justify-center order-2 md:order-1"
      >
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 p-7 gap-12 border border-heading rounded-3xl bg-text/10 backdrop-blur">
          {skills.map((skill, index) => (
            <div key={index} onMouseEnter={() => setHoveredSkill(skill.name)}>
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: hoveredSkill === skill.name ? 1.5 : 1, color: hoveredSkill === skill.name ? "#aac0af" : "#f8f9fa" }}
                  transition={{ duration: 0.2 }}
                >
                  {skill.icon}
                </motion.div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Display the description of the hovered skill */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="flex flex-col justify-center items-center order-1 md:order-2"
      >
        <h1 className="flex text-4xl font-bold text-text"> Skills </h1>
        <h2 className="flex text-sm md:mb-5"> Hover over each icon to learn more! </h2>
        <h2 className="text-2xl font-semibold text-heading p-1"> {hoveredSkill} </h2>
        <p className="text-gray-300 text-center md:ml-5"> {skills.find((skill) => skill.name === hoveredSkill)?.description}</p>
      </motion.div>

    </div>
  );
};