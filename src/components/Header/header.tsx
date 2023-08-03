import React, { useState } from "react";
import Image from "next/image";
import { GrLanguage } from "react-icons/gr"
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { RiSunLine, RiMoonFill } from "react-icons/ri";
import { navigations, socials, themes, languages } from "@/data/pageData"

const iconSize = 24;
const menuIconSize = 30;

const Header = () => {
  const [navbar, setNavbar] = useState(false)
  
  return (
    <header className="sticky top-0 z-40">
      <nav className="lg:fixed flex top-0 left-0 w-full h-auto bg-black-1 border-r-1 shadow z-10 py-2 px-0 overflow-visible lg:jsutify-start lg:w-64 lg:h-full lg:overflow-hidden">
        <div className="flex items-center justify-between relative flex-row h-full w-full px-3 lg:flex-col lg:pt-3 lg:pb-2">
          {/* Logo start */}
          <a href="#" className="lg:mt-4">
            <span className="bg-black-4 rounded-full p-2 hidden lg:mb-1 lg:inline-block">
              <Image src="/headshot.JPG" width={150} height={150} priority alt="I am Tsung-Hsun Liu." className="block rounded-full w-full h-auto" />
            </span>
            <h1 className="text-center text-xl text-white mb-0 lg:block">Tsung-Hsun Liu</h1>
          </a>
          {/* Nav Item */}  
          <div className={`min-w-fit max-w-full h-auto bg-black-1 lg:block lg:my-auto ${navbar ? "absolute top-[130%] right-2 rounded-md mt-0 px-4 z-50 shadow" : "hidden"}`}>
            <ul className={`flex-col text-right lg:text-center lg:divide-y-0 lg:my-auto lg:py-3`}>
              {navigations.map((item) => {
                return (
                  <li key={item.name} className="py-2 w-full lg:py-3">
                    <a href={item.href} className="w-full text-white">{item.name}</a>
                  </li>
                )
              })}
            </ul>
            {/* Setting Button */}
            <ul className="flex border-t-2 border-black-4 py-2 lg:hidden">
              <li key="dark" className="flex border-2 border-black-4 mx-2 my-2 p-2 rounded-md">
                <RiMoonFill size={iconSize} color="white" />
                <select className="bg-black-1 text-white text-center outline-0 outline-none appearance-none pl-1">
                {themes.map((item) => {
                  return (
                    <option key={item.name} value={item.name}>{item.name}</option>
                  )
                })}
                </select>
              </li>
              <li key="light" className="flex border-2 border-black-4 mx-2 my-2 p-2 rounded-md">
                <RiSunLine size={iconSize} color="white" />
                <select className="bg-black-1 text-white text-center outline-0 outline-none appearance-none pl-1">
                  {languages.map((item) => {
                    return (
                      <option key={item.name} value={item.name}>{item.name}</option>
                    )
                  })}
                </select>
              </li>
            </ul>
          </div>
          {/* Social Button */}
          <ul className="grow justify-end flex list-none lg:flex lg:grow-0 lg:justify-center">
            {socials.map((item) => {
              return (
                <li key={item.name} className="mx-2 my-2">
                  <a href={item.href} className="w-full text-slate-50">{item.icon}</a>
                </li>
              )
            })}
          </ul>
          {/* Setting Button */}
          <ul className="flex list-none lg:flex border-t-2 border-black-4 hidden">
            <li key="setting-theme" className="flex border-2 border-black-4 mx-2 my-4 p-2 rounded-md">
              <RiMoonFill size={iconSize} color="white" />
              <select className="bg-black-1 text-white text-center outline-0 outline-none appearance-none pl-1">
                {themes.map((item) => {
                  return (
                    <option key={item.name} value={item.name}>{item.name}</option>
                  )
                })}
              </select>
            </li>
            <li key="setting-language" className="flex border-2 border-black-4 mx-2 my-4 p-2 rounded-md">
              <RiSunLine size={iconSize} color="white" />
              <select className="bg-black-1 text-white text-center outline-0 outline-none appearance-none pl-1">
                {languages.map((item) => {
                  return (
                    <option key={item.name} value={item.name}>{item.name}</option>
                  )
                })}
              </select>
            </li>
          </ul>
          {/* Menu Button */}
          <button className="text-yelloww p-2 lg:hidden" onClick={() => setNavbar(!navbar)}>
            {navbar ? <IoMdClose size={menuIconSize} color="white" /> : <IoMdMenu size={menuIconSize} color="white" />}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header