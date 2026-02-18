import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 400);
    const t2 = setTimeout(() => setPhase(2), 1200);
    const t3 = setTimeout(() => setPhase(3), 2000);
    const t4 = setTimeout(() => onComplete(), 2600);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [onComplete]);

  const name = "UDIT PRASAD";

  return (
    <AnimatePresence>
      {phase < 3 && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-foreground flex items-center justify-center"
        >
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              animate={phase >= 1 ? { y: "0%" } : {}}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              className="flex flex-col items-center gap-3"
            >
              <span className="font-display text-[clamp(2rem,6vw,5rem)] font-bold text-background tracking-tight leading-none">
                {name.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.04, ease: "easeOut" }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              <motion.span
                initial={{ opacity: 0, scaleX: 0 }}
                animate={phase >= 2 ? { opacity: 1, scaleX: 1 } : {}}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="section-label text-background/50 tracking-[0.5em]"
              >
                PORTFOLIO
              </motion.span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
