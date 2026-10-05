import CategoryRow from "@/components/CategoryRow";
import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505]">
      <Header />
      <Hero />
      <CategoryRow />
      <FeaturedSection />
      <Footer />
    </main>
  );
}