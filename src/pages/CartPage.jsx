import { useSelector } from "react-redux";

import Modal from "../components/Modal";
import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export default function CartPage() {
  const isVisible = useSelector((state) => state.cartSlicer.isVisible);
  return (
    <>
      <Modal isVisible={isVisible}>
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </Modal>
    </>
  );
}
