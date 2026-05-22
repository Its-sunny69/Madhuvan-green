import { motion, useMotionValue } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { createNoise2D } from "simplex-noise";

const getRandomColor = () => {
  const r = Math.floor(Math.random() * 106 + 150); // 150-255
  const g = Math.floor(Math.random() * 106 + 150); // 150-255
  const b = Math.floor(Math.random() * 106 + 150); // 150-255
  
  return {
    bg: `rgba(${r}, ${g}, ${b}, 1)`,
    shadow: `rgba(${r}, ${g}, ${b}, 0.7)`,
  };
};

interface Firefly {
  id: number;
  color: { bg: string; shadow: string };
  scale: number;
  speed: number;
  offsetX: number;
  offsetY: number;
}

export default function FireflyBackground() {
  const [mounted, setMounted] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: 1000,
    height: 1000,
  });
  const [fireflies, setFireflies] = useState<Firefly[]>([]);

  useEffect(() => {
    setMounted(true);
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    
    // Generate fireflies on client side only
    setFireflies(
      [...Array(30)].map((_, i) => ({
        id: i,
        color: getRandomColor(),
        scale: Math.random() * 0.7 + 0.3,
        speed: Math.random() * 0.15 + 0.05, // 0.05 to 0.2 speed multiplier (slower)
        offsetX: Math.random() * 1000,
        offsetY: Math.random() * 1000,
      }))
    );

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) {
    return <div className="absolute inset-0 pointer-events-none overflow-hidden bg-transparent" />;
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden bg-transparent">
      {fireflies.map((firefly) => (
        <FireflyDot
          key={firefly.id}
          firefly={firefly}
          windowWidth={windowSize.width}
          windowHeight={windowSize.height}
        />
      ))}
    </div>
  );
}

function FireflyDot({
  firefly,
  windowWidth,
  windowHeight,
}: {
  firefly: Firefly;
  windowWidth: number;
  windowHeight: number;
}) {
  const noise2D = useMemo(() => createNoise2D(), []);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [opacity, setOpacity] = useState(0.5);

  useEffect(() => {
    let animationFrameId: number;
    const startTime = Date.now();

    const animate = () => {
      const currentTime = (Date.now() - startTime) * 0.0001 * firefly.speed;
      
      // Use noise to generate smooth x and y positions
      const noiseX = noise2D(currentTime + firefly.offsetX, 0);
      const noiseY = noise2D(currentTime + firefly.offsetY, 100);
      
      // Allow movement area 20% beyond window boundaries
      const padding = 0.2;
      const extendedWidth = windowWidth * (1 + padding * 2);
      const extendedHeight = windowHeight * (1 + padding * 2);
      const offsetX = -windowWidth * padding;
      const offsetY = -windowHeight * padding;
      
      // Map noise values (-1 to 1) to screen coordinates
      x.set((noiseX * 0.5 + 0.5) * extendedWidth + offsetX);
      y.set((noiseY * 0.5 + 0.5) * extendedHeight + offsetY);
      
      // Use noise for opacity variation too
      const opacityNoise = noise2D(currentTime + firefly.offsetX + 500, 200);
      setOpacity((opacityNoise * 0.5 + 0.5)); // 0 to 1.0
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [windowWidth, windowHeight, firefly, noise2D, x, y]);

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        x,
        y,
        width: 5 * firefly.scale,
        height: 5 * firefly.scale,
        backgroundColor: firefly.color.bg,
        boxShadow: `0 0 ${12 * firefly.scale}px ${4 * firefly.scale}px ${firefly.color.shadow}`,
        opacity,
      }}
    />
  );
}