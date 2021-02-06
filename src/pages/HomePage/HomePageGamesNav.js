import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MEDIA_QUERY_SMtoMD, MEDIA_QUERY_MD, MEDIA_QUERY_LG } from '../../constants/breakpoint';

const GamesNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 2px;
  max-width: 100%;
  postion: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${({theme}) => theme.background.white_100};
  font-size: 12px;
  color: ${({theme}) => theme.text.black_200};
  ${MEDIA_QUERY_SMtoMD} {
    font-size: 16px;
    padding: 20px 5px;
  }
  ${MEDIA_QUERY_MD} {
    max-width: 600px;
    justify-contents: flex-start;
  }
  ${MEDIA_QUERY_LG} {
    flex-direction: column;
    position: static;
    border-radius: 4px;
  }
`

const GameDate = styled.div`
  display: flex;
  font-weight: 900;
  padding: 0 20px;
  ${MEDIA_QUERY_LG} {
    display: flex;
    justify-content: center;
  }
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
  padding: 0 10px;
  ${MEDIA_QUERY_SMtoMD} {
    padding: 0 25px;
  }
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
  border-left: 1px solid ${({theme}) => theme.background.dark_gray};
  ${MEDIA_QUERY_MD} {
    justify-contents: flex-start;
    flex-grow: 0;
    & + & {
      border-right: 1px solid ${({theme}) => theme.background.dark_gray};
    }
  }
  ${MEDIA_QUERY_LG} {
    padding: 20px;
    flex-grow: 1;
    border: none;
    & + & {
      border-right: none;
      border-top: 1px solid ${({theme}) => theme.background.dark_gray};
    }
  }
`

const Teams = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
`

const Team = styled(Link)`
  display: flex;
  flex-direction: row;
  width: 100%;
  cursor: pointer;
  text-decoration: none;
  color: ${({theme}) => theme.text.black_200};
  ${MEDIA_QUERY_SMtoMD} {
    justify-content: space-between;
  }
  ${MEDIA_QUERY_LG} {
    justify-content: flex-start;
  }
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
    ${MEDIA_QUERY_LG} {
      max-width: 40px;
      max-height: 40px;
    }
  }
`

const TeamInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${MEDIA_QUERY_LG} {
    width: 100%;
  }
`

const TeamName = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  margin-right: 10px;
  ${MEDIA_QUERY_LG} {
    font-size: 2rem;
  }
`

const TeamScore = styled.div`
  display: flex;
  align-items: center;
  text-align: right;
  margin-right: 20px;
  ${MEDIA_QUERY_LG} {
    font-size: 2rem;
    font-weight: 700;
  }
`

const TeamStandings = styled.div`
  display: none;
  ${MEDIA_QUERY_SMtoMD} {
    display: flex;
    align-items: center;
    color: ${({theme}) => theme.text.black_100};
  }
  ${MEDIA_QUERY_LG} {
    display: none;
  }
`

export default function HomePageGamesNav() {
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
          <Team to="/boxscores">
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
