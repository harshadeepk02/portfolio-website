"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "motion/react"


export const ExperienceSection = () => {
  return (
    <div id="experience" className="spacing  flex flex-col justify-center items-center">
      <h1 className="text-4xl font-semibold text-text mb-5">
        Experience
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center justify-items-center md:gap-x-5 sm:gap-y-5">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col w-full justify-start border border-gray-500 rounded-3xl bg-text/10 backdrop-blur p-5"
        >
          <h2 className="text-2xl font-bold text-heading">
            Dun & Bradstreet
          </h2>
          <h3 className="text-md font-bold text-text/50">
            Software Engineer
          </h3>
          <div className="text-xs text-text/50 pt-0 pb-3">
            Jun 2025-Aug 2025
          </div>
          <p className="text-md font-semibold"> 
            Incoming SWE Intern at Dun & Bradstreet for Summer 2025.
          </p>
        </motion.div>
      
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col w-full justify-start border border-gray-500 rounded-3xl bg-text/10 backdrop-blur p-5"
        >
          <h2 className="text-2xl font-bold text-heading">
            Freetail Hackers
          </h2>
          <h3 className="text-md font-bold text-text/50">
            Director of Logistics
          </h3>
          <div className="text-xs text-text/50 pt-0 pb-3">
            Jan 2024-Present
          </div>
          <p className="text-md pb-4"> 
            Serving as one of the leads at
            <a href="https://freetailhackers.com/" className="font-bold underline text-heading hover:text-text/25"> Freetail Hackers</a>
            , a team of 50+ students organizing hackathons at UT Austin. Hosted 1,400 hackers with $100,000+ across our past 2 events:
          </p>
          <a href="https://hacktx.com/" className="font-bold underline  text-heading hover:text-text/25"> HackTX 2024</a>
          <a href="https://recordhacks.freetailhackers.com/" className="font-bold underline  text-heading hover:text-text/25"> RecordHacks 2025</a>
        </motion.div>


        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col w-full justify-start border border-gray-500 rounded-3xl bg-text/10 backdrop-blur p-5"
        >
          <h2 className="text-2xl font-bold text-heading">
            FactFlow
          </h2>
          <h3 className="text-md font-bold text-text/50">
            Fullstack Developer
          </h3>
          <div className="text-xs text-text/50 pt-0 pb-3">
            Jan 2024-May 2024
          </div>
          <p className="text-md"> 
            Startup designed to provide research labs at UT Austin with
            an AI-powered query engine protected against LLM hallucination.
            Built by equipping GPT4 with a modified LlamaIndex RAG pipeline.
          </p>
          <div className="hidden md:flex gap-2 pt-7 text-xs justify-center text-text/70 font-bold">
            <p className="py-1 px-2 border rounded-full"> Python </p>
            <p className="py-1 px-2 border rounded-full"> Flask </p>
            <p className="py-1 px-2 border rounded-full"> React </p>
            <p className="py-1 px-2 border rounded-full"> LlamaIndex </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col w-full justify-start border border-gray-500 rounded-3xl bg-text/10 backdrop-blur p-5"
        >
          <h2 className="text-2xl font-bold text-heading">
            HackerOne @ ISSS
          </h2>
          <h3 className="text-md font-bold text-text/50">
            Bug Bounty Hunter
          </h3>
          <div className="text-xs text-text/50 pt-0 pb-3">
            Fall 2023-Present
          </div>
          <p className="text-md"> 
            Responsible for searching all UT-subdomains for any web vulnerabilities. 
            Identified and documented reports for XSS and SQL-injection issues, earning bounty payments.
          </p>
          <div className="hidden md:flex gap-2 pt-7 text-xs justify-center text-text/70 font-bold">
            <p className="py-1 px-2 border rounded-full"> JavaScript </p>
            <p className="py-1 px-2 border rounded-full"> HTML/CSS </p>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
};
