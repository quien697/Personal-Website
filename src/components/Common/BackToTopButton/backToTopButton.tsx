import React from "react";
import { animateScroll as scroll } from "react-scroll";
import useBackToTop from "@/hooks/useBackToTop";
import { FaChevronUp } from "react-icons/fa";

const BackToTopButton: React.FC = () => {
  const showBackToTopBtn = useBackToTop();
  const backToTop = () => {
    scroll.scrollToTop({
      smooth: true,
      duration: 500,
    });
  };

  return (
    <button onClick={backToTop} className={`fixed bottom-4 right-4 flex justify-center items-center bg-neutral-300 dark:bg-neutral-950 w-10 h-10 rounded-full shadow shadow-neutral-400 dark:shadow-neutral-800 hover:bg-blue-600 hover:text-white lg:w-12 lg:h-12 ${showBackToTopBtn ? "" : "hidden"}`}>
      <FaChevronUp size={22} />
    </button>
  )
}

export default BackToTopButton;