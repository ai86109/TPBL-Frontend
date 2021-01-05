import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MEDIA_QUERY_SM, MEDIA_QUERY_SMtoMD, MEDIA_QUERY_MD, MEDIA_QUERY_MDtoLG, MEDIA_QUERY_LG } from '../../constants/breakpoint';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux'

const Root = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: #f3f3f3;
  min-height: 700px;
  font-size: 16px;
  ${MEDIA_QUERY_LG} {
    display: flex;
    padding: 2rem;
  }
`

const TwoColumnContainer = styled.div`
  ${MEDIA_QUERY_MDtoLG} {
    display: flex;
    flex-direction: row;
    padding: 1.75rem;
  }
  ${MEDIA_QUERY_LG} {
    padding: 0 0 0 1.75rem;
  }
`

const TwoColumnLeft = styled.div`
  ${MEDIA_QUERY_MDtoLG} {
    width: 65%;
    margin-right: 1.75rem;
  }
  ${MEDIA_QUERY_LG} {
    width: 66%;
  }
`

const TwoColumnRight = styled.div`
  ${MEDIA_QUERY_MDtoLG} {
    width: 34%;
  }
  ${MEDIA_QUERY_LG} {
    width: 33%;
  }
`

const SubNavContainer = styled.div`
  background-color: #ffffff;
  box-shadow: 1px 1px 5px #000;
  ${MEDIA_QUERY_LG} {
    box-shadow: none;
    width: 40%;
    background-color: transparent;
  }
`

const GamesNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 2px;
  max-width: 100%;
  postion: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #ffffff;
  font-size: 12px;
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
  border-left: 1px solid grey;
  ${MEDIA_QUERY_MD} {
    justify-contents: flex-start;
    flex-grow: 0;
    & + & {
      border-right: 1px solid grey;
    }
  }
  ${MEDIA_QUERY_LG} {
    padding: 20px;
    flex-grow: 1;
    border: none;
    & + & {
      border-right: none;
      border-top: 1px solid grey;
    }
  }
`

const Teams = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
`

const Team = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
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
  ${MEDIA_QUERY_SM} {
    display: flex;
    align-items: center;
    color: grey;
  }
  ${MEDIA_QUERY_LG} {
    display: none;
  }
`

const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: #ffffff;
  border-radius: 4px;
`

const Headline = styled.div`
  border-radius: 4px;
`

const HeadlineImg = styled.image`
  & img {
    width: 100%;
    border-radius: 4px;
  }
`

const HeadlineTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  padding: 2rem 2rem 1rem 2rem;
  cursor: pointer;
`

const HeadlineContent = styled.div`
  font-size: 1.75rem;
  padding: 1rem 2rem 1.75rem 2rem;
`

const Divider = styled.div`
  background-color: #f3f3f3;
  width: 100%;
  height: 20px;
`

const LatestNews = styled.div`
  padding: 2rem;
`

const LatestNewsTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: grey;
  padding-bottom: 2rem;
  border-bottom: 1px solid grey;
`

const NewsTitle = styled.div`
  cursor: pointer;
  font-size: 1.75rem;
  padding: 1.5rem 0;
  &::before {
    content: "・";
  }
`

const StandingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  margin: 20px 0;
  border-radius: 4px;
  ${MEDIA_QUERY_MDtoLG} {
    padding: 1rem;
    margin: 0 0 20px 0;
  }
`

const DataHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  border-bottom: 1px solid grey;
  ${MEDIA_QUERY_MDtoLG} {
    padding: 2rem 0;
  }
`

const DataTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
`

const DataLink = styled(Link)``

const StandingsBox = styled.div`
  padding: 2rem;
  overflow: scroll;
  ${MEDIA_QUERY_MDtoLG} {
    padding: 0.75rem;
  }
`

const Table = styled.table`
  width: 100%;
  white-space: nowrap;
  td, th {
    font-size: 1.75rem;
    padding: 10px 15px;
    &:not(:first-child) {
      text-align: center;
    }
    &:first-child {
      background-color: #fff;
      ${MEDIA_QUERY_MDtoLG} {
        position: sticky;
        left: 0;
        z-index: 1;
      }
    }
    ${MEDIA_QUERY_MDtoLG} {
      padding: 7px 8px;
    }
  }
  th, td:first-child {
    font-weight: 700;
  }
`

const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  margin: 20px 0;
  width: 100%;
  border-radius: 4px;
  ${MEDIA_QUERY_MDtoLG} {
    padding: 1rem;
  }
`

const SelectButtons = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 0.25rem;
  padding: 2rem;
`

