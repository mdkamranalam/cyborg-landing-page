import { useState } from "react";
import { FaRobot, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <FaRobot className="text-cyan-400 text-2xl" />

          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            CYBORG
          </h1>
        </div>

        <ul className="hidden md:flex gap-8 text-gray-300">
          <li className="hover:text-cyan-400 cursor-pointer transition">
            Home
          </li>

          <li className="hover:text-cyan-400 cursor-pointer transition">
            Features
          </li>

          <li className="hover:text-cyan-400 cursor-pointer transition">
            Technology
          </li>

          <li className="hover:text-cyan-400 cursor-pointer transition">
            Contact
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button className="hidden md:block px-5 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 transition text-black font-semibold">
            Launch
          </button>

          <button
            className="md:hidden text-2xl text-cyan-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-cyan-500/20">
          <ul className="flex flex-col p-6 gap-4 text-gray-300">
            <li className="hover:text-cyan-400 cursor-pointer">Home</li>

            <li className="hover:text-cyan-400 cursor-pointer">Features</li>

            <li className="hover:text-cyan-400 cursor-pointer">Technology</li>

            <li className="hover:text-cyan-400 cursor-pointer">Contact</li>

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
