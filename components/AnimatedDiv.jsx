'use client'
import { useEffect, useState, useContext } from 'react'
import { LoadedContext } from '@/contexts/LoadedContext'
import { motion } from 'framer-motion'
import AnimatedText from '@/components/AnimatedText'

function AnimatedDiv() {
  const { isLoaded } = useContext(LoadedContext)
  const [isMobile, setIsMobile] = useState(false)
  const [isTimerComplete, setIsTimerComplete] = useState(false)

  useEffect(() => {
    if (isLoaded) {
      setTimeout(() => {
        setIsTimerComplete(true)
      }, 7000)
    }
    if (window.innerWidth < 800) {
      setIsMobile(true)
    }
  }, [isLoaded])

  return (
    <>
      {isMobile && isTimerComplete && isLoaded && (
        <motion.div
          initial={{ y: -200 }}
          animate={{ y: 24 }}
          transition={{ delay: 1, duration: 1.0 }}
          className="bg-[#EFEFF8] absolute z-10 ml-auto mr-auto min-h-[17%] w-[70%] p-4 opacity-5 border-solid rounded drop-shadow text-center leading-4"
        >
          <AnimatedText
            text={[
              'Jordan Watson',
              'Software Developer',
              'Tap an item on the bar to bring it to life.',
              'Tap again to jump to one of my projects',
            ]}
          />
        </motion.div>
      )}
      {!isMobile && isTimerComplete && isLoaded && (
        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: '2%' }}
          transition={{ delay: 1, duration: 1.5 }}
          className="bg-[#EFEFF8] absolute z-10 mt-[5%] mb-auto min-h-[20%] min-w-[40px] p-2 bg-opacity-5 border-solid rounded drop-shadow "
        >
          <AnimatedText
            text={[
              'Jordan Watson',
              'Software Developer',
              'Hover over one of the items on the bar.',
              'Click an item to jump to one of my projects',
            ]}
          />
        </motion.div>
      )}
    </>
  )
}

export default AnimatedDiv
