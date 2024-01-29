"use client";
import { useEffect, useState } from "react";

function AnimatedDiv({ children }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  return isMobile ? (
    <div className="w-[90%] ml-auto mr-auto">{children}</div>
  ) : (
    <>{children}</>
  );
}

export default AnimatedDiv;
