import React from "react";
import Section from "@/components/SectionLayout";
import Heading from "@/components/SectionHeading";

interface ExperienceProps {
  position: String;
  company: String;
  location: String;
  date: String;
  detail: String;
}

const experiences: Array<ExperienceProps> = [
  { position: "Full Stack Developer", company: "Freelance", location: "Taipei, Taiwan", date: "2018-2022", detail: "As a freelance with our team, I mainly maintain admin website to optimized database search functions, optimized website more user-friendly and develope android mobile app." },
  { position: "Junior Web Developer", company: "Daher Infomation Co., Ltd", location: "Taoyuan, Taiwan", date: "2013-2014", detail: "Daher is a commercial software development company, like enterprise erp systems,  POS system, financial accounting system, etc.\n I mainly help the company to optimize website more user-friendly and evelope a better performance database that increased query speed." },
  { position: "Mobile Application Developer", company: "Sunlight Infomation Co., Ltd", location: "Taipei, Taiwan", date: "2011-2012", detail: "Sunlight is a sofeware company. I mainly help company to maintain the exiting website and develop android moblie app with a team." },
]

export default function ExperienceSection() {
  return (
    <Section id="experience" backgroundColor="bg-black-4">
      <Heading name="Experience" />
      <div className="relative before:content-[''] before:absolute before:top-0 before:left-8 before:w-1 before:h-full before:bg-black-2 before:lg:left-1/2">
        {experiences.map((item, idx) => {
          return (
            <article key={idx} className={`flex w-full pl-8 mt-4 lg:pl-0 lg:mt-0 ${(idx%2 == 0 ? "" : "flex-row-reverse items-end")}`}>
              <div className="relative w-full lg:w-1/2">
                <div className={`flex absolute justify-center w-14 h-14 rounded-full bg-black-4 border-black-2 border-4 shadow top-0 -left-7 z-10 ${(idx%2 == 0 ? "lg:left-auto lg:-right-7" : "")}`}>
                  <span className="my-auto">{item.date.substring(5,9)}</span>
                </div>
                <div className="relative bg-black-2 rounded-lg ml-10 p-6 lg:mr-10">
                  <h2>
                    <span className="font-bold text-2xl">{item.position}</span>
                    <span className="text-xs pl-3">{item.date}</span>
                  </h2>
                  <h3 className="font-bold text-lg text-blue">{item.company}</h3>
                  <h3 className="font-bold pb-3">{item.location}</h3>
                  <p>{item.detail}</p>
                </div>
              </div>
            </article>
          )
        })}
        <article className="flex flex-row-reverse items-end w-full">
          <div className="relative w-full lg:w-1/2">
            <div className="flex absolute justify-center w-7 h-7 rounded-full bg-black-4 border-black-2 border-4 shadow top-0 left-5 z-10 lg:-left-3">
            </div>
          </div>
        </article>
      </div>
    </Section>
  )
}