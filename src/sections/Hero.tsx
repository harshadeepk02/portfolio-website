"use client";

import self from "@/assets/images/temp-self.jpg"
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="wrapper md:pb-10"
    >
      <div className="flex flex-col justify-center items-start">
        <h1 className="text-7xl font-bold text-text"> 
          Hey! I&apos;m 
        </h1>
        <h1 className="text-5xl font-bold text-heading mt-3"> 
          Harshadeep Kambhampati
        </h1>
        <p className="text-xl text-gray-300 mt-6">
          I&apos;m a student at The University of Texas at Austin studying computer science and mathematics.
        </p>
        <div className="flex gap-4 mt-2">
          <motion.div whileHover={{ scale: 1.3, color: "#aac0af" }}>
            <Link href="https://www.linkedin.com/in/hkambham/">
              <FaLinkedin size={40}></FaLinkedin>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.3, color: "#aac0af" }}>
            <Link href="https://github.com/harshadeepk02">
              <FaGithub size={40}></FaGithub>
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="border-4 border-gray-500 rounded-[4rem] overflow-hidden float-left">
        <Image src={self} className="h-[30rem] w-[30rem] object-cover" alt="self"/>
      </div>
    </motion.div>
  );
};
