// theme/FalconAntdTheme.ts
import { theme } from "antd";
import FalconColorPalette from "./FalconColorPalette";
import type { ThemeConfig } from "antd/lib";

const cornersTokens = {
  borderRadius: 12,
  controlHeight: 40,
  controlHeightLG: 48,
  controlHeightSM: 32,
};

export const FalconLightTheme: ThemeConfig = {
  components: {
    Button: {
      boxShadow: "1px 1px 2px 10px red",
      primaryShadow: "1px 1px 10px #dde9d8",
      borderRadiusOuter: 24,
      borderRadius: 12,
    },
    Card: {
      borderRadius: 0,
      borderRadiusLG: 0,
      borderRadiusOuter: 0,
    },
  },
  token: {
    colorPrimary: FalconColorPalette.primary,
    colorPrimaryHover: FalconColorPalette.primaryHover,
    colorPrimaryActive: FalconColorPalette.primaryActive,

    colorInfo: FalconColorPalette.info,
    colorSuccess: FalconColorPalette.success,
    colorWarning: FalconColorPalette.warning,
    colorError: FalconColorPalette.error,

    colorBgLayout: FalconColorPalette.bgLayout,
    colorBgContainer: FalconColorPalette.bgContainer,
    colorBgElevated: "#f4f8f4",

    colorTextBase: FalconColorPalette.textBase,
    colorTextHeading: FalconColorPalette.textBase,
    colorBorder: FalconColorPalette.border,

    colorFillSecondary: FalconColorPalette.silver,
    colorFillTertiary: "#F0F3F7",
    fontFamily:
      "Cairo, Inter, Poppins, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
    ...cornersTokens,
  },
  algorithm: [theme.defaultAlgorithm, theme.compactAlgorithm],
};

export const FalconDarkTheme: ThemeConfig = {
  token: {
    colorPrimary: "#439641", // darker primary for dark mode
    colorPrimaryHover: "#5caa67",
    colorPrimaryActive: "#1b4922",

    colorInfo: FalconColorPalette.info,
    colorSuccess: FalconColorPalette.success,
    colorWarning: FalconColorPalette.warning,
    colorError: FalconColorPalette.error,

    colorBgLayout: "#030602",
    colorBgContainer: "#181b1a",
    colorBgElevated: "#2e3a2b",

    colorTextBase: "#f0f3f7",
    colorTextHeading: "#ffffff",
    colorBorder: "#4b5c50",

    colorFillSecondary: "#3a4b3c",
    colorFillTertiary: "#2e3a2b",

    fontFamily:
      "Cairo, Inter, Poppins, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
    ...cornersTokens,
  },
  algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
};
