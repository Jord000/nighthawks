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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800)
  const [textSize, setTextSize] = useState('text-white text-1xl')
  const [position, setPosition] = useState("absolute z-10 top-32 left-8")

  useEffect(() => {
    if (isLoaded) {
       setTimeout(() => {
        setIsTimerComplete(true)
      }, 2000)
    }
    if(isMobile){
      setTextSize('text-black text-base')
      setPosition("")
    }
  }, [isLoaded])

  return (
    <>
      {isLoaded && isTimerComplete && (
        <motion.div
          initial="hidden"
          animate="visible"
          className={position}
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
                            className={`${textSize}`}
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
