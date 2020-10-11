import React, {useState} from 'react';

import {
  Container, 
  ContentTop,
  Content, 
} from './styles'

function Calculate(){
  const [number, setNumber] = useState([0]);

  console.log('teste', number);

  return (
    <Container>
      <ContentTop>
        <input />
      </ContentTop>

      <Content>
        <div>
          <button type="button" onClick={() => setNumber(7)}> 7 </button>
          
          <button type="button" onClick={() => setNumber(8)}> 8 </button>
          <button type="button" onClick={() => setNumber(9)}> 9  </button>

          <span>
            <button  type="button" onClick={() => setNumber('/')}> /  </button>
          </span>
        </div>  

        <div>
          <button type="button" onClick={() => setNumber(4)}> 4 </button>
          <button type="button" onClick={() => setNumber(5)}> 5  </button>
          <button type="button" onClick={() => setNumber(6)}> 6  </button>

          <span>
            <button type="button" onClick={() => setNumber('x')}> x  </button>
          </span>
        </div>

        <div>
          <button type="button" onClick={() => setNumber(1)}> 1 </button>
          <button type="button" onClick={() => setNumber(2)}> 2 </button>
          <button type="button" onClick={() => setNumber(3)}> 3 </button>

          <span>
            <button type="button" onClick={() => setNumber('+')}> + </button>
          </span>
        </div>

        <div> 
          <button type="button" onClick={() => setNumber('.')}> . </button>
          <button type="button" onClick={() => setNumber(0)}> 0 </button>
          <button type="button" onClick={() => setNumber('=')}> = </button>

          <span>
            <button type="button" onClick={() => setNumber('-')}> - </button>
          </span>
        </div>
      </Content>
    </Container>
  );
}

export default Calculate;