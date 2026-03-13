
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="section-padding flex items-center justify-center">
        <div className="text-center max-w-lg">

          <h1 className="text-6xl font-heading font-bold text-primary mb-4">
            404
          </h1>

          <h2 className="text-3xl font-heading font-bold mb-4">
            Page Not Found
          </h2>

          <p className="text-muted-foreground mb-8">
            The page you are looking for doesn't exist or may have been moved.
          </p>

          <Link
            to="/"
            className="btn-primary"
          >
            Go Back Home
          </Link>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;