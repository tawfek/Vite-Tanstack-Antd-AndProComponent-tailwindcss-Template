import { createRootRoute } from "@tanstack/react-router";
import App from "../App";
import { MainLayout } from "@/layouts/MainLayoutLogo";
import { ErrorBoundary } from "@/components";
import NotFoundPage from "@/pages/NotFoundPage";

const RootRoute = createRootRoute({
  component: () => (
    <MainLayout>
      <App />
    </MainLayout>
  ),
  errorComponent: ErrorBoundary,
  notFoundComponent: NotFoundPage,
});
export default RootRoute;
