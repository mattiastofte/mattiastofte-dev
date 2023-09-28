"use client";

import React, { useEffect, useRef, useState } from "react";
import { Inter } from "next/font/google";
import Projects from "@/components/sections/Projects";
import Introduction from "@/components/sections/Introduction";
import Biography from "@/components/sections/Biography";
import Contact from "@/components/sections/Contact";
import Link from "next/link";
import {
  useScroll,
  motion,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import ParallaxText from "@/components/text/ParallaxText";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const mainRef = useRef(null);
  const biographyRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const { scrollY } = useScroll();

  const [gap, setGap] = React.useState(100);
  const [scaling, setScaling] = React.useState(0);
  const [xTranslation, setXTranslation] = React.useState(0);
  const [selectorY, setSelectorY] = React.useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest < 200) {
      setGap(100 - latest);
    } else {
      setGap(-100);
    }
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest < 600) {
      setScaling(latest / 600);
    } else {
      setScaling(1);
    }
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest < 600) {
      setSelectorY(0);
    } else if (latest > 600 && latest < 2000) {
      setSelectorY(45);
    } else if (latest > 2000 && latest < 3500) {
      setSelectorY(78);
    } else if (latest > 3500) {
      setSelectorY(111);
    }
  });

  useMotionValueEvent(scrollY, "change", (latest) => {});

  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setViewportWidth(window.innerWidth);
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToBiography = () => {
    biographyRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProject = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scroll
    });
  };

  useEffect(() => {
    const Typed = require("typed.js");
    new Typed(".animated_title_2", {
      strings: ["designed", "coded"],
      loop: true,
      smartBackspace: true,
      typeSpeed: 70,
      startDelay: 700,
      backDelay: 3e3,
      backSpeed: 70,
      showCursor: false,
    });
  }, []);

  return (
    <div className="bg-white" ref={mainRef}>
      <motion.div
        className="sticky text-black font-black tracking-wide top-[100px] ml-[8rem] text-2xl z-10"
        style={{ translateX: scaling * -50 }}
      >
        <button className="z-50" onClick={() => scrollToTop()}>
          Mattias Tofte
        </button>
      </motion.div>
      <motion.div
        className="sticky w-2 h-2 bg-black rounded-full left-[6.8rem] top-[112px]"
        style={{ translateY: selectorY, translateX: scaling * -50 }}
      ></motion.div>
      <motion.div
        className="flex flex-col pt-20 uppercase font-circular-std px-[8rem] mb-10 sticky top-[55px] gap-[6px] text-lg"
        style={{ translateX: (viewportWidth - 590) * (1 - scaling) }}
      >
        <motion.div
          style={{
            translateY: -33 + scaling * 33 + scaling * 10,
            translateX: scaling * -50,
          }}
        >
          <button onClick={() => scrollToBiography()}>BIOGRAPHY</button>
        </motion.div>
        <motion.div
          style={{
            translateY: -67 + scaling * 67 + scaling * 10,
            translateX: 123 - scaling * 123 + scaling * -50,
          }}
        >
          <button onClick={() => scrollToProject()}>PROJECTS</button>
        </motion.div>
        <motion.div
          style={{
            translateY: -102 + scaling * 102 + scaling * 10,
            translateX: 240 - scaling * 240 + scaling * -50,
          }}
        >
          <button onClick={() => scrollToContact()}>CONTACT</button>
        </motion.div>
      </motion.div>
      <Introduction />
      <div className="translate-y-[-50px]">
        <ParallaxText baseVelocity={-2}>Mattias Tofte</ParallaxText>
      </div>
      <div ref={biographyRef}>
        <Biography />
      </div>
      <div ref={projectRef}>
        <Projects />
      </div>
      <div className="h-[45rem]"></div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <div className="w-full h-[7rem] bg-gray-100 mt-[11.5rem] flex flex-row items-end pb-[2rem] pr-[10rem] pl-[6rem] justify-between border-t-2 border-black">
        <p className="text-lg mb-2">
          <span className="animated_title_2" /> with {"<3"} by Mattias
        </p>
        <div className="flex flex-row gap-3">
          <Link
            href="https://www.linkedin.com/in/mattiastofte"
            className="w-10 h-10 bg-black rounded-sm items-center justify-center flex"
          >
            <Image
              src="/images/linkedin.svg"
              width={26}
              height={26}
              alt="LinkedIn"
            />
          </Link>
          <Link
            href="https://github.com/mattiastofte"
            className="w-10 h-10 bg-black rounded-sm items-center justify-center flex"
          >
            <Image
              src="/images/github.svg"
              width={24}
              height={24}
              alt="Github"
            />
          </Link>
          <Link
            href="https://www.instagram.com/mattiastofte/?hl=en"
            className="w-10 h-10 bg-black rounded-sm items-center justify-center flex"
          >
            <Image
              src="/images/instagram.svg"
              width={26}
              height={26}
              alt="Instagram"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
