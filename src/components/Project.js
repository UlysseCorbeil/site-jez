import React, { Component } from 'react';
import styled from 'styled-components';

const Description = styled.span`

  font-size: 1.2rem;
  line-height: 130%;
  @media (min-width:600px)  {
    width: 40%;
    margin-top: 1%;
  }
  @media (min-width:900px)  {
    width: 60%;
    margin-top: 1%;
  }
  @media (min-width:1100px)  {
    width: 40%;
    margin-top: 1%;
  }

  width: 100%;
  margin-top: 3%;
`;
const Image = styled.img`
  @media (min-width:600px)  {
    width: 100%;
    height: auto;
    padding-bottom: 10%;
    :nth-child(1) {
      padding-top: 15%;
    }
  }

  width: 100%;
  height: auto;
  padding-bottom: 7%;
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
  @media (min-width:900px)  {
    width: 60%;
  }
  @media (min-width:1100px)  {
    width: 40%;
  }
    width: 100%;
    display: flex;
    flex-flow: ${props => props.isRow ? 'row wrap' : 'column wrap'};
    justify-content: space-between;
`;

class Project extends Component {
  constructor(props) {
    super(props);
    this.onImgLoad = this.onImgLoad.bind(this);
  }

  onImgLoad({target:img}) {

    if(img.naturalWidth > img.naturalHeight) {
      img.classList.add("horizontalImage");
    }
  }
  render () {
    const props =  this.props;

    return (
      <Content isRow= {props.isRow}>
        {
          this.props.description.map(description => (
            <Description key={description}>{description}</Description>
          ))
        }
        <RowImage isRow= {props.isRow}>
          {
            this.props.images.map((image, index) => (
              (index == 1 || index == 2) && (props.isRow) ? (<Image onLoad={this.onImgLoad} key={image} src={image} className={'rowImage'}/>) : (<Image onLoad={this.onImgLoad}  key={image} src={image}/>)
            ))
          }
        </RowImage>


     
      </Content>
    );
  }

}

export default Project;

