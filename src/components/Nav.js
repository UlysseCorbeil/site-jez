import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: left;
`;

const NavSection = styled.nav`
    position: fixed;
    background-color: white;
    top: 0;
    left: 0;
    width: 100%; 
`;

const NavInnerCtn = styled.div`
    display: flex;
    align-items: left;
    margin-left: 2%;
    margin-right: 2%;
    width: 100%;
    font-size: 2rem;
`;

const NavItem = styled.div`
    margin-right: 5%;
    padding: 1%;
    font-size: 1.5rem;
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
        <NavSection>
            <NavInnerCtn>
                <NavItem>
                    <Link to={{
                        pathname:'/'
                        }}
                        className="link"
                    >
                        Jézabel Plamondon
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to={{
                        pathname:'/' + 'about'
                        }}
                        className="link"
                    >
                    About
                    </Link>
                </NavItem>

            </NavInnerCtn>
        </NavSection>
    </Container>
    );
  }

}

export default Nav;

