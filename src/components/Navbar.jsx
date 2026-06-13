import { useEffect, useState } from "react";
import { FaRobot, FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "Technology", href: "#technology" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "features", "technology", "contact"];

      const scrollPosition = window.scrollY + 150;

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (!element) return;

        if (
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-lg shadow-[0_0_20px_rgba(0,255,255,0.3)]"
          : "bg-black/30 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <FaRobot className="text-cyan-400 text-2xl" />

          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            CYBORG
          </h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={
                  activeSection === link.href.replace("#", "")
                    ? "text-cyan-400"
                    : "text-gray-300"
                }
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button className="hidden md:block px-5 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 transition text-black font-semibold">
            Launch
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-cyan-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-cyan-500/20">
          <ul className="flex flex-col p-6 gap-4 text-gray-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-cyan-400 transition"
              >
                {link.name}
              </a>
            ))}
            <button className="mt-4 px-5 py-2 rounded-full bg-cyan-500 text-black font-semibold">
              Launch
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
