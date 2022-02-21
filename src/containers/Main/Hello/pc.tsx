import CommonTypography from 'components/Typography/Common';
import { isMobile } from 'react-device-detect';
import * as Styled from './styled';

const MainHelloContainer = () => {
  return (
    <Styled.Root>
      <CommonTypography
        fontFamily="NotoSansKR-Bold"
        fontSize={isMobile ? 24 : 40}
        color="#111"
        lineHeight="150%"
      >
        안녕하세요.
      </CommonTypography>
      <CommonTypography
        fontFamily="NotoSansKR-Medium"
        fontSize={isMobile ? 18 : 24}
        color="#111"
        lineHeight="150%"
        marginTop={10}
      >
        정교한 컨벤션을 통해
      </CommonTypography>
      <Styled.LineContainer>
        <CommonTypography
          fontFamily="NotoSansKR-Bold"
          fontSize={isMobile ? 18 : 24}
          color="rgba(0, 105, 228, 1)"
          animation="Point 1s infinite"
          marginTop={10}
          marginRight={6}
        >
          고민 없는
        </CommonTypography>
        <CommonTypography
          fontFamily="NotoSansKR-Medium"
          fontSize={isMobile ? 18 : 24}
          color="#111"
          lineHeight="150%"
          marginTop={10}
        >
          개발을 추구하는
        </CommonTypography>
      </Styled.LineContainer>
      <CommonTypography
        fontFamily="NotoSansKR-Medium"
        fontSize={isMobile ? 18 : 24}
        color="#111"
        marginTop={10}
      >
        웹 프론트엔드 개발자 황재형입니다.
      </CommonTypography>
      <Styled.SummaryContainer>
        <CommonTypography
          fontFamily="NotoSansKR-Regular"
          fontSize={isMobile ? 12 : 18}
          color="#111"
          marginTop={10}
          lineHeight="150%"
        >
          서울에서 2년차 웹 프론트엔드 개발자로 일하고 있습니다. 주니어지만
          스스로 주도적으로 일을 해 온 경험이 많아서 능동적으로 이슈와 업무를
          정의해서 해결해 나갈 수 있습니다. 또한 능동적이고 적극적인
          커뮤니케이션으로 문제 해결을 하려고 노력합니다. 더욱 더 좋은 개발자가
          되기를 갈망하며 끊임없이 학습하고 경험하고 있습니다.
        </CommonTypography>
      </Styled.SummaryContainer>
    </Styled.Root>
  );
};

export default MainHelloContainer;
