import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Products from "./Components/Products";
import Home from "./Components/Home";
import ProductFullScreen from "./Components/ProductFullScreen";
import AboutPage from "./Components/AboutPage";
import ContactUs from "./Components/ContactUs";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="products/:productId" element={<ProductFullScreen />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="contactus" element={<ContactUs />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
