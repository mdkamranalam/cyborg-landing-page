import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-28 px-6">
      <motion.div
        intial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="
          max-w-5xl
          mx-auto
          text-center
          rounded-3xl
          p-12
          border
          border-cyan-500/30
          bg-white/5
          backdrop-blur-md
        "
      >
        <h2 className="text-4xl md:text-6xl font-bold">
          Ready To Join
          <span className="text-cyan-400"> The Evolution?</span>
        </h2>

        <p className="mt-6 text-gray-400 text-lg">
          Experience the next generation of intelligence where humans and
          machines evolve together.
        </p>

        <button
          className="
            mt-10
            px-8
            py-4
            rounded-full
            bg-cyan-500
            text-black
            font-bold
            hover:bg-cyan-400
            transition
          "
        >
          Launch Now
        </button>
      </motion.div>
    </section>
  );
};

export default CTA;
