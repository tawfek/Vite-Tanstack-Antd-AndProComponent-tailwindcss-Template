import { theme } from "antd";
import "./App.css";

import { Outlet } from "@tanstack/react-router";
const { useToken } = theme;

function App() {
  const { token } = useToken();
  return (
    <div
      className={`min-h-screen  !bg-[${token.colorBgElevated}] transition-all`}
    >
      <Outlet />
    </div>
  );
}

export default App;

