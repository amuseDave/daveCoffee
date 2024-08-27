import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlicer";
import Modal from "../components/Modal";
import { Outlet, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export default function CartPage() {
  const isVisible = useSelector((state) => state.cartSlicer.isVisible);
  const cartItems = useSelector((state) => state.cartSlicer.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleNavigate() {
    dispatch(cartActions.setCartHide());
    setTimeout(() => {
      navigate("/products");
    }, 100);
  }

  return (
    <>
      <Modal isVisible={isVisible}>
        <h1
          onClick={handleNavigate}
          className="absolute text-xl font-bold cursor-pointer select-none top-2 right-2 opacity-80 text-stone-100"
        >
          X
        </h1>
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
            <Outlet />
          )}
        </AnimatePresence>
      </Modal>
    </>
  );
}
