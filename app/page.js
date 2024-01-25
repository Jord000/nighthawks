import AnimatedText from "@/components/AnimatedText";
import BaseCanvas from "@/components/BaseCanvas";


export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center">
      <AnimatedText text="Jordan Watson Software Developer"/>
      <BaseCanvas/>
    </main>
  )
}
