import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
  PanInfo,
} from "framer-motion";
import "./RollingGallery.css";

interface ImageData {
  url: string;
  caption: string;
}

const IMGS: ImageData[] = [
  { url: "/1000036813.JPG", caption: "Public Speaker" },
  { url: "/1000039727.JPG", caption: "Ball boy Volunteer" },
  { url: "/DSC_0208.jpg", caption: "Hackathon winer" },
  { url: "/IMG_5871.jpg", caption: "Content creator" },
  { url: "/IMG_6573.jpg", caption: "Hot dog conoseur" },
  { url: "/IMG_6905.jpg", caption: "Marathoner" },
];

interface RollingGalleryProps {
  autoplay?: boolean;
  pauseOnHover?: boolean;
  images?: ImageData[];
}

const RollingGallery: React.FC<RollingGalleryProps> = ({
  autoplay = false,
  pauseOnHover = false,
  images = [],
}) => {
  // Use default images if none are provided
  images = IMGS;
  const [isScreenSizeSm, setIsScreenSizeSm] = useState<boolean>(
    window.innerWidth <= 640
  );

  // 3D geometry calculations
  const cylinderWidth: number = isScreenSizeSm ? 1100 : 1800;
  const faceCount: number = images.length;
  const faceWidth: number = (cylinderWidth / faceCount) * 1.5;
  const dragFactor: number = 0.05;
  const radius: number = 300;

  // Framer Motion values and controls
  const rotation = useMotionValue(1);
  const controls = useAnimation();
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleDrag = (_: any, info: PanInfo): void => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_: any, info: PanInfo): void => {
    const newRotation = rotation.get() + info.velocity.x * dragFactor;
    controls.start({
      rotateY: newRotation,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20,
        mass: 0.1,
        ease: "easeOut",
      },
    });
    rotation.set(newRotation);
  };

  // Create a 3D transform based on the rotation motion value
  const transform = useTransform(rotation, (value: number) => {
    return `rotate3d(0, 1, 0, ${value}deg)`;
  });

  // Autoplay effect with adjusted timing
  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        controls.start({
          rotateY: rotation.get() - 360 / faceCount,
          transition: { duration: 2, ease: "easeOut" },
        });
        rotation.set(rotation.get() - 360 / faceCount);
      }, 3000);

      return () => {
        if (autoplayRef.current) clearInterval(autoplayRef.current);
      };
    }
  }, [autoplay, rotation, controls, faceCount]);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSizeSm(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Pause on hover with smooth transition
  const handleMouseEnter = (): void => {
    if (autoplay && pauseOnHover) {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      controls.stop();
    }
  };

  const handleMouseLeave = (): void => {
    if (autoplay && pauseOnHover) {
      controls.start({
        rotateY: rotation.get() - 360 / faceCount,
        transition: { duration: 2, ease: "easeOut" },
      });
      rotation.set(rotation.get() - 360 / faceCount);

      autoplayRef.current = setInterval(() => {
        controls.start({
          rotateY: rotation.get() - 360 / faceCount,
          transition: { duration: 2, ease: "easeOut" },
        });
        rotation.set(rotation.get() - 360 / faceCount);
      }, 2000);
    }
  };

  return (
    <div className="gallery-container">
      <div className="gallery-gradient gallery-gradient-left"></div>
      <div className="gallery-gradient gallery-gradient-right"></div>
      <div className="gallery-content">
        <motion.div
          drag="x"
          className="gallery-track"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          animate={controls}
        >
          {images.map((image, i) => (
            <div
              key={i}
              className="gallery-item"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${(360 / faceCount) * i}deg) translateZ(${radius}px)`,
              }}
            >
              <img src={image.url} alt="gallery" className="gallery-img" />
              <div className="gallery-caption">{image.caption}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;
