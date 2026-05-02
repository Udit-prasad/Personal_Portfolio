import { motion } from "framer-motion";
import { Instagram, Linkedin, Github } from "lucide-react";
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
        <span className="section-label">GitHub</span>
        <a
          href="https://github.com/Udit-prasad"
          target="_blank"
          rel="noopener noreferrer"
          className="font-display text-lg text-foreground hover:text-muted-foreground transition-colors flex items-center gap-2"
          data-hover
        >
          <Github size={20} />
          Udit-prasad
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

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.7, duration: 0.7 }}
      className="mt-24 grid grid-cols-1 lg:grid-cols-3 gap-8"
    >
      <div className="lg:col-span-2 bg-secondary/10 border border-border rounded-2xl p-8 md:p-12">
        <form className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <label htmlFor="name" className="section-label">Name</label>
              <input type="text" id="name" className="bg-transparent border border-border rounded-xl px-4 py-3 outline-none focus:border-foreground transition-colors font-display text-base" />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="phone" className="section-label">Phone / WhatsApp</label>
              <input type="text" id="phone" className="bg-transparent border border-border rounded-xl px-4 py-3 outline-none focus:border-foreground transition-colors font-display text-base" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <label htmlFor="email" className="section-label">Email</label>
              <input type="email" id="email" className="bg-transparent border border-border rounded-xl px-4 py-3 outline-none focus:border-foreground transition-colors font-display text-base" />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="subject" className="section-label">Subject</label>
              <input type="text" id="subject" className="bg-transparent border border-border rounded-xl px-4 py-3 outline-none focus:border-foreground transition-colors font-display text-base" />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="message" className="section-label">Message</label>
            <textarea id="message" rows={4} className="bg-transparent border border-border rounded-xl px-4 py-3 outline-none focus:border-foreground transition-colors font-display text-base resize-none placeholder:text-muted-foreground/50" placeholder="Tell me about your project..."></textarea>
          </div>

          <button type="submit" className="mt-4 px-8 py-4 bg-foreground text-background font-display font-medium rounded-full hover:opacity-80 transition-opacity w-fit">
            Submit Inquiry
          </button>
        </form>
      </div>

      <div className="bg-transparent border border-border rounded-2xl p-8 md:p-12 flex flex-col">
        <h3 className="editorial-heading text-3xl md:text-4xl mb-4 text-foreground">Prefer WhatsApp?</h3>
        <p className="editorial-body text-muted-foreground mb-12">
          Message me directly and say: "I want to build something amazing with you."
        </p>
        
        <div className="mt-auto">
          <a 
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 border border-foreground text-foreground font-display font-medium rounded-full hover:bg-foreground hover:text-background transition-colors w-fit text-center mb-12"
          >
            Chat On WhatsApp
          </a>
          
          <p className="font-display font-semibold text-lg text-foreground mb-2">Best for</p>
          <p className="editorial-body text-sm text-muted-foreground">
            Startups, founders, local businesses, and fast-paced development projects.
          </p>
        </div>
      </div>
    </motion.div>
  </section>
);

export default ContactSection;
