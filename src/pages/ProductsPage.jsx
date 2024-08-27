import cartLogo from "../assets/cart.png";
import { Outlet, Link, useNavigate } from "react-router-dom";
import Products from "../components/Products";
import { motion, useAnimate } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlicer";

import { useEffect } from "react";
import ProgressBar from "../components/ProgressBar";
let initial = false;

export default function ProductsPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [scope, animate] = useAnimate();
  const cart = useSelector((state) => state.cartSlicer.cart);

  function handleCartNavigate() {
    dispatch(cartActions.setCartVisible());
    navigate("cart");
  }

  useEffect(() => {
    if (!initial) {
      initial = true;
      return;
    }
    animate(scope.current, { rotateZ: [0, 15, 0, -15, 0] }, { duration: 0.2 });
  }, [cart]);
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-end h-16 bg-stone-900 bg-opacity-90">
        <ProgressBar />

        <motion.div
          onClick={handleCartNavigate}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 1] }}
          ref={scope}
          whileHover={{ filter: "brightness(150%)" }}
          className="border rounded-full bg-stone-900 sm:mr-10 mr-4 w-[50px] h-[50px] flex justify-center items-center cursor-pointer"
        >
          <img src={cartLogo} className="w-[40px] h-[40px] object-cover m-0 " />
        </motion.div>
      </header>
      <Products />

      <Outlet />
    </>
  );
}
