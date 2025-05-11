"use client";

import Image from "next/image";
import utlogo2 from "@/assets/images/utlogo2.png"
import freetailbat from "@/assets/images/freetailbat.png"
import dandb from "@/assets/images/dandb.png"
import convergent from "@/assets/images/convergent.png"
import isss from "@/assets/images/isss.png"
import React, { useState } from "react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return(
    <div id="about" className="spacing gap-4 sm:gap-8 pt-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="sm:order-2 md:order-1 flex flex-col items-center justify-center gap-4"
      >
        <div className="flex flex-row gap-4 items-center">
          <Image src={utlogo2} alt="utlogo2" className="w-full h-full" />
          <Image src={dandb} alt="dandb" className="w-1/2 h-full px-3 sm:hidden" />
        </div>
        <div className="flex flex-row gap-4 items-center sm:hidden">
          <Image src={freetailbat} alt="freetailbat" className="w-full h-full" />
          <Image src={isss} alt="isss" className="w-3/5 h-full" />
          <Image src={convergent} alt="convergent" className="w-full h-full" />
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col items-center sm:order-1 md:order-2"
      >
        <h1 className="text-4xl font-semibold text-text mb-2">
          About Me
        </h1>
        <p className="text-gray-300 mt-1 text-center">
          I&apos;m Harshadeep, a CS and Math double major at UT Austin interested in <span className="text-heading">computer architecture, SWE, systems,  
          and cybersecurity</span>. Motivated by a strong sense of curiosity and excitement for exploring new
          unknowns, I&apos;m always looking for opportunities to challenge myself and grow!
        </p>
      </motion.div>
    </div>
  );
};
