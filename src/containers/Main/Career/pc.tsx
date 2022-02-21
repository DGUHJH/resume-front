import CommonDot from 'components/Dot/Common';
import CommonTypography from 'components/Typography/Common';
import { onLinkClick } from 'utils/common';
import * as Styled from './styled';

type CareerDataType = {
  title: string;
  date: string;
  content: string;
  workList?: {
    title: string;
    content: string;
    link: string;
  }[];
};

const CareerDataList: CareerDataType[] = [
  {
    title: '병역특례 산업기능요원 보충역 구직 진행 중',
    date: '2022년 1월 ~ (현재)',
    content: '현재 병역을 수행하기 위해 구직을 진행 중에 있습니다.',
  },
  {
    title: '메이커스디 웹 프론트엔드 개발자',
    date: '2020년 9월 ~ 2021년 12월 (1년 4개월)',
    content:
      '대학교 동문 선배님과 인연이 닿아 콘텐츠 저작권 거래 플랫폼, 디소스의 프론트엔드를 맡았습니다.',
    workList: [
      {
        title: '디소스(콘텐츠 저작권 거래 플랫폼)',
        content: 'React를 활용해 프론트엔드를 100% 전담 개발하였습니다.',
        link: 'https://thesource.co.kr',
      },
      {
        title: '타입머신(설문조사 플랫폼)',
        content:
          'React를 활용해 프론트엔드, Django를 활용해 백엔드를 개발하였으며 100% 전담 개발하였습니다.',
        link: 'https://typemachine.co.kr/test/intro/1',
      },
      {
        title: '메이커스디 홈페이지',
        content: 'React를 활용해 프론트엔드를 100% 전담 개발하였습니다.',
        link: 'https://makersthe.com',
      },
    ],
  },
  {
    title: '프리랜서 웹 개발자',
    date: '2019년 12월 ~ 2020년 8월 (약 10개월)',
    content:
      '생활비와 등록금을 벌기 위해 수능이 끝난 직후 프리랜서 생활을 시작하였습니다.',
    workList: [
      {
        title: '플레이톡톡(초등학생 비대면 역할극 플랫폼)',
        content:
          'React를 활용해 프론트엔드, Django를 활용해 백엔드를 개발하였으며 100% 전담 개발하였습니다.',
        link: 'https://playtt.kr',
      },
      {
        title: '농구 기록지 (Easy Basketball Stats)',
        content: 'Android sdk를 활용해 프론트엔드를 100% 전담 개발하였습니다.',
        link: 'https://play.google.com/store/apps/details?id=com.zanacho.record.basketballstats',
      },
    ],
  },
];

const MainCareerContainer = () => {
  return (
    <Styled.Root>
      <CommonTypography
        fontFamily="NotoSansKR-Bold"
        fontSize={40}
        color="#111"
        lineHeight="150%"
      >
        경력
      </CommonTypography>
      <Styled.CareerContainer>
        {CareerDataList.map((careerData, index) => (
          <Styled.CareerInfoContainer key={`career_info_container_${index}`}>
            <CommonTypography
              fontFamily="NotoSansKR-Medium"
              fontSize={24}
              color="#111"
              lineHeight="150%"
            >
              {careerData.title}
            </CommonTypography>
            <CommonTypography
              fontFamily="NotoSansKR-Regular"
              fontSize={18}
              color="#555"
              lineHeight="180%"
              marginLeft={10}
            >
              {careerData.date}
            </CommonTypography>
            <CommonTypography
              fontFamily="NotoSansKR-Regular"
              fontSize={18}
              color="#111"
              lineHeight="180%"
              marginLeft={10}
            >
              {careerData.content}
            </CommonTypography>
            {careerData.workList?.map((work, index2) => (
              <Styled.CareerInfoWorkContainer
                key={`career_info_work_container_${index}_${index2}`}
              >
                <CommonTypography
                  fontFamily="NotoSansKR-Medium"
                  fontSize={18}
                  color="#111"
                  lineHeight="180%"
                  onClick={onLinkClick(work.link)}
                >
                  <CommonDot width={4} background="#111" marginRight={10} />
                  {work.title} - 클릭
                </CommonTypography>
                <CommonTypography
                  fontFamily="NotoSansKR-Regular"
                  fontSize={16}
                  color="#111"
                  lineHeight="180%"
                  onClick={onLinkClick(work.link)}
                  marginLeft={15}
                >
                  {work.content}
                </CommonTypography>
              </Styled.CareerInfoWorkContainer>
            ))}
          </Styled.CareerInfoContainer>
        ))}
      </Styled.CareerContainer>
    </Styled.Root>
  );
};

export default MainCareerContainer;
