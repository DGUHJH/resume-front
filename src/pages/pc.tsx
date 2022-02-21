import CommonDivider from 'components/Divider/Common';
import MainAbilityContainer from 'containers/Main/Ability/pc';
import MainAcademicContainer from 'containers/Main/Academic/pc';
import MainCareerContainer from 'containers/Main/Career/pc';
import MainContactContainer from 'containers/Main/Contact/pc';
import MainHelloContainer from 'containers/Main/Hello/pc';
import MainIntroContainer from 'containers/Main/Intro/pc';
import MainTechStack from 'containers/Main/TechStack/pc';
import * as Styled from './styled';

const Main = () => {
  return (
    <Styled.Root>
      <Styled.RootContainer>
        <MainHelloContainer />
        <CommonDivider width={800} height={1} background="#c4c4c4" />
        <MainIntroContainer />
        <CommonDivider width={800} height={1} background="#c4c4c4" />
        <MainCareerContainer />
        <CommonDivider width={800} height={1} background="#c4c4c4" />
        <MainTechStack />
        <CommonDivider width={800} height={1} background="#c4c4c4" />
        <MainAbilityContainer />
        <CommonDivider width={800} height={1} background="#c4c4c4" />
        <MainAcademicContainer />
        <CommonDivider width={800} height={1} background="#c4c4c4" />
        <MainContactContainer />
      </Styled.RootContainer>
    </Styled.Root>
  );
};

export default Main;
