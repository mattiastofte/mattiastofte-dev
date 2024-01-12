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

export default function Bigraphy() {
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

  return (
    <div className="pt-[6rem]">
      <div className="w-full flex flex-row pl-[20rem] pr-[16rem] gap-[4rem]">
        <div className="flex-1 items-center justify-end mr-1" data-scroll>
          <h2 className="font-black text-4xl">Biography</h2>
          <p
            className="font-circular-std font-regular text-xl leading-[3rem] mt-3"
            data-scroll
            data-scroll-speed="1"
          >
            I’ve always been fascinated by computers, electronics and the
            systems around me and the mechanics behind them. Throughout my life,
            I turned this passion into a hobby, learning quite a handful of
            skills by self-teaching with online resources and delving into
            personal hobby projects. This led me to study Computer Sciences at
            NTNU in Trondheim, where I’m learning and refining my skills to a
            more professional degree
          </p>
          <Image
            src="/images/studio.jpg"
            width={800}
            height={800}
            alt="me"
            className="my-8 rounded-sm"
          />
          <p className="text-3xl mt-10 leading-[4rem]">
            “My work philosophy is that the more areas of knowledge you have,
            the more you can contribute to product.”{" "}
          </p>
          <p
            className="font-circular-std font-regular text-xl leading-[3rem] mt-5"
            data-scroll
            data-scroll-speed="1"
          >
            I’ve seen that many developers lack interest in the fundementals of
            design, and this is where I want to stand out. I want to contribute
            with both programming and design to create a more holistic product.
            This is why I’ve taken it up on myself to futher refine my design
            skills beyond what we learn in our study.
          </p>
        </div>
      </div>
    </div>
  );
}
