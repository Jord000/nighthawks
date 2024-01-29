import AnimatedDiv from "@/components/AnimatedDiv";
import AnimatedText from "@/components/AnimatedText";
import BaseCanvas from "@/components/BaseCanvas";
import { LoadedProvider } from "@/contexts/LoadedContext";


export default function Home() {

  return (
    <main className="flex h-screen flex-col items-center md:flex-none md:items-start">
      <LoadedProvider>
        <AnimatedDiv>
          <AnimatedText
            text={[
              "Jordan Watson",
              "Software Developer",
              " ",
              "Hover over one of the items on the bar",
              "click one to jump to one of my projects",
            ]}
          />
        </AnimatedDiv>
        <BaseCanvas />
      </LoadedProvider>
    </main>
  );
}
