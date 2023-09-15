import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Button from "@/components/buttons/Button";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import ParallaxText from "@/components/text/ParallaxText";
import Link from "next/link";

export default function Introduction() {
  const { scrollYProgress } = useScroll();

  const translateX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [translation, setTranslation] = React.useState(0);

  useEffect(() => {
    setTranslation(translateX.get() * 100);
  }, [translateX]);

  useEffect(() => {
    const Typed = require("typed.js");
    new Typed(".animated_title", {
      strings: [
        "a developer.",
        "a designer.",
        "a photographer.",
        "a student.",
        "a musician.",
      ],
      loop: true,
      smartBackspace: true,
      typeSpeed: 70,
      startDelay: 700,
      backDelay: 3e3,
      backSpeed: 70,
      //
      showCursor: true,
    });
  }, []);

  return (
    <div className="bg-white">
      <div className="w-full flex flex-row px-[8rem]">
        <div className="w-2/3 flex flex-col pr-20 text-black">
          <p
            className="font-circular-std font-regular text-2xl leading-[3rem] mt-10"
            data-scroll
            data-scroll-speed="1"
          >
            Hi, my name is Mattias and I am{" "}
            <span className="animated_title underline" />
            <br />I create modern applications and websites of all sizes,
            specializing in minimalistic design and creating exceeding projects.
          </p>
        </div>
        <div
          className="w-1/3 flex flex-row items-center justify-end mr-1"
          data-scroll
        >
          <Image
            src="/images/mattias.webp"
            width={500}
            height={500}
            alt="me"
            className="max-w-[400px] rounded-sm"
          />
        </div>
      </div>
    </div>
  );
}
