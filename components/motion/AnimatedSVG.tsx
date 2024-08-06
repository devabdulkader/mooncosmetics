"use client"; // This allows you to use hooks like useInView

import { useInView, motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedSVG() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.8 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isInView) {
      setIsVisible(true); // Content becomes visible when in view
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }} // Initial state
      animate={isVisible ? { opacity: 1 } : {}} // Animate opacity to 1 when in view
      transition={{ duration: 0.5 }} // Adjust duration as needed
      className="w-full flex justify-center items-center relative -top-10"
    >
      {isVisible && (
        <svg
          width="280"
          height="50"
          viewBox="0 0 300 50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 0,45 Q 140,40 400,50" // Adjusted control point to create a more pronounced curve
            stroke="red"
            strokeWidth="1" // Increased thickness for better visibility
            fill="transparent"
            className="stroke-red-500  fill-transparent path animate-draw"
          />

          <path
            d="M 300,50 Q 150,50 0,50" // Adjusted control point to create a downward curve
            stroke="red"
            strokeWidth="1" // Increased thickness for better visibility
            fill="transparent"
            className="stroke-red-500 fill-transparent path animate-draw"
          />
        </svg>
      )}
    </motion.div>
  );
}

export default AnimatedSVG;
