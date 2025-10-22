import { createRoute } from "@tanstack/react-router";
import RootRoute from "./RootRoute";
import PageTwoPage from "@/pages/PageTwoPage";

const PageTwoRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/page2",
  component: PageTwoPage,
  context: () => {
    return {
      title: "Page 2",
      locale: "page_2",
    };
  },
});

export default PageTwoRoute;
