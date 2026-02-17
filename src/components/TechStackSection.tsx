import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

const stack = [
  "React.js", "Next.js", "Node.js", "Express.js",
  "REST APIs", "MongoDB", "n8n Automation",
  "LLM APIs", "JavaScript", "TypeScript",
  "Tailwind CSS", "Three.js",
];

const TechStackSection = () => (
  <section className="px-6 md:px-12 py-24">
    <SectionLabel
      left="© Tech Stack テクノロジー"
      center="(UP® — 07)"
      right="Tools & Technologies"
    />

    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="editorial-heading text-4xl md:text-7xl mb-16"
    >
      Stack
    </motion.h2>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
      {stack.map((tech, i) => (
        <motion.div
          key={tech}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className="py-6 border-b border-border"
        >
          <span className="font-display text-base md:text-lg font-medium text-foreground">{tech}</span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default TechStackSection;
