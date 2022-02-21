import CommonTypography from 'components/Typography/Common';
import * as Styled from './styled';

type HeaderDataType = {
  label: string;
  onClick: () => void;
};

type Props = {
  isVisible: boolean;
  headerDataList: HeaderDataType[];
};

const Header: React.FC<Props> = ({ headerDataList, isVisible }) => {
  return (
    <Styled.Root isVisible={isVisible}>
      <Styled.RootContainer>
        {headerDataList.map((headerData, index) => (
          <CommonTypography
            fontFamily="NotoSansKR-Bold"
            fontSize={20}
            color="#111"
            lineHeight="180%"
            onClick={headerData.onClick}
            key={`header_data_list_${index}`}
          >
            {headerData.label}
          </CommonTypography>
        ))}
      </Styled.RootContainer>
    </Styled.Root>
  );
};

export default Header;
