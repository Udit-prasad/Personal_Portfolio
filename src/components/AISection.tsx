import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "./SectionLabel";

const AISection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const lineWidth = useTransform(scrollYProgress, [0.2, 0.6], ["0%", "100%"]);

  return (
    <section ref={ref} className="py-32 overflow-hidden">
      <SectionLabel
        left="© Working With AI AIワークフロー"
        center="(UP® — 05)"
        right="Smart Tools"
      />

      <div className="px-6 md:px-12 flex flex-col gap-12">
        <motion.h2
          style={{ x }}
          className="editorial-heading text-[clamp(3rem,8vw,8rem)] text-foreground/5 whitespace-nowrap"
        >
          AI — AUTOMATION — WORKFLOWS — INTELLIGENCE
        </motion.h2>

        <div className="max-w-3xl mx-auto text-center flex flex-col gap-8 items-center">
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="editorial-heading text-3xl md:text-5xl"
          >
            Working With AI
          </motion.h3>

          <motion.div style={{ width: lineWidth }} className="h-[1px] bg-border" />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="editorial-body text-sm md:text-base leading-relaxed max-w-xl"
          >
            I use AI tools to improve usability and automate repetitive tasks — from chatbot interfaces
            and LLM-powered features to API-driven workflow automation with n8n. AI is a capability
            in my toolkit, not a rebrand.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-center mt-4"
          >
            {["LLM APIs", "n8n Workflows", "Chatbots", "API Automation", "Webhooks"].map((tag) => (
              <span key={tag} className="section-label border border-border px-4 py-2 hover:bg-secondary/50 transition-colors duration-300">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
