import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./components/RootLayout";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "products",
        element: <ProductsPage />,
        children: [{ path: "cart", element: <CartPage /> }],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
