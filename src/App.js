import React, { Component } from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import styled, { createGlobalStyle } from 'styled-components';

import Reset from './styles/reset';
import Home from './components/Home';
import InProgress from './components/InProgress';
import ErrorPage from './components/ErrorPage';

const AppContainer = styled.section`
    width: 100%;
`;

const GlobalStyle = createGlobalStyle`
  ${Reset}
    &.transition-group {
    .page-enter {
        opacity: 0;
        z-index: 100;
        transform-origin: 50% 50%;
        transform: translate3d(0, -5%, 0) scale(0.98);
        transition: all 300ms cubic-bezier(0.48, 0.22, 0.4, 0.98);
      }
    
      .page-enter-done {
        opacity: 1;
        z-index: 100;
        transform: translate3d(0, 0, 0) scale(1);
        transition: all 300ms cubic-bezier(0.48, 0.22, 0.4, 0.98);
      }
    
      .page-exit {
        opacity: 0;
        z-index: 100;
        transform-origin: 50% 50%;
        transform: translate3d(0, -5%, 0) scale(0.98);
        transition: all 300ms cubic-bezier(0.48, 0.22, 0.4, 0.98);
      }
    
      .page-exit .page-exit-active {
        opacity: 0;
        z-index: 1;
        transform: scale(0.98);
        transform: translate3d(0, -5%, 0) scale(0.98);
      }
    }
`;


class App extends Component {

  render () {
    const { location } = this.props;

    return (
      <AppContainer>

        <GlobalStyle />

          <TransitionGroup className="transition-group page">
            <CSSTransition key={location.key} timeout={300} classNames="page">
              <section className="route-section">
                <Switch location={location}>

                  <Route exact path={'/'} component={() => <Home />} />
                  <Route exact path={'/inprogress'} component={() => <InProgress />} />
                  <Route component={() => <ErrorPage />} />
                </Switch>
              </section>
            </CSSTransition>
          </TransitionGroup>

      </AppContainer>  
    );
    
  }
}

export default withRouter(App);
