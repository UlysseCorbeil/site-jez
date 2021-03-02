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



const Title = styled.div`
    display: flex;
    width: 40%;
    @media (max-width:768px)  {
    width: 100%
    }
    width: 40%;
    margin-top: 5%;
    margin-bottom: 2%;
    font-size: 2rem;
`;
const Container = styled.div`
  @media (min-width:600px)  {
    margin-top: 1%;
    margin-bottom: 10%;
  }

  width: 100%;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  margin-bottom: 15%;
`;

const Content = styled.section`
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 5%;
  margin-bottom: 5%;
`;

const Item = styled.div`
  padding-top: 5%;
`;

const ItemsWrapper = styled.div`
  @media (max-width:768px)  {
    width: 100%
  }
  width: 40%;
   > * {
      &:first-child {
        border-top: 2px solid black;
      }
  }
`;

const SectionTitle = styled.div`
  font-weight: bold;
`;

const Info = styled.div`
  display: flex;
  padding-top: 2%;
`;

const Year = styled.div`
  margin-right: 5%;
`;

const InfoText = styled.div`

`;

const ContactItem = styled.div`
  padding-top: 5%;
`;

const ContactWrapper = styled.div`
  @media (max-width:768px)  {
    width: 100%
  }
  width: 40%;
`;

const ContactTitle = styled.div`
    border-bottom: 2px solid black;
    display: flex;
    /* justify-content: center; */
    align-items: left;
    margin-top: 5%;
    font-size: 2rem;
    padding-bottom: 5%;
`;

const ContactInfo = styled.div`
  display: flex;
  padding-top: 3%;
`;

const ContactText = styled.div`
  margin-right: 5%;
`;

class About extends Component {

  render () {

    return (
        <Content>
          <Container>
            <Title>CV</Title>

            <ItemsWrapper>
              <Item>
                <SectionTitle>Academic background</SectionTitle>
                <Info>
                  <Year>2020</Year>
                  <InfoText>Abroad semester, Freie Kunst Diploma, Bauhaus Universität, Weimar</InfoText>
                </Info>
                <Info>
                  <Year>2020</Year>
                  <InfoText>Bachelor’s degree, Fine Arts, Concordia University, Montréal</InfoText>
                </Info>
              </Item>

              <Item>
                <SectionTitle>Individual exhibitions</SectionTitle>
                <Info>
                  <Year>2020</Year>
                  <InfoText>Why Is Wikipedia Like Water, Van de Velde building, Weimar
	curated by Maggy Metsos</InfoText>
                </Info>

              </Item>

              <Item>
                <SectionTitle>Selected group exhibitions </SectionTitle>
                <Info>
                  <Year>2020</Year>
                  <InfoText>Contextual Intimacy, Winterwerkschau, Bauhaus Universität, Weimar, curated by Isabella Panigada</InfoText>
                </Info>

                <Info>
                  <Year>2020</Year>
                  <InfoText>Galaxienfussel and Sofas, Winterwerkschau, Bauhaus Universität, Weimar,  curated by Björn Dahlem</InfoText>
                </Info>

                <Info>
                  <Year>2019</Year>
                  <InfoText>Sites of Embodied Silence, VAV Gallery, Art Souterrain with Art Matters
curated by Joyce Joumaa </InfoText>
                </Info>

                <Info>
                  <Year>2018</Year>
                  <InfoText>Corrupted Portal, VAV Gallery, Montréal
curated by Jose Guillermo Garcia Sierra</InfoText>
                </Info>

                <Info>
                  <Year>2017</Year>
                  <InfoText>Ce qu’il en reste (A good ending to the exercise), Eastern Bloc
curated by Roxane Halary</InfoText>
                </Info>

                <Info>
                  <Year>2016</Year>
                  <InfoText>Interfold launch pop-up exhibition, Eastern Bloc, 
curated by Florence Yee</InfoText>
                </Info>

              </Item>

              <Item>
                <SectionTitle>Artist talks </SectionTitle>
                <Info>
                  <Year>2021</Year>
                  <InfoText>How works happen – opposition, invited by Jeroen Cavents, Leipzig International School</InfoText>
                </Info>
                <Info>
                  <Year>2021</Year>
                  <InfoText>Anxieties, invited by Danica Jojich, Concordia University</InfoText>
                </Info>
              </Item>

              <Item>
                <SectionTitle>Publications </SectionTitle>
                <Info>
                  <Year>2020</Year>
                  <InfoText>ENTRE QUATRE MURS, L’Organe magazine</InfoText>
                </Info>
                <Info>
                  <Year>2016</Year>
                  <InfoText>Issue 11, Interfold magazine</InfoText>
                </Info>
              </Item>

              <Item>
                <SectionTitle>Artist residencies  </SectionTitle>
                <Info>
                  <Year>2018</Year>
                  <InfoText>D’Clinic Studios, Hungary</InfoText>
                </Info>
              </Item>

              <Item>
                <SectionTitle>Work experiences   </SectionTitle>
                <Info>
                  <Year>2020</Year>
                  <InfoText>Restoration and conservation of artworks, internship, Gemälde Restaurierung Leipzig Eva Johanna Berger</InfoText>
                </Info>

                <Info>
                  <Year>2019</Year>
                  <InfoText>Radio journalism on art and technology, Avez-vous du Wi-Fi, CISM</InfoText>
                </Info>

                <Info>
                  <Year>2019</Year>
                  <InfoText>Visitors’ guide, Centre Phi gallery, Montréal </InfoText>
                </Info>

                <Info>
                  <Year>2017</Year>
                  <InfoText>Volunteer, Biennale de Montréal </InfoText>
                </Info>
              </Item>

            </ItemsWrapper>

            <ContactWrapper>
              <ContactItem>
                <ContactTitle>Contact </ContactTitle>
                <ContactInfo>
                  <ContactText>jezabel.plam@gmail.com</ContactText>
                </ContactInfo>

                <ContactInfo>
                  <ContactText>016 265 12413</ContactText>
                </ContactInfo>        
                
                <ContactInfo>
                  <ContactText>Endersstraße 11, Leipzig, 04177</ContactText>
                </ContactInfo>
                
              </ContactItem>
            </ContactWrapper>

          </Container>
        
      </Content>
    );
  }

}

export default About;

