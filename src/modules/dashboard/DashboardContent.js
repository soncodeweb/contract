import { Input } from "antd";
import React from "react";
import "./DashboardContent.scss";
import UploadImage from "./UploadImage";
const DashboardContent = () => {
  return (
    <div className="content">
      <div className="content__inputName">
        <h3 className="inputName__title">CONTRACT INFORMATION</h3>
        <Input placeholder="Enter a contract" className="inputName__input" />
      </div>
      <div className="content__upload">
        <UploadImage className="upload__img"></UploadImage>
      </div>
      <div className="content__sign">
        <h4 className="sign__title">SIGN BY</h4>
        <div className="sign__inputGroup">
          <Input type="text" placeholder="Company A" />
          <span>And</span>
          <Input type="text" placeholder="Company B" />
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
