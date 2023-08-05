import React from "react";

interface SectionProps {
  id: string;
  backgroundColor: String;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, backgroundColor, className, children }) => {
  return (
    <section id={id} className={`${backgroundColor}`}>
      <div className={`px-10 py-16 lg:px-24 ${className}`}>
        {children}
      </div>
    </section>
  )
}

export default Section;