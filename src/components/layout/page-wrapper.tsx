"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        y: { stiffness: 1000, velocity: -100 },
        opacity: { duration: 0.3 },
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
