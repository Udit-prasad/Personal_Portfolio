import { motion } from "framer-motion";

interface SectionLabelProps {
  left: string;
  center: string;
  right: string;
}

const SectionLabel = ({ left, center, right }: SectionLabelProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="flex items-center justify-between py-4 border-b border-border mb-12"
  >
    <span className="section-label">{left}</span>
    <span className="section-label">{center}</span>
    <span className="section-label">{right}</span>
  </motion.div>
);

export default SectionLabel;
