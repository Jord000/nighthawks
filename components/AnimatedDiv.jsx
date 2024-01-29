"use client";
import { useEffect, useState, useContext } from "react";
import { LoadedContext } from "@/contexts/LoadedContext";
import { motion } from "framer-motion";

function AnimatedDiv({ children }) {
  const { isLoaded } = useContext(LoadedContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
  const [isTimerComplete, setIsTimerComplete] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      setTimeout(() => {
        setIsTimerComplete(true);
      }, 5000);
    }
  }, [isLoaded]);

  return (
    <>
      {isMobile && isTimerComplete && isLoaded && (
        <motion.div
          initial={{ y: -200 }}
          animate={{ y: 20 }}
          transition={{ delay: 1 }}
          className="bg-[#D2D4F5] absolute z-10 ml-auto mr-auto min-h-[17%] w-[90%] p-4 opacity-90 border-solid rounded drop-shadow"
        >
          {children}
        </motion.div>
      )}
      {!isMobile && <>{children}</>}
    </>
  );
}

export default AnimatedDiv;
