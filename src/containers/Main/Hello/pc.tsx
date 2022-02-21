import CommonTypography from 'components/Typography/Common';
import * as Styled from './styled';

const MainHelloContainer = () => {
  return (
    <Styled.Root>
      <CommonTypography
        fontFamily="NotoSansKR-Bold"
        fontSize={40}
        color="#111"
        lineHeight="150%"
      >
        안녕하세요.
      </CommonTypography>
      <CommonTypography
        fontFamily="NotoSansKR-Medium"
        fontSize={24}
        color="#111"
        lineHeight="150%"
        marginTop={10}
      >
        정교한 컨벤션을 통해
      </CommonTypography>
      <Styled.LineContainer>
        <CommonTypography
          fontFamily="NotoSansKR-Bold"
          fontSize={24}
          color="rgba(0, 105, 228, 1)"
          animation="Point 1s infinite"
          marginTop={10}
          marginRight={6}
        >
          고민 없는
        </CommonTypography>
        <CommonTypography
          fontFamily="NotoSansKR-Medium"
          fontSize={24}
          color="#111"
          lineHeight="150%"
          marginTop={10}
        >
          개발을 추구하는
        </CommonTypography>
      </Styled.LineContainer>
      <CommonTypography
        fontFamily="NotoSansKR-Medium"
        fontSize={24}
        color="#111"
        marginTop={10}
      >
        웹 프론트엔드 개발자 황재형입니다.
      </CommonTypography>
    </Styled.Root>
  );
};

export default MainHelloContainer;
