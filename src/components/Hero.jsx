import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center px-6">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-cyan-400 mb-4 uppercase tracking-widest">
            Next Generation Intelligence
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            THE FUTURE{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              IS CYBORG
            </span>
          </h1>
          <p className="mt-6 text-gray-400 text-lg max-w-xl">
            Experience the perfect fusion of human creativity and artificial
            intelligence.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="px-6 py-3 bg-cyan-500 rounded-full text-black font-semibold hover:bg-cyan-400 transition">
              Enter Future
            </button>

            <button className="px-6 py-3 border border-cyan-500 rounded-full hover:bg-cyan-500/10 transition">
              Watch Demo
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div lassName="w-80 h-80 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 blur-3xl opacity-40 absolute" />

          <div className="relative w-72 h-72 rounded-full border-4 border-cyan-400 flex items-center justify-center shadow-[0_0_50px_#00F5FF]">
            <span className="text-8xl">🤖</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
