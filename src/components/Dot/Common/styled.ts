import styled from 'styled-components';
import { DotType } from 'types/common';

export const Root = styled.div<DotType>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height ?? props.width}px;
  background: ${(props) => props.background};
  border-radius: ${(props) => props.width}px;
`;
