import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main id="main-content" className="flex-1">
        <div className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
