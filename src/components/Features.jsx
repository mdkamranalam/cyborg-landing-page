import { motion } from "framer-motion";
import { FaBrain, FaEye, FaShieldAlt, FaMicrochip } from "react-icons/fa";

const features = [
  {
    icon: <FaMicrochip />,
    title: "Neural Core",
    desc: "Advanced AI processing with real-time intelligence.",
  },
  {
    icon: <FaEye />,
    title: "Cyber Vision",
    desc: "Enhanced perception and data interpretation.",
  },
  {
    icon: <FaBrain />,
    title: "Adaptive Learning",
    desc: "Self-improving neural architecture.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Quantum Security",
    desc: "Military-grade cyber protection systems.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-widest">Features</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Built for the <span className="text-cyan-400"> Future</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -10 }}
              className="
                bg-white/5
                border
                border-cyan-500/20
                backdrop-blur-md
                rounded-2xl
                p-6
                transition
              "
            >
              <div className="text-cyan-400 text-4xl mb-4">{feature.icon}</div>
              <div className="text-xl font-bold mb-3">{feature.title}</div>
              <div className="text-gray-400">{feature.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
