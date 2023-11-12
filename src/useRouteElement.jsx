import React from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "./layout/MainLayout/index.jsx";
import Home from "./pages/Home/index.jsx";
import Product from "./pages/Product/index.jsx";
import Cart from "./pages/Cart/index.jsx";
import CompleteOrder from "./pages/CompleteOrder/index.jsx";
import ProductList from "./pages/ProductList/index.jsx";

export default function useRouteElement() {
  const routeElements = useRoutes([
    {
      path: "",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
        {
          path: "/cart/:id",
          element: <Cart />,
        },
        {
          path: "/payment/:id",
          element: <CompleteOrder />,
        },
        {
          path: "/product-list",
          element: <ProductList />,
        },
      ],
    },
  ]);
  return routeElements;
}
