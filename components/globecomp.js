import Globe from "@/components/globe";
import { motion, AnimatePresence } from "framer-motion";
export default function GlobeComp() {
  return (
    <div className="flex justify-center items-center flex-row min-h-screen bg-black">
      <AnimatePresence>
        <motion.div
          key="globe"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
          className="h-96 w-96 md:h-[35rem] md:w-[35rem] rounded-full"
        >
          <Globe scale={1} markerArray={[]} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
