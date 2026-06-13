import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Stats from "./components/Stats.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="relative overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-[#050816]" />
      <div className="fixed top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-[150px] -z-10" />
      <div className="fixed bottom-20 right-20 w-72 h-72 bg-purple-500/20 blur-[150px] -z-10" />

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
