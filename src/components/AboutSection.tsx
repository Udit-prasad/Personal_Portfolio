import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "./SectionLabel";
import portfolioPic from "@/assets/portfolio-pic.jpg";

const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const img1Scale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);
  const img2Scale = useTransform(scrollYProgress, [0.2, 0.7], [1.1, 1]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [60, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section id="about" ref={ref} className="px-6 md:px-12 py-24">
      <SectionLabel
        left="© Personal Profile プロフィール"
        center="(UP® — 02)"
        right="Full-Stack Developer"
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
        {/* Two stacked images */}
        <div className="md:col-span-5 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="overflow-hidden"
          >
            <motion.img
              src={portfolioPic}
              alt="Udit Prasad"
              style={{ scale: img1Scale }}
              className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </div>

        {/* Text content */}
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="md:col-span-7 flex flex-col gap-10 md:sticky md:top-32"
        >
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="editorial-heading text-3xl md:text-6xl"
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
            className="editorial-body max-w-xl text-sm md:text-base leading-relaxed"
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
            className="editorial-body max-w-xl text-sm md:text-base leading-relaxed"
          >
            Currently deepening my core programming knowledge by learning Data Structures & Algorithms in C
            and Object-Oriented Programming in Java. Alongside full-stack development, I work with AI tools,
            chatbots, and automation workflows to enhance products where intelligent features add real value.
          </motion.p>

          <div className="flex gap-12 mt-4">
            {[
              { label: "Projects", value: "04+" },
              { label: "Tech Stack", value: "12+" },
              { label: "Focus", value: "Artificial Intelligence" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="flex flex-col gap-1"
              >
                <span className="font-display text-2xl md:text-4xl font-bold text-foreground">{stat.value}</span>
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
            className="section-label hover:text-foreground transition-colors w-fit border-b border-border pb-1 mt-4"
          >
            SEE WORKS →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
