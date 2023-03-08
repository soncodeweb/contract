import React from "react";
import DashboardTopbar from "../modules/dashboard/DashboardTopbar";
import { Layout, Space } from "antd";
import DashboardSidebar from "../modules/dashboard/DashboardSidebar";
import "./LayoutDashboard.scss";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
const LayoutDashboard = (props) => {
  const { children } = props;
  return (
    <Layout>
      <Sider width={300}>
        <DashboardSidebar></DashboardSidebar>
      </Sider>
      <Layout>
        <DashboardTopbar></DashboardTopbar>
        <Outlet></Outlet>
      </Layout>
    </Layout>
  );
};

export default LayoutDashboard;
