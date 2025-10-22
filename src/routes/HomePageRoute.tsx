import { createRoute } from "@tanstack/react-router";

import RootRoute from "./RootRoute";
import HomePage from "@/pages/HomePage";

const HomePageRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/",
  component: HomePage,
  context:()=>{
    return {
      title:'Home',
      locale:"home"
    }
  }
});

export default HomePageRoute;
