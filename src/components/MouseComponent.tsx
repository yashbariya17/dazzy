import { useEffect, useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type SpringOptions,
} from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const MouseComponent = ({ children, className = "" }: Props) => {
  const { ref, x, y } = useMousePositionRef();
  const [state, setState] = useState(0);

  const handleMoseEnter = () => {
    setState(1);
  };

  const handleMoseLeave = () => {
    setState(0);
  };

  return (
    <div
      className={`relative z-15 *:cursor-none w-fit isolate ${className}`}
      ref={ref}
      onMouseEnter={handleMoseEnter}
      onMouseLeave={handleMoseLeave}
    >
      <motion.div
        className="absolute bg-[rgba(0,0,0,0.25))] -inset-3 rounded-md -z-10"
        animate={{
          scale: state,
        }}
        style={{
          x,
          y,
        }}
      />
      {children}
    </div>
  );
};

export default MouseComponent;

const useMousePositionRef = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [state, setState] = useState({
    height: 0,
    width: 0,
  });

  const xMotion = useMotionValue(0);
  const yMotion = useMotionValue(0);

  const springOption: SpringOptions = {
    stiffness: 70,
    damping: 10,
  };

  const springX = useSpring(xMotion, springOption);

  const springY = useSpring(yMotion, springOption);

  const x = useTransform(
    springX,
    [0, state.width],
    [(state.width * -8) / 100, (state.width * 8) / 100]
  );

  const y = useTransform(
    springY,
    [0, state.height],
    [(state.height * -10) / 100, (state.height * 10) / 100]
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      setState({
        height: ref.current.clientHeight,
        width: ref.current.clientWidth,
      });
      const rect = ref.current.getBoundingClientRect();
      xMotion.set(e.clientX - rect.left);
      yMotion.set(e.clientY - rect.top);
    };

    const node = ref.current;
    if (node) {
      node.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (node) {
        node.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return { ref, x, y };
};
