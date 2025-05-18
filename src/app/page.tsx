import { Header } from "../sections/Header";
import { HeroSection } from "../sections/Hero";
import { AboutSection } from "@/sections/About";
import { SkillsSection } from "@/sections/Skills";
import { ExperienceSection } from "@/sections/Experience";
import { ProjectsSection } from "@/sections/Projects";
import { InvolvementsSection } from "@/sections/Involvements";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <SkillsSection></SkillsSection>
      <ExperienceSection></ExperienceSection>
      <ProjectsSection></ProjectsSection>
      <ContactSection></ContactSection>
      <Footer></Footer>
      <Analytics />
    </div>
  );
}
