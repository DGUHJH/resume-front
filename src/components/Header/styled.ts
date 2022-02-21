import { Container } from '@mui/material';
import styled from 'styled-components';

type RootProps = {
  isVisible: boolean;
  isMobile: boolean;
};

export const Root = styled.div<RootProps>`
  width: 100%;
  height: ${(props) => (props.isMobile ? 35 : 60)}px;
  position: fixed;
  top: 0;
  z-index: 5;
  transform: ${(props) =>
    props.isVisible ? `translateY(0)` : `translateY(-100px)`};
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  backdrop-filter: blur(50px);
  transition: transform 0.25s ease-out 0.25s;
  border-bottom: 2px #111 solid;
`;

type RootContainerProps = {
  isMobile: boolean;
};

export const RootContainer = styled(Container)<RootContainerProps>`
  &&& {
    max-width: 800px;
    height: ${(props) => (props.isMobile ? 35 : 60)}px;
    display: flex;
    align-items: center;
    gap: ${(props) => (props.isMobile ? 10 : 40)}px;
    padding: 0;
  }
`;
