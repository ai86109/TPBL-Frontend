import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { MEDIA_QUERY_LG, MEDIA_QUERY_MD, MEDIA_QUERY_SM } from '../../constants/breakpoint';

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
    color: grey;
  `

  const CaretItem = styled.div`
    height: 10px;
    width: 20px;
    cursor: pointer;
    ${(props) => props.$active && `color: #0A1E40;`}
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
    color: grey;
  `

  const TeamName = styled.div`
    font-size: 18px;
    font-weight: 600;
  `

  const TableContainer = styled.div`
    overflow: scroll;
    width: 100%;
    position: relative;
    border-bottom: 1px solid #0A1E40;
  `

  const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
    white-space: nowrap;
    colgroup {
      border-right: 1px solid grey;
    }
    th {
      border-right: 1px solid #0A1E40;
      background-color: #0A1E40;
      color: white;
      &:first-child {
        position: sticky;
        left: 0;
        z-index: 1;
        border-right: none;
      }
      &:nth-child(n+3) {
        cursor: pointer;
      }
    }
    tbody tr th {
      background-color: #ffffff;
      color: black;
    }
    tbody tr {
      background-color: #ffffff;
      text-align: center;
    }
    td, th {
      padding: 10px 15px;
    }
    tbody > tr:hover {
      background-color: #efefef;
      & th {
        background-color: #efefef;
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

export default function Form({nav, year, subNav, dataType, statsType, setStatsType, stats, sort, setSort, currentLng, match}) {
  const { t } = useTranslation();

  const batterStandardTitles = [
    ['G', 'games'], ['AB', 'ab'], ['R', 'r'], ['H', 'h'], ['1B', '1B'], ['2B', '2B'], ['3B', '3B'], 
    ['HR', 'hr'], ['RBI', 'rbi'], ['BB', 'bb'], ['SO', 'so'], ['SB', 'sb'], ['CS', 'cs'], ['AVG', 'avg'], 
    ['OBP', 'obp'], ['SLG', 'slg'], ['OPS', 'ops']
  ]

  const batterAdvancedTitles = [
    ['PA', 'pa'], ['HBP', 'hbp'], ['SH', 'sac'], ['SF', 'sf'], ['GIDP', 'gidp'], ['GO/AO', 'goao'], 
    ['XBH', 'xbh'], ['TB', 'tb'], ['IBB', 'ibb'], ['BABIP', 'babip'], ['ISO', 'iso'], ['AB/HR', 'abhr'], 
    ['BB/K', 'bbso'], ['BB%', 'bbpa'], ['SO%', 'sopa']
  ]

  const pitcherStandardTitles = [
    ['W', 'win'], ['L', 'lose'], ['SV', 'sv'], ['HLD', 'hld'], ['ERA', 'era'], ['G', 'games'], ['GS', 'gs'], 
    ['CG', 'cg'], ['SHO', 'sho'], ['GR', 'gr'], ['BS', 'bs'], ['IP', 'ip'], ['H', 'h'], ['R', 'r'], 
    ['ER', 'er'], ['BB', 'bb'], ['HBP', 'hbp'], ['SO', 'so'], ['WHIP', 'whip']
  ]

  const pitcherAdvancedTitles = [
    ['BF', 'bf'], ['NP', 'np'], ['P/IP', 'pip'], ['IBB', 'ibb'], ['WP', 'wp'], ['BK', 'bk'], ['GO', 'go'], 
    ['AO', 'GO/AO'], ['SO/9', 'so9'], ['BB/9', 'bb9'], ['K/BB', 'sobb']
  ]

  const teamBatterStatsTitles = [
    ['G','games'], ['AB', 'ab'], ['R', 'r'], ['H', 'h'], ['HR', 'hr'], ['RBI', 'rbi'], ['BB', 'bb'], ['SO', 'so'],
    ['SB', 'sb'], ['AVG', 'avg'], ['OBP', 'obp'], ['SLG', 'slg'], ['OPS', 'ops'], ['AB/HR', 'abhr']
  ]

  const teamPitcherStatsTitles = [
    ['W', 'win'], ['L', 'lose'], ['T', 'tied'], ['ERA', 'era'], ['G', 'games'], ['H', 'h'], ['R', 'r'], ['ER', 'er'], 
    ['BB', 'bb'], ['SO', 'so'], ['WHIP', 'whip'], ['BF', 'bf'], ['NP', 'np'], ['WP', 'wp'], ['BK', 'bk'], 
    ['SO/BB', 'sobb']
  ]

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
                  {subNav === 'hitting' && batterAdvancedTitles.map((title, key) => (
                    <th 
                      key={key}
                      onClick={() => setStatsType(title[1])}
                    >{title[0]}</th>
                  ))}
                  {subNav === 'pitching' && pitcherAdvancedTitles.map((title, key) => (
                    <th 
                      key={key}
                      onClick={() => setStatsType(title[1])}
                    >{title[0]}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {stats.map((stat, x) => (
                  <tr key={x}>
                    <th>{currentLng === 'zh-TW' ? stat.zhtwPlayerName : stat.enPlayerName}</th>
                    <td>{currentLng === 'zh-TW' ? stat.zhtwTeam : stat.enTeam}</td>
                    {subNav === 'hitting' && batterAdvancedTitles.map((title, key) => (
                      <td key={key}>{stat[title[1]]}</td>
                    ))}
                    {subNav === 'pitching' && pitcherAdvancedTitles.map((title, key) => (
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
                {subNav === 'hitting' && batterStandardTitles.map((title, key) => (
                  <th 
                    key={key}
                    onClick={() => setStatsType(title[1])}
                  >{title[0]}</th>
                ))}
                {subNav === 'pitching' && pitcherStandardTitles.map((title, key) => (
                  <th 
                    key={key}
                    onClick={() => setStatsType(title[1])}
                  >{title[0]}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {stats.map((stat, x) => (
                <tr key={x}>
                  <th>{currentLng === 'zh-TW' ? stat.zhtwPlayerName : stat.enPlayerName}</th>
                  <td>{currentLng === 'zh-TW' ? stat.zhtwTeam : stat.enTeam}</td>
                  {subNav === 'hitting' && batterStandardTitles.map((title, key) => (
                    <td key={key}>{stat[title[1]]}</td>
                  ))}
                  {subNav === 'pitching' && pitcherStandardTitles.map((title, key) => (
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
                {subNav === 'hitting' && teamBatterStatsTitles.map((title, key) => (
                  <th 
                    key={key}
                    onClick={() => setStatsType(title[1])}
                  >{title[0]}</th>
                ))}
                {subNav === 'pitching' && teamPitcherStatsTitles.map((title, key) => (
                  <th 
                    key={key}
                    onClick={() => setStatsType(title[1])}
                  >{title[0]}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {stats.map((stat, x) => (
                <tr key={x}>
                  <th>{currentLng === 'zh-TW' ? stat.zhtwTeam : stat.enTeam}</th>
                  {subNav === 'hitting' && teamBatterStatsTitles.map((title, key) => (
                    <td key={key}>{stat[title[1]]}</td>
                  ))}
                  {subNav === 'pitching' && teamPitcherStatsTitles.map((title, key) => (
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
      {stats.map((stat, key) => (
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