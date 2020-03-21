import React from "react";
import Link from "next/link";
import { IClassNameProps } from "../../interfaces";

export const GapSample = ({ className }: IClassNameProps) => {
  return (
    <div className={className}>
      <div className="grid-container">
        <div className="grid-item">1</div>
        <div className="grid-item">2</div>
        <div className="grid-item">3</div>
        <div className="grid-item">4</div>
        <div className="grid-item">5</div>
        <div className="grid-item">6</div>
        <div className="grid-item">7</div>
        <div className="grid-item">8</div>
        <div className="grid-item">
          <Link href="/">
            <a>Go Home</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
