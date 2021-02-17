import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MEDIA_QUERY_MDtoLG } from '../../constants/breakpoint';

const StandingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({theme}) => theme.background.white_100};
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
      background-color: ${({theme}) => theme.background.white_100};
      ${MEDIA_QUERY_MDtoLG} {
        position: sticky;
        left: 0;
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

export default function HomePageStandings({t, standings, currentLng}) {
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
            {standings && standings.map((standing, x) => (
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
