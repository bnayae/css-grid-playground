import React from "react";
import Link from "next/link";
import { IClassNameProps } from "../../interfaces";

export const InnerGridSample = ({ className }: IClassNameProps) => {
  return (
    <div className={className}>
      <div className="grid-container">
        <div className="grid-item">
          All direct children of the grid container automatically become grid
          items.
        </div>
        <div className="grid-item">2</div>
        <div className="grid-item">3</div>
        <div className="grid-item">4</div>
        <div className="inner-grid-container">
          <div className="grid-item-inner">A</div>
          <div className="grid-item-inner">B</div>
          <div className="grid-item-inner">C</div>
          <div className="grid-item-inner">D</div>
          <div className="grid-item-inner">E</div>
        </div>
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
