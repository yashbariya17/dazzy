import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef } from "react";

export const TextAnimation = ({ text }: { text: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });
  return (
    <div className="flex justify-center">
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <motion.p
            ref={ref}
            key={i}
            initial={{ opacity: 0, x: -18 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            exit="hidden"
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-[#eb0029] text-6xl font-semibold"
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </motion.p>
        ))}
      </AnimatePresence>
    </div>
  );
};
