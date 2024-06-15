import { motion } from "framer-motion"

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      // y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      // y: { stiffness: 1000, velocity: -100 },
    },
  },
};

// const items = ["Profile", "History", "Skill", "Job", "Product"];
const items = ["Profile", "History", "Skill", "Job"];

const Links = () => {
  return (
    <motion.div className="links" variants={variants}>
      {items.map(item => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  )
}

export default Links