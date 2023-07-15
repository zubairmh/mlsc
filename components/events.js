import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
export default function EventComponent() {
  const slide = useRef(0);
  const [slidePaused, setSlidePaused] = useState(false);
  const slides = ["/WARZONE.png", "/ASTELLAR.png"];
  const [currentSlide, setCurrentSlide] = useState(slides[slide.current]);
  useEffect(() => {
    console.log("yes");
    let interval = setInterval(() => {
      if (!slidePaused) {
        console.log("slide change");
        if (slide.current >= slides.length - 1) {
          slide.current = 0;
        } else {
          slide.current += 1;
        }
        setCurrentSlide(slides[slide.current]);
        console.log(`slide: ${slide.current}`);
      } else {
        console.log("Slide Paused");
      }
    }, 5000);
    return () => {
      console.log("Interval Cleared");
      window.clearInterval(interval);
    };
  }, [slidePaused]);

  return (
    <>
      <div className="flex justify-center items-center grow">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.img
            className="w-full sm:w-5/6"
            onMouseEnter={() => {
              console.log("Slide pausing...");
              setSlidePaused(true);
            }}
            onMouseLeave={() => {
              console.log("Slide unpausing...");
              setSlidePaused(false);
            }}
            onTouchStart={() => {
              console.log("Slide pausing...");
              setSlidePaused(true);
            }}
            onTouchLeave={() => {
              console.log("Slide unpausing...");
              setSlidePaused(false);
            }}
            key={currentSlide}
            src={currentSlide}
            initial={{ x: 1200, y: 0, opacity: 0.5, scale:0.8 }}
            animate={{ x: 0, y: 0, opacity: 1, scale:1, transition: { duration: 1 } }}
            exit={{ x: -1200, y: 0, opacity: 0, scale:0.8, transition: { duration: 1 } }}
          />
        </AnimatePresence>
      </div>
    </>
  );
}
