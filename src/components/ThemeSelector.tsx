import { Button, Dropdown, Space } from "antd";
import { useTheme } from "../providers/ThemeProvider";
import type { ThemeMode } from "../types/theme";
import { SunOutlined, MoonOutlined, ReloadOutlined } from "@ant-design/icons";

const modeIcons = {
  light: <SunOutlined />,
  dark: <MoonOutlined />,
  system: <ReloadOutlined />,
};

export function ThemeSelector() {
  const { mode, setMode } = useTheme();

  const modeMenuItems = (["light", "dark", "system"] as ThemeMode[]).map(
    (m) => ({
      key: m,
      label: (
        <div className="flex items-center gap-2">
          {modeIcons[m]}
          <span className="capitalize">{m}</span>
          {mode === m && <span className="ml-auto">✓</span>}
        </div>
      ),
      onClick: () => setMode(m),
    })
  );

  return (
    <Space>
      <Dropdown menu={{ items: modeMenuItems }} placement="bottomRight">
        <Button icon={modeIcons[mode]} type="link" />
      </Dropdown>
    </Space>
  );
}
