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


class Home extends Component {

  render () {
    return (
      <Content>
        <ImageConstruction src={image}/>
        
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
