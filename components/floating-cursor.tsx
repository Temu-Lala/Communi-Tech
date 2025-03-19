"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FloatingCursorProps {
  position: { x: number; y: number };
  isHovering: boolean;
}

export function FloatingCursor({ position, isHovering }: FloatingCursorProps) {
  const [opacity, setOpacity] = useState(0);
  const [trail, setTrail] = useState<Array<{ x: number; y: number }>>([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpacity(1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  // Add a trail effect
  useEffect(() => {
    if (opacity === 1) {
      setTrail((prev) => {
        const newTrail = [...prev, { x: position.x, y: position.y }];
        if (newTrail.length > 10) newTrail.shift(); // Limit trail length
        return newTrail;
      });
    }
  }, [position, opacity]);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[100] mix-blend-difference"
        style={{
          backgroundColor: "#ff4757", // Red color
          x: position.x - 12,
          y: position.y - 12,
          opacity,
        }}
        animate={{
          scale: isHovering ? 1.8 : 1,
          backgroundColor: isHovering ? "#ff6b81" : "#ff4757", // Lighter red on hover
        }}
        transition={{
          scale: {
            type: "spring",
            stiffness: 300,
            damping: 20,
          },
          backgroundColor: {
            type: "tween",
            ease: "easeInOut",
            duration: 0.2,
          },
          default: {
            type: "tween",
            ease: "backOut",
            duration: 0.1,
          },
        }}
      />

      {/* Trail effect */}
      {trail.map((trailPos, index) => (
        <motion.div
          key={index}
          className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[99] mix-blend-difference"
          style={{
            backgroundColor: "#ff4757",
            x: trailPos.x - 12,
            y: trailPos.y - 12,
            opacity: (index + 1) / trail.length, // Fade out trail dots
          }}
          initial={{ scale: 1 }}
          animate={{ scale: 0.5 }}
          transition={{
            type: "tween",
            ease: "easeOut",
            duration: 0.3,
          }}
        />
      ))}

      {/* Magnetic pull effect */}
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 w-24 h-24 rounded-full pointer-events-none z-[98] border-2 border-red-500"
          style={{
            x: position.x - 48,
            y: position.y - 48,
            opacity: opacity * 0.6,
          }}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
        />
      )}
    </>
  );
}