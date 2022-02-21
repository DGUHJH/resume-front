import { Container } from '@mui/material';
import styled from 'styled-components';

type RootProps = {
  isVisible: boolean;
};

export const Root = styled.div<RootProps>`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  z-index: 5;
  transform: ${(props) =>
    props.isVisible ? `translateY(0)` : `translateY(-100px)`};
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  backdrop-filter: blur(10px);
  transition: transform 0.25s ease-out 0.25s;
  border-bottom: 2px #111 solid;
`;

export const RootContainer = styled(Container)`
  &&& {
    max-width: 800px;
    height: 60px;
    display: flex;
    align-items: center;
    gap: 40px;
    padding: 0;
  }
`;
