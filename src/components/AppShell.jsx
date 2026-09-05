import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import useAos from "../hooks/useAos";

export default function AppShell() {
  useAos();

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
