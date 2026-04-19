import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import AppShell from "./components/AppShell";
import Preloader from "./components/Preloader";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import ResumePage from "./pages/ResumePage";
import NotFoundPage from "./pages/NotFoundPage";

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (window.AOS) {
      window.AOS.refreshHard();
    }
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Preloader />

      <Routes>
        <Route element={<AppShell />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>

        <Route path="/resume" element={<ResumePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
