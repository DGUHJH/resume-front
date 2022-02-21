import { Typography } from '@mui/material';
import styled from 'styled-components';
import { FontType } from 'types/common';

export const Root = styled(Typography)<FontType>`
  &&& {
    font-family: ${(props) => props.fontFamily};
    font-size: ${(props) => props.fontSize}px;
    font-weight: ${(props) => props.fontWeight ?? 'inherit'};
    color: ${(props) => props.color ?? '#000'};
    line-height: ${(props) => props.lineHeight ?? '120%'};
    margin-top: ${(props) => props.marginTop ?? 0}px;
    margin-bottom: ${(props) => props.marginBottom ?? 0}px;
    margin-left: ${(props) => props.marginLeft ?? 0}px;
    margin-right: ${(props) => props.marginRight ?? 0}px;
    cursor: ${(props) => (props.onClick ? `pointer` : `default`)};
  }
`;
