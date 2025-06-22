import { motion } from "framer-motion";
import selfie from "../assets/Selfie.png";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10">
        {/* Image */}
        <motion.img
          src={selfie}
          alt="Terry C. Lombardi"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="rounded-2xl shadow-lg w-72 h-auto"
        />

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-3 leading-relaxed">
            I'm Terry Lombardi — a U.S. expat based in Germany since 2016, combining business strategy with digital tools.
          </p>
          <p className="text-lg mb-3 leading-relaxed">
            With formal training in full-stack web development (CareerFoundry) and data analytics (Turing College),
            I bring over three decades of experience in operations, management, and automotive customer success to every digital project.
          </p>
          <p className="text-lg leading-relaxed">
            Passionate about precision, efficiency, and real-world problem solving — I'm actively seeking new opportunities where I can deliver both clean code and commercial results.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
