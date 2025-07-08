"use client";

import Image from "next/image";
import Link from "next/link";
import selab from "@/assets/images/selab.png"
import charon from "@/assets/images/charon.png"
import nbody from "@/assets/images/nbody.gif"
import dog from "@/assets/images/dog.gif"
import robot from "@/assets/images/robot.jpg"
import sshbfa from "@/assets/images/sshbfa.png"
import { FaGithub } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "motion/react"

export const ProjectsSection = () => {
  return (
    <div id="projects" className="spacing flex-col justify-center items-center my-0">
      <h1 className="text-4xl font-semibold text-text"> 
        Projects 
      </h1>

      
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="sm:flex sm:flex-col md:grid md:grid-cols-2 items-center gap-3 border border-gray-500 rounded-3xl bg-text/10 backdrop-blur p-5 my-5"
      >
        
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold text-heading">
              Charon: Secure Cache
          </h2>
          <p className="text-md mt-5"> 
            Charon is a <span className="text-heading">gem5 simulator core and cache modification</span> built on top of the GhostMinion secure
            cache system (MICRO 21). We optimized the secure cache design and improved how they interface 
            with microarchitectural prefetchers and replacement policies.
          </p>
          <div className="hidden md:flex gap-3 pt-7 text-xs justify-center text-text/70 font-bold">
            <p className="py-1 px-2 border rounded-full"> C++ </p>
            <p className="py-1 px-2 border rounded-full"> Python </p>
            <p className="py-1 px-2 border rounded-full"> gem5 </p>
            <p className="py-1 px-2 border rounded-full"> BASH </p>
          </div>
          <div className="flex justify-center pt-7 gap-3">
            <motion.div whileHover={{ scale: 1.5, color: "#aac0af" }}>
              <Link href="https://github.com/harshadeepk02/Charon-Secure-Cache">
                <FaGithub size={30}></FaGithub>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.5, color: "#aac0af" }}>
              <Link href="https://github.com/harshadeepk02/Charon-Secure-Cache/blob/main/CHARON.pdf">
                <TfiWrite size={30}></TfiWrite>
              </Link>
            </motion.div>
          </div>
        </div>

        <Image src={charon} alt="charon" className="rounded-3xl w-full h-full p-0 object-cover" />

      </motion.div>


      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="sm:flex sm:flex-col md:grid md:grid-cols-2 items-center gap-3 border border-gray-500 rounded-3xl bg-text/10 backdrop-blur p-5 my-5"
      >

        <Image src={nbody} alt="nbody" className="rounded-3xl w-full h-full p-0 object-cover" />
        
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold text-heading">
              CUDA Programming
          </h2>
          <p className="text-md mt-5"> 
            Implementing different <span className="text-heading">parallelizable algorithms</span> on the CPU and GPU using NVIDIA&apos;s C++ CUDA Toolkit. 
            Gaining practice with <span className="text-heading">CUDA programming</span> techniques and observing CPU/GPU performance differences. 
            Algorithms include convolution, n-body simulation (shown here), prefix sum, etc.
          </p>
          <div className="hidden md:flex gap-3 pt-7 text-xs justify-center text-text/70 font-bold">
            <p className="py-1 px-2 border rounded-full"> C++ </p>
            <p className="py-1 px-2 border rounded-full"> CUDA </p>
            <p className="py-1 px-2 border rounded-full"> WebGL </p>
          </div>
          <div className="flex justify-center pt-7 gap-3">
            <motion.div whileHover={{ scale: 1.5, color: "#aac0af" }}>
              <Link href="https://github.com/harshadeepk02/CUDA-programming/">
                <FaGithub size={30}></FaGithub>
              </Link>
            </motion.div>
          </div>
        </div>
        
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="sm:flex sm:flex-col md:grid md:grid-cols-2 items-center gap-3 border border-gray-500 rounded-3xl bg-text/10 backdrop-blur p-5 my-5"
      >
        
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold text-heading">
              Skinning and Animation Rig
          </h2>
          <p className="text-md mt-5"> 
            Created an interactive linear blend skinning + animation system rendered using TypeScript and WebGL. 
            Users can <span className="text-heading">manipulate any 3D COLLADA model interactively</span> and create animations interpolating across 
            keyframes.
          </p>
          <div className="hidden md:flex gap-3 pt-7 text-xs justify-center text-text/70 font-bold">
            <p className="py-1 px-2 border rounded-full"> TypeScript </p>
            <p className="py-1 px-2 border rounded-full"> WebGL </p>
          </div>
          <div className="flex justify-center pt-7 gap-3">
            <motion.div whileHover={{ scale: 1.5, color: "#aac0af" }}>
              <Link href="https://github.com/harshadeepk02/skinning-and-animation">
                <FaGithub size={30}></FaGithub>
              </Link>
            </motion.div>
          </div>
        </div>

        <Image src={dog} alt="dog" className="rounded-3xl w-full h-full p-0 object-cover" />

      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="sm:flex sm:flex-col md:grid md:grid-cols-2 items-center gap-3 border border-gray-500 rounded-3xl bg-text/10 backdrop-blur p-5 my-5"
      >

        <Image src={robot} alt="robot" className="rounded-3xl w-full h-full p-0 object-cover" />
        
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold text-heading">
            Autonomous Navigation Robot
          </h2>
          <p className="text-md mt-5"> 
            Created a competition robot composed of an ESP-32 microcontroller and several sensors. <span className="text-heading">Developed autonomous
            color-sensing, line-following, and obstacle-avoidance routines</span> in C++. Breadboarded all electronics designed 
            model using SolidWorks.
          </p>
          <div className="hidden md:flex gap-3 pt-7 text-xs justify-center text-text/70 font-bold">
            <p className="py-1 px-2 border rounded-full"> C++ </p>
            <p className="py-1 px-2 border rounded-full"> SolidWorks </p>
            <p className="py-1 px-2 border rounded-full"> Bambu Studio </p>
          </div>
          <div className="flex justify-center pt-7 gap-3">
            <motion.div whileHover={{ scale: 1.5, color: "#aac0af" }}>
              <Link href="https://github.com/harshadeepk02/Robotathon-Fall-23">
                <FaGithub size={30}></FaGithub>
              </Link>
            </motion.div>
          </div>
        </div>
        
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="sm:flex sm:flex-col md:grid md:grid-cols-2 items-center gap-3 border border-gray-500 rounded-3xl bg-text/10 backdrop-blur p-5 my-5"
      >
        
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold text-heading">
              ARM Pipelined In-Order Processor
          </h2>
          <p className="text-md mt-5"> 
            Developed an ARM processor in C that simulates the <span className="text-heading">5-stage pipelined processing of instructions </span> 
            from a simplified ARM ISA. Performs static branch prediction alongside instruction forwarding
            and hazard control.
          </p>
          <div className="hidden md:flex gap-3 pt-7 text-xs justify-center text-text/70 font-bold">
            <p className="py-1 px-2 border rounded-full"> C </p>
            <p className="py-1 px-2 border rounded-full"> ARM Assembly </p>
            <p className="py-1 px-2 border rounded-full"> BASH </p>
          </div>
        </div>

        <Image src={selab} alt="selab" className="rounded-3xl w-full h-full p-0 object-cover" />

      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="sm:flex sm:flex-col md:grid md:grid-cols-2 items-center gap-3 border border-gray-500 rounded-3xl bg-text/10 backdrop-blur p-5 my-5"
      >

        <Image src={sshbfa} alt="sshbfa" className="rounded-3xl w-full h-full p-0 object-cover" />
        
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold text-heading">
            SSH Brute Force Attack Research
          </h2>
          <p className="text-md mt-5"> 
            Examined the energy and computational costs of brute force attacks on SSH servers. 
            Simulated attacks using the Medusa CLI. Observed a 25% increase in idle energy wastage and a 66% increase
            in CPU clock speed overhead. Working to publish.
          </p>
          <div className="hidden md:flex gap-3 pt-7 text-xs justify-center text-text/70 font-bold">
            <p className="py-1 px-2 border rounded-full"> Matplotlib </p>
            <p className="py-1 px-2 border rounded-full"> Pandas </p>
            <p className="py-1 px-2 border rounded-full"> Linux </p>
            <p className="py-1 px-2 border rounded-full"> Raspberry Pi </p>
          </div>
          <div className="flex justify-center pt-7 gap-3">
            <motion.div whileHover={{ scale: 1.5, color: "#aac0af" }}>
              <Link href="https://drive.google.com/file/d/1C9eNj6ThIy-4T5qDOz8PTl2Tf0u3wQ5w/view">
                <TfiWrite size={30}></TfiWrite>
              </Link>
            </motion.div>
          </div>
        </div>
        
      </motion.div>

      <div className="flex flex-col items-center">
        <p className="text-xl text-text text-center">
          For a complete list of my other projects/works, check out:
        </p>
        <div className="flex gap-4 mt-2">
          <motion.div whileHover={{ scale: 1.5, color: "#aac0af" }}>
            <Link href="https://www.linkedin.com/in/hkambham/">
              <FaLinkedin size={40}></FaLinkedin>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.5, color: "#aac0af" }}>
            <Link href="https://github.com/harshadeepk02">
              <FaGithub size={40}></FaGithub>
            </Link>
          </motion.div>
        </div>
      </div>

    </div>
  );
};
