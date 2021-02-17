import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MEDIA_QUERY_MD, MEDIA_QUERY_MDtoLG, MEDIA_QUERY_LG } from '../../constants/breakpoint';
import { useTranslation } from 'react-i18next';

const DataHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  border-bottom: 1px solid ${({theme}) => theme.background.dark_gray};
  ${MEDIA_QUERY_MDtoLG} {
    padding: 2rem 0;
  }
`

const DataTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
`

const DataLink = styled(Link)`
  text-decoration: none;
  color: ${({theme}) => theme.text.black_200};
  &:hover {
    color: ${({theme}) => theme.text.black_100};
  }
`

const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({theme}) => theme.background.white_100};
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
  padding: 1rem 5rem;
  border-collapse: collapse;
  min-width: 15rem;
  border: 1px solid ${({theme}) => theme.background.light_gray};
  cursor: pointer;
  height: 100%;
  font-size: 1.5rem;
  font-weight: 700;
  outline: none;
  transition: all 0.5s;
  color: ${({theme}) => theme.text.black_300};
  ${(props) => props.$active && `background-color: ${props.theme.background.light_gray}; color: ${props.theme.text.white_opacity08};`}
  &:hover {
    background-color: ${({theme}) => theme.background.light_gray};
    color: ${({theme}) => theme.text.white_opacity08};
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
  color: ${({theme}) => theme.text.black_300};
  font-weight: 500;
`

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 15px 0;
  border-bottom: 1px solid ${({theme}) => theme.background.dark_gray};
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
  color: ${({theme}) => theme.text.black_300};
`

const PlayerTeamAndPosition = styled.div`
  font-size: 1.2rem;
  color: ${({theme}) => theme.text.black_100};
`

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

export default function HomePageStats({hittingStats, pitchingStats, statsType, setStatsType}) {
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
        hittingStats &&
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
        pitchingStats &&
        pitchingStats.map((stat, key) => (
          <StatsBox key={key}>
            <PlayerProfilePic>
              <img src={stat[0].image} />
            </PlayerProfilePic>
            <Profile stat={stat} />
          </StatsBox>
        ))
      }
    </StatsContainer>
  )
}
