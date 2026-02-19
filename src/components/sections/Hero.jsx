import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="h-screen w-screen bg-rose-200 flex flex-col items-center justify-center text-center px-6">
            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl animate-pulse w-full md:text-7xl lg:text-7xl font-bold max-w-4xl"
            >
                The issue tracking tool you'll enjoy using
            </motion.h1>

            <p className="mt-6 motion-safe:animate-bounce text-gray-700 max-w-xl">
                Linear helps streamline software projects, sprints, tasks, and bug tracking.
            </p>

            <button className="mt-8 bg-white text-black px-6 py-3 rounded-xl hover:bg-gray-200 transition">
                Start Free Trial
            </button>
        </section>

    );
};

export default Hero;