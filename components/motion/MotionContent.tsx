"use client";
import { useInView, motion } from "framer-motion";
import { useRef, useEffect, useState, ReactNode } from "react";

// Define the props type for the MotionContent component
interface MotionContentProps {
  children: ReactNode;
  delayBeforeAnimation?: number;
}

const MotionContent: React.FC<MotionContentProps> = ({
  children,
  delayBeforeAnimation = -1,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.8 });
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (isInView) {
      setIsVisible(true); // Content becomes visible
      setTimeout(() => {
        setIsAnimated(true); // Trigger animation after delay
      }, delayBeforeAnimation * 1000); // Convert delay to milliseconds
    }
  }, [isInView, delayBeforeAnimation]);

  return (
    <motion.div
      ref={ref}
      style={{ visibility: isVisible ? "visible" : "hidden" }} // Control initial visibility
      initial={{ y: "50%" }}
      animate={isAnimated ? { y: 0 } : {}}
      transition={{ delay: 0, duration: 0.8 }} // Avoid delay in transition itself
    >
      {children}
    </motion.div>
  );
};

export default MotionContent;
