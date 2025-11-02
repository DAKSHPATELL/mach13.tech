import { ReactNode } from "react";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main id="main-content" className="flex-1">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-16 sm:px-6">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
