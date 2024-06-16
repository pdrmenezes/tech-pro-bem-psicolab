import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { TopNav } from "./components/top-nav";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center flex-col">
      <TopNav />
      <Header />
      <Hero />
      <Footer />
    </main>
  );
}
