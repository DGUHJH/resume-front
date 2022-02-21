import profile from 'assets/images/profile.png';
import CommonImage from 'components/Image/Common';
import CommonTypography from 'components/Typography/Common';
import * as Styled from './styled';

type ProfileDataType = {
  header: string;
  content: string;
};

const profileDataList: ProfileDataType[] = [
  {
    header: '이름',
    content: '황재형',
  },
  {
    header: '생년',
    content: '2001.07.06',
  },
  {
    header: '연락처',
    content: '010-3120-4914',
  },
  {
    header: '이메일',
    content: 'ghkdwogud852@gmail.com',
  },
];

const MainHelloContainer = () => {
  return (
    <Styled.Root>
      <CommonTypography
        fontFamily="NotoSansKR-Bold"
        fontSize={40}
        color="#111"
        lineHeight="150%"
      >
        프로필
      </CommonTypography>
      <Styled.ProfileContainer>
        <Styled.ProfileInfoContainer>
          {profileDataList.map((profileData, index) => (
            <Styled.ProfileInfoLineContainer
              key={`main_profile_line_container_${index}`}
            >
              <Styled.ProfileInfoLineHeaderTypoWrapper>
                <CommonTypography
                  fontFamily="NotoSansKR-Medium"
                  fontSize={20}
                  color="#111"
                >
                  {profileData.header}
                </CommonTypography>
              </Styled.ProfileInfoLineHeaderTypoWrapper>
              <Styled.ProfileInfoLineContentTypoWrapper>
                <CommonTypography
                  fontFamily="NotoSansKR-Regular"
                  fontSize={18}
                  color="#111"
                >
                  {profileData.content}
                </CommonTypography>
              </Styled.ProfileInfoLineContentTypoWrapper>
            </Styled.ProfileInfoLineContainer>
          ))}
        </Styled.ProfileInfoContainer>
        <CommonImage src={profile} width={135} borderRadius={4} />
      </Styled.ProfileContainer>
    </Styled.Root>
  );
};

export default MainHelloContainer;
