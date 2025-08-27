import React, { useEffect, useState } from "react";

const Cursor = () => {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setPointer({ x: e.clientX, y: e.clientY });
    };

    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      if (touch) {
        setPointer({ x: touch.clientX, y: touch.clientY });
      }
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("touchmove", handleTouchMove);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  // Smooth trailing effect
  useEffect(() => {
    const animate = () => {
      setTrail((prev) => ({
        x: prev.x + (pointer.x - prev.x) * 0.2,
        y: prev.y + (pointer.y - prev.y) * 0.2,
      }));
      requestAnimationFrame(animate);
    };
    animate();
  }, [pointer]);

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
          boxShadow:
            "0 0 20px rgba(231,111,81,0.4), 0 0 40px rgba(231,111,81,0.2)",
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
