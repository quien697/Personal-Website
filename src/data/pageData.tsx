import { ReactElement } from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { HiEnvelope, HiMapPin } from 'react-icons/hi2'
import { AiFillPhone } from 'react-icons/ai'

const iconSize = 26;

interface NameProps {
  name: string;
}
interface ValueProps {
  name: string;
  value: string;
}
interface NavigationsProps {
  name: string;
  href: string;
}
interface SocialsProps {
  name: string;
  href: string;
  icon: ReactElement;
}
interface ExperienceProps {
  position: string;
  company: string;
  location: string;
  date: string;
  detail: string;
}

// Navigation
export const navigations: Array<NavigationsProps> = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "Experience", href: "experience" },
  { name: "Portfolio", href: "portfolio" },
  { name: "Contact", href: "contact" },
]
// Social
export const socials: Array<SocialsProps> = [
  { name: "Linkedin", href: "https://www.linkedin.com/in/quien697/", icon: <FaLinkedin size={iconSize} className="hover:text-blue-600" />, },
  { name: "Github", href: "https://github.com/quien697/", icon: <FaGithub size={iconSize} className="hover:text-neutral-600" />, },
  { name: "Instagram", href: "https://www.instagram.com/quien697/", icon: <FaInstagram size={iconSize} className="hover:text-pink-600" />, },
]
// Theme
export const themes: Array<ValueProps> = [
  { name: "System", value: "system", },
  { name: "Light", value: "light", },
  { name: "Dark", value: "dark", }, 
]
// Language
export const languages: Array<ValueProps> = [
  { name: "English", value: "en", },
  { name: "繁體中文", value: "zh_tw", },
]
// Paragraph
export const paragraphs: Array<NameProps> = [
  { name: "AboutMe-Part1" },
  { name: "AboutMe-Part2" },
  { name: "AboutMe-Part3" },
]
// Skill
export const skills: Array<NameProps> = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "React.js" },
  { name: "Next.js" },
  { name: "Node.js" },
  { name: "Tailwind CSS" },
  { name: "Bootstrap CSS" },
  { name: "C#" },
  { name: "PHP" },
  { name: "iOS" },
  { name: "Swift" },
  { name: "Android" },
  { name: "Java" },
  { name: "MYSQL" },
  { name: "Git" },
  { name: "GitHub" },
  { name: "AWS" },
]
// Experience
export const experiences: Array<ExperienceProps> = [
  { 
    position: "Position0", 
    company: "Company0", 
    location: "Location0", 
    date: "2018-2022", 
    detail: "Detail0",
  },
  { 
    position: "Position1", 
    company: "Company1", 
    location: "Location1", 
    date: "2013-2014", 
    detail: "Detail1",
  },
  { 
    position: "Position2", 
    company: "Company2", 
    location: "Location2",
    date: "2011-2012", 
    detail: "Detail2",
  },
]
// Portfolio
interface PortfolioProps {
  name: string;
  description: string;
  image: string;
  technologies: Array<NameProps>;
  github?: string;
  link?: string;
}
export const portfolios: Array<PortfolioProps> = [
  { 
    name: "Name0", 
    description: "Description0",
    image: "/assets/personal-website.png",
    technologies: [ { name: "Next.js", }, { name: "TypeScript", }, { name: "Tailwind" } ],
    link: "https://www.google.com/",
  },
  { 
    name: "Name1", 
    description: "Description1",
    image: "/assets/personal-website.png",
    technologies: [ { name: "iOS", }, { name: "RxSwift", }, { name: "iOS", }, { name: "RxSwift", }, { name: "iOS", }, { name: "RxSwift", }, { name: "iOS", }, { name: "RxSwift", }, ],
    github: "https://www.google.com/",
    link: "https://www.google.com/",
  },
]
// Contact
interface ContactsProps {
  name: string;
  icon: ReactElement;
}
export const contacts: Array<ContactsProps> = [
  { name: "V6P 2G8 Vancouver, Canada", icon: <HiMapPin size={iconSize} className="text-blue-600" />, },
  { name: "quien697@gmail.com", icon: <HiEnvelope size={iconSize} className="text-blue-600" />, },
  { name: "(337) 318-5945", icon: <AiFillPhone size={iconSize} className="text-blue-600" />, },
]