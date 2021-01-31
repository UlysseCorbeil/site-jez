import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Description = styled.span`

`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;
`;

const Content = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
`;

class ErrorPage extends Component {

  render () {

    return (
      <Content>
          <Wrapper>
            <Description>{"Hey, I don't think you're supposed to be here :)"}</Description>
            {
                <Link to={{
                    pathname:'/'
                }}
                className="link"
                >
                    <div>Click here to go back.. if you want</div>
                </Link>
            } 
          </Wrapper>
         
      </Content>
    );
  }

}

export default ErrorPage;

