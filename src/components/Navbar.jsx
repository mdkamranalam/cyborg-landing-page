import { FaRobot } from "react-icons/fa";

const Navbar = () => {
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
            Feature
          </li>
          <li className="hover:text-cyan-400 cursor-pointer transition">
            Technology
          </li>
          <li className="hover:text-cyan-400 cursor-pointer transition">
            Contact
          </li>
        </ul>

        <button className="px-5 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 transition text-black font-semibold">
          Launch
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
