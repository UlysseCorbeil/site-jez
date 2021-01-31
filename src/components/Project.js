import React, { Component } from 'react';
import styled from 'styled-components';

const Image = styled.img`
  @media (min-width:600px)  {
    width: 100%;
    margin-bottom: 10%;
    :nth-child(1) {
      margin-top: 15%;
    }
  }

  width: 100%;
  margin-bottom: 7%;
`;

const Description = styled.span`
  line-height: 130%;
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

const RowImage = styled.div`
  @media (min-width:600px)  {
    width: 40%;
  }
    width: 100%;
    display: flex;
    flex-flow: ${props => props.isRow ? 'row wrap' : 'column wrap'};
    justify-content: space-between;
`;

class Project extends Component {
  render () {
    const props =  this.props;

    return (
      <Content isRow= {props.isRow}>
        <RowImage isRow= {props.isRow}>
          {
            this.props.images.map((image, index) => (
              (index == 1 || index == 2) && (props.isRow) ? 
                (<Image key={image} src={image} className={'rowImage'}/>) 
                : (<Image key={image} src={image} />
              )
            ))
          }
        </RowImage>
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

