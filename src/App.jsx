import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Stats from "./components/Stats.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="relative overflow-hidden">
      <div className="fixed inset-0 -z-20 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(#00F5FF_1px,transparent_1px),linear-gradient(90deg,#00F5FF_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      

      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
