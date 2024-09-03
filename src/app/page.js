import Image from "next/image";
import Hero from "./components/Hero";
import Initiatives from "./components/Initiatives";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Incubation from "./components/Incubation";
import Spotlight from "./components/Spotlight";
import Testinomial from "./components/Testinomial";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="polar">
      <Navbar />
      <About />
      <Hero />
      <Initiatives />
      <Incubation />
      <Spotlight />
      <Testinomial />
      <Footer />
    </div>
  );
}
//
//
