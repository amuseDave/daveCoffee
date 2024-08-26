import { Outlet } from "react-router-dom";
import Products from "../components/Products";

export default function ProductsPage() {
  return (
    <>
      <Products />
      <Outlet />
    </>
  );
}
