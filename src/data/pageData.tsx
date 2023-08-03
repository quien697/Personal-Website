import { Wellfleet } from "next/font/google";
import { ReactElement } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const iconSize = 24;

interface nameProps {
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
  position: String;
  company: String;
  location: String;
  date: String;
  detail: String;
}

// Navigations
export const navigations: Array<NavigationsProps> = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "Experience", href: "experience" },
  { name: "Portfolio", href: "portfolio" },
  { name: "Contact", href: "contact" },
]
// Socials
export const socials: Array<SocialsProps> = [
  { name: "Linkedin", href: "https://www.linkedin.com/in/quien697/", icon: <FaLinkedin size={iconSize} /> },
  { name: "Github", href: "https://github.com/quien697/", icon: <FaGithub size={iconSize} color="white" /> },
  { name: "Instagram", href: "https://www.instagram.com/quien697/", icon: <FaInstagram size={iconSize} /> },
]
// Themes
export const themes: Array<nameProps> = [
  { name: "System", },
  { name: "Light", },
  { name: "Dark", }, 
]
// Languages
export const languages: Array<nameProps> = [
  { name: "English", },
  { name: "繁體中文", },
]
// Paragraphs
export const paragraphs: Array<nameProps> = [
  { name: "Hi, My name is Tsung-Hsun, or call me Quien. I have a 1+ years of experience in Android app development using Java and 4+ years of experience in Web development, and learned iOS development with Swift for 1 year." },
  { name: "Coding is a passion for me, not just a job. Although the journey has not been easy, I am proud to have overcome every challenge that came my way. My passion for coding has never wavered, and I remain committed to pursuing new challenges to further enhance my skills and knowledge." },
  { name: "I have wide range of hobbies and passions. From reading, playing sports, running, traveling. I am always seeking new experiences and love to keep myself engaged and learning new things." },
]
// Skills
export const skills: Array<nameProps> = [
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
// Experiences
export const experiences: Array<ExperienceProps> = [
  { 
    position: "Full Stack Developer", 
    company: "Freelance", 
    location: "Taipei, Taiwan", 
    date: "2018-2022", 
    detail: "As a freelance with our team, I mainly maintain admin website to optimized database search functions, optimized website more user-friendly and develope android mobile app."
  },
  { 
    position: "Junior Web Developer", 
    company: "Daher Infomation Co., Ltd", 
    location: "Taoyuan, Taiwan", 
    date: "2013-2014", 
    detail: "Daher is a commercial software development company, like enterprise erp systems,  POS system, financial accounting system, etc.\n I mainly help the company to optimize website more user-friendly and evelope a better performance database that increased query speed." 
  },
  { 
    position: "Mobile Application Developer", 
    company: "Sunlight Infomation Co., Ltd", 
    location: "Taipei, Taiwan", date: "2011-2012", 
    detail: "Sunlight is a sofeware company. I mainly help company to maintain the exiting website and develop android moblie app with a team." 
  },
]