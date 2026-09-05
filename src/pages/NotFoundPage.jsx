import { Link } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { ArrowUpRightCircleIcon } from "../components/icons";

export default function NotFoundPage() {
  useDocumentTitle("Page Not Found | Devove");

  return (
    <main>
      <section className="page-not-found-container">
        <img src="/assets/images/others/404.svg" alt="" />
        <h1>Oops! Page Not Found</h1>
        <p>The page you are looking for does not exist. It might have been moved or deleted.</p>
        <Link to="/" className="btn-home primary-btn animated-border">
          Go to Homepage
          <span>
            <ArrowUpRightCircleIcon />
          </span>
        </Link>
      </section>
    </main>
  );
}
