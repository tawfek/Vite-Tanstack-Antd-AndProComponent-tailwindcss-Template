import { theme } from "antd";
import { OceanColorPalette } from "./OceanColorPalette";
import type { ThemeConfig } from "antd";

const sharedTokens = {
  borderRadius: 8,
  controlHeight: 40,
  controlHeightLG: 48,
  controlHeightSM: 32,
  fontFamily: "Cairo, Inter, Poppins, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
};

export const OceanLightTheme: ThemeConfig = {
  token: {
    colorPrimary: OceanColorPalette.primary,
    colorPrimaryHover: OceanColorPalette.primaryHover,
    colorPrimaryActive: OceanColorPalette.primaryActive,
    colorInfo: OceanColorPalette.info,
    colorSuccess: OceanColorPalette.success,
    colorWarning: OceanColorPalette.warning,
    colorError: OceanColorPalette.error,
    colorBgLayout: OceanColorPalette.bgLayout,
    colorBgContainer: OceanColorPalette.bgContainer,
    colorBgElevated: "#FFFFFF",
    colorTextBase: OceanColorPalette.textBase,
    colorTextHeading: OceanColorPalette.textBase,
    colorBorder: OceanColorPalette.border,
    colorFillSecondary: OceanColorPalette.silver,
    ...sharedTokens,
  },
  algorithm: [theme.defaultAlgorithm, theme.compactAlgorithm],
};

export const OceanDarkTheme: ThemeConfig = {
  token: {
    colorPrimary: "#0ea5e9",
    colorPrimaryHover: "#38bdf8",
    colorPrimaryActive: "#0284c7",
    colorBgLayout: "#0b121f",
    colorBgContainer: "#0f1b2c",
    colorBgElevated: "#2d4a6f",
    colorTextBase: "#f0f9ff",
    colorTextHeading: "#ffffff",
    colorBorder: "#3b5875",
    ...sharedTokens,
  },
  algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
};