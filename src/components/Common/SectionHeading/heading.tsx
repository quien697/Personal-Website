import React from 'react';

interface HeadingProps {
    name: string;
    backgroundName: string;
  }

const Heading: React.FC<HeadingProps> = ({ name, backgroundName }) => {
  return (
    <div className="relative flex text-center mb-12 ">
    <h2 className="w-full text-6xl text-neutral-600 dark:text-neutral-300 font-semibold opacity-10 uppercase mb-0 lg:text-9xl">{backgroundName}</h2>
    <p className="absolute w-full self-center leading-normal text-4xl font-semibold mb-0 lg:text-6xl">
        {name}
        <span className="block w-20 border-b-4 border-3 border-blue-600 mx-auto" />
    </p>
    </div>
  )
}

export default Heading;