import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import portfolioPic from "@/assets/portfolio-pic.jpeg";

const line = {
  hidden: { opacity: 0, y: 80 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.3 + i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section id="hero" ref={ref} className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 pb-12 relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
        <div className="flex flex-col gap-1">
          <motion.span custom={0} variants={line} initial="hidden" animate="visible" className="section-label">
            Full-Stack Developer
          </motion.span>
          <motion.span custom={1} variants={line} initial="hidden" animate="visible" className="section-label">
            Web Applications • AI-assisted Features
          </motion.span>
        </div>
        <div className="flex flex-col gap-1 md:text-right">
          <motion.span custom={0} variants={line} initial="hidden" animate="visible" className="section-label">
            n8n • APIs • LLM Integrations
          </motion.span>
          <motion.span custom={1} variants={line} initial="hidden" animate="visible" className="section-label">
            Based in India
          </motion.span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <motion.div style={{ y: textY }} className="md:col-span-7 overflow-hidden">
          {["FULL-STACK", "DEVELOPER", "BUILDING", "MODERN DIGITAL", "EXPERIENCES"].map((text, i) => (
            <motion.h1
              key={text}
              custom={i + 2}
              variants={line}
              initial="hidden"
              animate="visible"
              className="editorial-heading text-[clamp(2.5rem,8vw,8rem)] leading-[0.88]"
            >
              {text}
            </motion.h1>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          style={{ y: imgY, scale: imgScale }}
          className="md:col-span-5 overflow-hidden"
        >
          <img
            src={portfolioPic}
            alt="Udit Prasad"
            className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>
      </div>

      <div className="mt-12 flex flex-col gap-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex items-center justify-between py-4 border-t border-border w-full"
        >
          <span className="section-label">© Udit Prasad ポートフォリオ</span>
          <span className="section-label">(UP® — 01)</span>
          <span className="section-label">Full-Stack Developer</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="editorial-body max-w-lg"
        >
          Integrating AI tools, automation workflows, and APIs to build smarter applications.
          I build impactful full-stack applications and love solving real-world problems with code.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
