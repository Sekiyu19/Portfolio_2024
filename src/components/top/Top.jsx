import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion"
import "./top.scss"

const firstVariants = {
  initial: {
    x: "-60vw",
    y: "10vh",
  },
  animate: {
    x: "100%",
    transition: {
     duration: 0.5,
    },
  },
};

const lastVariants = {
  initial: {
    x: "100vw",
    y: "10vh",
  },
  animate: {
    x: "-30%",
    transition: {
     duration: 0.5,
    },
  },
};

// const container = {
//   initial: { opacity: 1 },
//   animate: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 1,
//       delayChildren: 1,
//     },
//   },
// }
  
const itemVariants = {
  initial: {
    y: "-10vh",
    opacity: 0,
  },
  animate: {
    y: "0vh",
    opacity: 1,
    delay: 1,
    transition: { delay: 1 },
  },
}

// const items = ["P", "　", "R", "　", "O", "　", "F", "　", "I", "　", "L", "　", "E", "　　", "S", "　", "I", "　", "T", "　", "E", "　", "."];

const Top = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const xFirstBg = useTransform(scrollYProgress, [0, 1], ["100%", "-60%"]);
  const xLastBg = useTransform(scrollYProgress, [0, 1], ["-30%", "100%"]);
  const color = useTransform(scrollYProgress, [0, 1], ['#9DC3C1', '#D8E6E7']);
  const itemBg = useTransform(scrollYProgress, [0, 1], ["-30%", "100%"]);
  const itemScale = useTransform(scrollYProgress, [0, 1], ["1", "2"]);
  const itemColor = useTransform(scrollYProgress, [0, 1], ['#6E7783', '#D8E6E7']);

  return (
    <div className='top'>
      <div className="name">
        <motion.div ref={ref} style={{ x: xFirstBg, color: color }} variants={firstVariants} initial="initial" animate="animate">
          Yuto
        </motion.div>
        <motion.div ref={ref} style={{ x: xLastBg, color: color }} variants={lastVariants} initial="initial" animate="animate">
          Sekiguchi
        </motion.div>
      </div>
      {/* <motion.div className="topItem" variants={container} initial="initial" animate="animate">
        {items.map(item => (
          <motion.div style={{ scale: itemScale, color: itemColor }} variants={itemVariants} initial="initial" animate="animate">
            {item}
          </motion.div>
        ))}
      </motion.div> */}
      <motion.div style={{ scale: itemScale, color: itemColor }} className="topItem" variants={itemVariants} initial="initial" animate="animate">
      {/* P　R　O　F　I　L　E　　S　I　T　E　. */}
      P　O　R　T　F　O　L　I　O　　S　I　T　E　.
      </motion.div>
    </div>
  )
}

export default Top