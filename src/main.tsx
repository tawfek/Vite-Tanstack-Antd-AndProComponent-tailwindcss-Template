import { StrictMode, Suspense } from "react";
import "antd/dist/reset.css"; // v5 reset styles
import "./index.css";
import PresistWarpper from "./PresistWarpper.tsx";
import { LanguageProvider } from "./providers/LanguageProvider.tsx";
import "./locales/i18n.ts";
import "@ant-design/v5-patch-for-react-19";
import { ThemeProvider } from "@/providers/ThemeProvider.tsx";
import HomePageRoute from "./routes/HomePageRoute.tsx";
import RootRoute from "./routes/RootRoute.tsx";
import NotFoundRoute from "./routes/NotFoundRoute.tsx";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import ReactDOM from "react-dom/client";
import PageTwoRoute from "./routes/PageTwoRoute.tsx";
import PageTwoSubRoute from "./routes/PageTwoSubRoute.tsx";
import { App } from "antd";

const routeTree = RootRoute.addChildren([
  HomePageRoute,
  PageTwoRoute,
  PageTwoSubRoute,
  NotFoundRoute,
]);

const router = createRouter({ routeTree });

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <Suspense fallback={<div>Loading translations…</div>}>
        <ThemeProvider>
          <LanguageProvider>
            <App>
              <PresistWarpper>
                <RouterProvider router={router} />
              </PresistWarpper>
            </App>
          </LanguageProvider>
        </ThemeProvider>
      </Suspense>
    </StrictMode>
  );
}

