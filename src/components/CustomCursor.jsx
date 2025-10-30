import React, { useEffect, useRef, useState } from "react";
import "../styles/CustomCursor.css";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const trailContainerRef = useRef(null);
  const [clicked, setClicked] = useState(false);

  const pos = useRef({ x: -30, y: -30 });
  const cursorPos = useRef({ x: -30, y: -30 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      createSmokeLine(e.clientX, e.clientY);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    const lerp = (start, end, t) => start * (1 - t) + end * t;

    const animate = () => {
      cursorPos.current.x = lerp(cursorPos.current.x, pos.current.x, 0.2);
      cursorPos.current.y = lerp(cursorPos.current.y, pos.current.y, 0.2);

      if (cursorRef.current) {
        cursorRef.current.style.left = `${cursorPos.current.x - 15}px`;
        cursorRef.current.style.top = `${cursorPos.current.y - 15}px`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const createSmokeLine = (x, y) => {
    const line = document.createElement("div");
    line.className = "smoke-line";
    const angle = Math.random() * 360; // random rotation for variation
    const length = 20 + Math.random() * 40; // random line length

    line.style.left = `${x}px`;
    line.style.top = `${y}px`;
    line.style.width = `${length}px`;
    line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;

    trailContainerRef.current.appendChild(line);

    setTimeout(() => {
      line.remove();
    }, 800); // remove after fade animation
  };

  return (
    <>
      <div ref={trailContainerRef} className="smoke-container"></div>
      <div
        className={`cursor-shape ${clicked ? "clicked" : ""}`}
        ref={cursorRef}
      ></div>
    </>
  );
};

export default CustomCursor;
