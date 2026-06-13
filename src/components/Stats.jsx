import { motion } from "framer-motion";

const Stats = () => {
  return (
    <section id="technology" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="
              p-8
              rounded-2xl
              bg-white/5
              border border-cyan-500/20
            "
          >
            <h3 className="text-5xl font-bold text-cyan-400">98%</h3>
            <p className="text-gray-400 mt-3">Prediction Accuracy</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="
              p-8
              rounded-2xl
              bg-white/5
              border border-cyan-500/20
            "
          >
            <h3 className="text-5xl font-bold text-cyan-400">1.2M</h3>
            <p className="text-gray-400 mt-3">Neural Operations</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="
              p-8
              rounded-2xl
              bg-white/5
              border border-cyan-500/20
            "
          >
            <h3 className="text-5xl font-bold text-cyan-400">500+</h3>
            <p className="text-gray-400 mt-3">Connected Systems</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
