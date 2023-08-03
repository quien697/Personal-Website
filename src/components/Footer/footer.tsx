import React from "react";
import { contacts, socials } from "@/data/pageData"

const iconSize = 24;
const menuIconSize = 30;

const Header = () => {
  return (
    <footer className="bg-black-3">
      <div className="flex flex-col items-center px-10 py-16 lg:px-24">
        {contacts.map((item, idx) => {
          return (
            <p key={idx} className="flex flex-row mb-4">
              {item.icon}
              <span className="w-full pl-2 text-sm lg:text-base">{item.name}</span>
            </p>
          )
        })}
        <h3 className="text-2xl text-bold mb-4 mt-2 lg:text-3xl">Follow Me</h3>
        <ul className="flex list-none space-x-4">
          {socials.map((item, idx) => {
            return (
              <li key={idx}>
                <a href={item.href}>{item.icon}</a>
              </li>
            )
          })}
        </ul>
        <h2 className="pt-8">Copyright © 2023 <span className="text-blue">Tsung-Hsun Liu</span>. All Rights Reserved.</h2>
      </div>
    </footer>
  )
}

export default Header