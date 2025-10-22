// src/routes/PageTwoSubRoute.ts
import { createRoute } from "@tanstack/react-router";
import PageTwoRoute from "./PageTwoRoute"; // parent route
import PageTwoSubPage from "@/pages/PageTwoSubPage";

const PageTwoSubRoute = createRoute({
  getParentRoute: () => PageTwoRoute, // sets PageTwoRoute as parent
  path: "subpage", // relative path -> full URL: /page2/subpage
  component: PageTwoSubPage,
  context: () => ({
    title: "Sub Page", // breadcrumb will show Page 2 / Sub Page
    locale: "page_2_sub",
  }),
});

export default PageTwoSubRoute;
