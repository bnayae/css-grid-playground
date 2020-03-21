import React from 'react';
import {
  JustifyContentSpaceEvenlySampleStyled,
  JustifyContentSpaceAroundSampleStyled,
} from '../components/justify-content-sample';
import { JustifyContentSpaceBetweenSampleStyled } from '../components/justify-content-sample/JustifyContentSpaceBetweenSampleStyled';
import { JustifyContentCenterSampleStyled } from '../components/justify-content-sample/JustifyContentCenterSampleStyled';

const SampleJustifyContentSample: React.FunctionComponent = () => (
  <>
    <h1>Space Evenly</h1>
    <JustifyContentSpaceEvenlySampleStyled />
    <h1>Space Around</h1>
    <JustifyContentSpaceAroundSampleStyled />
    <h1>Space Between</h1>
    <JustifyContentSpaceBetweenSampleStyled />
    <h1>Center</h1>
    <JustifyContentCenterSampleStyled />
  </>
);

export default SampleJustifyContentSample;
