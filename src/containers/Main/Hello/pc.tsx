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
        animation="fadeIn 0.5s"
      >
        안녕하세요.
      </CommonTypography>
      <CommonTypography
        fontFamily="NotoSansKR-Medium"
        fontSize={24}
        color="#111"
        lineHeight="150%"
        animation="fadeIn 0.5s"
      >
        웹 프론트엔드 개발자 황재형입니다.
      </CommonTypography>
    </Styled.Root>
  );
};

export default MainHelloContainer;
