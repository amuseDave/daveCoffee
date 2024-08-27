import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./components/RootLayout";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import { Provider } from "react-redux";
import store from "./store/reduxStore";
import Cart from "./components/Cart";
import CheckOut from "./components/CheckOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "products",
        element: <ProductsPage />,
        children: [
          {
            path: "cart",
            element: <CartPage />,
            children: [
              { index: true, element: <Cart /> },
              { path: "checkout", element: <CheckOut /> },
            ],
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
