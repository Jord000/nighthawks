"use client";
import { createContext, useState } from "react";

export const isMobileContext = createContext();

export const MobileProvider = (props) => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <isMobileContext.Provider value={{ isMobile, setIsMobile }}>
      {props.children}
    </isMobileContext.Provider>
  );
};
