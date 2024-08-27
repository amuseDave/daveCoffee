import Modal from "./Modal";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import ProgressBar from "./ProgressBar";
export default function Cart() {
  const cartItems = useSelector((state) => state.cartSlicer.cart);

  console.log(cartItems);

  return (
    <Modal>
      <ul>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>

      <ProgressBar position="cart" />
      <input type="text" placeholder="DISCOUNT-CODE" className="uppercase" />
    </Modal>
  );
}
