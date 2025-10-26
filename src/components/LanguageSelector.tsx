import { Button, Dropdown, Space } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { useLanguage } from "../providers/LanguageProvider";
import type { MenuProps } from "antd";
import { GB, IQ, type FlagComponent } from "country-flag-icons/react/3x2";

// Define the type to ensure future safety
interface LanguageOption {
  key: string;
  label: string;
  nativeLabel?: string;
  flag?: FlagComponent;
}

// ✅ Easy to extend — just add more entries here
const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { key: "en", label: "English", nativeLabel: "English", flag: GB },
  { key: "ar", label: "Arabic", nativeLabel: "العربية", flag: IQ },

  // You can easily add more languages later...
];

const FlagElement = (Flag: FlagComponent) => (
  <Flag width={20} style={{ borderRadius: 4,opacity:0.7}} />
);

export function LanguageSelector({ onlyFlagLabel = false }) {
  const { lang, switchLanguage } = useLanguage();

  const menuItems: MenuProps["items"] = SUPPORTED_LANGUAGES.map((l) => ({
    key: l.key,
    label: (
      <div className="flex items-center gap-2">
        {l.flag && <span>{FlagElement(l.flag)}</span>}
        <span>{l.nativeLabel || l.label}</span>
        {lang === l.key && <span className="ml-auto">✓</span>}
      </div>
    ),
    onClick: () => switchLanguage(l.key as any),
  }));

  const currentLang = SUPPORTED_LANGUAGES.find((l) => l.key === lang);

  return (
    <Space className="!z-[99999999999]   flex items-center justify-center !px-0">
      <Dropdown
        menu={{ items: menuItems }}
        placement="top"
        overlayClassName="!z-99999999999"
        className={` !w-full !max-w-full`}
      >
        <Button
          icon={onlyFlagLabel ? <></> : <GlobalOutlined />}
          type="link"
          className="!flex   !flex-row !justify-start !px-0"
        >
          <div className="uppercase flex items-center flex-row gap-2">
            {onlyFlagLabel || currentLang?.nativeLabel}
            {currentLang?.flag && (
              <span className={`${onlyFlagLabel ? "" : "mr-1"}  `}>
                {currentLang?.flag && FlagElement(currentLang.flag)}
              </span>
            )}
          </div>
        </Button>
      </Dropdown>
    </Space>
  );
}
