import React from 'react';
import styled from 'styled-components';
import { MEDIA_QUERY_LG, MEDIA_QUERY_SMtoMD } from '../../constants/breakpoint';

const FormContainer = styled.div`
  overflow: scroll;
  width: 100%;
  position: relative;
  border-bottom: 1px solid ${({theme}) => theme.background.black_100};
`

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  white-space: nowrap;
  font-size: 1.5rem;
  colgroup {
    border-right: 1px solid ${({theme}) => theme.background.white_300};
  }
  th {
    border-right: 1px solid ${({theme}) => theme.background.guardians_blue};
    background-color: ${({theme}) => theme.background.guardians_blue};
    color: ${({theme}) => theme.text.white_opacity08};
    font-weight: 700;
    font-size: 1.6rem;
    &:first-child {
      position: sticky;
      left: 0;
      padding: 7px;
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
    padding: 7px 12px;
    ${MEDIA_QUERY_SMtoMD} {
      padding: 12px 17px;
    }
  }
  tbody > tr:hover {
    background-color: ${({theme}) => theme.background.white_200};
    & th {
      background-color: ${({theme}) => theme.background.white_200};
    }
  }
  ${MEDIA_QUERY_SMtoMD} {
    font-size: 16px;
  }
  ${MEDIA_QUERY_LG} {
    th:first-child {
      position: static;
    }
  }
`

export default function StandingsPageForm({t, standings, currentLng, dataType}) {
  const standardTitles = [
    t('blank'),
    t('standings.win'),
    t('standings.lose'),
    t('standings.tied'),
    t('standings.pct'),
    t('standings.gb'),
    t('standings.eliminationNum'),
    t('standings.home'),
    t('standings.away'),
    t('standings.rs'),
    t('standings.ra'),
    t('standings.diff'),
    t('standings.strk'),
    t('standings.l10'),
  ]

  const advancedTitles = [
    t('blank'),
    t('standings.win'),
    t('standings.lose'),
    t('standings.tied'),
    t('standings.pct'),
    t('standings.gb'),
    t('standings.xtra'),
    t('standings.oneRun'),
    t('standings.vsBrothers'),
    t('standings.vsMonkeys'),
    t('standings.vsLions'),
    t('standings.vsGuardians'),
  ]

  const handleStrkLng = (strk) => {
    const charMap = {
      '勝': 'W',
      '敗': 'L',
    }
    const char = strk.split('')
    return charMap[char[0]] + char[1]
  }

  if(dataType === 'advanced') {
    return (
      <FormContainer>
        <Table>
          <colgroup span="6" />
          <colgroup span="2" />
          <thead>
            <tr>
              {advancedTitles.map((title, key) => (
                <th key={key}>{title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {standings && standings.map((standing, x) => (
              <tr key={x}>
                <th>{currentLng === 'zh-TW' ? standing.zhtwTeam : standing.enTeam}</th>
                <td>{standing.win}</td>
                <td>{standing.lose}</td>
                <td>{standing.tied}</td>
                <td>{standing.pct}</td>
                <td>{standing.gb}</td>
                <td>{standing.xtra}</td>
                <td>{standing.oneRun}</td>
                <td>{standing.vsBrothers}</td>
                <td>{standing.vsMonkeys}</td>
                <td>{standing.vsLions}</td>
                <td>{standing.vsGuardians}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </FormContainer>
    )
  }
  return (
    <FormContainer>
      <Table>
        <colgroup span="7" />
        <colgroup span="2" />
        <colgroup span="3" />
        <thead>
          <tr>
            {standardTitles.map((title, key) => (
              <th key={key}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {standings && standings.map((standing, x) => (
            <tr key={x}>
              <th>{currentLng === 'zh-TW' ? standing.zhtwTeam : standing.enTeam}</th>
              <td>{standing.win}</td>
              <td>{standing.lose}</td>
              <td>{standing.tied}</td>
              <td>{standing.pct}</td>
              <td>{standing.gb}</td>
              <td>{standing.eIndex}</td>
              <td>{standing.home}</td>
              <td>{standing.away}</td>
              <td>{standing.rs}</td>
              <td>{standing.ra}</td>
              <td>{(standing.rs - standing.ra)}</td>
              <td>{(currentLng === 'zh-TW' ? standing.strk : handleStrkLng(standing.strk))}</td>
              <td>{standing.l10}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </FormContainer>
  )
}
