import { Metadata } from "next";
import AboutPageContent from "@/components/AboutPageContent";

export const metadata: Metadata = {
  title: "About",
  description: "Mach13 builds dependable AI systems for regulated manufacturing teams."
};

export default function AboutPage() {
  return <AboutPageContent />;
}
