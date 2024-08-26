import cartLogo from "../assets/cart.png";
import { Outlet, Link } from "react-router-dom";
import Products from "../components/Products";
import { motion } from "framer-motion";

export default function ProductsPage() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-end h-16 bg-stone-900 bg-opacity-90">
        <Link to="cart">
          <motion.div className=" transition-all border rounded-full bg-stone-900 mr-10 w-[50px] h-[50px] flex justify-center items-center cursor-pointer hover:brightness-150">
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
