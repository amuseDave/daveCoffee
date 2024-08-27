import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlicer";
import Modal from "../components/Modal";
import { Outlet, useNavigate, useNavigation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import backImg from "../assets/arrow-left-solid.svg";

export default function CartPage() {
  const isVisible = useSelector((state) => state.cartSlicer.isVisible);
  const cartItems = useSelector((state) => state.cartSlicer.cart);
  const isSuccess = useSelector((state) => state.cartSlicer.isSuccess);
  const isCheckoutVisible = useSelector((state) => state.cartSlicer.isCheckout);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navigation = useNavigation();

  function handleNavigate() {
    if (navigation.state === "submitting") return;
    if (isSuccess) {
      dispatch(cartActions.resetCart());
      dispatch(cartActions.setSuccessFalse());
    }
    dispatch(cartActions.setCheckoutHide());
    dispatch(cartActions.setCartHide());
    setTimeout(() => {
      navigate("/products");
    }, 100);
  }

  function handleBackToCart() {
    if (navigation.state === "submitting") return;
    dispatch(cartActions.setCheckoutHide());
    setTimeout(() => {
      navigate("/products/cart");
    }, 200);
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
        {isCheckoutVisible && !isSuccess && (
          <div
            onClick={handleBackToCart}
            className="absolute w-6 cursor-pointer top-2 left-2 opacity-90"
          >
            <img src={backImg} />
          </div>
        )}
        <h1 className="absolute top-2 left-1/2 translate-x-[-50%] text-2xl font-bold text-stone-100">
          {isCheckoutVisible ? "Checkout" : "Cart"}
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
