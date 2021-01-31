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

const Title = styled.span`
  margin-top: 0.5%;
  font-size: 3rem;
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


class InProgress extends Component {

  render () {

    return (
        <Content>
        <Container>
          <Title>Work in progress</Title>
        </Container>

        {
          <Link to={{
            pathname:'/'
          }}
          className="link"
          >
            <div>Go back</div>
          </Link>
        } 
      </Content>
    );
  }

}

export default InProgress;

