import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlicer";
import Modal from "../components/Modal";
import { Outlet, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

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
          {cartItems.length < 1 ? "" : <Outlet />}
        </AnimatePresence>
      </Modal>
    </>
  );
}
