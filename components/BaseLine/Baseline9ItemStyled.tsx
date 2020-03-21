import styled from 'styled-components';
import { Baseline9Item } from './Baseline9Item';

export const Baseline9ItemStyled = styled(Baseline9Item)`
  background-color: ${props => props.theme.colors.primary};

  .grid-item {
    background-color: ${props => props.theme.colors.secondary};
    border: 0.2rem solid #444;
    padding: 2rem;
    font: ${props => props.theme.fonts.subtitle};
    text-align: center;
  }
`;
