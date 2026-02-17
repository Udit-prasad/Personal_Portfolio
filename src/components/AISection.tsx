import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "./SectionLabel";

const AISection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={ref} className="px-6 md:px-12 py-24 overflow-hidden">
      <SectionLabel
        left="© Working With AI AIワークフロー"
        center="(UP® — 05)"
        right="Smart Tools"
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-8"
      >
        <motion.h2
          style={{ x }}
          className="editorial-heading text-4xl md:text-7xl"
        >
          Working With AI
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="editorial-body max-w-2xl text-base"
        >
          I use AI tools to improve usability and automate repetitive tasks — from chatbot interfaces
          and LLM-powered features to API-driven workflow automation with n8n. AI is a capability
          in my toolkit, not a rebrand.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default AISection;
