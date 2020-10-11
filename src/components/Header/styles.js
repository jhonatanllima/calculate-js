import styled from 'styled-components';
import {ImCalculator} from 'react-icons/im';

import colors from '../../themes/colors';

export const Container = styled.section`
  width: 100%;
  padding: 20px;
  display: flex;
  min-height: 10px;
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