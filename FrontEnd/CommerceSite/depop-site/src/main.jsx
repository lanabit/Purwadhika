import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/Login/index.jsx";
import HomePage from "./pages/Home/index.jsx";
import SignupPage from "./pages/Signup/index.jsx";
import Register from "./pages/Register/index.jsx";
import ProductPage from "./pages/ProductPage/index.jsx";
import ProductDetailPage from "./pages/ProductDetailPage/index.jsx";
import Bag from "./pages/Bag/index.jsx";
const myRouter = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <>
            <HomePage />
          </>
        ),
      },
      {
        path: "/login",
        element: (
          <>
            <LoginPage />
          </>
        ),
      },
      {
        path: "/signup",
        element: (
          <>
            <SignupPage />
          </>
        ),
      },
      {
        path: "/register",
        element: (
          <>
            <Register></Register>
          </>
        ),
      },
      {
        path: "/product-page",
        element: (
          <>
            <ProductPage></ProductPage>
          </>
        ),
      },
      {
        path: "/product-detail-page/:id",
        element: (
          <>
            <ProductDetailPage></ProductDetailPage>
          </>
        ),
      },
      {
        path: "/shopping-bag",
        element: (
          <>
          <Bag></Bag>
          </>
        )
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={myRouter}></RouterProvider>
  </React.StrictMode>
);
