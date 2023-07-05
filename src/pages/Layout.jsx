import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Modal from "../components/Modal/Modal";
export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
