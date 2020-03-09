import React, { Component } from 'react';
import { Link } from "react-router-dom";
import image from '../images/en_construction.png';

import styled from 'styled-components';

const ImageConstruction = styled.img`
    max-width: 100%;
    max-height: 100vh;
    margin: 0;
`;

const Content = styled.section`
    width: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
`;

const TextContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
`;

const TextInnerContainer = styled.div`
    display: flex;
    width: 100%;
`;

const Text = styled.div`
    width: 30%;
    font-size: calc(25px + 0.5vw);
    margin-right: 2rem;
    margin-left: 2rem;
    margin-top: 2rem;
`;

class Home extends Component {

  render () {

    let allTexts = [];
    for(let i = 0; i < 4; i++) {
      allTexts.push(
        <Text style={{marginTop:  (4 * i) + "rem"}}> Site en construction </Text>
      );
    }
    return (
      <Content>
        <ImageConstruction src={image} />
        
        <TextContainer>
          <TextInnerContainer>
            { allTexts.map((val, index) => (

              <div>{ val }</div>
    
            )) }
          </TextInnerContainer>
        </TextContainer>

        <TextContainer>
          <TextInnerContainer>
            { allTexts.map((val, index) => (

              <div style={{marginTop: "10rem", marginLeft: "5rem"}}>{ val }</div>
    
            )) }
          </TextInnerContainer>
        </TextContainer>
  
        <TextContainer>
          <TextInnerContainer>
            { allTexts.map((val, index) => (

              <div style={{marginTop: "20rem", marginLeft: "1rem"}}>{ val }</div>
    
            )) }
          </TextInnerContainer>
        </TextContainer>

         <TextContainer>
          <TextInnerContainer>
            { allTexts.map((val, index) => (

              <div style={{marginTop: "30rem", marginLeft: "5rem"}}>{ val }</div>
    
            )) }
          </TextInnerContainer>
        </TextContainer>


        {/*<Link to={{
        pathname:'/' + 'project'
        }}
        className="link"
      >
        <div>project 1</div>
      </Link> */} 
      </Content>
    );
  }

}

export default Home;
