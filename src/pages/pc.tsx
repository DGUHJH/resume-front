import MainAbilityContainer from 'containers/Main/Ability/pc';
import MainAcademicContainer from 'containers/Main/Academic/pc';
import MainCareerContainer from 'containers/Main/Career/pc';
import MainHelloContainer from 'containers/Main/Hello/pc';
import MainIntroContainer from 'containers/Main/Intro/pc';
import MainTechStack from 'containers/Main/TechStack/pc';
import * as Styled from './styled';

const Main = () => {
  return (
    <Styled.Root>
      <Styled.RootContainer>
        <MainHelloContainer />
        <MainIntroContainer />
        <MainCareerContainer />
        <MainAcademicContainer />
        <MainTechStack />
        <MainAbilityContainer />
      </Styled.RootContainer>
    </Styled.Root>
  );
};

export default Main;
