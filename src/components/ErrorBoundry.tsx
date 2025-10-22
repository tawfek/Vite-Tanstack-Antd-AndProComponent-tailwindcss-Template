import RootRoute from "@/routes/RootRoute";
import { useNavigate } from "@tanstack/react-router";
import { Button, Result, Typography } from "antd";
import { useTranslation } from "react-i18next";

const ErrorBoundary = ({ error }: { error: Error }) => {
  const { t } = useTranslation();
  const homeRoute = RootRoute.to;
  const navigate = useNavigate();
  const { Paragraph } = Typography;

  return (
    <Result
      status="error"
      title={t("unexpected_error_happend")}
      subTitle={error.message}
      extra={[
        <Button onClick={() => navigate({ to: homeRoute })} type="default">
          {t("Back Home")}
        </Button>,
        <Button onClick={() => window.location.reload()} type="primary">
          {t("reload_page")}
        </Button>,
      ]}
    >
      <Paragraph className="text-left " dir="ltr">
        <blockquote dir="ltr">Stack:</blockquote>
        <pre>{error.stack}</pre>
      </Paragraph>
    </Result>
  );
};

export default ErrorBoundary;
