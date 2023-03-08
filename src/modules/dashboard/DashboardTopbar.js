import { Button } from "antd";
import React from "react";
import "./DashboardTopbar.scss";

const DashboardTopbar = () => {
  return (
    <div className="topbar">
      <h2 className="topbar__title">Dashboard</h2>
      <div className="topbar__right">
        <div className="topbar__search">
          <input
            type="text"
            placeholder="Search anything... "
            className="search__input"
          />
        </div>
        <div className="topbar__btn">
          <Button type="primary" className="btn">
            Create a contract
          </Button>
        </div>
        <div className="topbar__notifi">
          <img src="/bell-solid-24.png" alt="" className="notifi__img" />
        </div>
        <div className="topbar__setting">
          <img
            src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
            className="setting__img"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardTopbar;
