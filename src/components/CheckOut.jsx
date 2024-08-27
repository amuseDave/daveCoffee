import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlicer";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
  return (
    <>
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
        <h1 className="text-stone-100">This is the checkout</h1>
      )}
    </>
  );
}
