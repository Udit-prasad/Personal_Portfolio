import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => (
  <motion.nav
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-background/80 backdrop-blur-md border-b border-border"
  >
    <a href="#hero" className="font-display text-sm font-semibold text-foreground tracking-wide">
      UP™
    </a>
    <div className="flex items-center gap-8">
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="section-label hover:text-foreground transition-colors duration-300"
        >
          {item.label}
        </a>
      ))}
    </div>
  </motion.nav>
);

export default Navbar;
