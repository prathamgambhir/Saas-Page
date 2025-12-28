"use client";

import logoImage from "@/assets/images/logosaas.png";
import Button from "@/components/button";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { div } from "motion/react-client";

const navLinks: { label: string; href: string }[] = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Product", href: "#product" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div className="h-18 mb-4"></div>
      <section className="fixed w-full top-0 z-50">
        <div className="w-full flex justify-center mb-4">
          <div className="border border-white/20 px-2 rounded-4xl w-7/8 lg:w-5/8 m-4 p-2 flex flex-col justify-center backdrop-blur-lg ">
            <div className="grid grid-cols-2 md:grid-cols-3 items-center ">
              <div className="flex justify-start pl-4 items-center">
                <Image src={logoImage} alt="logo-img" className="size-10" />
              </div>
              <div className="hidden md:inline">
                <nav className="flex items-center justify-center gap-4 lg:gap-6 text-md font-medium text-white/80">
                  {navLinks.map((link, idx) => (
                    <a href={link.href} key={idx} className="hover:text-white">
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="flex justify-end pr-4">
                <AnimatePresence>
                  <span onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                      >
                        <XMarkIcon className="size-6 md:hidden" />
                      </motion.span>
                    ) : (
                      <motion.span
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Bars3Icon className="size-6 md:hidden" />
                      </motion.span>
                    )}
                  </span>
                </AnimatePresence>
                <div className="hidden md:flex gap-2 lg:gap-4 justify-center items-center">
                  <Button varient="primary" className="hover:bg-white/10">
                    Login
                  </Button>
                  <Button varient="secondary" className="hover:bg-white/80">
                    SignUp
                  </Button>
                </div>
              </div>
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                    transition: { duration: 0.3 },
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    transition: { duration: 0.3 },
                  }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col gap-4 p-4 items-center ">
                    {navLinks.map(({ label, href }) => (
                      <div key={label}>
                        <a href={href}>{label}</a>
                      </div>
                    ))}
                    <Button varient="primary" className="hover:bg-white/10">
                      Login
                    </Button>
                    <Button varient="secondary" className="hover:bg-white/80">
                      SignUp
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}
