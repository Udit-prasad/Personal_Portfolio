import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "./SectionLabel";

const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 0.5], [60, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section id="about" ref={ref} className="px-6 md:px-12 py-32 flex flex-col items-center">
      <SectionLabel
        left="© Personal Profile プロフィール"
        center="(UP® — 02)"
        right="Full-Stack Developer"
      />

      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="flex flex-col items-center text-center gap-12 mt-20 max-w-5xl w-full"
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="editorial-heading text-5xl md:text-7xl lg:text-[6rem]"
        >
          Blending code<br />
          with functional<br />
          clarity.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="editorial-body max-w-3xl text-lg md:text-2xl leading-relaxed"
        >
          I'm Udit Prasad, a B.Tech Computer Science & Engineering student at Sister Nivedita University,
          passionate about building impactful full-stack applications and exploring innovative tech solutions.
          With hands-on experience in React.js, Node.js, and MongoDB, I specialize in creating data-driven,
          scalable, and interactive web applications.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="editorial-body max-w-3xl text-lg md:text-2xl leading-relaxed"
        >
          Currently deepening my core programming knowledge by learning Data Structures & Algorithms in C
          and Object-Oriented Programming in Java. Alongside full-stack development, I work with AI tools,
          chatbots, and automation workflows to enhance products where intelligent features add real value.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-16 md:gap-32 mt-12">
          {[
            { label: "Projects", value: "10+" },
            { label: "Tech Stack", value: "12+" },
            { label: "Focus", value: "Artificial Intelligence" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="flex flex-col items-center gap-2"
            >
              <span className="font-display text-4xl md:text-6xl font-bold text-foreground">{stat.value}</span>
              <span className="section-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.a
          href="#projects"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="section-label hover:text-foreground transition-colors w-fit border-b border-border pb-1 mt-8"
        >
          SEE WORKS →
        </motion.a>
      </motion.div>
    </section>
  );
};

export default AboutSection;
