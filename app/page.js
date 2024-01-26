import AnimatedText from '@/components/AnimatedText'
import BaseCanvas from '@/components/BaseCanvas'
import { LoadedProvider } from '@/contexts/LoadedContext'

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
