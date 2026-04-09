"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealTextProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function RevealText({ children, className, delay = 0 }: RevealTextProps) {
  return (
    <motion.p
      initial={{ opacity: 0, x: -24, y: 10, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      className={cn(className)}
    >
      {children}
    </motion.p>
  );
}
