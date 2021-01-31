import React, { Component } from 'react';
import { Link } from "react-router-dom";

import styled from 'styled-components';

import Project from "./Project";
import water from "../images/24.jpg";
import water2 from "../images/21.jpg";
import water3 from "../images/9.jpg";

const Image = styled.img`
`;

const Content = styled.section`
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 5%;
  margin-bottom: 5%;
`;

class Home extends Component {

  render () {
    return (
      <Content>
        <Project 
          images={ [water, water2, water3] } 
          description={
            [
              "Material : glass, 383g of holy water, light ", 
              "This is the glass shape of five years of my life, resting on the blessed liquid weight of five years of my life. ",
              "The anxiety induced by the unstoppable passage of time has always been a burden that I couldn’t understand how most people seemed to be able to effortlessly live with. To help me cope with it, I started factually recording every day of my life in 2012. Making my time physical, something that could be touched, that had a texture, a weight, made more sense to me. Eventually, I became even more obsessed with the physical attributes of the book itself than with the memories it contained. ",
              "I made a glass cast of its shape and obtained the consecration of its exact weight, as water. The water received the benediction of the priest of my favorite Cathedral only after I confessed my complete lack of Christian modesty. He told me I shouldn't pursue modesty, and blessed us, my water and me."
            ]} 
        />

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
