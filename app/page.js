import AnimatedText from '@/components/AnimatedText'
import BaseCanvas from '@/components/BaseCanvas'
import { LoadedContext, LoadedProvider } from '@/contexts/LoadedContext'
import { useContext } from 'react'

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center">
      <LoadedProvider>
        <AnimatedText text="Jordan Watson Software Developer" />
        <BaseCanvas />
      </LoadedProvider>
    </main>
  )
}
