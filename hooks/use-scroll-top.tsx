import { useEffect, useState } from "react";

// default value (한계점) = 10
export const useScrollTop = (threshold = 10) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // function
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // unmount (remove listeners)
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled; // true / false
};
