import React from 'react';
import { IClassNameProps, IChildrenProps } from '../../../interfaces';

export const SectionLayout = ({ className, children }: IClassNameProps & IChildrenProps) => {
  return (
    <div className={className}>
      <div className="main">
        <div className="grid-container-page">
          <div className="margin" />
          <div className="page-section">{children}</div>
          <div className="margin" />
        </div>
      </div>
    </div>
  );
};
