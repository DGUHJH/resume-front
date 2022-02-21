import CommonDot from 'components/Dot/Common';
import CommonTypography from 'components/Typography/Common';
import { isMobile } from 'react-device-detect';
import { onLinkClick } from 'utils/common';
import * as Styled from './styled';

type ContactType = {
  label: string;
  link: string;
};

const contactDataList: ContactType[] = [
  { label: '이메일', link: 'mailto:ghkdwogud852@gmail.com' },
  { label: '로켓펀치', link: 'https://www.rocketpunch.com/@ghkdwogud852' },
  { label: 'Github', link: 'https://github.com/DGUHJH' },
  {
    label: '자기소개 페이지 소스 코드',
    link: 'https://github.com/DGUHJH/resume-front',
  },
  {
    label: '투두리스트 소스 코드',
    link: 'https://github.com/DGUHJH/humanscape-test',
  },
];

const MainContactContainer = () => {
  return (
    <Styled.Root>
      <CommonTypography
        fontFamily="NotoSansKR-Bold"
        fontSize={isMobile ? 32 : 40}
        color="#111"
        lineHeight="150%"
      >
        Contact
      </CommonTypography>
      <Styled.ContactContainer>
        {contactDataList.map((contactData, index) => (
          <Styled.ContactInfoContainer key={`contact_info_container_${index}`}>
            <CommonDot
              width={6}
              background="rgba(0, 105, 228, 1)"
              marginTop={16}
              marginLeft={8}
              marginRight={16}
            />
            <CommonTypography
              fontFamily="NotoSansKR-Medium"
              fontSize={isMobile ? 18 : 24}
              color="rgba(0, 105, 228, 1)"
              lineHeight="150%"
              onClick={onLinkClick(contactData.link)}
              animation="Point 1s infinite"
            >
              {contactData.label}
            </CommonTypography>
          </Styled.ContactInfoContainer>
        ))}
      </Styled.ContactContainer>
    </Styled.Root>
  );
};

export default MainContactContainer;
