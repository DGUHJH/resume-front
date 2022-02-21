import { Container } from '@mui/material';
import styled from 'styled-components';

export const Root = styled.div`
  width: 100%;
`;

export const RootContainer = styled(Container)`
  &&& {
    max-width: 800px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 0;
    margin-top: 20px;
  }
`;
