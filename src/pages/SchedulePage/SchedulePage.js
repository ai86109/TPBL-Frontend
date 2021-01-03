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

const Date = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`

const GameCalendar = styled.div`
  display: flex;
  align-items: center;
`

const ScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px 0;
`

const ScheduleBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`

const DateTime = styled.div`
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 10px;
`

const Game = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0;
  width: 100%;
  ${MEDIA_QUERY_SMtoMD} {
    background-color: #fff;
    border-radius: 4px;
    padding: 15px;
  }
`

const Teams = styled.div`
  display: flex;
  min-width: 230px;
`

const Team = styled.div`
  display: flex;
  margin: 10px;
`

const At = styled.div`
  display: flex;
  align-items: center;
  color: grey;
  font-size: 2rem;
  font-weight: 900;
  margin-right: 5px;
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

const TeamName = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 900;
`

const GameInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: grey;
  margin-left: 20px;
`

function SelectButtons() {
  return (
    <SelectButtonsContainer>
      <GameDate>
        <Pages>＜</Pages>
        <Date>9月 7 - 13日, 2020</Date>
        <Pages>＞</Pages>
      </GameDate>
      <GameCalendar>日曆</GameCalendar>
    </SelectButtonsContainer>
  )
}

function Schedule() {
  return (
    <ScheduleContainer>
      <ScheduleBlock>
        <DateTime>星期一 9月8日</DateTime>
        <Game>
          <Teams>
            <Team>
              <TeamLogo>
                <img src="https://i.imgur.com/9p23DQK.png" />
              </TeamLogo>
              <TeamName>悍將</TeamName>
            </Team>
            <Team>
              <At>@</At>
              <TeamLogo>
                <img src="https://i.imgur.com/pEHu3n2.png" />
              </TeamLogo>
              <TeamName>獅</TeamName>
            </Team>
          </Teams>
          <GameInfo>悍將 7, 獅 8</GameInfo>
        </Game>
      </ScheduleBlock>
      <ScheduleBlock>
        <DateTime>星期一 9月9日</DateTime>
        <Game>
          <Teams>
            <Team>
              <TeamLogo>
                <img src="https://i.imgur.com/9p23DQK.png" />
              </TeamLogo>
              <TeamName>悍將</TeamName>
            </Team>
            <Team>
              <At>@</At>
              <TeamLogo>
                <img src="https://i.imgur.com/pEHu3n2.png" />
              </TeamLogo>
              <TeamName>獅</TeamName>
            </Team>
          </Teams>
          <GameInfo>悍將 0, 獅 6</GameInfo>
        </Game>
        <Game>
          <Teams>
          <Team>
            <TeamLogo>
              <img src="https://i.imgur.com/XkOy9RG.png" />
            </TeamLogo>
            <TeamName>兄弟</TeamName>
          </Team>
          <Team>
            <At>@</At>
            <TeamLogo>
              <img src="https://i.imgur.com/wbwC9r7.png" />
            </TeamLogo>
            <TeamName>桃猿</TeamName>
          </Team>
          </Teams>
          <GameInfo>兄弟 8, 桃猿 1</GameInfo>
        </Game>
      </ScheduleBlock>
    </ScheduleContainer>
  )
}

export default function SchedulePage() {
  const { t, i18n } = useTranslation();
  const currentLng = i18n.language

  return (
    <Root>
      <Container>
        <Header>
          <PageTitle>{t('navbar.schedule')}</PageTitle>
          <SelectButtons />
        </Header>
        <Schedule />
      </Container>
    </Root>
  )
}