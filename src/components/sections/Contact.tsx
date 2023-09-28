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

export default function Contact() {
  const { scrollYProgress } = useScroll();
  const [buttonHover, setButtonHover] = React.useState(false);

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
    <div className="bg-white pt-[6.5rem]">
      <div className="w-full flex flex-col pl-[20rem] pr-[12rem] gap-[2rem] z-10">
        <h2 className="font-black text-4xl z-10">Contact</h2>
        <h3 className="text-xl">Interested in working with me?</h3>
        <div className="flex flex-row gap-16 z-10">
          <div className="flex flex-col gap-6 flex-1">
            <div className="flex flex-row justify-between items-center">
              <h3 className="text-xl font-bold">Name</h3>
              <p className="text-xl">Mattias Tofte</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <h3 className="text-xl font-bold">Birth</h3>
              <p className="text-xl">24. 12. 2021</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <h3 className="text-xl font-bold">Address</h3>
              <p className="text-xl">Elgeseter Gate 27, Trondheim</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <h3 className="text-xl font-bold">Phone</h3>
              <p className="text-xl">(+47) 904 12 118</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <h3 className="text-xl font-bold">Email</h3>
              <p className="text-xl">mattiastofte@gmail.com</p>
            </div>
          </div>
          <a
            className="border-2 border-black h-[10rem] w-[15rem] rounded-sm flex items-center justify-center z-10"
            onMouseEnter={() => {
              setButtonHover(true);
            }}
            onMouseLeave={() => setButtonHover(false)}
            href="/files/CV.pdf"
            download
          >
            <motion.div
              className="absolute"
              initial={{ y: -10 }}
              animate={{ y: [0, -10, 0] }} // y values for keyframes
              transition={{
                repeat: Infinity, // Infinite animation
                duration: 2, // Half-second for the entire keyframe sequence
                ease: "easeInOut",
              }}
            >
              <Image src="/images/top.svg" width={33} height={33} alt="me" />
            </motion.div>
            <Image
              src="/images/bottom.svg"
              width={60}
              height={60}
              alt="me"
              className="absolute translate-y-[22px]"
            />
          </a>
          <p></p>
        </div>
      </div>
    </div>
  );
}
