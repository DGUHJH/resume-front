import CommonTypography from 'components/Typography/Common';
import * as Styled from './styled';

const MainAcademicContainer = () => {
  return (
    <Styled.Root>
      <CommonTypography
        fontFamily="NotoSansKR-Bold"
        fontSize={40}
        color="#111"
        lineHeight="150%"
      >
        학력
      </CommonTypography>
      <Styled.AcademicContainer>
        <CommonTypography
          fontFamily="NotoSansKR-Medium"
          fontSize={24}
          color="#111"
          lineHeight="150%"
        >
          동국대학교 서울캠퍼스 컴퓨터공학전공
        </CommonTypography>
        <CommonTypography
          fontFamily="NotoSansKR-Regular"
          fontSize={18}
          color="#555"
          lineHeight="180%"
          marginLeft={10}
        >
          2020년 3월 ~ (재학)
        </CommonTypography>
        <CommonTypography
          fontFamily="NotoSansKR-Regular"
          fontSize={18}
          color="#111"
          lineHeight="180%"
          marginLeft={10}
        >
          전반적인 computer science에 관한 내용에 대하여 배우고 있습니다. 학점은
          4.45로 1년 넘게 학과 1등을 지키고 있습니다.
        </CommonTypography>
      </Styled.AcademicContainer>
    </Styled.Root>
  );
};

export default MainAcademicContainer;
