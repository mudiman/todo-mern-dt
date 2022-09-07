import { Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import { useStore } from "../../store/authStore";

const SiteHeader = () => {
  const { logout } = useStore();

  const items = [
    { label: "TodoApp", key: "todolist" },
    {
      label: "Account",
      key: "account",
      children: [
        {
          label: "logout",
          key: "logout",
          onClick: () => {
            logout();
          },
        },
      ],
    },
  ];

  return (
    <Header>
      <div className="logo" />
      <Menu mode="horizontal" items={items}></Menu>
    </Header>
  );
};

export default SiteHeader;
