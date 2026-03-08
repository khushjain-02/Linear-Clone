import Section from "../ui/Section";
import { features } from "../../data/features";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <Section
      id="features"
      className="bg-slate-950 px-4 py-20 text-center md:px-6 lg:px-8"
    >
      <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
        Powerful features, minimal UI
      </h2>
      <p className="mx-auto mb-14 max-w-2xl text-sm text-slate-300 md:text-base">
        Opinionated workflows, lightning-fast navigation, and a keyboard-first
        experience that helps your team stay in flow.
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-7 text-left shadow-lg shadow-slate-950/40"
          >
            <h3 className="mb-3 text-lg font-semibold text-slate-50">
              {feature.title}
            </h3>
            <p className="text-sm text-slate-300">
              {feature.desc}
            </p>
            <div className="mt-5 h-px w-10 bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Features;
