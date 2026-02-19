import Section from "../ui/Section";
import { features } from "../../data/features";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <Section id="features" className="bg-fuchsia-100 py-20 text-center">
      <h2 className="text-4xl font-bold mb-16">Features</h2>

      <div className="grid md:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="p-8 rounded-2xl bg-cyan-200 border border-gray-800"
          >
            <h3 className="text-xl font-semibold mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-800">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Features;
