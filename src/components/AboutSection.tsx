import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import uditImg from "@/assets/udit.jpg";

const AboutSection = () => (
  <section id="about" className="px-6 md:px-12 py-24">
    <SectionLabel
      left="© Personal Profile プロフィール"
      center="(UP® — 02)"
      right="Full-Stack Developer"
    />

    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="md:col-span-4 overflow-hidden"
      >
        <img
          src={uditImg}
          alt="Udit Prasad"
          className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-700"
        />
      </motion.div>

      <div className="md:col-span-8 flex flex-col gap-8">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="editorial-heading text-3xl md:text-5xl"
        >
          Blending code with functional clarity and creative precision.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="editorial-body max-w-2xl"
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
          className="editorial-body max-w-2xl"
        >
          Currently deepening my core programming knowledge by learning Data Structures & Algorithms in C
          and Object-Oriented Programming in Java. I enjoy solving real-world problems through technology
          and have contributed to open-source projects, participated in hackathons, and delivered presentations
          on trending software development topics.
        </motion.p>

        <motion.a
          href="#projects"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="section-label hover:text-foreground transition-colors w-fit border-b border-border pb-1"
        >
          SEE WORKS →
        </motion.a>
      </div>
    </div>
  </section>
);

export default AboutSection;
