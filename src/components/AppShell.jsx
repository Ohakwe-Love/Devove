import { Outlet, useLocation } from "react-router-dom";
import HtmlFragment from "./HtmlFragment";
import { headerMarkup } from "../lib/rawContent";
import useSiteChrome from "../hooks/useSiteChrome";
import useAos from "../hooks/useAos";

export default function AppShell() {
  const location = useLocation();

  useSiteChrome(location.pathname);
  useAos();

  return (
    <>
      <HtmlFragment html={headerMarkup} />
      <Outlet />
      {/* <HtmlFragment html={footerMarkup} /> */}
    </>
  );
}
