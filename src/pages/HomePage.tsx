import { Card } from "antd";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="  flex flex-col">
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
