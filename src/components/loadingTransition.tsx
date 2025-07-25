import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import { useLoading } from "../LoadingContext";
import logo from "/Logo.png";
// Adjust path if needed

const LoadingTransition: React.FC = () => {
  const { isLoading, isClosing, stopLoading } = useLoading();
  const location = useLocation();

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        stopLoading();
      }, 1000); // Adjust delay for page load

      return () => clearTimeout(timer);
    }
  }, [location.pathname, isLoading, stopLoading]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Top Hatch - Second Layer (25% to 50%) */}
      <motion.div
        animate={{ y: isClosing ? 0 : "-200%" }}
        className="absolute top-1/4 left-0 w-full h-1/4 bg-gradient-to-b from-[#1e3a8a] to-[#2a5098] border-b-2 border-white shadow-[inset_0_4px_8px_rgba(255,255,255,0.3)] overflow-hidden"
        initial={{ y: "-200%" }}
        transition={{
          duration: 0.3,
          ease: [0.33, 1, 0.68, 1],
          delay: isClosing ? 0.3 : 0,
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-around">
          <div className="h-px bg-white opacity-40" />
        </div>
        <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-white shadow-inner" />
        <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white shadow-inner" />
      </motion.div>
      {/* Top Hatch - First Layer (25%) */}
      <motion.div
        animate={{ y: isClosing ? 0 : "-100%" }}
        className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-[#1e3a8a] to-[#2a5098] border-b-2 border-white shadow-[inset_0_4px_8px_rgba(255,255,255,0.3)] overflow-hidden"
        initial={{ y: "-100%" }}
        transition={{
          duration: 0.3,
          ease: [0.33, 1, 0.68, 1],
          delay: isClosing ? 0 : 0.3,
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-around">
          <div className="h-px bg-white opacity-40" />
        </div>
        <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-white shadow-inner" />
        <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white shadow-inner" />
      </motion.div>
      {/* Bottom Hatch - Second Layer (25% to 50%) */}
      <motion.div
        animate={{ y: isClosing ? 0 : "200%" }}
        className="absolute bottom-1/4 left-0 w-full h-1/4 bg-gradient-to-t from-[#1e3a8a] to-[#2a5098] border-t-2 border-white shadow-[inset_0_-4px_8px_rgba(255,255,255,0.3)] overflow-hidden"
        initial={{ y: "200%" }}
        transition={{
          duration: 0.3,
          ease: [0.33, 1, 0.68, 1],
          delay: isClosing ? 0.3 : 0,
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-around">
          <div className="h-px bg-white opacity-40" />
        </div>
        <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-white shadow-inner" />
        <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-white shadow-inner" />
      </motion.div>
      {/* Bottom Hatch - First Layer (25%) */}
      <motion.div
        animate={{ y: isClosing ? 0 : "100%" }}
        className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-[#1e3a8a] to-[#2a5098] border-t-2 border-white shadow-[inset_0_-4px_8px_rgba(255,255,255,0.3)] overflow-hidden"
        initial={{ y: "100%" }}
        transition={{
          duration: 0.3,
          ease: [0.33, 1, 0.68, 1],
          delay: isClosing ? 0 : 0.3,
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-around">
          <div className="h-px bg-white opacity-40" />
        </div>
        <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-white shadow-inner" />
        <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-white shadow-inner" />
      </motion.div>
      <motion.img
        src={logo}
        alt="Mansi Shipping Agency Logo"
        className="w-40 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isClosing ? 1 : 0, scale: isClosing ? 1 : 0.8 }}
        transition={{ duration: 0.3, delay: isClosing ? 0.2 : 0 }}
      />
    </div>
  );
};

export default LoadingTransition;
