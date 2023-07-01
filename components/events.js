import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
export default function EventComponent() {
  const slide=useRef(0);
  
  const slides=["/reet.jpeg", "/parag.jpeg", "/zubair.jpg"];
  const [currentSlide, setCurrentSlide]=useState(slides[slide.current])
  useEffect(() => {
    console.log("yes");
    const interval=setInterval(() => {
      console.log("slide change");
      if(slide.current>=slides.length-1) {
        slide.current=0
      } else {
        slide.current+=1
      }
      setCurrentSlide(slides[slide.current])
      console.log(`slide: ${slide.current}`);
    }, 2000);
    return () => {
        window.clearInterval(interval);
    }; 
  }, []);

  return (
    <>
      <div className="flex justify-center items-center grow">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.img
            className="w-64 h-64"
            key={currentSlide}
            src={currentSlide}
            initial={{ x: 600, y: -500, opacity: 0.5 }}
            animate={{ x: 0, y: 0, opacity: 1, transition:{duration:1} }}
            exit={{ x: -600, y: 500, opacity: 0, transition:{duration:1} }}
          />
        </AnimatePresence>
      </div>
    </>
  );
}
