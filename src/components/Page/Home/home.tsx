import React from "react";
import Image from "next/image";
import Section from "@/components//Common/SectionLayout";
import { Link } from "react-scroll";
import { RiArrowDownSLine } from "react-icons/ri"

export default function HomeSection() {
  return (
    <Section id="home" backgroundColor="bg-neutral-100 dark:bg-neutral-700" className="flex flex-col min-h-fit w-full px-4 py-16 lg:min-h-screen">
      <div className="flex flex-col justify-start items-center space-y-3 my-16 lg:justify-center lg:space-y-6 lg:my-auto">
        <div>
          <Image 
            src="/headshot.JPG" 
            width={250} 
            height={250} 
            priority alt="I am Tsung-Hsun Liu" 
            className="rounded-full shadow-2xl shadow-neutral-800 lg:hidden" 
          />
        </div>
        <h3 className="text-2xl hidden lg:block lg:text-4xl">Welcome</h3>
        <h1 className="font-bold text-3xl lg:text-7xl">Hi, I&#39;m Tsung-Hsun Liu!</h1>
        <h2 className="text-1xl lg:text-3xl">You can also call me <span className="font-bold">Quien.</span></h2>
        <p className="text-lg text-center mt-4 mb-6 lg:text-2xl">
          I&#39;m a <span className="text-blue-600">Full-Stack Developer</span> & <span className="text-blue-600">iOS Developer</span> based in Vancouver, Canada.
        </p>
      </div>
      <div className="flex justify-center">
        <Link to="about" spy smooth duration={500}>
          <RiArrowDownSLine size={35} className="animate-bounce" />
        </Link>
      </div>
    </Section>
  )
}