"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const DownArrow = () => {
  return (
    <a className="w-10">
      <motion.div
        className="z-50 mt-2"
        animate={{
          y: [0, 5],
          transition: {
            duration: 1,
            repeat: Infinity,
            type: "tween",
            repeatType: "reverse",
          },
        }}
      >
        <Image
          src="/icons/arrow.svg"
          width={20}
          height={20}
          alt="down-arrow"
          draggable={false}
        ></Image>
      </motion.div>
    </a>
  );
};

export default DownArrow;
