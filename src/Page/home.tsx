import React from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import { RiArrowDownSLine } from "react-icons/ri"
import Section from '@/components/section'

export default function HomeSection() {
  return (
    <Section id="home" className="bg-black-4">
      <div className="flex flex-col min-h-fit w-100 px-3 py-8 lg:min-h-screen lg:py-16">
        <div className="flex flex-col flex-wrap justify-start items-center space-y-3 my-16 lg:justify-center lg:space-y-6 lg:my-auto">
          <div>
            <Image src="/headshot.JPG" width={250} height={250} priority alt="I am Tsung-Hsun Liu" className="rounded-full shadow-2xl lg:hidden" />
          </div>
          <h1 className="font-bold text-2xl lg:text-4xl hidden lg:block">Welcome</h1>
          <h1 className="font-bold text-3xl lg:text-7xl">Hi, I&#39;m Tsung-Hsun Liu!</h1>
          <h2 className="font-bold text-1xl lg:text-3xl">You can also call me Quien.</h2>
          <p className="text-lg mt-4 mb-6 lg:text-2xl text-center">
            I&#39;m a <span className="text-blue">Full-Stack Developer</span> & <span className="text-blue">iOS Developer</span> based in Vancouver, Canada.
          </p>
        </div>
        <div className="flex justify-center">
          <Link to="about" activeClass="actice" spy={true} smooth={true} offset={-100} duration={500}>
            <RiArrowDownSLine size={35} className="animate-bounce" />
          </Link>
        </div>
      </div>
    </Section>
  )
}