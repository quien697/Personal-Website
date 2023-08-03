import React from "react";
import Section from "@/components//Common/SectionLayout";
import Heading from "@/components/Common/SectionHeading";
import { paragraphs, skills } from "@/data/pageData";

export default function AboutSection() {
  return (
    <Section id="about" backgroundColor="bg-black-3">
      <Heading name="About Me" />
      {/* Content */}
      <div className="flex flex-col flex-col space-y-10 items-strtch justify-center align-top lg:flex-row lg:space-x-10 lg:space-y-0 lg:p-4 lg:text-left">
        <div className="lg:w-7/12">
          <h1 className="text-center text-3xl font-bold md-6 lg:text-left mb-6">Get to know me!</h1>
          <div className="text-lg lg:text-xl">
            {paragraphs.map((item, idx) => {
              return (
                <div key={idx}>
                  <p>{item.name}</p>
                  <br />
                </div>
              )
            })}
          </div>
        </div>
        <div className="text-center lg:w-5/12 lg:text-left">
          <h1 className="text-3xl font-bold mb-6">My Skills</h1>
          <div className="flex flex-row flex-wrap justify-center z-10 lg:justify-start">
            {skills.map((item, idx) => {
              return <p key={idx} className="font-semibold bg-blue text-while px-4 py-2 mr-2 mt-2 rounded shadow">{item.name}</p>
            })}
          </div>
        </div>
      </div>
    </Section>
  )
}