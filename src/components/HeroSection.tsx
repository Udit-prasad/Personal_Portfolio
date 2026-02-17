import { motion } from "framer-motion";

const line = {
  hidden: { opacity: 0, y: 80 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.3 + i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const HeroSection = () => (
  <section id="hero" className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 pb-12">
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
      <div className="flex flex-col gap-1">
        <motion.span custom={0} variants={line} initial="hidden" animate="visible" className="section-label">
          India
        </motion.span>
        <motion.span custom={1} variants={line} initial="hidden" animate="visible" className="section-label">
          Full-Stack Developer
        </motion.span>
      </div>
      <div className="flex flex-col gap-1 md:text-right">
        <motion.span custom={0} variants={line} initial="hidden" animate="visible" className="section-label">
          Available for Projects
        </motion.span>
        <motion.span custom={1} variants={line} initial="hidden" animate="visible" className="section-label">
          B.Tech CSE — 2024-2028
        </motion.span>
      </div>
    </div>

    <div className="overflow-hidden">
      {["UDIT", "PRASAD"].map((text, i) => (
        <motion.h1
          key={text}
          custom={i + 2}
          variants={line}
          initial="hidden"
          animate="visible"
          className="editorial-heading text-[clamp(4rem,15vw,14rem)] leading-[0.85]"
        >
          {text}
        </motion.h1>
      ))}
    </div>

    <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
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
    </div>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.8 }}
      className="editorial-body max-w-lg mt-8"
    >
      I build impactful full-stack applications and love solving real-world problems with code.
      Integrating AI tools, automation workflows, and APIs to build smarter applications.
    </motion.p>
  </section>
);

export default HeroSection;
