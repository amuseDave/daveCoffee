import Modal from "./Modal";

import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlicer";
import CartItem from "./CartItem";
import ProgressBar from "./ProgressBar";
import { priceFormatter } from "../util/priceFormat";
import { useState } from "react";
export default function Cart() {
  const cartItems = useSelector((state) => state.cartSlicer.cart);
  const navigate = useNavigate();
  const [isCheckout, setIsCheckout] = useState(false);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (acc, item) => item.totalPriceCents + acc,
    0
  );

  const isDiscount = totalPrice >= 9999;
  function handleNavigate() {
    dispatch(cartActions.setCartHide());
    setTimeout(() => {
      navigate("/products");
    }, 100);
  }

  function handleCheckoutNavigate() {
    setIsCheckout(true);
    setTimeout(() => {
      navigate("checkout");
    }, 100);
  }

  return (
    <AnimatePresence>
      {!isCheckout && (
        <motion.div
          className={`flex flex-col ${
            cartItems.length < 1 ? "justify-center" : "justify-between"
          } h-full`}
          exit={{ opacity: 0, transition: { duration: 0.1 } }}
        >
          <AnimatePresence mode="wait">
            {cartItems.length < 1 ? (
              <motion.div animate={{ opacity: [0, 1] }}>
                <p className="text-stone-200">Your Cart Is Empty!</p>
                <button
                  onClick={handleNavigate}
                  className="absolute bottom-6 left-1/2 translate-x-[-50%] bg-stone-300 px-5 py-1 rounded-lg hover:bg-stone-400 hover:text-stone-100 transition-colors"
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
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0, 1] }}
                  transition={{ duration: 0.5 }}
                  key="checkout-bttns"
                  className="flex flex-col items-center justify-center gap-y-2"
                >
                  <div className="flex items-center justify-between w-full">
                    <h1 className="self-start text-xl text-stone-950">
                      Total Price:
                    </h1>
                    <div className="flex items-center justify-center ">
                      <motion.span
                        layout
                        animate={{ opacity: [0, 1] }}
                        className={`${
                          isDiscount ? "line-through" : ""
                        } w-[73px] flex justify-end`}
                      >
                        {priceFormatter(totalPrice)}
                      </motion.span>
                      {isDiscount ? (
                        <motion.h1
                          className="w-[73px] flex justify-end"
                          animate={{ opacity: [0, 1] }}
                        >
                          {priceFormatter(totalPrice / 1.15)}{" "}
                        </motion.h1>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <button
                    onClick={handleCheckoutNavigate}
                    className="w-full px-5 transition-colors rounded-lg bg-stone-400 hover:bg-stone-200"
                  >
                    Checkout
                  </button>

                  <ProgressBar position="cart" />
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
