import React from 'react';
import styled from 'styled-components';
import AboutLinks from './components/AboutLinks';
import signature from './images/signature.png';
import buildingSite from './images/building_website.svg';

const App = () => {
  return (
    <AppContainer>
      <Image src={buildingSite} alt='' />
      <Content>
        <h4>ERROR 404</h4>
        <br />
        <h2>Under development....I will launch this before 20th May, 2021</h2>
        <AboutLinks></AboutLinks>
        <img src={signature} alt='' />
      </Content>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  overflow: auto;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
`;

const Image = styled.img`
  justify-self: center;
  width: 100%;
  height: auto;
`;

const Content = styled.div`
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  > img {
    width: 40%;
    height: auto;
  }
  > h4 {
    text-align: center;
  }

  > h2 {
    margin-bottom: 3rem;
  }
`;
export default App;
