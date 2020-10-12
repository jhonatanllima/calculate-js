import React, {useState} from 'react';

import {
  Container, 
  ContentTop,
  Content, 
} from './styles'

function Calculate(){
  const [number, setNumber] = useState('');

  console.log('teste', number);

  function handleClick(value){
    setNumber(`${number}${value}`)

    // if (setNumber(`${value}`) === 'x' || 'X'){
    //   console.log('oia bixo',number * 2)
    // }
  }

  console.log(number * 2);

  return (
    <Container>
      <ContentTop>
        <input  value={number}/>
      </ContentTop>

      <Content>
        <div>
          <button type="button" onClick={() => handleClick(7)}> 7 </button>
          
          <button type="button" onClick={() => handleClick(8)}> 8 </button>
          <button type="button" onClick={() => handleClick(9)}> 9  </button>

          <span>
            <button  type="button" onClick={() => handleClick('/')}> /  </button>
          </span>
        </div>  

        <div>
          <button type="button" onClick={() => handleClick(4)}> 4 </button>
          <button type="button" onClick={() => handleClick(5)}> 5  </button>
          <button type="button" onClick={() => handleClick(6)}> 6  </button>

          <span>
            <button type="button" onClick={() => handleClick('x')}> x  </button>
          </span>
        </div>

        <div>
          <button type="button" onClick={() => handleClick(1)}> 1 </button>
          <button type="button" onClick={() => handleClick(2)}> 2 </button>
          <button type="button" onClick={() => handleClick(3)}> 3 </button>

          <span>
            <button type="button" onClick={() => handleClick('+')}> + </button>
          </span>
        </div>

        <div> 
          <button type="button" onClick={() => handleClick('.')}> . </button>
          <button type="button" onClick={() => handleClick(0)}> 0 </button>
          <button type="button" onClick={() => handleClick('=')}> = </button>

          <span>
            <button type="button" onClick={() => handleClick('-')}> - </button>
          </span>
        </div>
      </Content>
    </Container>
  );
}

export default Calculate;