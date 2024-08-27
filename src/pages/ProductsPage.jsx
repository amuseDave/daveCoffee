import cartLogo from "../assets/cart.png";
import { Outlet, Link } from "react-router-dom";
import Products from "../components/Products";
import { motion, useAnimate } from "framer-motion";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import ProgressBar from "../components/ProgressBar";

let initial = false;

export default function ProductsPage() {
  const [scope, animate] = useAnimate();
  const cart = useSelector((state) => state.cartSlicer.cart);

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
        <Link to="cart">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0, 1] }}
            ref={scope}
            whileHover={{ filter: "brightness(150%)" }}
            className="border rounded-full bg-stone-900 sm:mr-10 mr-4 w-[50px] h-[50px] flex justify-center items-center cursor-pointer"
          >
            <img
              src={cartLogo}
              className="w-[40px] h-[40px] object-cover m-0 "
            />
          </motion.div>
        </Link>
      </header>
      <Products />

      <Outlet />
    </>
  );
}
