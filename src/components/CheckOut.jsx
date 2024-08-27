import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlicer";
import { AnimatePresence, motion } from "framer-motion";
import Input from "./Input";

import { useNavigate, useSubmit } from "react-router-dom";
import { priceFormatter } from "../util/priceFormat";

export default function CheckOut() {
  const dispatch = useDispatch();
  const submit = useSubmit();
  const cartItems = useSelector((state) => state.cartSlicer.cart);
  const isCheckoutVisible = useSelector((state) => state.cartSlicer.isCheckout);
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

    const fd = new FormData(e.target);
    const fdParsed = Object.fromEntries(fd.entries());

    console.log(fdParsed);
  }

  return (
    <AnimatePresence>
      {isCheckoutVisible && (
        <motion.div
          exit={{ x: [0, 30], opacity: [1, 0], transition: { duration: 0.2 } }}
          className="flex flex-col justify-center mt-4 rounded-lg"
        >
          <motion.form
            onSubmit={handleSubmit}
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
            <div className="relative flex flex-col justify-between top-2">
              <div className="flex justify-between font-bold border-b-2 border-stone-500 text-stone-950">
                <h1>Total Price - </h1>
                <h1>{priceFormatter(totalPrice)}</h1>
              </div>
              <motion.button className="w-full py-1 mt-1 transition-colors rounded-lg hover:text-stone-950 text-stone-100 hover:bg-stone-500 bg-stone-950">
                Place Order
              </motion.button>
            </div>
          </motion.form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
