'use client';
import React from 'react';
import Image from 'next/image';
import Section from '@/components//Common/SectionLayout';
import Heading from '@/components/Common/SectionHeading';
import DetailList from './detailList';
import SkillButton from '@/components/Common/SkillButton/skillButton';
import { useLocalizedData } from '@/data';

export default function PortfolioSection() {
  const { constants, portfolios } = useLocalizedData()

  return (
    <Section id="portfolio" backgroundColor="bg-white dark:bg-neutral-800">
      <Heading name={constants.PORTFOLIO} backgroundName="Portfolio" />
      <div className="flex flex-col space-y-28">
        {portfolios.map((item, idx) => {
          return (
            <div key={idx}>
              <div className="flex flex-col lg:flex-row lg:space-x-12">
                <div className="relative lg:w-1/2">
                  <Image src={item.image} alt={item.name} width={1000} height={1000} className="rounded-lg shadow-lg shadow-neutral-900" />
                </div>
                <div className="flex flex-col gap-4 mt-8 lg:w-1/2 lg:mt-2">
                  <h1 className="mb-2">
                    <span className="text-4xl font-bold">{item.name}</span>
                    <span className="ml-4 text-neutral-400 text-sm">{item.status}</span>
                  </h1>
                  <p className="text-xl leading-7">{item.description}</p>
                  <ul>
                    <DetailList title={constants.TECHNOLOGIES} isLink={false}>
                      {item.technologies.map((item, idx) => {
                        return <SkillButton key={idx} name={item.name} className="text-xs px-2 py-1 my-1" />
                      })}
                    </DetailList>
                    <DetailList title="Github" isLink={true} href={item.github} />
                    <DetailList title={constants.WEBSITE} isLink={true} href={item.link} />
                  </ul>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
};