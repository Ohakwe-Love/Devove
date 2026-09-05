import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";

let initialized = false;

/** Initializes AOS once, and refreshes it on every route change so newly
 * mounted page content gets its scroll animations picked up. */
export default function useAos() {
  const location = useLocation();

  useEffect(() => {
    if (!initialized) {
      AOS.init({ duration: 1000, once: true, offset: 80 });
      initialized = true;
    } else {
      AOS.refreshHard();
    }
  }, [location.pathname]);
}