const SelectButton = styled.button`
  padding: 1rem 10rem;
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
  ${MEDIA_QUERY_MDtoLG} {
    padding: 0.75rem 0;
  }
  ${MEDIA_QUERY_LG} {
    min-width: 12rem;
  }
`

const StatsBox = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem 2rem;
  ${MEDIA_QUERY_MD} {
    padding: 1rem;
  }
`

const StatsDataBlock = styled.div``

const StatsData = styled.div`
  font-size: 30px;
  font-weight: 500;
`

const DataUnit = styled.div`
  font-size: 1.3rem;
  text-align: right;
`

const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 15px 0;
    border-bottom: 1px solid grey;
  `

const PlayerProfilePic = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  & img {
    border-radius: 50%;
    max-width: 50px;
    max-height: 50px;
  }
`

const PlayerInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const StatsType = styled.div`
  font-size: 1.5rem;
`

const PlayerName = styled.div`
  font-size: 2rem;
  font-weight: 600;
  margin: 4px 0;
`

const PlayerTeamAndPosition = styled.div`
  font-size: 1.2rem;
  color: grey;
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

function News() {
  return (
    <NewsContainer>
      <Headline>
        <HeadlineImg>
          <img src="https://i.imgur.com/uAOXfQl.jpg" />
        </HeadlineImg>
        <HeadlineTitle>
          It's 2021! Let's get to work
        </HeadlineTitle>
        <HeadlineContent>
          A new year holds promise for all of us, but make no mistake, these teams have unfinished business.
        </HeadlineContent>
      </Headline>
      <Divider />
      <LatestNews>
        <LatestNewsTitle>LATEST NEWS</LatestNewsTitle>
        <NewsTitle>
          10 teams with unfinished Hot Stove business
        </NewsTitle>
        <NewsTitle>
          Sugano on US soil, decision is near (source)
        </NewsTitle>
        <NewsTitle>
          Dodgers still in LeMahieu sweepstakes?
        </NewsTitle>
        <NewsTitle>
          Here are the 1st Power Rankings of 2021
        </NewsTitle>
        <NewsTitle>
          Look for these 7 stars to bounce back in '21
        </NewsTitle>
        <NewsTitle>
          Tanaka explores all options -- including Japan
        </NewsTitle>
      </LatestNews>
    </NewsContainer>
  )
}

