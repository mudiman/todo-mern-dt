import { Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";

import Sider from "antd/lib/layout/Sider";
import SubMenu from "antd/lib/menu/SubMenu";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SiteSidebar = () => {
  const navigate = useNavigate();

  const items = [
    {
      label: "Todos",
      key: "todos",
      children: [
        {
          label: "List",
          key: "todo-list",
          onClick: () => {
            navigate("/todo/index");
          },
        },
        {
          label: "Create",
          key: "todo-create",
          onClick: () => {
            navigate("/todo/create");
          },
        },
      ],
    },
  ];

  return (
    <Sider className="site-layout-background" width={200} collapsible>
      <Menu theme="dark" mode="inline" items={items}></Menu>
    </Sider>
  );
};

export default SiteSidebar;
