import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

const experiences = [
  {
    period: "June 2025 — Present",
    role: "Full Stack Development Intern",
    company: "Zidio Development",
    details: [
      "Developed ExcelViz — data visualization app with React.js, Redux Toolkit, Chart.js, and Three.js",
      "Built BlogLife — full-stack blogging platform with MERN stack and JWT authentication",
      "Created responsive UIs with Tailwind CSS and managed state using Redux Toolkit",
    ],
  },
  {
    period: "2024 — 2028",
    role: "B.Tech Computer Science & Engineering",
    company: "Sister Nivedita University",
    details: ["CGPA: 7.5/10"],
  },
];

const ExperienceSection = () => (
  <section className="px-6 md:px-12 py-24">
    <SectionLabel
      left="© Experience エクスペリエンス"
      center="(UP® — 05)"
      right="Digital Craft"
    />

    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="editorial-heading text-4xl md:text-7xl mb-16"
    >
      Practice. Craft.
    </motion.h2>

    <div className="flex flex-col">
      {experiences.map((exp, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.15 }}
          className="experience-item grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8"
        >
          <span className="section-label md:col-span-2">{exp.period}</span>
          <div className="md:col-span-3">
            <h3 className="font-display text-base font-semibold text-foreground">{exp.company}</h3>
            <p className="section-label mt-1">{exp.role}</p>
          </div>
          <ul className="md:col-span-7 flex flex-col gap-1">
            {exp.details.map((d, j) => (
              <li key={j} className="editorial-body">— {d}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ExperienceSection;
