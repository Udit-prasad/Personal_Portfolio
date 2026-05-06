import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import SectionLabel from "./SectionLabel";

const projects = [
  {
    number: "01",
    title: "ExcelViz",
    category: "Data Visualization",
    description: "An interactive Excel data visualization web app with 2D and 3D chart rendering — AI-assisted data insights planned.",
    stack: "React.js, Redux Toolkit, Chart.js, Three.js, Tailwind CSS",
    year: "2025",
    // Placeholder image - replace with actual screenshot
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "BlogLife",
    category: "Full-Stack Platform",
    description: "A full-stack blogging platform with user authentication, post management, and rich text editing.",
    stack: "React.js, Node.js, Express.js, MongoDB, Redux Toolkit",
    year: "2025",
    // Placeholder image - replace with actual screenshot
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1000&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "Atmoscan",
    category: "Weather + AI Insights",
    description: "Real-time weather data application with AI-generated environmental insights for any location.",
    stack: "React.js, Node.js, Express.js, OpenWeatherMap API, LLM API",
    year: "2025",
    // Placeholder image - replace with actual screenshot
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1000&auto=format&fit=crop",
  },
  {
    number: "04",
    title: "Automation Workflows",
    category: "n8n + APIs",
    description: "Workflow automation demos connecting APIs, webhooks, and LLM-powered processing pipelines.",
    stack: "n8n, REST APIs, Webhooks, Node.js",
    year: "2025",
    // Placeholder image - replace with actual screenshot
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
  },
];

const ProjectsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const headingX = useTransform(scrollYProgress, [0, 0.3], [-60, 0]);

  // Hover state and mouse tracking
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15, mass: 0.1 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="projects" ref={ref} className="px-6 md:px-12 py-24 relative">
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
            onMouseEnter={() => setHoveredProject(project.number)}
            onMouseLeave={() => setHoveredProject(null)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            className="project-row group relative cursor-none"
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

      <AnimatePresence>
        {hoveredProject && (
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            src={projects.find(p => p.number === hoveredProject)?.image}
            alt="Project Preview"
            className="fixed pointer-events-none z-50 w-64 md:w-96 aspect-video object-cover rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 hidden md:block"
            style={{
              left: springX,
              top: springY,
              x: "-50%",
              y: "-50%",
            }}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
