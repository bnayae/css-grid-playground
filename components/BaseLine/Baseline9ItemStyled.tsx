import styled from 'styled-components';
import { Baseline9Item } from './Baseline9Item';

export const Baseline9ItemStyled = styled(Baseline9Item)`
  background-color: ${props => props.theme.colors.primary};

  .grid-item {
    background-color: ${props => props.theme.colors.secondary};
    border: 0.2rem solid #444;
    padding: 1rem;
    font: ${props => props.theme.fonts.subtitle};
    text-align: center;
  }

  .link {
    padding: 0.1rem;
    font-size: 2.5rem;
    color: #bbb;
    text-align: left;
    padding: 1rem;
  }
`;
