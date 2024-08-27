import { useSelector } from "react-redux";
import Cart from "../components/Cart";
import Modal from "../components/Modal";
import { Outlet } from "react-router-dom";

export default function CartPage() {
  const isVisible = useSelector((state) => state.cartSlicer.isVisible);
  return (
    <>
      <Modal isVisible={isVisible}>
        <Outlet />
      </Modal>
    </>
  );
}
