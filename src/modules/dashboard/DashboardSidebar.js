import { Menu } from "antd";
import React from "react";
import {
  MailOutlined,
  SettingOutlined,
  AppstoreOutlined,
  LoginOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import "./DashboardSidebar.scss";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const itemMenus = [
  getItem("Navigation One", "sub1", <MailOutlined />, [
    getItem("Option 1", "1"),
    getItem("Option 2", "2"),
    getItem("Option 3", "3"),
    getItem("Option 4", "4"),
  ]),
  getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Submenu", "sub3", null, [
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
  ]),
];

const itemSupports = [
  getItem("Setting", "sub1", <SettingOutlined />),
  getItem("Help", "sub2", <QuestionCircleOutlined />),
  getItem("Logout", "sub3", <LoginOutlined />),
];

const rootSubmenuKeys = ["sub1", "sub2", "sub4"];

const DashboardSidebar = () => {
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img
          src="https://martech.com.vn/pictures/catalog/logo/logo.svg"
          alt=""
          className="sidebar__img"
        />
      </div>
      <div className="sidebar__menu">
        <h3 className="menu__title">Menu</h3>
        <Menu
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          style={{
            width: "100%",
          }}
          items={itemMenus}
        />
      </div>
      <div className="sidebar__support">
        <h3 className="support__title">Support</h3>
        <Menu
          mode="inline"
          style={{
            width: "100%",
          }}
          items={itemSupports}
        />
      </div>
    </div>
  );
};

export default DashboardSidebar;
