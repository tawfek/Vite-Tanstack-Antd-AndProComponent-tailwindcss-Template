import { Button, Dropdown, Space } from "antd";
import { useTheme } from "../providers/ThemeProvider";
import type { ThemeName, ThemeMode } from "../types/theme";
import {
  SunOutlined,
  MoonOutlined,
  ReloadOutlined,
  BgColorsOutlined,
} from "@ant-design/icons";
const themeOptions = [
  { name: "falcon" as ThemeName, label: "Falcon Green", color: "#5caa67" },
  { name: "ocean" as ThemeName, label: "Ocean Blue", color: "#0ea5e9" },
  { name: "sunset" as ThemeName, label: "Sunset Orange", color: "#f97316" },
  { name: "forest" as ThemeName, label: "Forest Green", color: "#10b981" },
];

const modeIcons = {
  light: <SunOutlined />,
  dark: <MoonOutlined />,
  system: <ReloadOutlined />,
};

export function ThemeSelector() {
  const { themeName, mode, setTheme, setMode } = useTheme();

  const themeMenuItems = themeOptions.map((option) => ({
    key: option.name,
    label: (
      <div className="flex items-center gap-2">
        <div
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: option.color }}
        />
        <span>{option.label}</span>
        {themeName === option.name && <span className="ml-auto">✓</span>}
      </div>
    ),
    onClick: () => setTheme(option.name),
  }));

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
      <Dropdown menu={{ items: themeMenuItems }} placement="bottomRight">
        <Button icon={<BgColorsOutlined />}>
          {themeOptions.find((t) => t.name === themeName)?.label}
        </Button>
      </Dropdown>

      <Dropdown menu={{ items: modeMenuItems }} placement="bottomRight">
        <Button icon={modeIcons[mode]}>
          <span className="capitalize">{mode}</span>
        </Button>
      </Dropdown>
    </Space>
  );
}

export function CompactThemeToggle() {
  const { mode, setMode } = useTheme();

  return (
    <div className="inline-flex bg-silver dark:bg-fill-secondary-dark rounded-lg p-1 gap-1">
      {(["light", "system", "dark"] as ThemeMode[]).map((m) => (
        <Button
          key={m}
          onClick={() => setMode(m)}
          className={`p-2 rounded transition-colors ${
            mode === m
              ? "bg-primary text-white"
              : "hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
          aria-label={`${m} mode`}
        >
          {modeIcons[m]}
        </Button>
      ))}
    </div>
  );
}

export function ThemePaletteGrid() {
  const { themeName, setTheme } = useTheme();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {themeOptions.map((option) => (
        <Button
          key={option.name}
          onClick={() => setTheme(option.name)}
          className={`p-4 rounded-lg border-2 flex flex-row-reverse items-center align-middle transition-all ${
            themeName === option.name
              ? "border-primary shadow-lg"
              : "border-border-light dark:border-border-dark hover:border-primary"
          }`}
        >
          <div
            className="w-3 h-3 rounded  "
            style={{ backgroundColor: option.color }}
          />
          <span className="text-xs w-fit font-medium">{option.label}</span>
        </Button>
      ))}
    </div>
  );
}
