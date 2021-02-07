import React from 'react';
import styled from 'styled-components';
import { MEDIA_QUERY_SMtoMD } from '../../constants/breakpoint';
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';

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
    background-color: ${({theme}) => theme.background.white_100};
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
  }
`

const TeamName = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 900;
`

const GameInfo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.75rem;
  font-weight: 700;
  color: ${({theme}) => theme.text.black_300};
  margin-left: 20px;
  cursor: pointer;
`

export default function SchedulePageContent() {
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
          <GameInfo to="/boxscores">悍將 0, 獅 6</GameInfo>
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