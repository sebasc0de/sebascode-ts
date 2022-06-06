import { motion } from "framer-motion";

export const Modal = () => {
  return (
    <motion.div
      initial={{ x: 100 }}
      animate={{ x: 0, transition: { duration: 1 } }}
      exit={{ x: 1000, transition: { duration: 1, delay: 0.2 } }}
      className="fixed z-50 top-0 right-0 bg-white shadow-xl shadow-black/30 h-screen w-96"
    >
      a
    </motion.div>
  );
};
