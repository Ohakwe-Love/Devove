import { useEffect } from "react";

export default function usePageStyles(styles = [], bodyClassName = "") {
  const styleKey = styles.join("|");

  useEffect(() => {
    const createdLinks = styles.map((href) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      link.dataset.routeStyle = href;
      document.head.appendChild(link);
      return link;
    });

    if (bodyClassName) {
      document.body.classList.add(bodyClassName);
    }

    return () => {
      createdLinks.forEach((link) => link.remove());

      if (bodyClassName) {
        document.body.classList.remove(bodyClassName);
      }
    };
  }, [bodyClassName, styleKey]);
}
