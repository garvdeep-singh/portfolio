import { useRef } from "react";

interface MagnifierProps {
  zoom?: number;       // Zoom level (default 2)
  size?: number;       // Diameter of magnifier in px (default 150)
  children: React.ReactNode;
}

const Magnifier: React.FC<MagnifierProps> = ({
  zoom = 2,
  size = 150,
  children,
}) => {
  const magRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const magnifier = magRef.current;
    const container = containerRef.current;
    if (!magnifier || !container) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    magnifier.style.left = `${e.clientX}px`;
    magnifier.style.top = `${e.clientY}px`;
    magnifier.style.backgroundPosition = `-${x * zoom - size / 2}px -${y * zoom - size / 2}px`;
  };

  const handleMouseLeave = () => {
    if (magRef.current) magRef.current.style.display = "none";
  };

  const handleMouseEnter = () => {
    if (magRef.current) magRef.current.style.display = "block";
  };

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      {children}

      <div
        ref={magRef}
        className="pointer-events-none rounded-full border-2 border-red-600 absolute"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          position: "fixed",
          display: "none",
          background: `url('') no-repeat`, // Will be set dynamically
          backgroundSize: `${100 * zoom}% ${100 * zoom}%`,
          transform: "translate(-50%, -50%)",
          zIndex: 50,
        }}
      />
    </div>
  );
};

export default Magnifier;