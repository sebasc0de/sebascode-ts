import { Modal } from "./Modal";
import { ModalStore } from "./store";
import { motion, AnimatePresence } from "framer-motion";

export const Container = () => {
  const { isOpen } = ModalStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0 }}
          className="bg-black/20 z-40 w-full h-screen fixed top-0 left-0"
        >
          <Modal />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
