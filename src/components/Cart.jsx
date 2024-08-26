import Modal from "./Modal";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
export default function Cart() {
  const cartItems = useSelector((state) => state.cartSlicer.cart);
  return (
    <Modal>
      <input type="text" placeholder="DISCOUNT-CODE" className="uppercase" />
    </Modal>
  );
}
