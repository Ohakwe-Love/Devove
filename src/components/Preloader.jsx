import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const INITIAL_LOAD_DURATION = 900;
const ROUTE_CHANGE_DURATION = 550;
const EXIT_DURATION = 320;

export default function Preloader() {
  const location = useLocation();
  const firstLoadRef = useRef(true);
  const [isMounted, setIsMounted] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const displayDuration = firstLoadRef.current ? INITIAL_LOAD_DURATION : ROUTE_CHANGE_DURATION;
    firstLoadRef.current = false;

    setIsMounted(true);

    const enterFrame = window.requestAnimationFrame(() => {
      setIsVisible(true);
    });

    const hideTimer = window.setTimeout(() => {
      setIsVisible(false);
    }, displayDuration);

    const unmountTimer = window.setTimeout(() => {
      setIsMounted(false);
    }, displayDuration + EXIT_DURATION);

    return () => {
      window.cancelAnimationFrame(enterFrame);
      window.clearTimeout(hideTimer);
      window.clearTimeout(unmountTimer);
    };
  }, [location.pathname]);

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
    <div
      className={`app-preloader${isVisible ? " is-visible" : " is-hiding"}`}
      aria-hidden="true"
    >
      <div className="app-preloader__inner">
        <div className="app-preloader__loader" />
      </div>
    </div>
  );
}
