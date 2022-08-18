import { Menu } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React from 'react';
import { Link } from "react-router-dom";



const SiteHeader = () => {
    return (
        <Header>
            <h1>Todo App</h1>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="logout" onClick={() => {
                    //authService.logout()
                }}>Logout</Menu.Item>
            </Menu>
        </Header>
    );
}

export default SiteHeader;