export type ThemeName = "falcon" | "ocean" | "sunset" | "forest";
export type ThemeMode = "light" | "dark" | "system";

export interface ThemeConfig {
  name: ThemeName;
  mode: ThemeMode;
}