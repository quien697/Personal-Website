import React from "react";

interface HeadingProps {
    name: string;
  }

const Heading: React.FC<HeadingProps>  = ({ name }) => {
  return (
    <div className="relative flex mb-12 text-center">
    <h2 className="w-full text-6xl text-black4 font-semibold opacity-10 uppercase mb-0 lg:text-9xl">{name}</h2>
    <p className="absolute w-full self-center leading-normal text-4xl text-white font-semibold mb-0 lg:text-6xl">
        {name}
        <span className="block w-20 border-b-4 border-3 border-blue mx-auto" />
    </p>
    </div>
  )
}

export default Heading;