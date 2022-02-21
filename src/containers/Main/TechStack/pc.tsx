import CommonDot from 'components/Dot/Common';
import CommonTypography from 'components/Typography/Common';
import { isMobile } from 'react-device-detect';
import * as Styled from './styled';

type StackDetailsType = {
  proficiency: '상' | '중상' | '중' | '하';
  title: string;
  content: string;
};

type StackType = {
  proficiency: '상' | '중상' | '중' | '중하' | '하';
  title: string;
  content: string;
  detailsList?: StackDetailsType[];
};

const stackDataList: StackType[] = [
  {
    proficiency: '중상',
    title: 'React (CRA, Next.js) ',
    content:
      'React의 특성과 필요성을 이해하며 컴포넌트 특성과 기타 세부적인 개념을 알고 이를 응용할 수 있습니다.',
    detailsList: [
      {
        proficiency: '중상',
        title: 'TypeScript',
        content:
          'TypeScript의 특성과 필요성을 이해하며 TypeScript를 활용하여 코드 생산성을 극대화할 수 있습니다.',
      },
      {
        proficiency: '중상',
        title: 'Redux, Mobx',
        content:
          '상태 관리 라이브러리의 특성과 필요성을 이해하며 상태 관리 라이브러리를 활용하여 props drilling이 일어나지 않는 코드를 짤 수 있습니다. 또한 세부적인 컨벤션을 정하여 정형화된 코드를 짤 수 있습니다.',
      },
      {
        proficiency: '상',
        title: 'Styled-components',
        content:
          'Styled-components의 특성과 필요성을 이해하며 Styled-components를 통해 동적 웹을 구성할 수 있습니다. 디자인 시안과 똑같이 만들 수 있으며 디자인 마감 작업과 라이브 코딩을 할 수 있습니다.',
      },
    ],
  },
  {
    proficiency: '중',
    title: 'React-Native',
    content:
      'React-Native의 특성과 필요성을 이해하며 어플리케이션을 배포할 수 있습니다.',
  },
  {
    proficiency: '중하',
    title: 'Django',
    content: 'Django의 특성과 필요성을 이해하며 모델을 구성할 수 있습니다.',
  },
];

const MainTechStack = () => {
  return (
    <Styled.Root>
      <CommonTypography
        fontFamily="NotoSansKR-Bold"
        fontSize={isMobile ? 32 : 40}
        color="#111"
        lineHeight="150%"
      >
        기술스택
      </CommonTypography>
      <Styled.StackContainer>
        {stackDataList.map((stackData, index) => (
          <Styled.StackInfoContainer key={`stack_info_container_${index}`}>
            <CommonTypography
              fontFamily="NotoSansKR-Medium"
              fontSize={isMobile ? 18 : 24}
              color="#111"
              lineHeight="150%"
            >
              {stackData.title} ({stackData.proficiency})
            </CommonTypography>
            <CommonTypography
              fontFamily="NotoSansKR-Regular"
              fontSize={isMobile ? 12 : 18}
              color="#111"
              lineHeight="180%"
              marginLeft={10}
            >
              {stackData.content}
            </CommonTypography>
            {stackData.detailsList?.map((details, index2) => (
              <Styled.StackInfoDetailsContainer
                key={`stack_info_details_container_${index}_${index2}`}
              >
                <CommonTypography
                  fontFamily="NotoSansKR-Medium"
                  fontSize={isMobile ? 12 : 18}
                  color="#111"
                  lineHeight="180%"
                >
                  <CommonDot width={4} background="#111" marginRight={10} />
                  {details.title} ({details.proficiency})
                </CommonTypography>
                <CommonTypography
                  fontFamily="NotoSansKR-Regular"
                  fontSize={isMobile ? 10 : 16}
                  color="#111"
                  lineHeight="180%"
                  marginLeft={15}
                >
                  {details.content}
                </CommonTypography>
              </Styled.StackInfoDetailsContainer>
            ))}
          </Styled.StackInfoContainer>
        ))}
      </Styled.StackContainer>
    </Styled.Root>
  );
};

export default MainTechStack;
