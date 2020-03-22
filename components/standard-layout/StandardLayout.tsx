import React, { useState } from 'react';
import Link from 'next/link';
import { IClassNameProps } from '../../interfaces';
import { SectionLayoutStyled } from './section/SectionLayoutStyled';
import { SectionAltLayoutStyled } from './section/SectionAltLayoutStyled';

export const StandardLayout = ({ className }: IClassNameProps) => {
  const [menuState, setMenuState] = useState(false);

  return (
    <div className={className}>
      <div className="grid-container">
        <div className="header">
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
              console.log(e.clientX);
              setMenuState((prev: boolean) => !prev);
            }}
          >
            Menu
          </button>
        </div>
        <div className={`menu ${menuState ? 'menu-open' : 'menu-close'}`}>
          <Link href="/">
            <a>Go Home</a>
          </Link>
        </div>
        <div className="main">
          <div className="main-content">
            <SectionLayoutStyled>
              <h1>Page 1</h1>
            </SectionLayoutStyled>
            <SectionAltLayoutStyled>
              <h1>Page 2</h1>
            </SectionAltLayoutStyled>
          </div>
        </div>
        <div className="footer">
          <p>Just a footer</p>
        </div>
      </div>
    </div>
  );
};
