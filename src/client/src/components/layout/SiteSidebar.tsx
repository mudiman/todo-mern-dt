import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import Sider from 'antd/lib/layout/Sider';
import SubMenu from 'antd/lib/menu/SubMenu';
import React from 'react';
import { Link } from "react-router-dom";



const SiteSidebar = () => {
    return (
        <Sider className="site-layout-background" width={200}  collapsible>
            <Menu theme="dark" mode="inline">
                <SubMenu key="accounts" icon={<UserOutlined />} title="Todos">
                    <Menu.Item>
                        <Link to="/todo/index">List</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/todo/create">Create</Link>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    );
}

export default SiteSidebar;