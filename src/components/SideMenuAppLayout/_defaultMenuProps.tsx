import {
  BookOutlined,
  ExceptionOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import RefIcon from "@ant-design/icons/lib/icons/AppstoreAddOutlined";

export default {
  route: {
    path: "/",
    routes: [
      {
        path: "/",
        name: "Home",
        icon: <HomeOutlined />,
        component: "",
        locale: "home",
      },
      {
        path: "/Page2",
        name: "Page 2",
        icon: <BookOutlined />,
        locale: "page_2",
        routes: [
          {
            path: "/page2/subpage",
            name: "Sub Page",
            icon: <RefIcon />,
            locale: "page_2_sub",
          },
        ],
      },
      {
        name: "Not Found Page",
        icon: <ExceptionOutlined />,
        path: "/Silent Is Gold",
        locale:'not_found_page',
      },
    ],
  },
  location: {
    pathname: "/",
  },
};
