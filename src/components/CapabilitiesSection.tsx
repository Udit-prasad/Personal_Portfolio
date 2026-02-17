import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

const capabilities = [
  { number: "01", title: "Full-Stack Web Development", desc: "End-to-end web applications using MERN stack with scalable architecture." },
  { number: "02", title: "Frontend Engineering", desc: "React.js interfaces with state management, responsive design, and performance." },
  { number: "03", title: "Backend APIs & Logic", desc: "Node.js & Express APIs with MongoDB, authentication, and RESTful design." },
  { number: "04", title: "AI Integrations & Chatbots", desc: "LLM-powered features, chatbot interfaces, and intelligent data processing." },
  { number: "05", title: "Workflow Automation", desc: "n8n workflows, API connections, webhooks, and automated data pipelines." },
  { number: "06", title: "Data Visualization", desc: "Interactive 2D/3D chart rendering with Chart.js and Three.js." },
  { number: "07", title: "Interactive User Experiences", desc: "Component-based design systems with Tailwind CSS and modern tooling." },
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
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="capability-item flex flex-col md:flex-row md:items-center gap-4 md:gap-12"
        >
          <span className="section-label w-8">{cap.number}</span>
          <h3 className="font-display text-lg md:text-2xl font-semibold text-foreground flex-1">{cap.title}</h3>
          <p className="editorial-body max-w-sm">{cap.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default CapabilitiesSection;
