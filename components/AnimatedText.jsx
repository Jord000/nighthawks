"use client";
import { motion } from "framer-motion";

const textAnimations = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

function AnimatedText({ text }) {
  return (
    <motion.span initial="hidden" animate="visible" transition={{staggerChildren:0.08}}>
      {text.split("").map((letter,index) => {
        return <motion.span key={index} variants={textAnimations}>{letter}</motion.span>;
      })}
    </motion.span>
  );
}

export default AnimatedText;
