import React from "react";
import Image from "next/image";
import Section from "@/components/SectionLayout"
import { Link } from "react-scroll";
import { RiArrowDownSLine } from "react-icons/ri"

export default function HomeSection() {
  return (
    <Section id="home" backgroundColor="bg-black-4" className="flex flex-col min-h-fit w-100 px-4 py-16 lg:min-h-screen">
      <div className="flex flex-col flex-wrap justify-start items-center space-y-3 my-16 lg:justify-center lg:space-y-6 lg:my-auto">
        <div>
          <Image src="/headshot.JPG" width={250} height={250} priority alt="I am Tsung-Hsun Liu" className="rounded-full shadow-2xl lg:hidden" />
        </div>
        <h1 className="font-bold text-2xl hidden lg:block lg:text-4xl">Welcome</h1>
        <h1 className="font-bold text-3xl lg:text-7xl">Hi, I&#39;m Tsung-Hsun Liu!</h1>
        <h2 className="font-bold text-1xl lg:text-3xl">You can also call me Quien.</h2>
        <p className="text-lg text-center mt-4 mb-6 lg:text-2xl">
          I&#39;m a <span className="text-blue">Full-Stack Developer</span> & <span className="text-blue">iOS Developer</span> based in Vancouver, Canada.
        </p>
      </div>
      <div className="flex justify-center">
        <Link to="about" activeClass="actice" spy smooth offset={-100} duration={500}>
          <RiArrowDownSLine size={35} className="animate-bounce" />
        </Link>
      </div>
    </Section>
  )
}