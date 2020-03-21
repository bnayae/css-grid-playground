import React from "react";
import Link from "next/link";
import { IClassNameProps } from "../../interfaces";

export const BasicLayout = ({ className }: IClassNameProps) => {
  return (
    <div className={className}>
      <div className="grid-container">
        <div className="top">Reduce the browser width below 900px</div>
        <div className="side">
          <Link href="/">
            <a>Go Home</a>
          </Link>
        </div>
        <div className="main">Main</div>
        <div className="right">Right</div>
        <div className="footer">
          <Link href="https://www.w3schools.com/css/tryit.asp?filename=trycss_grid_layout_named">
            <a target="_blank">Credit</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
