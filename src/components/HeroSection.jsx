import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="h-screen bg-gradient-to-b from-violet-900 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative"
    >
      {/* Left */}
      <div className="z-40 xl:mb-0 mb-24 max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 40, damping: 25, delay: 0.4 }}
          className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6"
        >
          Bridging Business & Code <br/> Delivering Sales Results
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 40, damping: 25, delay: 0.7 }}
          className="text-sm md:text-md lg:text-lg text-purple-200 max-w-2xl"
        >
          Remote-ready leader who turns business goals into digital products. After 30 years in management and sales, I now craft modern web apps and data dashboards that move the bottom line — from anywhere in the world.
        </motion.p>
      </div>

      {/* Right */}
      <Spline
        className="absolute xl:right-[-28%] right-0 top-[-20%] lg:top-0 select-none pointer-events-auto"
        scene="https://prod.spline.design/foJOYtLhZdIfv9Oe/scene.splinecode"
      />
    </section>
  );
}
