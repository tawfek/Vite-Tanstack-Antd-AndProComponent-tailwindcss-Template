import reactLogo from "@/assets/react.svg";
import antdIcon from "@/assets/antd.svg";
import tanStackIcon from "@/assets/tanstack.png";
import viteLogo from "@/assets/vite.svg";
import { Button, Card } from "antd";
import { ProForm, ProFormText } from "@ant-design/pro-components";
import { useLanguage } from "@/providers/LanguageProvider";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/providers/ThemeProvider";
import {
  ThemeSelector,
  CompactThemeToggle,
  ThemePaletteGrid,
} from "@/components/ThemeSelector";

const HomePage = () => {
  const { lang, switchLanguage } = useLanguage();
  const { t } = useTranslation();
  const { themeName, mode, isDark } = useTheme();

  return (
    <div className="  flex flex-col">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Logos */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 justify-center">
          {[
            { href: "https://vite.dev", src: viteLogo, alt: "Vite logo" },
            { href: "https://react.dev", src: reactLogo, alt: "React logo" },
            {
              href: "https://tanstack.com",
              src: tanStackIcon,
              alt: "TanStack logo",
            },
            {
              href: "https://ant.design",
              src: antdIcon,
              alt: "Ant Design logo",
            },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-10 min-w-10 sm:h-12 sm:w-12 object-contain"
              />
            </a>
          ))}
        </div>

        {/* Theme Controls */}
        <div className="w-full sm:w-auto flex justify-center sm:justify-end">
          <ThemeSelector />
        </div>
      </div>

      {/* Theme Info Card */}
      <Card className="bg-bg-container">
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-text-base">
            {t("current_theme")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm sm:text-base">
            <div>
              <span className="text-text-secondary">{t("theme")}:</span>
              <p className="font-semibold capitalize">{themeName}</p>
            </div>
            <div>
              <span className="text-text-secondary">{t("mode")}:</span>
              <p className="font-semibold capitalize">{mode}</p>
            </div>
            <div>
              <span className="text-text-secondary">{t("display")}:</span>
              <p className="font-semibold">{t(isDark ? "dark" : "light")}</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Compact Theme Toggle */}
      <Card className="bg-bg-container">
        <h3 className="text-lg font-semibold mb-4">{t("quick_mode_toggle")}</h3>
        <CompactThemeToggle />
      </Card>

      {/* Theme Palette Grid */}
      <Card className="bg-bg-container ">
        <h3 className="text-lg font-semibold mb-4">{t("theme_palette")}</h3>
        <ThemePaletteGrid />
      </Card>

      {/* Language Selector */}
      <Card className="bg-bg-container">
        <h3 className="text-lg font-semibold mb-4">{t("language")}</h3>
        <div className="flex gap-3">
          <Button
            block
            type={lang === "en" ? "primary" : "default"}
            onClick={() => switchLanguage("en")}
          >
            {t("english")}
          </Button>
          <Button
            block
            type={lang === "ar" ? "primary" : "default"}
            onClick={() => switchLanguage("ar")}
          >
            {t("arabic")}
          </Button>
        </div>
      </Card>

      {/* Form Demo */}
      <Card className="bg-bg-container">
        <h3 className="text-xl font-bold mb-4">{t("Form")}</h3>
        <ProForm
          onFinish={async (values) => console.log(values)}
          layout="vertical"
          submitter={false}
        >
          <ProFormText
            name="name"
            label={t("name_label")}
            placeholder={t("enter_name")}
          />
          <Button type="primary" htmlType="submit" block>
            {t("submit")}
          </Button>
        </ProForm>
      </Card>

      {/* Color Showcase */}
      <Card className="bg-bg-container">
        <h3 className="text-lg font-semibold mb-4">{t("color_palette")}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="space-y-2">
            <div className="bg-primary h-12 sm:h-16 rounded flex items-center justify-center text-white font-semibold">
              {t("primary")}
            </div>
            <div className="bg-primary-hover h-12 sm:h-16 rounded flex items-center justify-center text-white">
              {t("hover")}
            </div>
            <div className="bg-primary-active h-12 sm:h-16 rounded flex items-center justify-center text-white">
              {t("active")}
            </div>
          </div>
          <div className="bg-success h-12 sm:h-16 rounded flex items-center justify-center text-white font-semibold">
            {t("success")}
          </div>
          <div className="bg-warning h-12 sm:h-16 rounded flex items-center justify-center text-white font-semibold">
            {t("warning")}
          </div>
          <div className="bg-error h-12 sm:h-16 rounded flex items-center justify-center text-white font-semibold">
            {t("error")}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HomePage;
