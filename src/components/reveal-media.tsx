"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealMediaProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function RevealMedia({ children, className, delay = 0 }: RevealMediaProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 28, y: 18, scale: 0.98 }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.9, ease: "easeOut", delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
