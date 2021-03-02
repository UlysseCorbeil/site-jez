import React, { Component } from 'react';

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

const Content = styled.section`
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 5%;
  padding-bottom: 5%;
`;

const TitleSection = styled.div`
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 5%;
  padding-bottom: 5%;
`;

const Title = styled.h1`
    display: flex;
    justify-content: center;
    align-items: left;
    margin-top: 1%;
    font-size: 3rem;
`;

const SubTitle = styled.h2`
    display: flex;
    justify-content: center;
    align-items: left;
    margin-top: 1%;
    font-size: 3rem;
`;


class Home extends Component {

  render () {
    return (
      <Content>

        <TitleSection>
          <Title>Portfolio</Title>
          <SubTitle>2021</SubTitle>
        </TitleSection>

        <Project 
          images={ [water2, water, water3] } 
          description={
            [
              "Daily",
              "2018",
              "Glass, 383g of holy water and light", 
              "The anxiety induced by the unstoppable passage of time has always been a burden that I couldn’t understand how most people seemed to be able to effortlessly live with. To help me cope with it, I started factually recording every day of my life in 2012. Making my time physical, something that could be touched, that had a texture, a weight, made more sense to me. Eventually, I became even more obsessed with the physical attributes of the book itself than with the memories it contained. ",
              "I made a glass cast of its shape and obtained the consecration of its exact weight, as water. The water received the benediction of the priest of my favorite Cathedral only after I confessed my complete lack of Christian modesty. He told me I shouldn't pursue modesty, and blessed us, my water and me."
            ]} 
        />

        <Project
            images={ [ideal1, ideal2, ideal3, ideal4] } 
            description={
              [
                "Ideally",
                "2018",
                "Black vinyl, white vinyl and borrowed space", 
                "The lack of materialization of my own space was haunting me, so I made myself a studio out of words.",
              ]} 
        />

        <Project
            images={ [bruit1, bruit2, bruit3] } 
            description={
              [
                "Repaired",
                "2019",
                "DVD player, book, Apple keyboard, glue, earphones and Ipods",
                "Superficially repaired objects are juxtaposed to the sound of their destruction.", 
                "Exploring the futile act of superficially repairing something that is permanently broken, between the desire and the shame to destroy, the fast and the slow, the care and the violence, the unpredictability and the certainty, the careless and the careful, this project addresses the tension, fear, and distance between different degrees of exactness."
              ]} 
        />

        <Project
            images={ [wiki1, wiki2, wiki3] } 
            description={
              [
                "Why is Wikipedia Like Water",
                "2020",
                "Inkjet prints on A4 paper and laser-cut ceramic", 
                "An online research history as a self portrait exploring the relationship between the amount of available knowledge and mortality, recreating this overwhelming feeling of opening too many Wikipedia tabs. ",
              ]} 
        />


        <Project
            images = { [eau1, eau2, eau3, eau4, eau5] }
            isRow = {true}
            description={
              [
                "Water Collection",
                "2020 - ongoing",
                "Water, glass bottles and pen on paper",
                "Water samples from art institution, churches, rivers, and water-related memories are married in an embrace full of futility and sacredness. "
              ]} 
        />
       
      </Content>
    );
  }

}

export default Home;
