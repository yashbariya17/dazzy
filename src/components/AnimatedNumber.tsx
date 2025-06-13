import { motion, useSpring, useTransform } from "framer-motion";

type Props = {
  value: number;
};

const AnimatedNumber = ({ value }: Props) => {
  let spring = useSpring(0, { mass: 1.2, stiffness: 15, damping: 10 });
  let display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );
  return (
    <motion.span
      onViewportEnter={() => {
        spring.set(value);
      }}
      viewport={{
        once: true,
        amount: "all",
        margin:'0px 0px -25% 0px'
      }}
    >
      {display}
    </motion.span>
  );
};

export default AnimatedNumber;
