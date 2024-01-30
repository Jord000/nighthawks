import AnimatedDiv from "@/components/AnimatedDiv";

import BaseCanvas from "@/components/BaseCanvas";
import { LoadedProvider } from "@/contexts/LoadedContext";
import { MobileProvider } from "@/contexts/isMobileContext";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center md:flex-none md:items-start">
      <LoadedProvider>
        <MobileProvider>
          <AnimatedDiv></AnimatedDiv>
          <BaseCanvas />
        </MobileProvider>
      </LoadedProvider>
    </main>
  );
}
