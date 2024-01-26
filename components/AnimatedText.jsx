'use client'
import { LoadedContext } from '@/contexts/LoadedContext'
import { motion } from 'framer-motion'
import { useContext, useEffect, useState } from 'react'

const textAnimations = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
}

function AnimatedText({ text }) {
  const { isLoaded } = useContext(LoadedContext)
  const [isTimerComplete, setIsTimerComplete] = useState(false)

  useEffect(() => {
    if (isLoaded) {
      setTimeout(() => {
        setIsTimerComplete(true)
      }, 5000)
    }
  }, [isLoaded])

  return (
    <>
      {isLoaded &&
        isTimerComplete &&(
          <motion.span
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.08 }}
          >
            {text.split('').map((letter, index) => {
              return (
                <motion.span key={index} variants={textAnimations}>
                  {letter}
                </motion.span>
              )
            })}
          </motion.span>
        )}
    </>
  )
}

export default AnimatedText
