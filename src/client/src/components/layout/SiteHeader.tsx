import { Menu } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { Typography } from 'antd';
import React from 'react';
import { useStore } from '../../store/authStore';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;



const SiteHeader = () => {
    const { logout } = useStore();
  

    const items = [
        { label: 'TodoApp', key: 'todolist'},
        {
          label: 'Account',
          key: 'submenu',
          children: [{ label: 'logout', key: 'submenu-item-1', onClick: () => {
            logout()
        }}],
        },
      ];

    return (
        <Header>
            <div className="logo" />
            <Menu mode="horizontal" items={items}>
            </Menu>
        </Header>
    );
}

export default SiteHeader;