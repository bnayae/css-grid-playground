import React from 'react';
import { IClassNameProps } from '../../interfaces';
import { AlignContentSpaceEvenlySampleStyled, AlignContentSpaceAroundSampleStyled } from '.';
import { AlignContentSpaceBetweenSampleStyled } from './AlignContentSpaceBetweenSampleStyled';
import { AlignContentCenterSampleStyled } from './AlignContentCenterSampleStyled';
import { AlignContentStartSampleStyled } from './AlignContentStartSampleStyled';
import { AlignContentEndSampleStyled } from './AlignContentEndSampleStyled';

export const AlignContentLayout = ({ className }: IClassNameProps) => {
  return (
    <div className={className}>
      <div className="parent-grid-container">
        <div className="child-grid-container">
          <h1 className="title">Space Evenly</h1>
          <AlignContentSpaceEvenlySampleStyled className="sample" />
        </div>
        <div className="child-grid-container">
          <h1 className="title">Space Around</h1>
          <AlignContentSpaceAroundSampleStyled className="sample" />
        </div>
        <div className="child-grid-container">
          <h1 className="title">Space Between</h1>
          <AlignContentSpaceBetweenSampleStyled className="sample" />
        </div>
        <div className="child-grid-container">
          <h1 className="title">Center</h1>
          <AlignContentCenterSampleStyled className="sample" />
        </div>
        <div className="child-grid-container">
          <h1 className="title">Start</h1>
          <AlignContentStartSampleStyled className="sample" />
        </div>
        <div className="child-grid-container">
          <h1 className="title">End</h1>
          <AlignContentEndSampleStyled className="sample" />
        </div>
      </div>
    </div>
  );
};
