import { PageTransition } from "@/components/PageTransition";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Journey } from "@/components/Journey";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { YuvaManass } from "@/components/YuvaManass";
import { AmdgGroup } from "@/components/AmdgGroup";
import { VolunteeringCapabilities } from "@/components/VolunteeringCapabilities";
import { ArchiveCertifications } from "@/components/ArchiveCertifications";
import { ProfessionalVision } from "@/components/ProfessionalVision";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <About />
      <Journey />
      <Experience />
      <Projects />
      <YuvaManass />
      <AmdgGroup />
      <VolunteeringCapabilities />
      <ArchiveCertifications />
      <ProfessionalVision />
      <Footer />
    </PageTransition>
  );
}
