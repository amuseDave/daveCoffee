import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlicer";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Input from "./Input";

export default function CheckOut() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartSlicer.cart);
  const navigate = useNavigate();
  function handleNavigate() {
    dispatch(cartActions.setCartHide());
    setTimeout(() => {
      navigate("/products");
    }, 100);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="flex flex-col justify-center mt-4 rounded-lg">
      <h1 className="absolute top-2 left-1/2 translate-x-[-50%] text-2xl font-bold text-stone-100">
        Checkout
      </h1>
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
        <motion.button
          onClick={handleSubmit}
          type="submit"
          className="w-full py-2 mt-4 transition-colors rounded-lg hover:text-stone-950 text-stone-100 hover:bg-stone-500 bg-stone-950"
        >
          Place Order
        </motion.button>
      </motion.form>
    </div>
  );
}
