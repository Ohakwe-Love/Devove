import { useEffect, useState } from "react";

// Only the very first page load shows this. Route changes after that are
// already-bundled client-side navigations with nothing left to wait for,
// so re-showing a spinner on every click was pure artificial latency —
// it added roughly 870ms of forced waiting to every single nav click.
const INITIAL_LOAD_DURATION = 900;
const EXIT_DURATION = 320;

export default function Preloader() {
  const [isMounted, setIsMounted] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const enterFrame = window.requestAnimationFrame(() => {
      setIsVisible(true);
    });

    const hideTimer = window.setTimeout(() => {
      setIsVisible(false);
    }, INITIAL_LOAD_DURATION);

    const unmountTimer = window.setTimeout(() => {
      setIsMounted(false);
    }, INITIAL_LOAD_DURATION + EXIT_DURATION);

    return () => {
      window.cancelAnimationFrame(enterFrame);
      window.clearTimeout(hideTimer);
      window.clearTimeout(unmountTimer);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("preloader-active", isMounted);

    return () => {
      document.body.classList.remove("preloader-active");
    };
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className={`app-preloader${isVisible ? " is-visible" : " is-hiding"}`} aria-hidden="true">
      <div className="app-preloader__inner">
        <div className="app-preloader__loader" />
      </div>
    </div>
  );
}
