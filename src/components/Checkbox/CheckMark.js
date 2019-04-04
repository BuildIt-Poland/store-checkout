import styled from 'styled-components';

import { borderRadiusMedium, borderWidthThick, colorLightGrey } from '../../styles/designTokens';

const CheckMark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 2.8rem;
  width: 2.8rem;
  border: ${borderWidthThick} solid ${colorLightGrey};
  border-radius: ${borderRadiusMedium};
`;

export default CheckMark;
