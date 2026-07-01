import React, { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "motion/react";

export const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const cursorSize = isHovering ? 96 : 12;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect touch devices
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      document.body.style.cursor = "auto"; // restore cursor for mobile/touch
      document.documentElement.style.setProperty("--cursor-none", "auto");
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Offset by half of cursor size
      mouseX.set(e.clientX - cursorSize / 2);
      mouseY.set(e.clientY - cursorSize / 2);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // find closest element with data-cursor
      const elementWithCursor = target.closest("[data-cursor]");

      if (elementWithCursor) {
        setIsHovering(true);
        setCursorText(elementWithCursor.getAttribute("data-cursor") || "");
      } else if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
        setCursorText("");
      } else {
        setIsHovering(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    // Hide default cursor
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.style.cursor = "auto";
    };
  }, [cursorSize, mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[99999] pointer-events-none flex items-center justify-center text-center font-bold tracking-widest text-[10px] text-black overflow-hidden backdrop-blur-sm"
      style={{
        x: cursorX,
        y: cursorY,
        width: isHovering ? (cursorText ? 96 : 48) : 12,
        height: isHovering ? (cursorText ? 96 : 48) : 12,
        borderRadius: "50%",
        backgroundColor: isHovering
          ? cursorText
            ? "rgba(255, 255, 255, 1)"
            : "rgba(255, 255, 255, 0.4)"
          : "white",
        mixBlendMode: isHovering && !cursorText ? "difference" : "normal",
      }}
      animate={{
        width: isHovering ? (cursorText ? 96 : 48) : 12,
        height: isHovering ? (cursorText ? 96 : 48) : 12,
      }}
      transition={{ type: "spring", ...springConfig }}
    >
      {isHovering && cursorText && (
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="uppercase pointer-events-none px-2"
        >
          {cursorText}
        </motion.span>
      )}
    </motion.div>
  );
};
