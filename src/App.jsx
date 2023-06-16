import { Route, Routes } from "react-router-dom";
import Category from "./pages/Category/Category";
import Home from "./pages/Home/Home";
import Layout from "./pages/Layout";
import Order from "./pages/Order/Order";

export default function App() {
  return (
    <Routes>
      <Route path="/:id" element={<Layout />}>
        <Route path="/:id" element={<Home />} />
        <Route path="/:id/category/:type" element={<Category />} />
        <Route path="/:id/order" element={<Order />} />
      </Route>
    </Routes>
  );
}
