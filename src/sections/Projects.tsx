import Image from "next/image";
import Link from "next/link";
import selab from "@/assets/images/selab.png"
import { FaGithub } from "react-icons/fa";

export const ProjectsSection = () => {
  return (
    <div id="projects" className="spacing flex-col justify-center items-center my-0">
      <h1 className="text-4xl font-semibold text-text"> 
        Projects 
      </h1>

      <div className="grid grid-cols-2 items-center gap-3 border border-gray-500 rounded-3xl bg-text/10 backdrop-blur p-5 my-5">
        
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold text-heading">
              FactFlow
          </h2>
          <p className="text-md mt-5"> 
            Created a product designed to provide research labs at UT Austin with
            an AI-powered query engine that only sources academic references and
            reduces hallucination. 
          </p>
          <div className="hidden md:flex gap-3 pt-7 text-xs justify-center text-text/70 font-bold">
            <p className="py-1 px-2 border rounded-full"> Python </p>
            <p className="py-1 px-2 border rounded-full"> Flask </p>
            <p className="py-1 px-2 border rounded-full"> React </p>
            <p className="py-1 px-2 border rounded-full"> LlamaIndex </p>
          </div>
          <div className="flex justify-center pt-7">
            <Link href="https://github.com/harshadeepk02">
              <FaGithub size={30}></FaGithub>
            </Link>
          </div>
        </div>

        <Image src={selab} alt="selab" className="rounded-3xl w-full h-full p-0 object-cover" />

      </div>

      <div className="grid grid-cols-2 items-center gap-3 border border-gray-500 rounded-3xl bg-text/10 backdrop-blur p-5 my-5">
        
        <Image src={selab} alt="selab" className="rounded-3xl w-full h-full p-0 object-cover" />

        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold text-heading">
              FactFlow
          </h2>
          <p className="text-md mt-5"> 
            Created a product designed to provide research labs at UT Austin with
            an AI-powered query engine that only sources academic references and
            reduces hallucination. 
          </p>
          <div className="hidden md:flex gap-3 pt-7 text-xs justify-center text-text/70 font-bold">
            <p className="py-1 px-2 border rounded-full"> Python </p>
            <p className="py-1 px-2 border rounded-full"> Flask </p>
            <p className="py-1 px-2 border rounded-full"> React </p>
            <p className="py-1 px-2 border rounded-full"> LlamaIndex </p>
          </div>
          <div className="flex justify-center pt-7">
            <Link href="https://github.com/harshadeepk02">
              <FaGithub size={30}></FaGithub>
            </Link>
          </div>
        </div>

      </div>

      <div className="grid grid-cols-2 items-center gap-3 border border-gray-500 rounded-3xl bg-text/10 backdrop-blur p-5 my-5">
        
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold text-heading">
              FactFlow
          </h2>
          <p className="text-md mt-5"> 
            Created a product designed to provide research labs at UT Austin with
            an AI-powered query engine that only sources academic references and
            reduces hallucination. 
          </p>
          <div className="hidden md:flex gap-3 pt-7 text-xs justify-center text-text/70 font-bold">
            <p className="py-1 px-2 border rounded-full"> Python </p>
            <p className="py-1 px-2 border rounded-full"> Flask </p>
            <p className="py-1 px-2 border rounded-full"> React </p>
            <p className="py-1 px-2 border rounded-full"> LlamaIndex </p>
          </div>
          <div className="flex justify-center pt-7">
            <Link href="https://github.com/harshadeepk02">
              <FaGithub size={30}></FaGithub>
            </Link>
          </div>
        </div>

        <Image src={selab} alt="selab" className="rounded-3xl w-full h-full p-0 object-cover" />

      </div>
    </div>
  );
};
