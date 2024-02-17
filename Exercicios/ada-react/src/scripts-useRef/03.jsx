import React, { useRef, useEffect, useState } from "react";

export const MeasureElement = () => {
  const elementRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (elementRef.current) {
      const elementWidth = elementRef.current.offsetWidth;
      setWidth(elementWidth);
    }
  }, []);

  return (
    <div ref={elementRef}>
      <p>The width of this element is: {width}px</p>
    </div>
  );
};
