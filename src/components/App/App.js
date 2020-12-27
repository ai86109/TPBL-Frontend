import React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../Header/Header';
import HomePage from '../../pages/HomePage';
import StandingsPage from '../../pages/StandingsPage';
import { useTranslation } from 'react-i18next';

const Root = styled.div``

function App() {
  const { i18n } = useTranslation();
  return (
    <Root>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/standings">
            <StandingsPage />
          </Route>
        </Switch>
      </Router>
    </Root>
  )
}

export default App