/*
    Features：show the buton of back to top if position > 400, otherwise no.
*/
import { useState, useEffect } from 'react';

const useBackToTop = () => {
  const [showBackToTopBtn, setShowBackToTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowBackToTopBtn(true);
      } else {
        setShowBackToTopBtn(false);
      }
    });
  }, []);

  return showBackToTopBtn;
};

export default useBackToTop;