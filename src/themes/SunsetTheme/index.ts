import { theme } from "antd";
import { SunsetColorPalette } from "./SunsetColorPalette";
import type { ThemeConfig } from "antd";

export const SunsetLightTheme: ThemeConfig = {
  token: {
    colorPrimary: SunsetColorPalette.primary,
    colorPrimaryHover: SunsetColorPalette.primaryHover,
    colorPrimaryActive: SunsetColorPalette.primaryActive,
    colorBgLayout: SunsetColorPalette.bgLayout,
    colorBgContainer: SunsetColorPalette.bgContainer,
    colorTextBase: SunsetColorPalette.textBase,
    colorBorder: SunsetColorPalette.border,
    colorBgElevated: SunsetColorPalette.bgContainer,
    borderRadius: 12,
    controlHeight: 40,
  },
  algorithm: [theme.defaultAlgorithm, theme.compactAlgorithm],
};

export const SunsetDarkTheme: ThemeConfig = {
  token: {
    colorPrimary: "#f97316",
    colorBgElevated: "#0d0301",
    colorBgLayout: "#0d0301",
    colorBgContainer: "#271306",
    colorTextBase: "#fef3c7",
    borderRadius: 12,
    controlHeight: 40,
  },
  algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
};
