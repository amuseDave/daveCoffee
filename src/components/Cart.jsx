import Modal from "./Modal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import ProgressBar from "./ProgressBar";
export default function Cart() {
  const [isVisible, setIsVisible] = useState(true);
  const cartItems = useSelector((state) => state.cartSlicer.cart);
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (acc, item) => item.totalPriceCents + acc,
    0
  );
  function handleNavigate() {
    setIsVisible(false);
    setTimeout(() => {
      navigate("/products");
    }, 100); // Delay matches the exit animation duration
  }

  return (
    <Modal isVisible={isVisible}>
      <AnimatePresence mode="wait">
        {cartItems.length < 1 ? (
          <motion.div animate={{ opacity: [0, 1] }}>
            <p>Your Cart Is Empty!</p>
            <button
              onClick={handleNavigate}
              className="absolute bottom-6 left-1/2 translate-x-[-50%] bg-stone-300 px-5 py-1 rounded-lg"
            >
              Okay
            </button>
          </motion.div>
        ) : (
          <>
            <motion.ul
              animate="animation"
              transition={{ staggerChildren: 0.08 }}
              key="item-list"
            >
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </motion.ul>
            <motion.div
              key="checkout-bttns"
              className="flex flex-col items-center justify-center gap-y-2"
            >
              <button className="w-full px-5 transition-colors rounded-lg bg-stone-400 hover:bg-stone-200">
                Check Out
              </button>
              <ProgressBar position="cart" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Modal>
  );
}
