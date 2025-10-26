import React, { useState, useMemo, useCallback, useEffect } from "react";
import { ProLayout, type ProLayoutProps } from "@ant-design/pro-components";
import { useRouter, useRouterState, Link } from "@tanstack/react-router";
import defaultMenuProps from "./_defaultMenuProps";
import { useTranslation } from "react-i18next";
import {
  MenuFoldOutlined,
  MenuOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { Footer } from "../Footer";
import { ThemeSelector } from "../ThemeSelector";
import { LanguageSelector } from "../LanguageSelector";
import LogoPng from "@/assets/logo.png";
import LogoLabelPng from "@/assets/logo-label.png";

export const SideMenuAppLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const routerState = useRouterState();
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const { t } = useTranslation();
  const pathname = routerState.location.pathname;

  // ✅ Auto-collapse sidebar on small screens
  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth < 768); // collapse under md breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Build breadcrumbs
  const breadcrumbRoutes = useMemo(() => {
    return routerState.matches
      ?.filter((match) => match.fullPath)
      .map((match) => {
        let title: string;
        let locale: string;
        if (match.id === "__root__") {
          title = "Home";
          locale = "home";
        } else if (match.context?.title === "Home") {
          title = "";
          locale = "";
        } else {
          title = match.context?.title ?? "";
          locale = match.context?.locale;
        }
        const path = match.fullPath ?? "/";
        return { path, title, locale };
      })
      .filter((item) => item.title);
  }, [routerState.matches]);

  const handleMenuClick = useCallback(
    (path?: string) => {
      if (path) router.navigate({ to: path as any });
    },
    [router]
  );

  const layoutProps: ProLayoutProps = {
    ...defaultMenuProps,
    logo: (
      <img
        src={LogoLabelPng}
        alt="Logo"
        className="self-center max-h-[1.5rem]"
      />
    ),
    layout: "mix",
    collapsed,
    breakpoint: "md", // AntD built-in responsive breakpoint
    onCollapse: setCollapsed,
    location: { pathname },
    menuTextRender: (item: any) => <>{t(item.locale)} </>,
    menuItemRender: (item, dom) => (
      <a
        onClick={() => handleMenuClick(item.path)}
        className="flex flex-row w-full gap-2"
      >
        {dom}
      </a>
    ),
    disabledOverflow: true,
    headerTitleRender() {
      return undefined;
    },
    pageTitleRender: false,
    breadcrumbRender: () =>
      breadcrumbRoutes.map((item) => ({
        path: item.path,
        title: item.title,
        locale: item.locale,
      })),
    itemRender: (route: any, _params, routes) => {
      const last = routes.indexOf(route) === routes.length - 1;
      return last ? (
        <span>{t(route?.locale ?? route.title)}</span>
      ) : (
        <Link to={route.path || "/"}>{t(route.locale)}</Link>
      );
    },
    menuHeaderRender: () => (
      <span className="flex justify-center items-center  w-full">
        {collapsed ? (
          <img src={LogoPng} className="w-full min-w-[1.92rem] max-w-[3rem]" />
        ) : (
          <img
            src={LogoLabelPng}
            className="w-full  max-w-[6.67rem] self-center"
          />
        )}
      </span>
    ),
    menuFooterRender: (props) => {
      return (
        <div key="footer" className="w-full flex flex-col gap-4  ">
          <LanguageSelector onlyFlagLabel={collapsed} />
          <Button onClick={() => setCollapsed(!collapsed)} type="text">
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
          {!props?.collapsed ? <Footer /> : <></>}
        </div>
      );
    },
    headerRender: (_props) => (
      <div className="!flex md:!block justify- rtl:mr-3 ltr:ml-3">
        {/* Mobile toggle */}
        <div>
          <Button
            type="text"
            className="block md:!hidden"
            icon={<MenuOutlined />}
            onClick={() => setCollapsed((prev) => !prev)}
          />
        </div>
        {_props.collapsed == true && _props.isMobile ? (
          <div className="  h-full align-middle flex self-center justify-center !w-full">
            <img
              src={LogoPng}
              className="w-full min-w-[1.5rem] max-w-[1.5rem]"
            />
          </div>
        ) : (
          <></>
        )}
        <div className="w-full max-w-[2.5rem] md:!max-w-full   justify-end flex px-2">
          <ThemeSelector />
        </div>
      </div>
    ),
    bgLayoutImgList: [
      {
        src: "https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png",
        left: 85,
        bottom: 100,
        height: "303px",
      },
      {
        src: "https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png",
        bottom: -68,
        right: -45,
        height: "303px",
      },
      {
        src: "https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png",
        bottom: 0,
        left: 0,
        width: "331px",
      },
    ],
    fixedHeader: true,
    fixSiderbar: true,
    suppressSiderWhenMenuEmpty: true,
    siderWidth: 220,
  };

  return <ProLayout {...layoutProps}> {children}</ProLayout>;
};
