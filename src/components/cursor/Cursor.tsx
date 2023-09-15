"use client";

import React, { useEffect, useState } from "react";
import styles from "./cursor.module.css";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const Cursor = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const [hovering, setHovering] = useState(false);
  const [textHover, setTextHover] = useState(false);
  const cursorSize = useMotionValue(16);

  const springConfig = { stiffness: 200, damping: 15, mass: 0.1 };

  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    const handleMouseEnter = () => {
      setHovering(true);
    };

    const handleMouseLeave = () => {
      setHovering(false);
    };

    const handleTextEnter = () => {
      setTextHover(true);
    };

    const handleTextLeave = () => {
      setTextHover(false);
    };

    const clickableElements = document.querySelectorAll(
      "a, button, input, Link"
    );
    const textElements = document.querySelectorAll(
      "p, h1, h2, h3, h4, h5, h6, span"
    );

    clickableElements.forEach((element) => {
      element.addEventListener("mouseover", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    textElements.forEach((element) => {
      element.addEventListener("mouseover", handleTextEnter);
      element.addEventListener("mouseleave", handleTextLeave);
    });

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [mouseX, mouseY, cursorSize]);

  const findWidth = () => {
    if (hovering) {
      return 25;
    } else if (textHover) {
      return 2;
    } else {
      return 5;
    }
  };

  const findHeight = () => {
    if (hovering) {
      return 25;
    } else if (textHover) {
      return 30;
    } else {
      return 5;
    }
  };

  return (
    <>
      <motion.div
        style={{
          x,
          y,
          width: findWidth(),
          height: findHeight(),
          border: hovering ? "2px solid #000" : "0px solid #000",
          translateX: "-50%",
          translateY: "-50%",
          transitionProperty: "width, height",
          transitionDuration: "0.3s",
          transitionTimingFunction: "ease-out",
          backgroundColor: hovering ? "transparent" : "black",
          borderRadius: !textHover ? "100px" : "0px",
        }}
        className={"fixed top-0 left-0 z-50 pointer-events-none"}
      />
    </>
  );
};

export default Cursor;
