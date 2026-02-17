import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface MarqueeStripProps {
  text: string;
  direction?: "left" | "right";
}

const MarqueeStrip = ({ text, direction = "left" }: MarqueeStripProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"]
  );

  const repeated = Array(8).fill(text).join(" — ");

  return (
    <div ref={ref} className="overflow-hidden py-6 md:py-10 border-y border-border">
      <motion.div style={{ x }} className="whitespace-nowrap">
        <span className="font-display text-[clamp(2rem,6vw,6rem)] font-bold text-foreground/10 uppercase tracking-tight">
          {repeated}
        </span>
      </motion.div>
    </div>
  );
};

export default MarqueeStrip;
