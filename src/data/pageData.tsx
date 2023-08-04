import { ReactElement } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { HiEnvelope, HiMapPin } from "react-icons/hi2"
import { AiFillPhone } from "react-icons/ai"

const iconSize = 26;

interface NameProps {
  name: string;
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
  { name: "Linkedin", href: "https://www.linkedin.com/in/quien697/", icon: <FaLinkedin size={iconSize} />, },
  { name: "Github", href: "https://github.com/quien697/", icon: <FaGithub size={iconSize} />, },
  { name: "Instagram", href: "https://www.instagram.com/quien697/", icon: <FaInstagram size={iconSize} />, },
]
// Theme
export const themes: Array<NameProps> = [
  { name: "System", },
  { name: "Light", },
  { name: "Dark", }, 
]
// Language
export const languages: Array<NameProps> = [
  { name: "English", },
  { name: "繁體中文", },
]
// Paragraph
export const paragraphs: Array<NameProps> = [
  { name: "Hi, My name is Tsung-Hsun, or call me Quien. I have a 1+ years of experience in Android app development using Java and 4+ years of experience in Web development, and learned iOS development with Swift for 1 year." },
  { name: "Coding is a passion for me, not just a job. Although the journey has not been easy, I am proud to have overcome every challenge that came my way. My passion for coding has never wavered, and I remain committed to pursuing new challenges to further enhance my skills and knowledge." },
  { name: "I have wide range of hobbies and passions. From reading, playing sports, running, traveling. I am always seeking new experiences and love to keep myself engaged and learning new things." },
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
    position: "Full Stack Developer", 
    company: "Freelance", 
    location: "Taipei, Taiwan", 
    date: "2018-2022", 
    detail: "As a freelance with our team, I mainly maintain admin website to optimized database search functions, optimized website more user-friendly and develope android mobile app.",
  },
  { 
    position: "Junior Web Developer", 
    company: "Daher Infomation Co., Ltd", 
    location: "Taoyuan, Taiwan", 
    date: "2013-2014", 
    detail: "Daher is a commercial software development company, like enterprise erp systems,  POS system, financial accounting system, etc.\n I mainly help the company to optimize website more user-friendly and evelope a better performance database that increased query speed.",
  },
  { 
    position: "Mobile Application Developer", 
    company: "Sunlight Infomation Co., Ltd", 
    location: "Taipei, Taiwan", date: "2011-2012", 
    detail: "Sunlight is a sofeware company. I mainly help company to maintain the exiting website and develop android moblie app with a team.",
  },
]
// Contact
interface ContactsProps {
  name: string;
  icon: ReactElement;
}
export const contacts: Array<ContactsProps> = [
  { name: "V6P 2G8 Vancouver, Canada", icon: <HiMapPin size={iconSize} className="text-blue" />, },
  { name: "quien697@gmail.com", icon: <HiEnvelope size={iconSize} className="text-blue" />, },
  { name: "(337) 318-5945", icon: <AiFillPhone size={iconSize} className="text-blue" />, },
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
    name: "Personal Website", 
    description: "",
    image: "/personal-website.png",
    technologies: [ { name: "Next.js", }, { name: "TypeScript", }, { name: "Tailwind" } ],
    link: "https://www.google.com/",
  },
  { 
    name: "chatwis.io", 
    description: "Built on ChatGPT API and Chatwis is built on openai technologies with gpt-3 models.Built on ChatGPT API and Chatwis is built on openai technologies with gpt-3 models.Built on ChatGPT API and Chatwis is built on openai technologies with gpt-3 models.Built on ChatGPT API and Chatwis is built on openai technologies with gpt-3 models.",
    image: "/personal-website.png",
    technologies: [ { name: "iOS", }, { name: "RxSwift", }, { name: "iOS", }, { name: "RxSwift", }, { name: "iOS", }, { name: "RxSwift", }, { name: "iOS", }, { name: "RxSwift", }, ],
    github: "https://www.google.com/",
    link: "https://www.google.com/",
  },
]