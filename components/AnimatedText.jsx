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
  const textArray = Array.isArray(text) ? text : [text]

  useEffect(() => {
    if (isLoaded) {
      setTimeout(() => {
        setIsTimerComplete(true)
      }, 5000)
    }
  }, [isLoaded])

  return (
    <>
      {isLoaded && isTimerComplete && (
        <motion.div
          initial="hidden"
          animate="visible"
          className="absolute z-10 top-4 left-8"
          transition={{ staggerChildren: 0.08 }}
        >
          {textArray.map((line,index) => {
            return (
              <span className="block" key={index}>
                {line.split(' ').map((word, index) => {
                  return (
                    <span className="inline-block" key={index}>
                      {word.split('').map((letter, index) => {
                        return (
                          <motion.span
                            className="text-white text-2xl"
                            key={index}
                            variants={textAnimations}
                          >
                            {letter}
                          </motion.span>
                        )
                      })}
                      <span className='inline-block'>&nbsp;</span>
                    </span>
                  )
                })}
              </span>
            )
          })}
        </motion.div>
      )}
    </>
  )
}

export default AnimatedText
