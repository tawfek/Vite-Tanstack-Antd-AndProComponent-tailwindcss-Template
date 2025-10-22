import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  useEffect,
} from "react";
import { ConfigProvider } from "antd";
import enUS from "antd/locale/en_US";
import arEG from "antd/locale/ar_EG";
import { ProConfigProvider } from "@ant-design/pro-components";
import { useTheme } from "./ThemeProvider";
import { getTheme } from "@/themes/themeRegistry";

type Lang = "en" | "ar";

interface LanguageContextProps {
  lang: Lang;
  switchLanguage: (lang: Lang) => void;
  direction: "ltr" | "rtl";
}

const STORAGE_KEY = "app_lang";

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const getInitialLang = (): Lang => {
    const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (saved) return saved;
    return navigator.language.startsWith("ar") ? "ar" : "en";
  };

  const [lang, setLang] = useState<Lang>(getInitialLang);

  const switchLanguage = (newLang: Lang) => {
    import("i18next").then(({ default: i18n }) => i18n.changeLanguage(newLang));
    setLang(newLang);
    localStorage.setItem(STORAGE_KEY, newLang);
  };

  const direction = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    const root = document.documentElement;
    root.dir = direction;
    root.classList.remove("ltr", "rtl");
    root.classList.add(direction);
  }, [direction]);

  const antdLocale = lang === "en" ? enUS : arEG;
  const { themeName, isDark } = useTheme();
  const theme = getTheme(themeName, isDark);
  return (
    <LanguageContext.Provider value={{ lang, switchLanguage, direction }}>
      <ProConfigProvider>
        <ConfigProvider
          theme={theme}
          locale={antdLocale}
          direction={direction}
          getTargetContainer={() => {
            return document.getElementById("pro-layout") || document.body;
          }}
        >
          {children}
        </ConfigProvider>
      </ProConfigProvider>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
