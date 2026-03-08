import { motion } from "framer-motion";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 pt-24 text-center md:px-6 lg:px-8"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-violet-600/35 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-cyan-400/30 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-full border border-cyan-400/40 bg-slate-900/60 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200/80"
        >
          Issue tracking for modern teams
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-slate-50 md:text-5xl lg:text-6xl"
        >
          The issue tracking tool{" "}
          <span className="bg-gradient-to-r from-violet-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
            you&apos;ll enjoy
          </span>{" "}
          using.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-base text-slate-300 md:text-lg"
        >
          Linear helps streamline software projects, sprints, tasks, and bug tracking
          with a fast, minimal interface your team will actually love.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button className="bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-300 text-slate-950 shadow-lg shadow-cyan-500/40 hover:from-sky-400 hover:via-cyan-300 hover:to-emerald-200">
            Start free trial
          </Button>
          <button className="text-sm font-medium text-slate-300 hover:text-slate-100">
            View product demo
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;