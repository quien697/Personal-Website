'use client';
import React from 'react';
import { contacts, socials } from '@/data/pageData';
import IconLink from '../Common/IconLink/iconLink';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation()

  return (
    <footer className="bg-white dark:bg-neutral-800">
      <div className="flex flex-col items-center px-10 py-16 lg:px-24">
        {contacts.map((item, idx) => {
          return (
            <p key={idx} className="flex flex-row mb-4">
              {item.icon}
              <span className="w-full pl-2 text-sm lg:text-base">{item.name}</span>
            </p>
          )
        })}
        <h3 className="text-2xl text-bold mb-4 mt-2 lg:text-3xl">{t("FollowMe")}</h3>
        <ul className="flex space-x-4">
          {socials.map((item, idx) => {
            return (
              <li key={idx}>
                <IconLink href={item.href}>{item.icon}</IconLink>
              </li>
            )
          })}
        </ul>
        <h2 className="pt-8">Copyright © 2023 <span className="font-bold text-blue-600">Tsung-Hsun Liu</span>. All Rights Reserved.</h2>
      </div>
    </footer>
  )
}

export default Header