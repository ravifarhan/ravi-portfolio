import { motion } from "framer-motion";

//variants
const stairsAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

//calculates the delay for each step of the stairs
const reverseIndex = (index) => {
  const totalStep = 6;
  return totalStep - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* render 6 motion div */}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairsAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="h-full w-full bg-white relative"
        />
      ))}
    </>
  );
};

export default Stairs;
