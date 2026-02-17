import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "./SectionLabel";

const projects = [
  {
    number: "01",
    title: "ExcelViz",
    category: "Data Visualization",
    description: "An interactive Excel data visualization web app with 2D and 3D chart rendering — AI-assisted data insights planned.",
    stack: "React.js, Redux Toolkit, Chart.js, Three.js, Tailwind CSS",
    year: "2025",
  },
  {
    number: "02",
    title: "BlogLife",
    category: "Full-Stack Platform",
    description: "A full-stack blogging platform with user authentication, post management, and rich text editing.",
    stack: "React.js, Node.js, Express.js, MongoDB, Redux Toolkit",
    year: "2025",
  },
  {
    number: "03",
    title: "Atmoscan",
    category: "Weather + AI Insights",
    description: "Real-time weather data application with AI-generated environmental insights for any location.",
    stack: "React.js, Node.js, Express.js, OpenWeatherMap API, LLM API",
    year: "2025",
  },
  {
    number: "04",
    title: "Automation Workflows",
    category: "n8n + APIs",
    description: "Workflow automation demos connecting APIs, webhooks, and LLM-powered processing pipelines.",
    stack: "n8n, REST APIs, Webhooks, Node.js",
    year: "2025",
  },
];

const ProjectsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const headingX = useTransform(scrollYProgress, [0, 0.3], [-60, 0]);

  return (
    <section id="projects" ref={ref} className="px-6 md:px-12 py-24">
      <SectionLabel
        left="© Featured Projects プロジェクト"
        center="(UP® — 03)"
        right="Creative Development"
      />

      <motion.h2
        style={{ x: headingX }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="editorial-heading text-4xl md:text-7xl mb-16"
      >
        Featured Works©
      </motion.h2>

      <div className="flex flex-col">
        {projects.map((project, i) => (
          <motion.div
            key={project.number}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            className="project-row group"
            data-hover
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-baseline gap-6">
                <motion.span
                  className="section-label opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  {project.number}
                </motion.span>
                <h3 className="font-display text-2xl md:text-5xl font-bold text-foreground group-hover:translate-x-4 transition-transform duration-500">
                  {project.title}
                </h3>
              </div>
              <div className="flex items-center gap-6">
                <span className="section-label">{project.category}</span>
                <span className="section-label hidden md:inline-block w-[1px] h-3 bg-border" />
                <span className="section-label">{project.year}</span>
              </div>
            </div>
            <div className="mt-4 flex flex-col md:flex-row md:items-center justify-between gap-4 max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-700 ease-in-out">
              <p className="editorial-body max-w-md">{project.description}</p>
              <span className="section-label">{project.stack}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
