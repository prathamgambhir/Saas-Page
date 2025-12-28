"use client";

import { ArrowRightIcon } from "@heroicons/react/20/solid";
import CursorImage from "@/assets/images/cursor.png";
import MessageImage from "@/assets/images/message.png";
import Image from "next/image";
import { easeInOut, motion } from "motion/react";
import { useRef } from "react";

export default function Hero() {
  const constraintsRef = useRef(null);

  return (
    <section>
      <motion.div
        ref={constraintsRef}
        className="bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-20 relative overflow-hidden z-1"
      >
        <div className="flex justify-center items-center">
          <a
            href="#"
            className="border border-white/30 p-2 rounded-lg flex items-center justify-center gap-4"
          >
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text">
              Version 2.0 is here.
            </span>
            <span className="inline-flex justify-center items-center gap-1">
              Read More
              <ArrowRightIcon className="size-4 mt-0.5" />
            </span>
          </a>
        </div>
        <h1 className="text-8xl mt-10 tracking-tighter text-center font-extrabold mx-4">
          One Task <br /> at a Time
        </h1>
        <motion.div
          drag
          dragSnapToOrigin
          dragElastic={0.2}
          dragConstraints={constraintsRef}
          className="hidden md:inline absolute rotate-z-8 top-60 md:left-10 lg:left-94 h-44 lg:h-48 w-auto"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut", 
          }}
        >
          <Image src={CursorImage} alt="" draggable="false" />
        </motion.div>
        <motion.div
          drag
          dragSnapToOrigin
          dragElastic={0.2}
          dragConstraints={constraintsRef}
          className="hidden md:inline absolute top-48 md:right-4 lg:right-88 h-44 lg:h-48 w-auto"
          animate={{
            y: [0, -20, 0], // Moves from 0 to -20px and back to 0
          }}
          transition={{
            duration: 2, // Time for one full cycle
            repeat: Infinity, // Repeat forever
            ease: "easeInOut", // Smooth start and stop
          }}
        >
          <Image src={MessageImage} alt="" draggable="false" />
        </motion.div>

        <p className="text-md md:text-xl mt-10 lg:mt-16 text-center mx-18 text-white/70">
          Celebrate the joy of accomplishment with an app <br /> designed to
          track progress, motivate your efforts,
          <br /> and celebrate your successes.
        </p>
        <div className="flex justify-center items-center mb-10 md:mb-14 lg:mb-24">
          <motion.button className="mt-12 h-10 bg-white/90 text-black font-normal border-gray-200 shadow-sm/40 rounded-2xl w-auto px-6 py-2" whileHover={{scale: 1.05}}>
            Get for free
          </motion.button>
        </div>
        <div
          className="absolute left-1/2 -translate-x-1/2 rounded-[100%] border border-black/10 bg-black -z-10
          bg-[radial-gradient(closest-side,#000_80%,#9560EB)] 
             md:bg-[radial-gradient(closest-side,#000_95%,#9560EB)] 
             /* Mobile sizes */
             w-[160%] h-[300px] top-[calc(100%-100px)] 
             /* Tablet sizes */
             md:w-[150%] md:h-[500px] md:top-[calc(100%-200px)] md:translate-y-[15%]
             /* Desktop sizes */
             lg:w-[2500px] lg:h-[1200px] lg:top-[calc(100%-350px)] lg:translate-y-[16%]"
        ></div>
      </motion.div>
    </section>
  );
}
