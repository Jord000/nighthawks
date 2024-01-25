'use client'
import {motion} from "framer-motion"

function AnimatedText({text}) {
  return (
  
  <motion.span>
  {text.split('').map((letter)=>{
    return <motion.span initial={{opacity:0}} animate={{opacity:1}}>{letter}</motion.span>
  })}
  </motion.span>)
}

export default AnimatedText;
