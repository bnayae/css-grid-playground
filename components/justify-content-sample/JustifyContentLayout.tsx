import React from 'react';
import { IClassNameProps } from '../../interfaces';
import { JustifyContentSpaceEvenlySampleStyled, JustifyContentSpaceAroundSampleStyled } from '.';
import { JustifyContentSpaceBetweenSampleStyled } from './JustifyContentSpaceBetweenSampleStyled';
import { JustifyContentCenterSampleStyled } from './JustifyContentCenterSampleStyled';

export const JustifyContentLayout = ({ className }: IClassNameProps) => {
  return (
    <div className={className}>
      <div className="parent-grid-container">
        <div className="child-grid-container">
          <h1 className="title">Space Evenly</h1>
          <JustifyContentSpaceEvenlySampleStyled className="sample" />
        </div>
        <div className="child-grid-container">
          <h1 className="title">Space Around</h1>
          <JustifyContentSpaceAroundSampleStyled className="sample" />
        </div>
        <div className="child-grid-container">
          <h1 className="title">Space Between</h1>
          <JustifyContentSpaceBetweenSampleStyled className="sample" />
        </div>
        <div className="child-grid-container">
          <h1 className="title">Center</h1>
          <JustifyContentCenterSampleStyled className="sample" />
        </div>
      </div>
    </div>
  );
};