function Standings({t, standings, currentLng}) {
  const zhtwTeamMap = {
    '富邦悍將': '悍將',
    '樂天桃猿': '桃猿',
    '統一7-ELEVEn獅': '獅',
    '中信兄弟': '兄弟',
  };

  const enTeamMap = {
    'Fubon Guardians': 'Guardians',
    'Rakuten Monkeys': 'Monkeys',
    'Uni-President 7-Eleven Lions': 'Lions',
    'CTBC Brothers': 'Brothers',
  };

  const standingsTitles = [
    t('blank'),
    t('standings.win'),
    t('standings.lose'),
    t('standings.tied'),
    t('standings.gb'),
    t('standings.l10')
  ]
  
  return (
    <StandingsContainer>
      <DataHeader>
        <DataTitle>2020 Standings</DataTitle>
        <DataLink to="/standings">Go to Standings</DataLink>
      </DataHeader>
      <StandingsBox>
        <Table>
          <thead>
            <tr>
              {standingsTitles.map((title, key) => (
                <th key={key}>{title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {standings.map((standing, x) => (
              <tr key={x}>
                <th>{currentLng === 'zh-TW' ? zhtwTeamMap[standing.zhtwTeam] : enTeamMap[standing.enTeam]}</th>
                <td>{standing.win}</td>
                <td>{standing.lose}</td>
                <td>{standing.tied}</td>
                <td>{standing.gb}</td>
                <td>{standing.l10}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </StandingsBox>
    </StandingsContainer>
  )
}

function Stats({hittingStats, pitchingStats, statsType, setStatsType}) {
  return (
    <StatsContainer>
      <DataHeader>
        <DataTitle>LEAGUE LEADERS</DataTitle>
        <DataLink to="/stats">Go to Stats</DataLink>
      </DataHeader>
      <SelectButtons>
        <SelectButton
          onClick={() => setStatsType('hitting')}
          $active={statsType === 'hitting'}
        >打擊</SelectButton>
        <SelectButton
          onClick={() => setStatsType('pitching')}
          $active={statsType === 'pitching'}
        >投球</SelectButton>
      </SelectButtons>
      {statsType === 'hitting' &&
        hittingStats.map((stat, key) => (
          <StatsBox key={key}>
            <PlayerProfilePic>
              <img src={stat[0].image} />
            </PlayerProfilePic>
            <Profile stat={stat} />
          </StatsBox>
        ))
      }
      {statsType === 'pitching' &&
        pitchingStats.map((stat, key) => (
          <StatsBox key={key}>
            <PlayerProfilePic>
              <img src={stat[0]['image']} />
            </PlayerProfilePic>
            <Profile stat={stat} />
          </StatsBox>
        ))
      }
    </StatsContainer>
  )
}

function Profile({stat}) {
  const { t, i18n } = useTranslation();
  const currentLng = i18n.language
  return (
    <ProfileContainer>
      <PlayerInfo>
        <StatsType>{t(`stats.${stat[1]}.desc`)}</StatsType>
        <PlayerName>
          {currentLng === 'zh-TW' ? stat[0]['zhtwPlayerName'] : stat[0]['enPlayerName']}
        </PlayerName>
        <PlayerTeamAndPosition>
          {currentLng === 'zh-TW' ? stat[0]['zhtwTeam'] : stat[0]['enTeam']} ・ {stat[0]['position']}
        </PlayerTeamAndPosition>
      </PlayerInfo>
      <StatsDataBlock>
        <StatsData>{stat[0][`${stat[1]}`]}</StatsData>
        <DataUnit>{stat[1].toUpperCase()}</DataUnit>
      </StatsDataBlock>
    </ProfileContainer>
  )
}

export default function HomePage() {
  const { t, i18n } = useTranslation();
  const [ standings, setStandings ] = useState([])
  const [ statsType, setStatsType ] = useState('hitting')
  const [ hittingStats, setHittingStats ] = useState([])
  const [ pitchingStats, setPitchingStats ] = useState([])
  const currentLng = i18n.language

  useEffect(() => {
    fetch(`https://floating-river-74889.herokuapp.com/standingsApi/2020/full`)
      .then(res => res.json())
      .then(data => setStandings(data))
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    if(statsType === 'hitting') {
      Promise.all([
        fetch(`https://floating-river-74889.herokuapp.com/topStatsApi/2020/hitting/avg`),
        fetch(`https://floating-river-74889.herokuapp.com/topStatsApi/2020/hitting/h`),
        fetch(`https://floating-river-74889.herokuapp.com/topStatsApi/2020/hitting/hr`),
        fetch(`https://floating-river-74889.herokuapp.com/topStatsApi/2020/hitting/rbi`),
        fetch(`https://floating-river-74889.herokuapp.com/topStatsApi/2020/hitting/sb`)
      ]).then(async([hitting1, hitting2, hitting3, hitting4, hitting5]) => {
        const h1 = await hitting1.json()
        const h2 = await hitting2.json()
        const h3 = await hitting3.json()
        const h4 = await hitting4.json()
        const h5 = await hitting5.json()
        return [[h1, 'avg'], [h2, 'h'], [h3, 'hr'], [h4, 'rbi'], [h5, 'sb']]
      }).then(data => setHittingStats(data))
    } else if (statsType === 'pitching') {
      Promise.all([
        fetch(`https://floating-river-74889.herokuapp.com/topStatsApi/2020/pitching/era`),
        fetch(`https://floating-river-74889.herokuapp.com/topStatsApi/2020/pitching/win`),
        fetch(`https://floating-river-74889.herokuapp.com/topStatsApi/2020/pitching/sv`),
        fetch(`https://floating-river-74889.herokuapp.com/topStatsApi/2020/pitching/hld`),
        fetch(`https://floating-river-74889.herokuapp.com/topStatsApi/2020/pitching/so`)
      ]).then(async([pitching1, pitching2, pitching3, pitching4, pitching5]) => {
        const p1 = await pitching1.json()
        const p2 = await pitching2.json()
        const p3 = await pitching3.json()
        const p4 = await pitching4.json()
        const p5 = await pitching5.json()
        return [[p1, 'era'], [p2, 'win'], [p3, 'sv'], [p4, 'hld'], [p5, 'so']]
      }).then(data => setPitchingStats(data))
    }
  }, [statsType])

  return (
    <Root>
      <SubNavContainer>
        <GamesNav />
      </SubNavContainer>
      <TwoColumnContainer>
        <TwoColumnLeft>
          <News />
        </TwoColumnLeft>
        <TwoColumnRight>
          <Standings 
            t={t} 
            standings={standings}
            currentLng={currentLng}   
          />
          <Stats 
            hittingStats={hittingStats}
            pitchingStats={pitchingStats}
            statsType={statsType}
            setStatsType={setStatsType}
          />
        </TwoColumnRight>
      </TwoColumnContainer>
    </Root>
  )
}