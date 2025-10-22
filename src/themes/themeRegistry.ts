import { FalconLightTheme, FalconDarkTheme } from "./FalconTheme";
import { OceanLightTheme, OceanDarkTheme } from "./OceanTheme";
import { SunsetLightTheme, SunsetDarkTheme } from "./SunsetTheme";
import type { ThemeConfig } from "antd";
import type { ThemeName } from "../types/theme";

export const themeRegistry: Record<ThemeName, { light: ThemeConfig; dark: ThemeConfig }> = {
  falcon: {
    light: FalconLightTheme,
    dark: FalconDarkTheme,
  },
  ocean: {
    light: OceanLightTheme,
    dark: OceanDarkTheme,
  },
  sunset: {
    light: SunsetLightTheme,
    dark: SunsetDarkTheme,
  },
  forest: {
    light: FalconLightTheme, // Reuse for now, create ForestTheme later
    dark: FalconDarkTheme,
  },
};

export const getTheme = (themeName: ThemeName, isDark: boolean): ThemeConfig => {
  return isDark ? themeRegistry[themeName].dark : themeRegistry[themeName].light;
};