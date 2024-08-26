import cartLogo from "../assets/cart.png";
import { Outlet, Link } from "react-router-dom";
import Products from "../components/Products";
import { motion } from "framer-motion";

export default function ProductsPage() {
  return (
    <>
      <header className="flex justify-end w-full h-24">
        <Link to="cart">
          <motion.div className="transition-all border rounded-full bg-stone-900 mt-4 mr-10 w-[60px] h-[60px] flex justify-center items-center cursor-pointer hover:brightness-200">
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
