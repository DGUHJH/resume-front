import { Container } from '@mui/material';
import styled from 'styled-components';
export const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 150px;
`;

type RootProps = { isMobile: boolean };

export const RootContainer = styled(Container)<RootProps>`
  &&& {
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: ${(props) => (props.isMobile ? 'center' : 'flex-start')};
    gap: 80px;
    padding: ${(props) => (props.isMobile ? 20 : 0)}px;
    margin-top: 40px;
  }
`;
