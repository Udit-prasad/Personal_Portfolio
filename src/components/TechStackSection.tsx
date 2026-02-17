import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

const stack = [
  { name: "React.js", category: "Frontend" },
  { name: "Next.js", category: "Framework" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "MongoDB", category: "Database" },
  { name: "REST APIs", category: "Integration" },
  { name: "n8n", category: "Automation" },
  { name: "LLM APIs", category: "AI" },
  { name: "TypeScript", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Three.js", category: "3D/Visual" },
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

    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
      {stack.map((tech, i) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.4, delay: i * 0.04 }}
          className="group py-6 px-4 border-b border-border hover:bg-secondary/30 transition-all duration-500 flex justify-between items-center"
        >
          <span className="font-display text-base md:text-xl font-medium text-foreground group-hover:translate-x-2 transition-transform duration-500">
            {tech.name}
          </span>
          <span className="section-label opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {tech.category}
          </span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default TechStackSection;
