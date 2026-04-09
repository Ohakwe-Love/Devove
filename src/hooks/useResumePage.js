import { useEffect } from "react";

export default function useResumePage() {
  useEffect(() => {
    const downloadPDF = () => {
      window.print();
    };

    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "p") {
        event.preventDefault();
        downloadPDF();
      }
    };

    window.downloadPDF = downloadPDF;
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      delete window.downloadPDF;
    };
  }, []);
}
