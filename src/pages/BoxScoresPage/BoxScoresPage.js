import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { MEDIA_QUERY_LG, MEDIA_QUERY_MD, MEDIA_QUERY_SM, MEDIA_QUERY_SMtoMD } from '../../constants/breakpoint';

const Root = styled.div`
  margin-top: 3px;
  background-color: black;
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

const ScoreBoardContainer = styled.div`
  display: flex;
  justify-contents: space-around;
  width: 100%;
  margin: 20px 0;
  border-bottom: 1px solid grey;
  ${MEDIA_QUERY_LG} {
    justify-content: center;
  }
`

const GameTeam = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: flex-start;
`

const GameTeamLogo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  & img {
    border-radius: 50%;
    max-width: 70px;
    max-height: 70px;
    background-color: #f3f3f3;
  }
  ${MEDIA_QUERY_MD} {
    & img {
      max-width: 110px;
      max-height: 110px;
    }
  }
`

const GameTeamStandings = styled.div`
  display: flex;
  justify-content: center;
`

const ScoreBoardBlock = styled.div`
  display: flex;
  flex: 1 1 100%;
  flex-direction: column;
  justify-contents: space-between;
  align-items: center;
  width: 100%;
  margin: 10px;
  ${MEDIA_QUERY_SMtoMD} {
    margin: 10px 50px;
  }
  ${MEDIA_QUERY_LG} {
    flex: 0 1 50%;
  }
`

const GameScore = styled.div`
  text-align: center;
  font-size: 2rem;
  color: grey;
  font-weight: 600;
  margin-top: 30px;
  ${MEDIA_QUERY_LG} {
    font-size: 3rem;
  }
`

const GameScoreBoard = styled.div`
  margin: 20px 0;
  max-width: 800px;
  display: flex;
  width: 100%;
  ${MEDIA_QUERY_SMtoMD} {
    margin: 20px;
  }
`

const GameTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  tbody tr, th {
    background-color: #ffffff;
    text-align: center;
  }
  td, th {
    padding: 10px 5px;
  }
  th {
    border-bottom: 1px solid #ddd;
    background-color: #f1f1f1;
  }
  tr td {
    background-color: #f5f5f5;
  }
  colgroup {
    border-right: 1px solid #ddd;
  }
  ${MEDIA_QUERY_MD} {
    td, th {
      padding: 14px 10px;
    }
  }
`

const GamePitcher = styled.div`
  display: flex;
  padding: 5px 25px;
  justify-contents: flex-start;
`

const Pitcher = styled.div``

const BoxScoresContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ${MEDIA_QUERY_LG} {
    flex-direction: row;
    justify-contents: space-between;
    width: 100%; 
  }
`

const SelectButtons = styled.div`
  display: flex;
  border: 1px solid grey;
  border-radius: 0.25rem;
  ${MEDIA_QUERY_LG} {
    display: none;
  }
`

const SelectButton = styled.button`
  padding: 10px 20px;
  border-collapse: collapse;
  min-width: 15rem;
  border: 1px solid grey;
  cursor: pointer;
  height: 100%;
  font-size: 1.5rem;
  font-weight: 700;
  ${(props) => props.$active && `background-color: grey;`}
  &:hover {
    background-color: grey;
  }
`

const BoxScoresBlock = styled.div`
  width: 100%;
  & + & {
    margin-left: 20px;
  }
`

const VisitingTeamBoxScoresTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  white-space: nowrap;
  margin: 20px 0;
  border-bottom: 1px solid grey;
  td, th {
    padding: 10px 15px;
    font-size: 1.5rem;
  }
  th {
    background-color: #0A1E40;
    color: white;
    text-align: center;
    &:first-child {
      text-align: left;
    }
  }
  tbody tr {
    background-color: #ffffff;
    text-align: center;
    &:nth-child(2n) {
      background-color: #f3f3f3;
    }
    & td:first-child {
      text-align: left;
    }
    &:last-child td:not(:first-child) {
      font-weight: 700;
    }
  }
`

const VisitingTeamBoxScoresNote = styled.div`
  display: flex;
  width: 100%;
  justify-contents: flex-start;
  padding: 0 0 30px 5px;
`

const HomeTeamBoxScoresTable = styled.table`
  display: none;
  ${MEDIA_QUERY_LG} {
    display: revert;
    border-collapse: collapse;
    width: 100%;
    white-space: nowrap;
    margin: 20px 0;
    border-bottom: 1px solid grey;
    td, th {
      padding: 10px 15px;
      font-size: 1.5rem;
    }
    th {
      background-color: #0A1E40;
      color: white;
      text-align: center;
      &:first-child {
        text-align: left;
      }
    }
    tbody tr {
      background-color: #ffffff;
      text-align: center;
      &:nth-child(2n) {
        background-color: #f3f3f3;
      }
      & td:first-child {
        text-align: left;
      }
      &:last-child td:not(:first-child) {
        font-weight: 700;
      }
    }
  }
`

