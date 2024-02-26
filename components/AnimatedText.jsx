'use client'
import { LoadedContext } from '@/contexts/LoadedContext'
import { isMobileContext } from '@/contexts/isMobileContext'
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
  const { isMobile } = useContext(isMobileContext);
  const [textSize, setTextSize] = useState('text-[#dfdff0] text-3xl leading-[4rem] ')
  const [textSizeAlt, setTextSizeAlt] = useState('text-[#dfdff0] text-xl leading-[2.2rem]')
  
  useEffect(() => {
    if (isLoaded) {
       setTimeout(() => {
        setIsTimerComplete(true)
      }, 2000)
    }
    if(isMobile){
      setTextSize('text-[#dfdff0]  text-xl')
      setTextSizeAlt('text-[#dfdff0]  text-sm')

    }
  }, [isLoaded])

  return (
    <>
      {isLoaded && isTimerComplete && (
        <motion.div
          initial="hidden"
          animate="visible"
           transition={{ staggerChildren: 0.08 }}
        >
          {textArray.map((line,index) => {
             return (
              <span className={`block ${index<2?textSize:textSizeAlt} `} key={index}>
                {line.split(' ').map((word, index) => {
                                 return (
                    <span className="inline-block" key={index}>
                      {word.split('').map((letter, index) => {
                
                        return (
                          <motion.span
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
