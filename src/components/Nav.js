import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Title = styled.span`
    display: flex;
    justify-content: center;
    align-items: left;
    margin-top: 1%;
    font-size: 2rem;
`;

const SubTitle = styled.span`
    display: flex;
    justify-content: center;
    align-items: left;
    margin-top: 1%;
    font-size: 2rem;
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: left;
`;

const NavSection = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%; 
`;

const NavInnerCtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: left;
    margin-top: 1%;
    font-size: 2rem;
`;

const NavItem = styled.div`
    width: 100%;
    font-size: 1/rem;
`;


class Nav extends Component {
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
    <Container>
        <Title>Jézabel Plamondon</Title>
        <Title>2021</Title>

        {/* <NavSection>
            <NavInnerCtn>
                <Link to={{
                    pathname:'/' + 'inprogress'
                    }}
                    className="link"
                >
                    <NavItem>Work in progress</NavItem>
                </Link>
            </NavInnerCtn>
        </NavSection> */}
    </Container>
    );
  }

}

export default Nav;