const HomeTeamBoxScoresNote = styled.div`
  display: none;
  ${MEDIA_QUERY_LG} {
    display: flex;
    width: 100%;
    justify-contents: flex-start;
    padding: 0 0 30px 5px;   
  }
`

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
    <ScoreBoardContainer>
      <GameTeam>
        <GameTeamLogo>
          <img src="https://i.imgur.com/9p23DQK.png" />
        </GameTeamLogo>
        <GameTeamStandings>(38-53)</GameTeamStandings>
      </GameTeam>
      <ScoreBoardBlock>
        <GameScore>統一7-ELEVEn獅 6, 富邦悍將 0</GameScore>
        <GameScoreBoard>
          <GameTable>
            <colgroup span="10" />
            <thead>
              <tr>
                <th>Final</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>
                <th>8</th>
                <th>9</th>
                <th>R</th>
                <th>H</th>
                <th>E</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>悍將</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>6</td>
                <td>2</td>
              </tr>
              <tr>
                <td>獅</td>
                <td>2</td>
                <td>1</td>
                <td>1</td>
                <td>0</td>
                <td>0</td>
                <td>2</td>
                <td>0</td>
                <td>0</td>
                <td></td>
                <td>6</td>
                <td>10</td>
                <td>0</td>
              </tr>
            </tbody>
          </GameTable>
        </GameScoreBoard>
        <GamePitcher>
          <Pitcher>
            W: 泰迪（2-0）
          </Pitcher>
          <Pitcher>
            L: 邦威（2-3）
          </Pitcher>
        </GamePitcher>
      </ScoreBoardBlock>
      <GameTeam>
        <GameTeamLogo>
          <img src="https://i.imgur.com/pEHu3n2.png" />
        </GameTeamLogo>
        <GameTeamStandings>(43-49)</GameTeamStandings>
      </GameTeam>
    </ScoreBoardContainer>
  )
}

