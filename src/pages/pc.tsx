import CommonDivider from 'components/Divider/Common';
import Header from 'components/Header/pc';
import MainAbilityContainer from 'containers/Main/Ability/pc';
import MainAcademicContainer from 'containers/Main/Academic/pc';
import MainCareerContainer from 'containers/Main/Career/pc';
import MainContactContainer from 'containers/Main/Contact/pc';
import MainHelloContainer from 'containers/Main/Hello/pc';
import MainIntroContainer from 'containers/Main/Intro/pc';
import MainTechStack from 'containers/Main/TechStack/pc';
import { useEffect, useRef, useState } from 'react';
import { isMobile } from 'react-device-detect';
import * as Styled from './styled';

type HeaderDataType = {
  label: string;
  onClick: () => void;
};
const Main = () => {
  const [offset, setOffset] = useState(0);
  const dividerRef = [
    useRef<any>(),
    useRef<any>(),
    useRef<any>(),
    useRef<any>(),
    useRef<any>(),
    useRef<any>(),
  ];

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onHeaderScrollToRef = (ref: any) => () =>
    window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' });

  const headerDataList: HeaderDataType[] = [
    {
      label: '프로필',
      onClick: onHeaderScrollToRef(dividerRef[0]),
    },
    {
      label: '경력',
      onClick: onHeaderScrollToRef(dividerRef[1]),
    },
    {
      label: '기술스택',
      onClick: onHeaderScrollToRef(dividerRef[2]),
    },
    {
      label: '기술역량',
      onClick: onHeaderScrollToRef(dividerRef[3]),
    },
    {
      label: '학력',
      onClick: onHeaderScrollToRef(dividerRef[4]),
    },
    {
      label: 'Contact',
      onClick: onHeaderScrollToRef(dividerRef[5]),
    },
  ];

  return (
    <Styled.Root>
      <Header isVisible={offset > 100} headerDataList={headerDataList} />
      <Styled.RootContainer isMobile={isMobile}>
        <MainHelloContainer />
        <div ref={dividerRef[0]}>
          <CommonDivider
            width={isMobile ? 320 : 800}
            height={1}
            background="#c4c4c4"
          />
        </div>
        <MainIntroContainer />
        <div ref={dividerRef[1]}>
          <CommonDivider
            width={isMobile ? 320 : 800}
            height={1}
            background="#c4c4c4"
          />
        </div>
        <MainCareerContainer />
        <div ref={dividerRef[2]}>
          <CommonDivider
            width={isMobile ? 320 : 800}
            height={1}
            background="#c4c4c4"
          />
        </div>
        <MainTechStack />
        <div ref={dividerRef[3]}>
          <CommonDivider
            width={isMobile ? 320 : 800}
            height={1}
            background="#c4c4c4"
          />
        </div>
        <MainAbilityContainer />
        <div ref={dividerRef[4]}>
          <CommonDivider
            width={isMobile ? 320 : 800}
            height={1}
            background="#c4c4c4"
          />
        </div>
        <MainAcademicContainer />
        <div ref={dividerRef[5]}>
          <CommonDivider
            width={isMobile ? 320 : 800}
            height={1}
            background="#c4c4c4"
          />
        </div>
        <MainContactContainer />
      </Styled.RootContainer>
    </Styled.Root>
  );
};

export default Main;
