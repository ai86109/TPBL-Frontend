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
  ${MEDIA_QUERY_LG} {
    padding: 2rem;
  }
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

const PageTitle = styled.h1`
  font-weight: 700;
  color: #333;
  margin-bottom: 2rem;
  ${MEDIA_QUERY_SM} {
    font-size: 3rem;
  }
  ${MEDIA_QUERY_MD} {
    font-size: 4rem;
  }
`

const SelectButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 2px solid grey;
  ${MEDIA_QUERY_SMtoMD} {
    max-width: 400px;
    justify-content: flex-start;
    border: none;
  }
`

const GameDate = styled.div`
  display: flex;
  flex-grow: 1;
  font-weight: 900;
`

const Pages = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
`

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`

const Day = styled.div``

const Date = styled.div``

const GameCalendar = styled.div`
  display: flex;
  align-items: center;
`

const ScoresContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px 0;
  ${MEDIA_QUERY_LG} {
    flex-direction: row;
    width: 100%;
  }
`

const ScoresBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  border-bottom: 1px solid grey;
  ${MEDIA_QUERY_SMtoMD} {
    border-bottom: 0;
  }
  ${MEDIA_QUERY_LG} {
    flex: 1;
    min-width: 500px;
    margin: 5px;
  }
`

const Game = styled.div`
  ${MEDIA_QUERY_SMtoMD} {
    background-color: #fff;
    border-radius: 4px;
    padding: 15px;
  }
`

const GameStatus = styled.div`
  color: grey;
  padding-left: 20px;
  ${MEDIA_QUERY_SMtoMD} {
    border-bottom: 1px solid grey;
    padding: 0 0 10px 20px;
  }
`

const GameBoard = styled.div`
  ${MEDIA_QUERY_SMtoMD} {
    border-bottom: 1px solid grey;
    padding-bottom: 10px;
  }
  ${MEDIA_QUERY_MD} {
    display: flex;
  }
`

const Teams = styled.div`
  ${MEDIA_QUERY_MD} {
    display: flex;
    flex-direction: column;
    margin-top: 35px;
  }
`

const Team = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 10px;
  ${MEDIA_QUERY_MD} {
    padding: 3px 10px;
  }
`

const TeamLogo = styled.div`
  background: red;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin-right: 10px;
`

const TeamInfo = styled.div`
  ${MEDIA_QUERY_SMtoMD} {
    display: flex;
    align-items: center;
  }
  ${MEDIA_QUERY_MD} {
    display: none;
  }
`

const TeamName = styled.div`
  display: flex;
  font-size: 2rem;
  font-weight: 900;
`

const TeamStandings = styled.div`
  font-size: 1rem;
  color: grey;
  align-item: flex-end;
  margin-top: 5px;
  ${MEDIA_QUERY_SMtoMD} {
    margin-left: 5px;
  }
`

const TeamScore = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  align-item: center;
  font-size: 2.25rem;
  font-weight: 900;
  ${MEDIA_QUERY_MD} {
    display: none;
  }
`

const ScoreBoard = styled.div`
  overflow: scroll;
  width: 100%;
  position: relative;
  display: none;
  ${MEDIA_QUERY_MD} {
    display: flex;
    align-items: center;
  }
`

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  justify-content: space-between;
  tbody tr, th {
    background-color: #ffffff;
    text-align: center;
  }
  td, th {
    padding: 10px 10px;
  }
`

const GameInfo = styled.div`
  display: none;
  align-items: center;
  padding: 40px 0;
  ${MEDIA_QUERY_SMtoMD} {
    display: flex;
  }
`

const GamePitcher = styled.div`
  display: flex;
  flex: 1;
  padding: 10px;
`

const PitcherProfilePic = styled.div`
  background: red;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin-right: 10px;
`

const PitcherInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const Pitcher = styled.div`
  display: flex;
`

const WinAndLose = styled.div``

const PitcherName = styled.div``

const PitcherStatus = styled.div``

function SelectButtons() {
  return (
    <SelectButtonsContainer>
      <GameDate>
        <Pages>＜</Pages>
        <DateContainer>
          <Day>星期二</Day>
          <Date>9月8日</Date>
        </DateContainer>
        <DateContainer>
          <Day>星期三</Day>
          <Date>9月9日</Date>
        </DateContainer>
        <DateContainer>
          <Day>星期四</Day>
          <Date>9月10日</Date>
        </DateContainer>
        <Pages>＞</Pages>
      </GameDate>
      <GameCalendar>日曆</GameCalendar>
    </SelectButtonsContainer>
  )
}

