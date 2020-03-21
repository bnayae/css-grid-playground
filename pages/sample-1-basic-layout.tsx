import React from "react";
import Link from "next/link";

const Sample1BasicLayout: React.FunctionComponent = () => (
  <div className="grid-container">
    <div className="item1">Header</div>
    <div className="item2">
      <Link href="/">
        <a>Go Home</a>
      </Link>
    </div>
    <div className="item3">Main</div>
    <div className="item4">Right</div>
    <div className="item5">Footer</div>
  </div>
);

export default Sample1BasicLayout;
