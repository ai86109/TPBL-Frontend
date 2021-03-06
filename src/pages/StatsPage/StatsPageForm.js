import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { MEDIA_QUERY_LG } from '../../constants/breakpoint';
import { 
  statsBatterStandardTableTitles,
  statsBatterAdvancedTableTitles,
  statsPitcherStandardTableTitles,
  statsPitcherAdvancedTableTitles,
  statsTeamBatterTableTitles,
  statsTeamPitcherTableTitles
} from '../../ListTitles'

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
  `

  const BoxHeader = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
  `

  const BoxHeaderLeft = styled.div`
    display: flex;
    flex-direction: column;
  `

  const Title = styled.div`
    font-size: 22px;
    font-weight: 700;
    margin: 10px 0;
  `

  const Description = styled.div`
    font-weight: 700;
    margin: 10px 0;
  `

  const Caret = styled.div`
    display: flex;
    align-items: flex-end;
    font-weight: 900;
    font-size: 2rem;
    cursor: pointer;
    color: ${({theme}) => theme.text.black_100};
  `

  const CaretItem = styled.div`
    height: 10px;
    width: 20px;
    ${(props) => props.$active && `color: ${props.theme.text.guardians_blue};`}
  `

  const BoxBody = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    padding: 10px 5px;
  `

  const BoxBodyLeft = styled.div`
    display: flex;
  `

  const BoxBodyRight = styled.div`
    font-size: 24px;
    font-weight: 500;
  `

  const Rank = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;
  `

  const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
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

  const PlayerInfoTop = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  `

  const PlayerName = styled.div`
    font-size: 18px;
    font-weight: 600;
    margin-right: 10px;
  `

  const PlayerPosition = styled.div`
    font-size: 14px;
    color: grey;
  `

  const PlayerTeam = styled.div`
    font-size: 14px;
    color: ${({theme}) => theme.text.black_100};
  `

  const TeamName = styled.div`
    font-size: 18px;
    font-weight: 600;
  `

  const TableContainer = styled.div`
    overflow: scroll;
    width: 100%;
    position: relative;
    border-bottom: 1px solid ${({theme}) => theme.background.guardians_blue};
  `

  const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
    white-space: nowrap;
    colgroup {
      border-right: 1px solid ${({theme}) => theme.background.guardians_blue};
    }
    th {
      border-right: 1px solid ${({theme}) => theme.background.guardians_blue};
      background-color: ${({theme}) => theme.background.guardians_blue};
      color: white;
      &:first-child {
        position: sticky;
        left: 0;
        border-right: none;
      }
      &:nth-child(n+3) {
        cursor: pointer;
      }
    }
    tbody tr th {
      background-color: ${({theme}) => theme.background.white_100};
      color: ${({theme}) => theme.text.black_300};
    }
    tbody tr {
      background-color: ${({theme}) => theme.background.white_100};
      text-align: center;
    }
    td, th {
      text-align: center;
      padding: 10px 15px;
    }
    tbody > tr:hover {
      background-color: ${({theme}) => theme.background.white_200};
      & th {
        background-color: ${({theme}) => theme.background.white_200};
      }
    }
    ${MEDIA_QUERY_LG} {
      th:first-child {
        position: static;
      }
    }
  `

  function Profile({nav, stat, currentLng}) {
    if(nav === 'team') {
      return (
        <ProfileContainer>
          <TeamName>{currentLng === 'zh-TW' ? stat.zhtwTeam : stat.enTeam}</TeamName>
        </ProfileContainer>
      )
    }
    return (
      <ProfileContainer>
        <PlayerProfilePic>
          <img src={stat.image}/>
        </PlayerProfilePic>
        <PlayerInfo>
          <PlayerInfoTop>
            <PlayerName>{currentLng === 'zh-TW' ? stat.zhtwPlayerName : stat.enPlayerName}</PlayerName>
            <PlayerPosition>{stat.position}</PlayerPosition>
          </PlayerInfoTop>
          <PlayerTeam>{currentLng === 'zh-TW' ? stat.zhtwTeam : stat.enTeam}</PlayerTeam>
        </PlayerInfo>
      </ProfileContainer>
    )
  }

