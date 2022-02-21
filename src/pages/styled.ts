import { Container } from '@mui/material';
import styled from 'styled-components';

export const Root = styled.div`
  width: 100%;
  margin-bottom: 500px;
`;

export const RootContainer = styled(Container)`
  &&& {
    max-width: 800px;
    display: flex;
    flex-direction: column;
    gap: 80px;
    padding: 0;
    margin-top: 40px;
  }
`;
