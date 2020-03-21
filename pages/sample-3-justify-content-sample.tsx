import React from 'react';
import {
  JustifyContentSpaceEvenlySampleStyled,
  JustifyContentSpaceAroundSampleStyled,
} from '../components/justify-content-sample';
import { JustifyContentSpaceBetweenSampleStyled } from '../components/justify-content-sample/JustifyContentSpaceBetweenSampleStyled';

const SampleJustifyContentSample: React.FunctionComponent = () => (
  <>
    <h1>Space Evenly</h1>
    <JustifyContentSpaceEvenlySampleStyled />
    <h1>Space Around</h1>
    <JustifyContentSpaceAroundSampleStyled />
    <h1>Space Between</h1>
    <JustifyContentSpaceBetweenSampleStyled />
  </>
);

export default SampleJustifyContentSample;
