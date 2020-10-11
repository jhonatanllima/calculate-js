import React from 'react';

import {
  Container, 
  ContentTop,
  Content, 
} from './styles'


function Calculate(){
  return (
    <Container>
      <ContentTop>
        <input type="text"/>
      </ContentTop>

      <Content>
        <div>
          <button> 7 </button>
          <button> 8 </button>
          <button> 9 </button>
          <span>
            <button> / </button>
          </span>
        </div>  

        <div>
          <button> 4 </button>
          <button> 5 </button>
          <button> 6 </button>
          <span>
            <button> x </button>
          </span>
        </div>

        <div>
          <button> 1 </button>
          <button> 2 </button>
          <button> 3 </button>
          <span>
            <button> + </button>
          </span>
        </div>

        <div> 
          <button> . </button>
          <button> 0 </button>
          <button> = </button>
          <span>
            <button> - </button>
          </span>
        </div>
      </Content>
    </Container>
  );
}

export default Calculate;