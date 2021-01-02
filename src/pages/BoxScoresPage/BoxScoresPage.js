import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { MEDIA_QUERY_LG, MEDIA_QUERY_MD, MEDIA_QUERY_SM, MEDIA_QUERY_SMtoMD } from '../../constants/breakpoint';

const Root = styled.div`
  margin-top: 3px;
  background-color: #f3f3f3;
  width: 100%;
  min-height: 700px;
`

const Container = styled.div`
  background-color: #fff;
  border-color: #fff;
  max-width: 1440px;
  width: 100%;
  min-height: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 16px;
  ${MEDIA_QUERY_SMtoMD} {
    background-color: #f3f3f3;
  }
`

const Header = styled.div`
  display: flex;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%
`

const GamesNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 5px;
  border-bottom: 2px solid grey;
  width: 100%
`

const GameDate = styled.div`
  display: flex;
  font-weight: 900;
  padding: 0 20px;
`

const Pages = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
`

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
`

const Day = styled.div`
  width: 100%;
  white-space: nowrap;
`

const Date = styled.div`
  width: 100%;
  white-space: nowrap;
`

const GameBlock = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  padding: 0 10px;
  border-left: 1px solid grey;
`

const Teams = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const Team = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`

const TeamLogo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  & img {
    border-radius: 50%;
    max-width: 20px;
    max-height: 20px;
    background-color: #ddd;
  }
`

const TeamInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const TeamName = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  margin-right: 10px;
`

const TeamStandings = styled.div`
  display: flex;
  align-items: center;
  color: grey;
`

const TeamScore = styled.div`
  display: flex;
  align-items: center;
  text-align: right;
  margin-right: 20px;
`

const ScoreBoardContainer = styled.div``

const BoxScoresContainer = styled.div``

function GamesNav() {
  return (
    <GamesNavContainer>
      <GameDate>
        <Pages>＜</Pages>
        <DateContainer>
          <Day>星期三</Day>
          <Date>9月9日</Date>
        </DateContainer>
        <Pages>＞</Pages>
      </GameDate>
      <GameBlock>
        <Teams>
          <Team>
            <TeamLogo>
              <img src="https://i.imgur.com/9p23DQK.png" />
            </TeamLogo>
            <TeamInfo>
              <TeamName>悍將</TeamName>
              <TeamScore>0</TeamScore>
            </TeamInfo>
            <TeamStandings>38 - 53</TeamStandings>
          </Team>
          <Team>
            <TeamLogo>
              <img src="https://i.imgur.com/pEHu3n2.png" />
            </TeamLogo>
            <TeamInfo>
              <TeamName>獅</TeamName>
              <TeamScore>6</TeamScore>
            </TeamInfo>
            <TeamStandings>43 - 49</TeamStandings>
          </Team>
        </Teams>
      </GameBlock>
      <GameBlock>
        <Teams>
          <Team>
            <TeamLogo>
              <img src="https://i.imgur.com/XkOy9RG.png" />
            </TeamLogo>
            <TeamInfo>
              <TeamName>兄弟</TeamName>
              <TeamScore>8</TeamScore>
            </TeamInfo>
            <TeamStandings>52 - 39</TeamStandings>
          </Team>
          <Team>
            <TeamLogo>
              <img src="https://i.imgur.com/wbwC9r7.png" />
            </TeamLogo>
            <TeamInfo>
              <TeamName>桃猿</TeamName>
              <TeamScore>1</TeamScore>
            </TeamInfo>
            <TeamStandings>50 - 42</TeamStandings>
          </Team>
        </Teams>
      </GameBlock>
    </GamesNavContainer>
  )
}

function ScoreBoard() {
  return (
    <ScoreBoardContainer></ScoreBoardContainer>
  )
}

function BoxScores() {
  return (
    <BoxScoresContainer></BoxScoresContainer>
  )
}

export default function BoxScoresPage() {
  const { t, i18n } = useTranslation();
  const currentLng = i18n.language

  return (
    <Root>
      <Container>
        <GamesNav />
        <Header>
          <ScoreBoard />
        </Header>
        <BoxScores />
      </Container>
    </Root>
  )
}