export default function StatsPageForm({nav, subNav, dataType, statsType, setStatsType, stats, sort, setSort, currentLng, match}) {
  const { t } = useTranslation();

  if(match){
    if(nav === 'player') {
      if(dataType === 'advanced') {
        return (
          <TableContainer>
            <Table>
              <colgroup span="2" />
              <colgroup span="1" />
              <colgroup span="5" />
              <colgroup span="3" />
              <thead>
                <tr>
                  <th>PLAYER</th>
                  <th>TEAM</th>
                  {subNav === 'hitting' && statsBatterAdvancedTableTitles.map((title, key) => (
                    <th 
                      key={key}
                      onClick={() => statsType === title[1] ? setSort(sort === 'desc' ? 'asc' : 'desc') : setStatsType(title[1])}
                    >{title[0]}</th>
                  ))}
                  {subNav === 'pitching' && statsPitcherAdvancedTableTitles.map((title, key) => (
                    <th 
                      key={key}
                      onClick={() => statsType === title[1] ? setSort(sort === 'desc' ? 'asc' : 'desc') : setStatsType(title[1])}
                    >{title[0]}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {stats && stats.map((stat, x) => (
                  <tr key={x}>
                    <th>{currentLng === 'zh-TW' ? stat.zhtwPlayerName : stat.enPlayerName}</th>
                    <td>{currentLng === 'zh-TW' ? stat.zhtwTeam : stat.enTeam}</td>
                    {subNav === 'hitting' && statsBatterAdvancedTableTitles.map((title, key) => (
                      <td key={key}>{stat[title[1]]}</td>
                    ))}
                    {subNav === 'pitching' && statsPitcherAdvancedTableTitles.map((title, key) => (
                      <td key={key}>{stat[title[1]]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </Table>
          </TableContainer>
        )
      }
      return (
        <TableContainer>
          <Table>
            <colgroup span="2" />
            <colgroup span="2" />
            <colgroup span="7" />
            <colgroup span="2" />
            <colgroup span="2" />
            <thead>
              <tr>
                <th>PLAYER</th>
                <th>TEAM</th>
                {subNav === 'hitting' && statsBatterStandardTableTitles.map((title, key) => (
                  <th 
                    key={key}
                    onClick={() => statsType === title[1] ? setSort(sort === 'desc' ? 'asc' : 'desc') : setStatsType(title[1])}
                  >{title[0]}</th>
                ))}
                {subNav === 'pitching' && statsPitcherStandardTableTitles.map((title, key) => (
                  <th 
                    key={key}
                    onClick={() => statsType === title[1] ? setSort(sort === 'desc' ? 'asc' : 'desc') : setStatsType(title[1])}
                  >{title[0]}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {stats && stats.map((stat, x) => (
                <tr key={x}>
                  <th>{currentLng === 'zh-TW' ? stat.zhtwPlayerName : stat.enPlayerName}</th>
                  <td>{currentLng === 'zh-TW' ? stat.zhtwTeam : stat.enTeam}</td>
                  {subNav === 'hitting' && statsBatterStandardTableTitles.map((title, key) => (
                    <td key={key}>{stat[title[1]]}</td>
                  ))}
                  {subNav === 'pitching' && statsPitcherStandardTableTitles.map((title, key) => (
                    <td key={key}>{stat[title[1]]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </TableContainer>
      )
    } else {
      return (
        <TableContainer>
          <Table>
            <colgroup span="2" />
            <colgroup span="1" />
            <colgroup span="5" />
            <thead>
              <tr>
                <th>TEAM</th>
                {subNav === 'hitting' && statsTeamBatterTableTitles.map((title, key) => (
                  <th 
                    key={key}
                    onClick={() => setStatsType(title[1])}
                  >{title[0]}</th>
                ))}
                {subNav === 'pitching' && statsTeamPitcherTableTitles.map((title, key) => (
                  <th 
                    key={key}
                    onClick={() => setStatsType(title[1])}
                  >{title[0]}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {stats && stats.map((stat, x) => (
                <tr key={x}>
                  <th>{currentLng === 'zh-TW' ? stat.zhtwTeam : stat.enTeam}</th>
                  {subNav === 'hitting' && statsTeamBatterTableTitles.map((title, key) => (
                    <td key={key}>{stat[title[1]]}</td>
                  ))}
                  {subNav === 'pitching' && statsTeamPitcherTableTitles.map((title, key) => (
                    <td key={key}>{stat[title[1]]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </TableContainer>
      )
    }
  }

  return (
    <FormContainer>
      <BoxHeader>
        <BoxHeaderLeft>
          <Title>{t(`stats.${statsType}.title`)}</Title>
          <Description>{t(`stats.${statsType}.desc`)}</Description>
        </BoxHeaderLeft>
        <Caret>
          <CaretItem 
            onClick={() => setSort('asc')}
            $active={sort === 'asc'}
          >∧</CaretItem>
          <CaretItem 
            onClick={() => setSort('desc')}
            $active={sort === 'desc'}
          >∨</CaretItem>
        </Caret>
      </BoxHeader>
      {stats && stats.map((stat, key) => (
        <BoxBody key={key}>
          <BoxBodyLeft>
            <Rank>1</Rank>
            <Profile nav={nav} stat={stat} currentLng={currentLng} />
          </BoxBodyLeft>
          <BoxBodyRight>{stat[`${statsType}`]}</BoxBodyRight>
        </BoxBody>
      ))}
    </FormContainer>
  )
}
