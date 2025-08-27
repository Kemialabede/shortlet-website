import React, { useEffect, useState } from "react";

const Cursor = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => setMouse({ x: e.clientX, y: e.clientY });
    document.addEventListener("mousemove", handleMove);
    return () => document.removeEventListener("mousemove", handleMove);
  }, []);

  // Smooth trailing effect
  useEffect(() => {
    const animate = () => {
      setTrail((prev) => ({
        x: prev.x + (mouse.x - prev.x) * 0.2,
        y: prev.y + (mouse.y - prev.y) * 0.2,
      }));
      requestAnimationFrame(animate);
    };
    animate();
  }, [mouse]);

  return (
    <>
      {/* Outer glow ring */}
      <div
        className="fixed pointer-events-none z-50 rounded-full border-2 border-[#E76F51] opacity-50 animate-[pulse_1.5s_ease-in-out_infinite]"
        style={{
          left: trail.x,
          top: trail.y,
          transform: "translate(-50%, -50%)",
          width: "50px",
          height: "50px",
          boxShadow: "0 0 20px rgba(231,111,81,0.4), 0 0 40px rgba(231,111,81,0.2)",
        }}
      />

      {/* Inner glowing circle */}
      <div
        className="fixed pointer-events-none z-50 rounded-full bg-[#E76F51] opacity-80 animate-[pulse_1.2s_ease-in-out_infinite]"
        style={{
          left: trail.x,
          top: trail.y,
          transform: "translate(-50%, -50%)",
          width: "14px",
          height: "14px",
          boxShadow: "0 0 12px rgba(231,111,81,0.5)",
        }}
      />
    </>
  );
};

export default Cursor;
