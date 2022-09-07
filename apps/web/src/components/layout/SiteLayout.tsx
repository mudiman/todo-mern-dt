import { Layout, Menu } from "antd";

import React from "react";
import SiteHeader from "./SiteHeader";
import { Content } from "antd/lib/layout/layout";
import SiteSidebar from "./SiteSidebar";
import SiteFooter from "./SiteFooter";
import { ToastContainer } from "react-toastify";

type Props = {
  children: JSX.Element;
};

const SiteLayout: React.FC<Props> = ({ children }) => {
  return (
    <Layout>
      <SiteHeader />
      <Content style={{ padding: "0 50px" }}>
        <Layout
          className="site-layout-background"
          style={{ padding: "24px 0", flexDirection: "row" }}
        >
          <SiteSidebar />
          <Content style={{ padding: "0 24px", minHeight: 280, width: 600 }}>
            {children}
          </Content>
        </Layout>
        <ToastContainer />
      </Content>
      <SiteFooter />
    </Layout>
  );
};

export default SiteLayout;
