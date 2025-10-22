import RootRoute from "@/routes/RootRoute";
import { useNavigate } from "@tanstack/react-router";
import { Button, Result } from "antd";
import { useTranslation } from "react-i18next";

const NotFoundPage = () => {
  const { t } = useTranslation();
  const homeRoute = RootRoute.to;
  const navigate = useNavigate();
  return (
    <Result
      status="404"
      title="404"
      subTitle={t("Sorry, the page you visited does not exist.")}
      extra={
        <Button onClick={() => navigate({ to: homeRoute })} type="primary">
          {t("Back Home")}
        </Button>
      }
    />
  );
};
export default NotFoundPage;
