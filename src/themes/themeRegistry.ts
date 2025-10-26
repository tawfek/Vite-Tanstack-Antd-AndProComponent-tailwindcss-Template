import { FalconLightTheme, FalconDarkTheme } from "./FalconTheme";

import type { ThemeConfig } from "antd";
import type { ThemeName } from "../types/theme";

export const themeRegistry: Record<
  ThemeName,
  { light: ThemeConfig; dark: ThemeConfig }
> = {
  default: {
    light: FalconLightTheme,
    dark: FalconDarkTheme,
  },
};

export const getTheme = (
  themeName: ThemeName,
  isDark: boolean
): ThemeConfig => {
  return isDark
    ? themeRegistry[themeName].dark
    : themeRegistry[themeName].light;
};
