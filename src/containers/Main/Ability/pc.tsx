import CommonDot from 'components/Dot/Common';
import CommonTypography from 'components/Typography/Common';
import { isMobile } from 'react-device-detect';
import * as Styled from './styled';

type AbilityType = {
  title: string;
  contentList: string[];
};

const abilityDataList: AbilityType[] = [
  {
    title: '퍼블리싱',
    contentList: [
      'figma, zeplin, adobe xd 등 디자인 협업 프로그램의 사용법을 숙지하고 있고 디자인 시안과 동일하게 퍼블리싱을 할 수 있습니다.',
      '반응형과 적응형의 개념에 관한 이해가 있으며, 이를 고려하여 퍼블리싱을 할 수 있습니다.',
      'css animation, transform과 같은 속성을 활용하여 동적인 이벤트를 줄 수 있습니다.',
      'css convention(naming, order)을 지키며 코딩을 할 수 있습니다.',
      '간단한 라이브 코딩이 가능합니다.',
    ],
  },
  {
    title: 'React',
    contentList: [
      'naming convention을 지켜 코딩을 진행하고 있고 변수명과 함수명 등, 프로젝트에 사용되는 이름을 직관적으로 지을 수 있습니다.',
      '재사용성을 고려하여 컴포넌트를 구성할 수 있고 코드의 반복을 최소화할 수 있습니다.',
      'flux 패턴을 이해하고 있고 의존성을 고려하여 Redux의 아키텍쳐를 설계할 수 있으며 이를 컴포넌트에 적용시킬 수 있습니다.',
      'Redux와 Mobx의 개념과 필요성을 잘 이해하고 있습니다.',
      'jwt의 개념과 필요성을 잘 이해하고 있습니다.',
      'folder structure 설계의 중요성을 알고 이를 설계할 수 있습니다.',
    ],
  },
  {
    title: '협업',
    contentList: [
      'jira, confluence, trello, notion 등 협업 관리 툴의 사용법과 필요성을 잘 이해하고 사용할 수 있습니다.',
      'git convention을 활용하여 git flow 관리가 가능합니다.',
      'backend(django, node 등)에 관한 기본적인 지식이 있고 api spec을 제작할 수 있습니다.',
      'Redux와 Mobx의 개념과 필요성을 잘 이해하고 있습니다.',
    ],
  },
];

const MainAbilityContainer = () => {
  return (
    <Styled.Root>
      <CommonTypography
        fontFamily="NotoSansKR-Bold"
        fontSize={isMobile ? 32 : 40}
        color="#111"
        lineHeight="150%"
      >
        기술역량
      </CommonTypography>
      <Styled.AbilityContainer>
        {abilityDataList.map((abilityData, index) => (
          <Styled.AbilityInfoContainer
            key={`main_ability_info_container_${index}`}
          >
            <CommonTypography
              fontFamily="NotoSansKR-Bold"
              fontSize={isMobile ? 18 : 24}
              color="#111"
              lineHeight="150%"
            >
              {abilityData.title}
            </CommonTypography>
            {abilityData.contentList?.map((content, index2) => (
              <Styled.AbilityInfoDetailsContainer
                key={`main_ability_info_details_container_${index}_${index2}`}
              >
                <CommonDot
                  width={4}
                  background="#111"
                  marginTop={11}
                  marginRight={10}
                />
                <CommonTypography
                  fontFamily="NotoSansKR-Regular"
                  fontSize={isMobile ? 12 : 18}
                  color="#111"
                  lineHeight="150%"
                >
                  {content}
                </CommonTypography>
              </Styled.AbilityInfoDetailsContainer>
            ))}
          </Styled.AbilityInfoContainer>
        ))}
      </Styled.AbilityContainer>
    </Styled.Root>
  );
};

export default MainAbilityContainer;
