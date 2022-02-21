import MainHelloContainer from 'containers/Main/Hello/pc';
import MainIntroContainer from 'containers/Main/Intro/pc';
import * as Styled from './styled';

const Main = () => {
  return (
    <Styled.Root>
      <Styled.RootContainer>
        <MainHelloContainer />
        <MainIntroContainer />
      </Styled.RootContainer>
    </Styled.Root>
  );
};

export default Main;
