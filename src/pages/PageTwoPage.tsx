import RootRoute from "@/routes/RootRoute";
import { useNavigate } from "@tanstack/react-router";
import { Button, Result } from "antd";
import { useTranslation } from "react-i18next";

const PageTwoPage = () => {
  const { t } = useTranslation();
  const homeRoute = RootRoute.to;
  const navigate = useNavigate();
  return (
    <Result
      status="success"
      title={t("route_is_working")}
      extra={[
        <Button
          type="primary"
          key="console"
          onClick={() => navigate({ to: homeRoute })}
        >
          {t("go_back")}
        </Button>,
      ]}
    />
  );
};
export default PageTwoPage;