function Scores() {
  return (
    <ScoresContainer>
      <ScoresBlock>
        <Game>
          <GameStatus>Final</GameStatus>
          <GameBoard>
            <Teams>
              <Team>
                <TeamLogo></TeamLogo>
                <TeamInfo>
                  <TeamName>悍將</TeamName>
                  <TeamStandings>38 - 53</TeamStandings>
                </TeamInfo>
                <TeamScore>0</TeamScore>
              </Team>
              <Team>
                <TeamLogo></TeamLogo>
                <TeamInfo>
                  <TeamName>獅</TeamName>
                  <TeamStandings>43 - 49</TeamStandings>
                </TeamInfo>
                <TeamScore>6</TeamScore>
              </Team>
            </Teams>
            <ScoreBoard>
              <Table>
                <colgroup span="9" />
                <colgroup span="3" />
                <thead>
                  <tr>
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
              </Table>
            </ScoreBoard>
          </GameBoard>
          <GameInfo>
            <GamePitcher>
              <PitcherProfilePic></PitcherProfilePic>
              <PitcherInfo>
                <Pitcher>
                  <WinAndLose>W:</WinAndLose>
                  <PitcherName>泰迪</PitcherName>
                </Pitcher>
                <PitcherStatus>2 - 0 | 5.17 ERA</PitcherStatus>
              </PitcherInfo>
            </GamePitcher>
            <GamePitcher>
              <PitcherProfilePic></PitcherProfilePic>
              <PitcherInfo>
                <Pitcher>
                  <WinAndLose>L:</WinAndLose>
                  <PitcherName>邦威</PitcherName>
                </Pitcher>
                <PitcherStatus>2 - 3 | 3.60 ERA</PitcherStatus>
              </PitcherInfo>
            </GamePitcher>
          </GameInfo>
        </Game>
      </ScoresBlock>
      <ScoresBlock>
        <Game>
          <GameStatus>Final</GameStatus>
          <GameBoard>
            <Teams>
              <Team>
                <TeamLogo></TeamLogo>
                <TeamInfo>
                  <TeamName>兄弟</TeamName>
                  <TeamStandings>52 - 39</TeamStandings>
                </TeamInfo>
                <TeamScore>8</TeamScore>
              </Team>
              <Team>
                <TeamLogo></TeamLogo>
                <TeamInfo>
                  <TeamName>桃猿</TeamName>
                  <TeamStandings>50 - 42</TeamStandings>
                </TeamInfo>
                <TeamScore>1</TeamScore>
              </Team>
            </Teams>
            <ScoreBoard>
              <Table>
                <colgroup span="9" />
                <colgroup span="3" />
                <thead>
                  <tr>
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
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>6</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>2</td>
                    <td>8</td>
                    <td>12</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>1</td>
                    <td>11</td>
                    <td>1</td>
                  </tr>
                </tbody>
              </Table>
            </ScoreBoard>
          </GameBoard>
          <GameInfo>
            <GamePitcher>
              <PitcherProfilePic></PitcherProfilePic>
              <PitcherInfo>
                <Pitcher>
                  <WinAndLose>W:</WinAndLose>
                  <PitcherName>米蘭達</PitcherName>
                </Pitcher>
                <PitcherStatus>8 - 7 | 3.97 ERA</PitcherStatus>
              </PitcherInfo>
            </GamePitcher>
            <GamePitcher>
              <PitcherProfilePic></PitcherProfilePic>
              <PitcherInfo>
                <Pitcher>
                  <WinAndLose>L:</WinAndLose>
                  <PitcherName>霸能</PitcherName>
                </Pitcher>
                <PitcherStatus>9 - 5 | 4.81 ERA</PitcherStatus>
              </PitcherInfo>
            </GamePitcher>
          </GameInfo>
        </Game>
      </ScoresBlock>
    </ScoresContainer>
  )
}

export default function SchedulePage() {
  const { t, i18n } = useTranslation();
  const currentLng = i18n.language

  return (
    <Root>
      <Container>
        <Header>
          <PageTitle>{t('navbar.scores')}</PageTitle>
          <SelectButtons />
        </Header>
        <Scores />
      </Container>
    </Root>
  )
}