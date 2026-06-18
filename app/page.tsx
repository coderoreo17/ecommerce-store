import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black">

      <Navbar />

      <Hero />

      <FeaturedProducts />

      <Footer />

    </main>
  );
}