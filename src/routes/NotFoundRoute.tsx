import { createRoute } from "@tanstack/react-router";
import RootRoute from "./RootRoute";
import NotFoundPage from "@/pages/NotFoundPage";
import { ErrorBoundary } from "@/components";

const NotFoundRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "*",
  component: NotFoundPage,
  errorComponent: ErrorBoundary,
  context: () => {
    return {
      title: "Not Found",
      locale: "not_found_page",
    };
  },
});

export default NotFoundRoute;
