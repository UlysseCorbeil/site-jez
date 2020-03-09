import React, { Component } from 'react';
import logo from './logo.svg';
import styled, { createGlobalStyle } from 'styled-components';
import image from './images/en_construction.png';

import Reset from './styles/reset';

const GlobalStyle = createGlobalStyle`
  ${Reset}
`;

const AppContainer = styled.section`
    width: 100%;
`;

const Content = styled.section`
    width: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
`;

const ImageConstruction = styled.img`
    max-width: 100%;
    max-height: 100vh;
    margin: 0;
`;

const Text = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    font-size: 1rem;
`;

class App extends Component {

  render () {
    return (
      <AppContainer>

        <GlobalStyle />

        <Content>
          <ImageConstruction src={image}/>
        </Content>

      </AppContainer>  
    );
    
  }
}

export default App;
