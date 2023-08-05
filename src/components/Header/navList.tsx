import React from 'react';
import { Link } from 'react-scroll';
import { navigations } from '@/data/pageData';

interface SettingListProps {
  className: string;
  onClick?: () => void;
}

const NavList: React.FC<SettingListProps> = ({ className, onClick }) => {
  return (
    <ul className={`flex-col py-4 ${className}`}>
      {navigations.map((item) => {
        return (
          <li key={item.name} className="py-2 w-full lg:py-3">
            <Link 
              to={item.href} 
              activeClass="text-blue-600 font-bold" 
              spy
              smooth
              duration={500} 
              className="cursor-pointer hover:text-blue-600 hover:font-bold" 
              onClick={onClick}
            >
              {item.name}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavList;