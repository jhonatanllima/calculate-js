import styled from 'styled-components';
import {ImCalculator} from 'react-icons/im';

import colors from '../../themes/colors';

export const Container = styled.section`
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1{
    margin-top: 10px;
  }
`;

export const IconCalculator = styled(ImCalculator)`
  width: 30px;
  height: auto;
  color: ${colors.fadedGrey};
`;