import { useProgress } from '@react-three/drei'
import { useEffect } from 'react'

function LoadingScreen({start, setStart }) {
  const { progress } = useProgress()
  useEffect(() => {
    if (progress === 100) {
      setStart(true)
    }
  }, [progress])
  return (
    <div className={`loading-screen ${start ? "loading-screen--started" : ""}`}>
      <p>{`${progress} Loaded`}</p>
    </div>
  )
}

export default LoadingScreen
