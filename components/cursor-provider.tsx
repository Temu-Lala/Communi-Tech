"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { FloatingCursor } from "./floating-cursor";
import { useMobile } from "@/hooks/use-mobile";

type CursorContextType = {
  isHovering: boolean;
  setIsHovering: (isHovering: boolean) => void;
};

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export function CursorProvider({ children }: { children: ReactNode }) {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const isMobile = useMobile();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <CursorContext.Provider value={{ isHovering, setIsHovering }}>
      {!isMobile && <FloatingCursor position={cursorPosition} isHovering={isHovering} />}
      <div className={!isMobile ? "cursor-none" : ""}>{children}</div>
    </CursorContext.Provider>
  );
}

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (context === undefined) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
};