import styled from 'styled-components';

import colors from '../../themes/colors';

export const Container = styled.section`
  width:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: blue;
  
`;

export const ContentTop = styled.section`
  width: 100%;
  
  input{
    width: 100%;
    border:none;
    padding: 0;
    min-height: 250px;
    
    color: ${colors.white};
    background-color: ${colors.dark};
  }
`;

export const Content = styled.section`
  display:flex;
  width: 100%;
  flex-wrap:wrap;
  background-color: red;

  div{
    display:flex;
    flex-wrap:wrap;
    width:100%;
    
    button{
      flex: 1;
      min-width: 3.0em;
      height: 3em;
      border:none;
      display: flex;
      align-items: center;
      justify-content: center;
      
      font-size: 1.4em;
      font-weight: lighter;
      color: ${colors.eightGrey};
      background-color: ${colors.fadedGrey};
      outline: 1px solid ${colors.darkGrey};

    }
    span{
      flex: 1;
      min-width: 3.0em;
      border:none;
      display: flex;
      align-items: center;
      justify-content: center;
      
      button{
        color: ${colors.white};
        background-color: ${colors.orange};
      }
    }
  }
`;


