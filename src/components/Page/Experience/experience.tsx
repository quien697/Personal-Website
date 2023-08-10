'use client';
import React from 'react';
import Section from '@/components//Common/SectionLayout';
import Heading from '@/components/Common/SectionHeading';
import { useLocalizedData } from '@/data';

export default function ExperienceSection() {
  const { constants, experiences } = useLocalizedData()

  return (
    <Section id="experience" backgroundColor="bg-neutral-100 dark:bg-neutral-700">
      <Heading name={constants.EXPERIENCE} backgroundName="Experience" />
      <div className="relative before:content-[''] before:absolute before:top-0 before:left-8 before:w-1 before:h-full before:bg-blue-600 before:lg:left-1/2">
        {experiences.map((item, idx) => {
          return (
            <article key={idx} className={`flex w-full pl-8 mt-4 lg:pl-0 lg:mt-0 ${(idx%2 == 0 ? "" : "flex-row-reverse items-end")}`}>
              <div className="relative w-full lg:w-1/2">
                <div className={`flex absolute top-0 -left-7 justify-center w-14 h-14 rounded-full bg-white dark:bg-neutral-700 border-blue-600 border-4 shadow shadow-neutral-700 ${(idx%2 == 0 ? "lg:left-auto lg:-right-7" : "")}`}>
                  <span className="my-auto font-bold">{item.date.substring(5,9)}</span>
                </div>
                <div className={`relative bg-neutral-800 rounded-lg p-6 ${(idx%2 == 0 ? "ml-10 lg:ml-0 mr-0 lg:mr-10" : "ml-10 mr-0")}`}>
                  <h2>
                    <span className="font-bold text-white text-2xl">{item.position}</span>
                    <span className="text-xs text-neutral-400 pl-3">{item.date}</span>
                  </h2>
                  <h3 className="font-bold text-lg text-blue-600">{item.company}</h3>
                  <h3 className="font-bold text-white pb-3">{item.location}</h3>
                  <p className="text-neutral-400">{item.detail}</p>
                </div>
              </div>
            </article>
          )
        })}
        <article className="flex flex-row-reverse w-full">
          <div className="relative w-full lg:w-1/2">
            <div className="flex absolute top-0 left-5 justify-center w-7 h-7 rounded-full bg-white dark:bg-neutral-700 border-blue-600 border-4 shadow lg:-left-3">
            </div>
          </div>
        </article>
      </div>
    </Section>
  )
}