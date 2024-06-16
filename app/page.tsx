import { AboutSection } from "./components/about";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { ImpactSection } from "./components/impact";
import { TopNav } from "./components/top-nav";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center flex-col">
      <TopNav />
      <Header />
      <Hero />
      <AboutSection />
      <ImpactSection />
    </main>
  );
}
