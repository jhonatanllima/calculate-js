import React from 'react';

import {
  Header,
  Calculate,
} from '../../components';


import {Container} from './styles';

function Main(){
  return (
    <Container>
      <Header />
      <Calculate />
    </Container>
  );
}

export default Main;