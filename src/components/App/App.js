import React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../Header/Header';
import HomePage from '../../pages/HomePage';

const Root = styled.div`
  
`

function App() {
  return (
    <Root>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </Root>
  )
}

export default App