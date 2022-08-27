import { Menu } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React from 'react';
import { useStore } from '../../store/authStore';


const SiteHeader = () => {
  const { logout } = useStore();


  const items = [
    { label: 'TodoApp', key: 'todolist' },
    {
      label: 'Account',
      key: 'submenu',
      children: [{
        label: 'logout', key: 'submenu-item-1', onClick: () => {
          logout()
        }
      }],
    },
  ];

  return (
    <Header>
        <title>Todo App</title>
        <meta name="description" content="Todo management app" />
        <meta name="theme-color" content="#008f68" />
        <meta
          http-equiv="Content-Security-Policy"
          content="
 connect-src 'self';
 default-src 'none';
 img-src 'self';
 manifest-src 'self';
 script-src-elem 'self';
 style-src-elem 'self';
 ">
      <div className="logo" />
      <Menu mode="horizontal" items={items}>
      </Menu>
    </Header>
  );
}

export default SiteHeader;