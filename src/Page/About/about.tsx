import React from "react";
import Section from "@/components/SectionLayout";
import Heading from "@/components/SectionHeading";

interface ParagraphsProps {
  paragraph: string;
}
const paragraphs: Array<ParagraphsProps> = [
  { paragraph: "Hi, My name is Tsung-Hsun, or call me Quien. I have a 1+ years of experience in Android app development using Java and 4+ years of experience in Web development, and learned iOS development with Swift for 1 year." },
  { paragraph: "Coding is a passion for me, not just a job. Although the journey has not been easy, I am proud to have overcome every challenge that came my way. My passion for coding has never wavered, and I remain committed to pursuing new challenges to further enhance my skills and knowledge." },
  { paragraph: " I have wide range of hobbies and passions. From reading, playing sports, running, traveling. I am always seeking new experiences and love to keep myself engaged and learning new things." },
]

interface SkillsProps {
  skill: string;
}
const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React.js" },
  { skill: "Next.js" },
  { skill: "Node.js" },
  { skill: "Tailwind CSS" },
  { skill: "Bootstrap CSS" },
  { skill: "C#" },
  { skill: "PHP" },
  { skill: "iOS" },
  { skill: "Swift" },
  { skill: "Android" },
  { skill: "Java" },
  { skill: "MYSQL" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "AWS" },
]

export default function AboutSection() {
  return (
    <Section id="about" backgroundColor="bg-black-3">
      <Heading name="About Me" />
      {/* Content */}
      <div className="flex flex-col flex-col space-y-10 items-strtch justify-center align-top lg:flex-row lg:space-x-10 lg:space-y-0 lg:p-4 lg:text-left">
        <div className="lg:w-7/12">
          <h1 className="text-center text-3xl font-bold md-6 lg:text-left mb-6">Get to know me!</h1>
          <div className="text-xl lg:text-2xl">
            {paragraphs.map((item, idx) => {
              return (
                <>
                  <p key={idx}>{item.paragraph}</p>
                  <br />
                </>
              )
            })}
          </div>
        </div>
        <div className="text-center lg:w-5/12 lg:text-left">
          <h1 className="text-3xl font-bold mb-6">My Skills</h1>
          <div className="flex flex-row flex-wrap justify-center z-10 lg:justify-start">
            {skills.map((item, idx) => {
              return <p key={`${idx}-${item.skill}`} className="font-semibold bg-blue text-while px-4 py-2 mr-2 mt-2 rounded shadow">{item.skill}</p>
            })}
          </div>
        </div>
      </div>
    </Section>
  )
}