'use client';
import React from 'react';
import Section from '@/components//Common/SectionLayout';
import Heading from '@/components/Common/SectionHeading';
import { paragraphs, skills } from '@/data/pageData';
import SkillButton from '@/components/Common/SkillButton/skillButton';
import { useTranslation } from 'react-i18next';

export default function AboutSection() {
  const { t } = useTranslation()

  return (
    <Section id="about" backgroundColor="bg-white dark:bg-neutral-800">
      <Heading name={t("AboutMe")} backgroundName="About Me" />
      {/* Content */}
      <div className="flex flex-col space-y-10 justify-center lg:flex-row lg:space-x-10 lg:space-y-0 lg:p-4 lg:text-left">
        <div className="lg:w-7/12">
          <h1 className="text-center text-xl font-bold mb-4 lg:text-left lg:text-3xl md:text-2xl">{t("KnowMe")}</h1>
          <div className="text-lg space-y-6 lg:text-xl">
            
            {paragraphs.map((item, idx) => {
              return <p key={idx}>{t(`${item.name}`)}</p>
            })}
          </div>
        </div>
        <div className="text-center lg:w-5/12 lg:text-left">
          <h1 className="text-2xl font-bold mb-4 lg:text-3xl">{t("MySkills")}</h1>
          <div className="flex flex-wrap justify-center lg:justify-start">
            {skills.map((item, idx) => {
              return <SkillButton key={idx} name={item.name} className="px-4 py-2 mr-2 mt-2" />
            })}
          </div>
        </div>
      </div>
    </Section>
  )
}