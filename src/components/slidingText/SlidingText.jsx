import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion"
import "./slidingText.scss"

const slidingVariants = {
  initial: {
    x: "100vw",
  },
  animate: {
    x: "calc(100vw - 100% - 50px)",
    transition: {
      duration: 1,
    },
  },
};

const SlidingText = ({text}) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "190%"]);
  const color = useTransform(scrollYProgress, [0, 1], ['#9DC3C1', '#D8E6E7']);

  return (
    <div >
      <motion.div ref={ref} style={{ y: yBg, color: color }} className="slidingTextContainer" variants={slidingVariants} initial="initial" animate="animate">
        {text}
      </motion.div>
    </div>
  )
}

export default SlidingText