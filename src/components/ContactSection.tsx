import { motion } from "framer-motion";
import { Instagram, Linkedin } from "lucide-react";
import SectionLabel from "./SectionLabel";

const line = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const ContactSection = () => (
  <section id="contact" className="px-6 md:px-12 py-24">
    <SectionLabel
      left="© Get In Touch お問い合わせ"
      center="(UP® — 08)"
      right="Open for Work"
    />

    <div className="overflow-hidden mb-16">
      {["LET'S BUILD", "SMARTER", "DIGITAL", "EXPERIENCES."].map((text, i) => (
        <motion.h2
          key={text}
          custom={i}
          variants={line}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="editorial-heading text-[clamp(3rem,10vw,9rem)] leading-[0.9]"
        >
          {text}
        </motion.h2>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, duration: 0.7 }}
      className="flex flex-col md:flex-row gap-8 md:gap-16"
    >
      <div className="flex flex-col gap-4">
        <span className="section-label">Email</span>
        <a
          href="mailto:prasadudit80@gmail.com"
          className="font-display text-lg text-foreground hover:text-muted-foreground transition-colors"
          data-hover
        >
          prasadudit80@gmail.com
        </a>
      </div>
      <div className="flex flex-col gap-4">
        <span className="section-label">LinkedIn</span>
        <a
          href="https://www.linkedin.com/in/udit-prasad-805bb8319/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-display text-lg text-foreground hover:text-muted-foreground transition-colors flex items-center gap-2"
          data-hover
        >
          <Linkedin size={20} />
          Udit Prasad
        </a>
      </div>
      <div className="flex flex-col gap-4">
        <span className="section-label">Instagram</span>
        <a
          href="https://www.instagram.com/_.its.uditt._/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-display text-lg text-foreground hover:text-muted-foreground transition-colors flex items-center gap-2"
          data-hover
        >
          <Instagram size={20} />
          @_.its.uditt._
        </a>
      </div>
      <div className="flex flex-col gap-4">
        <span className="section-label">Resume</span>
        <a
          href="https://drive.google.com/file/d/1csOrZjXy1cNGwx-N3nnWaqZbxDcT6P2O/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
          className="font-display text-lg text-foreground hover:text-muted-foreground transition-colors"
          data-hover
        >
          Download CV
        </a>
      </div>
    </motion.div>
  </section>
);

export default ContactSection;
