import { motion } from "framer-motion";

const Section = ({ children, className, id }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`w-full ${className}`}
      id={id}
    >
      {children}
    </motion.section>
  );
};

export default Section;
