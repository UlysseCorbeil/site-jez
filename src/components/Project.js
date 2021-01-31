import React, { Component } from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 40%;
  margin-top: 1%;
`;

const Description = styled.span`
  width: 40%;
  margin-top: 1%;
`;

const Content = styled.div`
      width: 100%;
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-items: center;
`;

class Project extends Component {

  render () {

    return (
      <Content>
        {
          this.props.images.map(image => (
            <Image src={image}/>
          ))
        }

        {
          this.props.description.map(description => (
            <Description>{description}</Description>
          ))
        }
  
      </Content>
    );
  }

}

export default Project;

