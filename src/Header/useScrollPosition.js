import React from "react";
export default function useScrollPosition() {
  const [isScrollUp, setisScrollUp] = React.useState(true);
  React.useEffect(() => {
    const updateScrollPosition = () => {
      const scrollPosition = window.pageYOffset;
      console.log(scrollPosition);
      if (scrollPosition <= 100) {
        setisScrollUp(true);
      } else {
        setisScrollUp(false);
      }
    };
    window.addEventListener("scroll", updateScrollPosition);
    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, [isScrollUp]);

  return isScrollUp;
}