function BoxScores() {
  return (
    <BoxScoresContainer>
      <SelectButtons>
        <SelectButton>富邦悍將</SelectButton>
        <SelectButton>統一7-ELEVEn獅</SelectButton>
      </SelectButtons>
      <BoxScoresBlock>
        <VisitingTeamBoxScoresTable>
          <thead>
            <tr>
              <th>富邦打者</th>
              <th>AB</th>
              <th>R</th>
              <th>H</th>
              <th>RBI</th>
              <th>BB</th>
              <th>SO</th>
              <th>SB</th>
              <th>AVG</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 李宗賢 SS</td>
              <td>3</td>
              <td>0</td>
              <td>1</td>
              <td>0</td>
              <td>1</td>
              <td>1</td>
              <td>0</td>
              <td>0.311</td>
            </tr>
            <tr>
              <td>2 張正偉 RF</td>
              <td>4</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
              <td>0</td>
              <td>0.276</td>
            </tr>
            <tr>
              <td>3 高國輝 DH</td>
              <td>3</td>
              <td>0</td>
              <td>1</td>
              <td>0</td>
              <td>1</td>
              <td>1</td>
              <td>0</td>
              <td>0.324</td>
            </tr>
            <tr>
              <td>4 蔣智賢 3B</td>
              <td>0</td>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0.312</td>
            </tr>
            <tr>
              <td>5 林益全 1B</td>
              <td>3</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>2</td>
              <td>0</td>
              <td>0.290</td>
            </tr>
            <tr>
              <td>6 林哲瑄 CF</td>
              <td>4</td>
              <td>0</td>
              <td>2</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
              <td>0</td>
              <td>0.262</td>
            </tr>
            <tr>
              <td>7 申皓瑋 LF</td>
              <td>3</td>
              <td>0</td>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
              <td>0</td>
              <td>0.301</td>
            </tr>
            <tr>
              <td>8 王正棠 2B</td>
              <td>4</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
              <td>0.263</td>
            </tr>
            <tr>
              <td>9 林宥穎 C</td>
              <td>2</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0.245</td>
            </tr>
            <tr>
              <td>TOTALS</td>
              <td>33</td>
              <td>0</td>
              <td>6</td>
              <td>0</td>
              <td>2</td>
              <td>8</td>
              <td>2</td>
              <td></td>
            </tr>
          </tbody>
        </VisitingTeamBoxScoresTable>
        <VisitingTeamBoxScoresNote>
          E: 李宗賢
        </VisitingTeamBoxScoresNote>
        <VisitingTeamBoxScoresTable>
          <thead>
            <tr>
              <th>富邦投手</th>
              <th>IP</th>
              <th>H</th>
              <th>R</th>
              <th>ER</th>
              <th>BB</th>
              <th>SO</th>
              <th>HR</th>
              <th>ERA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>邦威 (L,2-3)</td>
              <td>4.0</td>
              <td>7</td>
              <td>4</td>
              <td>3</td>
              <td>3</td>
              <td>6</td>
              <td>0</td>
              <td>3.60</td>
            </tr>
            <tr>
              <td>吳世豪</td>
              <td>1.1</td>
              <td>3</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>1</td>
              <td>4.26</td>
            </tr>
            <tr>
              <td>歐書誠</td>
              <td>2.0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>2</td>
              <td>1</td>
              <td>0</td>
              <td>4.22</td>
            </tr>
            <tr>
              <td>王尉永</td>
              <td>0.2</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>2</td>
              <td>0</td>
              <td>7.00</td>
            </tr>
            <tr>
              <td>TOTALS</td>
              <td>8.0</td>
              <td>10</td>
              <td>6</td>
              <td>5</td>
              <td>7</td>
              <td>11</td>
              <td>1</td>
              <td></td>
            </tr>
          </tbody>
        </VisitingTeamBoxScoresTable>
        <VisitingTeamBoxScoresNote>
          E: 邦威
        </VisitingTeamBoxScoresNote>
      </BoxScoresBlock>
      <BoxScoresBlock>
        <HomeTeamBoxScoresTable>
          <thead>
            <tr>
              <th>富邦打者</th>
              <th>AB</th>
              <th>R</th>
              <th>H</th>
              <th>RBI</th>
              <th>BB</th>
              <th>SO</th>
              <th>SB</th>
              <th>AVG</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 李宗賢 SS</td>
              <td>3</td>
              <td>0</td>
              <td>1</td>
              <td>0</td>
              <td>1</td>
              <td>1</td>
              <td>0</td>
              <td>0.311</td>
            </tr>
            <tr>
              <td>2 張正偉 RF</td>
              <td>4</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
              <td>0</td>
              <td>0.276</td>
            </tr>
            <tr>
              <td>3 高國輝 DH</td>
              <td>3</td>
              <td>0</td>
              <td>1</td>
              <td>0</td>
              <td>1</td>
              <td>1</td>
              <td>0</td>
              <td>0.324</td>
            </tr>
            <tr>
              <td>4 蔣智賢 3B</td>
              <td>0</td>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0.312</td>
            </tr>
            <tr>
              <td>5 林益全 1B</td>
              <td>3</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>2</td>
              <td>0</td>
              <td>0.290</td>
            </tr>
            <tr>
              <td>6 林哲瑄 CF</td>
              <td>4</td>
              <td>0</td>
              <td>2</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
              <td>0</td>
              <td>0.262</td>
            </tr>
            <tr>
              <td>7 申皓瑋 LF</td>
              <td>3</td>
              <td>0</td>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
              <td>0</td>
              <td>0.301</td>
            </tr>
            <tr>
              <td>8 王正棠 2B</td>
              <td>4</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
              <td>0.263</td>
            </tr>
            <tr>
              <td>9 林宥穎 C</td>
              <td>2</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0.245</td>
            </tr>
            <tr>
              <td>TOTALS</td>
              <td>33</td>
              <td>0</td>
              <td>6</td>
              <td>0</td>
              <td>2</td>
              <td>8</td>
              <td>2</td>
              <td></td>
            </tr>
          </tbody>
        </HomeTeamBoxScoresTable>
        <HomeTeamBoxScoresNote>
          E: 李宗賢
        </HomeTeamBoxScoresNote>
        <HomeTeamBoxScoresTable>
          <thead>
            <tr>
              <th>富邦投手</th>
              <th>IP</th>
              <th>H</th>
              <th>R</th>
              <th>ER</th>
              <th>BB</th>
              <th>SO</th>
              <th>HR</th>
              <th>ERA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>邦威 (L,2-3)</td>
              <td>4.0</td>
              <td>7</td>
              <td>4</td>
              <td>3</td>
              <td>3</td>
              <td>6</td>
              <td>0</td>
              <td>3.60</td>
            </tr>
            <tr>
              <td>吳世豪</td>
              <td>1.1</td>
              <td>3</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>1</td>
              <td>4.26</td>
            </tr>
            <tr>
              <td>歐書誠</td>
              <td>2.0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>2</td>
              <td>1</td>
              <td>0</td>
              <td>4.22</td>
            </tr>
            <tr>
              <td>王尉永</td>
              <td>0.2</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>2</td>
              <td>0</td>
              <td>7.00</td>
            </tr>
            <tr>
              <td>TOTALS</td>
              <td>8.0</td>
              <td>10</td>
              <td>6</td>
              <td>5</td>
              <td>7</td>
              <td>11</td>
              <td>1</td>
              <td></td>
            </tr>
          </tbody>
        </HomeTeamBoxScoresTable>
        <HomeTeamBoxScoresNote>
          E: 邦威
        </HomeTeamBoxScoresNote>
      </BoxScoresBlock>
    </BoxScoresContainer>
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