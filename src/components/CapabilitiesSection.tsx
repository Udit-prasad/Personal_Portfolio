import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

const capabilities = [
  { number: "01", title: "AI & Agent Development", desc: "Passionate AI enthusiast leveraging AI tools and models efficiently for advanced development and intelligent agent building." },
  { number: "02", title: "Frontend Engineering", desc: "React.js interfaces with state management, responsive design, and performance." },
  { number: "03", title: "Backend APIs & Logic", desc: "Node.js & Express APIs with MongoDB, authentication, and RESTful design." },
  { number: "04", title: "AI Integrations & Chatbots", desc: "LLM-powered features, chatbot interfaces, and intelligent data processing." },
  { number: "05", title: "Workflow Automation", desc: "n8n workflows, API connections, webhooks, and automated data pipelines." },
  { number: "06", title: "Data Visualization", desc: "Interactive 2D/3D chart rendering with Chart.js and Three.js." },
  { number: "07", title: "Interactive Experiences", desc: "Component-based design systems with Tailwind CSS and modern tooling." },
];

const CapabilitiesSection = () => (
  <section className="px-6 md:px-12 py-24">
    <SectionLabel
      left="© Capabilities サービス内容"
      center="(UP® — 04)"
      right="Digital Execution"
    />

    <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="editorial-heading text-4xl md:text-7xl"
      >
        Services
      </motion.h2>
      <span className="font-display text-xl text-muted-foreground">({capabilities.length})</span>
    </div>

    <div className="flex flex-col">
      {capabilities.map((cap, i) => (
        <motion.div
          key={cap.number}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: i * 0.06 }}
          className="capability-item group flex flex-col md:flex-row md:items-center gap-4 md:gap-12 hover:bg-secondary/30 transition-colors duration-500 px-4 -mx-4"
        >
          <span className="section-label w-8 group-hover:text-foreground transition-colors duration-500">{cap.number}</span>
          <h3 className="font-display text-lg md:text-2xl font-semibold text-foreground flex-1 group-hover:translate-x-2 transition-transform duration-500">{cap.title}</h3>
          <p className="editorial-body max-w-sm opacity-60 group-hover:opacity-100 transition-opacity duration-500">{cap.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default CapabilitiesSection;
