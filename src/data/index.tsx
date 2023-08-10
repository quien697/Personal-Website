import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { HiEnvelope, HiMapPin } from 'react-icons/hi2'
import { AiFillPhone } from 'react-icons/ai'

export const useLocalizedData = () => {
  const { t } = useTranslation();
  const iconSize = 26;

  interface NameProps {
    name: string;
  }
  interface ValueProps {
    name: string;
    value: string;
  }
  // Constants
  interface ConstantsProps {
    FULLNAME: string;
    WELCOME: string;
    INTRODUCE_MYSELF: string;
    FULL_STACK_DEVELOPER: string;
    IOS_DEVELOPER: string
    I_AM: string;
    CALL_ME: string;
    BASE_ON: string;
    ABOUT_ME: string;
    KNOW_ME: string;
    MY_SKILLS: string;
    EXPERIENCE: string;
    PORTFOLIO: string;
    TECHNOLOGIES: string;
    WEBSITE: string;
    LINK: string;
    CONTACT_ME: string;
    GET_IN_TOUCH: string;
    NAME: string;
    EMAIL: string;
    MESSAGE: string;
    SEND_MESSAGE: string;
    FOLLOW_ME: string;
  }
  const constants: ConstantsProps = t('constants', { returnObjects: true });
  // Navigation
  interface NavItemsProps {
    name: string;
    href: string;
  }
  const navItems: Array<NavItemsProps> = t('navItems', { returnObjects: true });
  // Social
  interface SocialsProps {
    name: string;
    href: string;
    icon: ReactElement;
  }
  const socials: Array<SocialsProps> = [
    { 
      name: "Linkedin", 
      href: "https://www.linkedin.com/in/quien697/", 
      icon: <FaLinkedin size={iconSize} className="hover:text-blue-600" />,
    },
    { 
      name: "Github", 
      href: "https://github.com/quien697/", 
      icon: <FaGithub size={iconSize} className="hover:text-blue-600" />, 
    },
    { 
      name: "Instagram", 
      href: "https://www.instagram.com/quien697/", 
      icon: <FaInstagram size={iconSize} className="hover:text-blue-600" />, 
    },
  ]
  // Theme
  const themes: Array<ValueProps> = t('themes', { returnObjects: true });
  // Language
  const languages: Array<ValueProps> = [
    {
      name: "English",
      value: "en",
    },
    { 
      name: "繁體中文",
      value: "zh_tw",
    },
  ]
  // About Me
  const aboutMeContents: Array<NameProps> = t('aboutMeContents', { returnObjects: true });
  // Skill
  const skills: Array<NameProps> = [
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
  interface ExperiencesProps {
    position: string;
    company: string;
    location: string;
    date: string;
    detail: string;
  }
  const experiences: Array<ExperiencesProps> = t('experiences', { returnObjects: true });
  // Portfolio
  interface PortfolioProps {
    name: string;
    description: string;
    image: string;
    technologies: Array<NameProps>;
    github?: string;
    link?: string;
  }
  const portfolios: Array<PortfolioProps> = t('portfolios', { returnObjects: true });
  // Contact Me
  interface ContactProps {
    name: string;
    icon: ReactElement;
  }
  const contact: Array<ContactProps> = [
    {
      name: "V6P 2G8 Vancouver, Canada",
      icon: <HiMapPin size={iconSize} className="text-blue-600" />,
    },
    {
      name: "quien697@gmail.com",
      icon: <HiEnvelope size={iconSize} className="text-blue-600" />,
    },
    {
      name: "(337) 318-5945",
      icon: <AiFillPhone size={iconSize} className="text-blue-600" />,
    },
  ]

  return {
    constants,
    navItems,
    socials,
    themes,
    languages,
    aboutMeContents,
    skills,
    experiences,
    portfolios,
    contact,
  };
};
