export type FontType = {
  fontFamily:
    | 'NotoSansKR-Black'
    | 'NotoSansKR-Bold'
    | 'NotoSansKR-Medium'
    | 'NotoSansKR-Regular'
    | 'NotoSansKR-Thin'
    | 'NanumSquareLight'
    | 'NanumSquare'
    | 'NanumSquareBold'
    | 'NanumSquareExtraBold'
    | 'NanumSquareAcb'
    | 'NanumSquareAceb'
    | 'NanumSquareAcl'
    | 'NanumSquareAcr';
  fontSize: number;
  fontWeight?: number;
  color?: string;
  lineHeight?: string;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  onClick?: () => void;
  animation?: string;
};

export type ImageType = {
  src: string;
  width: number;
  height?: number;
  borderRadius?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  onClick?: () => void;
};

export type DividerType = {
  width: number;
  height?: number;
  background: string;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
};

export type DotType = {
  width: number;
  height?: number;
  background: string;
};
