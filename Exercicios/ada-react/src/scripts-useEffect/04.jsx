import React, { useEffect, useState } from "react";

export const ScrollSpy = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let message = "";

  if (scrollPosition === 0) {
    message = "You are at the top of the page";
  } else if (
    scrollPosition > 0 &&
    scrollPosition < document.documentElement.scrollHeight - window.innerHeight
  ) {
    message = "You are in the middle of the page";
  } else {
    message = "You are at the bottom of the page";
  }

  return (
    <div>
      <h1>ScrollSpy</h1>
      <p>{message}</p>
    </div>
  );
};
