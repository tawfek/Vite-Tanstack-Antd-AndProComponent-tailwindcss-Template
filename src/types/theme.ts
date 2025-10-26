export type ThemeName = "default";
export type ThemeMode = "light" | "dark" | "system";
export interface ThemeConfig {
  name: ThemeName;
  mode: ThemeMode;
}

const AppThemes = ["default"] as ThemeName[];

export function isValidThemeName(value: string): value is ThemeName {
  return AppThemes.includes(value as ThemeName);
}
