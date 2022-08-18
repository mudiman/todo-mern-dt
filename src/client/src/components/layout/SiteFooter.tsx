import { Menu } from 'antd';
import { Footer, Header } from 'antd/lib/layout/layout';
import React from 'react';
import { Link } from "react-router-dom";



const SiteFooter = () => {
    return (
      <Footer style={{textAlign: 'center'}}>Mudiman ©2020 Created with Ant Design
        <a target="_blank" href="https://mudiman.github.io"> Mudassar Ali</a>
      </Footer>
    );
  }
  
  export default SiteFooter;