import React, { ReactNode } from 'react';

interface DatasProps {
  name: string;
  value: string;
}

interface SelectProps {
  value: string;
  datas: Array<DatasProps>;
  onChange: (value: string) => void;
  children: ReactNode;
}

const Select: React.FC<SelectProps> = ({ value, datas, onChange, children }) => {
  return (
    <li className="flex border-2 border-black-4 mx-2 my-4 p-2 rounded-md">
      {children}
      <select 
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-neutral-950 text-center  outline-0 outline-none appearance-none pl-1">
        {datas.map((item) => {
          return (
            <option key={item.value} value={item.value}>{item.name}</option>
          )
        })}
      </select>
    </li>
  )
}

export default Select;