import { useProgress } from '@react-three/drei'
import { useEffect } from 'react'

function LoadingScreen({ start, setStart }) {
  const { progress } = useProgress()
  useEffect(() => {
    if (progress === 100) {
      setStart(true)
    }
  }, [progress])
  return (
    <div className={`text-white loading-screen ${start ? 'loading-screen--started' : ''}`}>
      <p className=" text-white text-4xl text-center mb-10">
        Welcome, thank you for waiting while the 3D models load
      </p>
      <p className="text-4xl text-center">{`${progress}% Loaded`}</p>
    </div>
  )
}

export default LoadingScreen
