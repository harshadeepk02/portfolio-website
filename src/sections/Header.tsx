import logo from "@/assets/images/cropped-h-logo.png"
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="fixed w-full top-0 left-0 flex justify-between items-center px-4 md:px-10 pt-5 z-50">
        <Link href={'#'}>
          <Image src={logo} className="hidden md:flex size-[30px] w-auto" alt="logo"/>
        </Link>
        <div className="absolute left-1/2 -translate-x-1/2">
          <nav className="hidden md:flex gap-1 p-0.5 border border-heading/15 rounded-full bg-text/10 backdrop-blur">
            <a href="#about" className="navbar">About</a>
            <a href="#experience" className="navbar">Experience</a>
            <a href="#projects" className="navbar">Projects</a>
            <a href="#contact" className="navbar bg-text text-background hover:bg-text/50">Contact</a>
          </nav>
        </div>
        <div className="flex p-0.5 border border-heading/15 rounded-full bg-text/10 backdrop-blur">
          <a href="https://docs.google.com/document/d/1JHpAYhRtLR8vZ-7ORx1Hcnx7tHvNUGVV/export?format=pdf" className="navbar">Resume</a>
        </div>
    </div>
  );
};
