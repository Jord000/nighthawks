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
      }, 7000);
    }
  }, [isLoaded]);

  return (
    <>
      {isMobile && isTimerComplete && isLoaded && (
        <motion.div
          initial={{ y: -200 }}
          animate={{ y: 24 }}
          transition={{ delay: 1 ,duration:1.0}}
          className="bg-[#EFEFF8] absolute z-10 ml-auto mr-auto min-h-[17%] w-[90%] p-4 opacity-80 border-solid rounded drop-shadow"
        >
          {children}
        </motion.div>
      )}
      {!isMobile && isTimerComplete && isLoaded && (
        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: '2%' }}
          transition={{ delay: 1,duration:1.5 }}
          className="bg-[#EFEFF8] absolute z-10 mt-[2%] mb-auto min-h-[20%] min-w-[40px] p-2 opacity-95 border-solid rounded drop-shadow"
        >
          {children}
        </motion.div>
      )}
    </>
  );
}

export default AnimatedDiv;
