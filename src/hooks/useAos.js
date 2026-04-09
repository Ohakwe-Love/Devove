import { useEffect } from "react";

export default function useAos() {
  useEffect(() => {
    const body = document.body;
    let timedOut = false;

    const enableFallback = () => {
      if (!window.AOS) {
        body.classList.add("aos-disabled");
      }
    };

    const initAos = () => {
      if (!window.AOS) {
        return false;
      }

      body.classList.remove("aos-disabled");
      window.AOS.init();
      window.AOS.refreshHard();
      return true;
    };

    if (initAos()) {
      return;
    }

    const timer = window.setInterval(() => {
      if (initAos()) {
        window.clearInterval(timer);
      }
    }, 100);

    const fallbackTimer = window.setTimeout(() => {
      timedOut = true;
      enableFallback();
    }, 1500);

    return () => {
      window.clearInterval(timer);
      window.clearTimeout(fallbackTimer);

      if (!timedOut) {
        body.classList.remove("aos-disabled");
      }
    };
  }, []);
}
