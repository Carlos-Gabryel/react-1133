import React, { useRef, useState } from "react";

export const DraggableElement = () => {
  const elementRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (event) => {
    setIsDragging(true);
    const { clientX, clientY } = event;
    const { left, top } = elementRef.current.getBoundingClientRect();
    setOffset({ x: clientX - left, y: clientY - top });
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    const { clientX, clientY } = event;
    setPosition({
      x: clientX - offset.x,
      y: clientY - offset.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={elementRef}
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        cursor: isDragging ? "grabbing" : "grab",
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      Drag me!
    </div>
  );
};
