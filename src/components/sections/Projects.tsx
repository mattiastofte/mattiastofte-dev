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

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  number: number;
  image: string;
}

const ProjectButton = ({
  image,
  projectNr,
  selected,
  setSelected,
}: {
  image: string;
  projectNr: number;
  selected: boolean;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <button>
      <Image
        src={`/images/${image}.png`}
        width={270}
        height={270}
        alt="project"
        className={`rounded-sm border-2 border-black mt-5 rotate-90 ${
          selected ? "opacity-100" : "filter grayscale brightness-[0.2]"
        }`}
        onClick={() => setSelected(projectNr)}
      />
    </button>
  );
};

const Project = ({ title, description, tags, number, image }: ProjectProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  return (
    <div className="flex flex-col w-full h-[4rem] sticky top-[6.5rem] mt-[6.5rem]">
      <div className="flex flex-row justify-between items-center">
        <p className="text-5xl font-semibold translate-y-[-6px]">0{number}</p>
        <div className="flex flex-row gap-2">
          {tags.map((tag, index) => (
            <p
              key={index}
              className="text-base text-white bg-black px-3 pt-1 h-[35px] "
            >
              {tag}
            </p>
          ))}
        </div>
      </div>
      <Image
        src={`/images/${image}.webp`}
        width={4000}
        height={4000}
        alt="project"
        className="w-full rounded-sm border-2 border-black mt-5"
      />
      <h3 className="text-lg font-semibold mt-5">{title}</h3>
      <p className="leading-[2rem]">{description}</p>
    </div>
  );
};

export default function Projects() {
  const { scrollYProgress } = useScroll();
  const translateX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const [translation, setTranslation] = React.useState(0);
  const [projectSelection, setProjectSelection] = React.useState<number>(0);

  useEffect(() => {
    setTranslation(translateX.get() * 100);
  }, [translateX]);

  type ProjectMapType = {
    [key: number]: JSX.Element;
  };

  const projectMap: ProjectMapType = {
    0: (
      <Project
        title="Kateter"
        description="With the help of a group of friends we’ve developed a cutting-edge edtech platform used by 3000+ NTNU students. I’ve been the CTO of this project from the early stages, and I’ve contributed a lot on both  frontend/backend-code and design. I was also the project-leader and boss for 6 impeccable summer interns in 2023."
        tags={["Code", "Design", "React", "Django", "Management"]}
        number={1}
        image="kateter"
      />
    ),
    1: (
      <Project
        title="Motkraft"
        description="In the summer of 2022 me and five other summer interns began building the new motkraft app from the ground up. This required extensive planning and design work with tons of workshops. At the end of the internship we had a first iteration of the design, as well as a handful of fully functioning components."
        tags={["Code", "Design", "React Native"]}
        number={2}
        image="motkraft"
      />
    ),
    2: (
      <Project
        title="Abakus.no"
        description="I've been part of Webkom, our student union's web committee, ever since I arrived in Trondheim. Here I've learned valuable skills from talented students, and I've been able to contribute to the student community. All of Abakus.no systems are built from the ground up, and features a React front-end and a Django back-end."
        tags={["Code", "React", "Django"]}
        number={3}
        image="abakus"
      />
    ),
    3: (
      <Project
        title="Graphica"
        description="Graphica is a project that we've devoloped at Kateter to visually explain consepts in mathematics and other fields. It's a javascript library that utilizes Three.js to effectively render graphics to the browser with WebGL. Our goal with this tool is to make our courses more interactive."
        tags={["Design", "Code", "Javascript", "Three.js"]}
        number={4}
        image="graphica"
      />
    ),
    4: (
      <Project
        title="Kato"
        description="Kato is another project that we've developed at Kateter. It's an AI chat-bot that's trained up on the content of our courses and that can assist with questions and point to relevant chapters. It is made in python and utilizes a vector-database, OpenAI's gpt-3.5 and langchain."
        tags={["Code", "Python", "Langchain", "AI"]}
        number={5}
        image="kato"
      />
    ),
  };

  return (
    <div className="pt-[1rem]">
      <div className="absolute right-[-3rem] translate-y-[12.5rem] z-50 pointer-events-none">
        <Image
          src="/images/movietape2.png"
          width={480}
          height={4000}
          alt="movietape"
          className="z-50 pointer-events-none"
        />
      </div>
      <div className="w-full flex flex-row px-[4rem] mt-[12rem] gap-[4rem] h-[70rem]">
        <div className="w-[16rem]" />
        <div className="flex-1"></div>
        <Image
          src="/images/arrow.png"
          width={50}
          height={50}
          alt="arrow"
          className="absolute rotate-90 right-[21rem] pointer-events-none"
        />
        <p className="-rotate-6 absolute right-[13rem] -translate-y-6">
          Click on the frames!
        </p>
        {projectMap[projectSelection]}
        <div className="absolute flex flex-col right-[3.6rem] translate-y-[40px] gap-[4.05rem]">
          <ProjectButton
            image="kateter"
            projectNr={0}
            selected={projectSelection == 0}
            setSelected={setProjectSelection}
          />
          <ProjectButton
            image="motkraft"
            projectNr={1}
            selected={projectSelection == 1}
            setSelected={setProjectSelection}
          />
          <ProjectButton
            image="abakus"
            projectNr={2}
            selected={projectSelection == 2}
            setSelected={setProjectSelection}
          />
          <ProjectButton
            image="graphica"
            projectNr={3}
            selected={projectSelection == 3}
            setSelected={setProjectSelection}
          />
          <ProjectButton
            image="kato"
            projectNr={4}
            selected={projectSelection == 4}
            setSelected={setProjectSelection}
          />
        </div>
        <div className="w-[35rem]"></div>
      </div>
    </div>
  );
}
