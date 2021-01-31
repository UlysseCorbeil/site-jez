import React, { Component } from 'react';
import styled from 'styled-components';

const Image = styled.img`
  @media (min-width:600px)  {
    width: 40%;
    margin-top: 1%;
  }
  width: 100%;
  margin-top: 3%;
`;

const Description = styled.span`
  @media (min-width:600px)  {
    width: 40%;
    margin-top: 1%;
  }
  width: 100%;
  margin-top: 3%;
`;

const Content = styled.div`
  @media (min-width:600px)  {
    margin-top: 1%;
    margin-bottom: 10%;
  }
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 15%;
`;

class Project extends Component {

  render () {

    return (
      <Content>
        {
          this.props.images.map(image => (
            <Image key={image} src={image}/>
          ))
        }

        {
          this.props.description.map(description => (
            <Description key={description}>{description}</Description>
          ))
        }
  
      </Content>
    );
  }

}

export default Project;

