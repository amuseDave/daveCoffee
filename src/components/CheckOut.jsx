import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlicer";
import { AnimatePresence, motion } from "framer-motion";
import Input from "./Input";
import { useState } from "react";
import { useNavigate, useSubmit } from "react-router-dom";
import { priceFormatter } from "../util/priceFormat";
import backImg from "../assets/arrow-left-solid.svg";

export default function CheckOut() {
  const [isVisible, setIsVisible] = useState(true);
  const dispatch = useDispatch();
  const submit = useSubmit();
  const cartItems = useSelector((state) => state.cartSlicer.cart);
  const navigate = useNavigate();
  function handleNavigate() {
    dispatch(cartActions.setCartHide());
    setTimeout(() => {
      navigate("/products");
    }, 100);
  }

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.totalPriceCents,
    0
  );

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleBackToCart() {
    setIsVisible(false);
    setTimeout(() => {
      navigate("..");
    }, 200);
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          exit={{ x: [0, 30], opacity: [1, 0], transition: { duration: 0.2 } }}
          className="flex flex-col justify-center mt-4 rounded-lg"
        >
          <h1 className="absolute top-2 left-1/2 translate-x-[-50%] text-2xl font-bold text-stone-100">
            Checkout
          </h1>
          <div
            onClick={handleBackToCart}
            className="absolute w-6 cursor-pointer top-2 left-2 opacity-90"
          >
            <img src={backImg} />
          </div>

          <motion.form
            animate="animate"
            transition={{ staggerChildren: 0.05 }}
            className="space-y-2"
          >
            <Input
              id="tel"
              type="number"
              label="Your Number"
              placeholder="123-456-7890"
            />
            <Input
              id="email"
              type="email"
              label="E-Mail Address"
              placeholder="you@example.com"
            />
            <Input id="city" type="text" label="City" placeholder="Your City" />
            <Input
              id="address"
              type="text"
              label="Address"
              placeholder="Your Address"
            />
            <div className="flex flex-col justify-between">
              <div className="flex justify-between font-bold border-b-2 border-stone-500 text-stone-950">
                <h1>Total Price - </h1>
                <h1>{priceFormatter(totalPrice)}</h1>
              </div>
              <motion.button
                onClick={handleSubmit}
                className="w-full py-1 mt-1 transition-colors rounded-lg hover:text-stone-950 text-stone-100 hover:bg-stone-500 bg-stone-950"
              >
                Place Order
              </motion.button>
            </div>
          </motion.form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
