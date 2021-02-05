import React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import HomePage from '../../pages/HomePage';
import NewsPage from '../../pages/NewsPage';
import StandingsPage from '../../pages/StandingsPage';
import StatsPage from '../../pages/StatsPage';
import SchedulePage from '../../pages/SchedulePage';
import ScoresPage from '../../pages/ScoresPage';
import BoxScoresPage from '../../pages/BoxScoresPage';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../constants/colors';
import { useSelector } from 'react-redux';

function App() {
  const LightOrDarkMode = useSelector(store => store.styles.lightOrDarkMode)
  return (
    <ThemeProvider theme={theme[LightOrDarkMode]}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/news">
            <NewsPage />
          </Route>
          <Route path="/standings">
            <StandingsPage />
          </Route>
          <Route path="/stats">
            <StatsPage />
          </Route>
          <Route path="/schedule">
            <SchedulePage />
          </Route>
          <Route path="/scores">
            <ScoresPage />
          </Route>
          <Route path="/boxscores">
            <BoxScoresPage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App