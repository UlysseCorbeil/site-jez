import React, { Component } from 'react';
import { Link } from "react-router-dom";

import styled from 'styled-components';

import Project from "./Project";
import water from "../images/24.jpg";
import water2 from "../images/21.jpg";
import water3 from "../images/9.jpg";

import ideal1 from "../images/ideal9.jpg";
import ideal2 from "../images/ideal7.jpg";
import ideal3 from "../images/ideal3.jpg";
import ideal4 from "../images/ideal6.jpg";

import bruit1 from "../images/bruit1.JPG";
import bruit2 from "../images/bruit2.JPG";
import bruit3 from "../images/bruit3.JPG";

import wiki1 from "../images/wiki1.jpg";
import wiki2 from "../images/wiki2.jpg";
import wiki3 from "../images/wiki3.jpg";

import eau1 from "../images/eau1.jpg";
import eau2 from "../images/eau2.jpg";
import eau3 from "../images/eau3.jpg";
import eau4 from "../images/eau4.jpg";
import eau5 from "../images/eau5.jpg";

const Title = styled.span`
  margin-top: 0.5%;
  font-size: 3rem;
`;

const SubTitle = styled.span`
  margin-top: 0.5%;
  font-size: 1.2rem;
`;

const Container = styled.div`
      width: 100%;
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-items: left;
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
        <Container>
          <Title>Jézabel Plamondon</Title>
          <Title>2021</Title>
          <SubTitle>20 images</SubTitle>
          <SubTitle>Goldsmiths Application</SubTitle>
        </Container>
        <Project 
          images={ [water2, water, water3] } 
          description={
            [
              "Materials : glass, 383g of holy water, light ", 
              "This is the glass shape of five years of my life, resting on the blessed liquid weight of five years of my life. ",
              "The anxiety induced by the unstoppable passage of time has always been a burden that I couldn’t understand how most people seemed to be able to effortlessly live with. To help me cope with it, I started factually recording every day of my life in 2012. Making my time physical, something that could be touched, that had a texture, a weight, made more sense to me. Eventually, I became even more obsessed with the physical attributes of the book itself than with the memories it contained. ",
              "I made a glass cast of its shape and obtained the consecration of its exact weight, as water. The water received the benediction of the priest of my favorite Cathedral only after I confessed my complete lack of Christian modesty. He told me I shouldn't pursue modesty, and blessed us, my water and me."
            ]} 
        />

        <Project
            images={ [ideal1, ideal2, ideal3, ideal4] } 
            description={
              [
                "Materials : black vinyl, borrowed space", 
                "This is the lack of materialization of my own studio. ",
              ]} 
        />

        <Project
            images={ [bruit1, bruit2, bruit3] } 
            description={
              [
                "Materials : superficially repaired objects and the sound of their destruction ", 
              ]} 
        />

        <Project
            images={ [wiki1, wiki2, wiki3] } 
            description={
              [
                "Material : Wikipedia articles ", 
                "An online research history as a self portrait exploring the relationship between the amount of available knowledge and mortality, recreating this overwhelming feeling of opening too many Wikipedia tabs. ",
              ]} 
        />


        <Project
            images = { [eau1, eau2, eau3, eau4, eau5] }
            isRow = {true}
            description={
              [
                "Materials : waters from art institution, churches, rivers, and water-related memories", 
              ]} 
        />
       
        {
          <Link to={{
            pathname:'/' + 'inprogress'
          }}
          className="link"
          >
            <div>See work in progress</div>
          </Link>
        } 
      </Content>
    );
  }

}

export default Home;
