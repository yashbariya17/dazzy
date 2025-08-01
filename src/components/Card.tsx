import { motion, useSpring } from "framer-motion";
import { useRef } from "react";

type Props = {
  member: {
    name: string;
    role: string;
    image: string;
    borderColor: string;
  };
  maxAngle?: number;
};

export default function TeamMemberCard({ member, maxAngle = 20 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const rotateX = useSpring(0, { stiffness: 160, damping: 18 });
  const rotateY = useSpring(0, { stiffness: 160, damping: 18 });
  const rotateZ = useSpring(0, { stiffness: 160, damping: 18 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;

    const { left, top, width, height } = el.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const nx = x / width - 0.5;
    const ny = 0.5 - y / height;

    rotateY.set(nx * maxAngle);
    rotateX.set(ny * maxAngle);
    rotateZ.set(nx * -maxAngle * 0.4);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
    rotateZ.set(0);
  };

  return (
    <motion.div
      ref={ref}
      // onMouseMove={handleMove}
      // onMouseLeave={reset}
      // style={{
      //   rotateX,
      //   rotateY,
      //   rotateZ,
      //   perspective: 1000,
      //   transformStyle: "preserve-3d",
      // }}
      className="bg-white rounded-t-[140px] shadow-lg pt-10 pb-6 px-4 relative flex flex-col items-center"
    >
      <img
        src={`/images/${member.image}`}
        alt={member.name}
        className={`w-[180px] h-[180px] object-cover rounded-t-[100px] ${member.borderColor} border-[6px]`}
      />
      <div className="absolute top-[210px] left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shadow-md border-4 border-white">
          <svg
            className="w-4 h-4 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.88L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.11C16.5 7.63 17.22 7.97 18 7.97C19.66 7.97 21 6.63 21 4.97C21 3.31 19.66 1.97 18 1.97C16.34 1.97 15 3.31 15 4.97C15 5.21 15.04 5.44 15.09 5.67L8.04 9.86C7.5 9.34 6.78 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.78 15 7.5 14.66 8.04 14.14L15.16 18.32C15.11 18.54 15.08 18.77 15.08 19C15.08 20.66 16.42 22 18.08 22C19.74 22 21.08 20.66 21.08 19C21.08 17.34 19.74 16 18.08 16Z" />
          </svg>
        </div>
      </div>
      <div className="mt-14 text-center">
        <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
        <p className="text-sm text-gray-500">{member.role}</p>
      </div>
    </motion.div>
  );
}
