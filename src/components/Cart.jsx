import Modal from "./Modal";
import { motion, AnimatePresence } from "framer-motion";
export default function Cart() {
  return (
    <>
      <Modal>
        <input type="text" placeholder="DISCOUNT-CODE" className="uppercase" />
      </Modal>
    </>
  );
}
