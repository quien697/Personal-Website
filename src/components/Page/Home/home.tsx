'use client';
import React from 'react';
import Image from 'next/image';
import Section from '@/components//Common/SectionLayout';
import { Link } from 'react-scroll';
import { RiArrowDownSLine } from 'react-icons/ri'
import { useLocalizedData } from '@/data';

export default function HomeSection() {
  const { constants } = useLocalizedData();

  return (
    <Section id="home" backgroundColor="bg-neutral-100 dark:bg-neutral-700" className="flex flex-col min-h-fit px-4 py-16 lg:min-h-screen">
      <div className="flex flex-col justify-start items-center space-y-3 my-16 lg:justify-center lg:space-y-6 lg:my-auto">
        <div>
          <Image
            src="/assets/headshot.JPG"
            width={250}
            height={250}
            priority alt={constants.FULLNAME}
            className="rounded-full shadow-2xl shadow-neutral-800 lg:hidden"
          />
        </div>
        <h3 className="text-xl hidden lg:block lg:text-3xl md:text-2xl">{constants.WELCOME}</h3>
        <h1 className="font-bold text-3xl xl:text-6xl lg:text-5xl md:text-4xl">{constants.INTRODUCE_MYSELF}</h1>
        <h2 className="text-xl lg:text-3xl md:text-2xl">{constants.CALL_ME}<span className="font-bold">Quien.</span></h2>
        <p className="text-lg text-center mt-4 mb-6 lg:text-2xl md:text-xl">
          {constants.I_AM}<span className="text-blue-600">{constants.FULL_STACK_DEVELOPER}</span> & <span className="text-blue-600">{constants.IOS_DEVELOPER}</span>{constants.BASE_ON}
        </p>
      </div>
      <div className="flex justify-center hover:text-blue-600 cursor-pointer">
        <Link to="about" spy smooth duration={500}>
          <RiArrowDownSLine size={35} className="animate-bounce" />
        </Link>
      </div>
    </Section>
  )
}