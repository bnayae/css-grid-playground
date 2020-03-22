import React from 'react';
import Link from 'next/link';
import { IClassNameProps } from '../../interfaces';

export const Baseline9Item = ({ className }: IClassNameProps) => {
  return (
    <div className={className}>
      <div className="grid-container">
        <div className="grid-item A">1</div>
        <div className="grid-item B">2</div>
        <div className="grid-item C">3</div>
        <div className="grid-item D">4</div>
        <div className="grid-item E">5</div>
        <div className="grid-item F">6</div>
        <div className="grid-item G">7</div>
        <div className="grid-item H">8</div>
        <div className="grid-item I">9</div>
      </div>
      <div className="link">
        <Link href="/">
          <a>Go Home</a>
        </Link>
      </div>
    </div>
  );
};
