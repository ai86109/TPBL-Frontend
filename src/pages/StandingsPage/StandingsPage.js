import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { MEDIA_QUERY_LG, MEDIA_QUERY_MD, MEDIA_QUERY_SM } from '../../constants/breakpoint';

const Root = styled.div`
  margin-top: 3px;
  background-color: #f3f3f3;
  width: 100%;
  min-height: 700px;
`

const Container = styled.div`
  background-color: #fff;
  border-color: #fff;
  max-width: 1400px;
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
  flex-direction: column;
  ${MEDIA_QUERY_MD} {
    flex-direction: row;
  }
`

const Seasons = styled.div`
  display: flex;
  ${MEDIA_QUERY_MD} {
    border: 1px solid black;
    border-radius: 0.25rem;
    height: 5rem;
    margin-right: 1rem;
  }
`

const Season = styled.button`
  display: flex;
  flex: 1 1 100%;
  justify-content: center;
  ${(props) => props.$active && `border-bottom: 3px solid red;`}
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.5;
  cursor: pointer;
  ${MEDIA_QUERY_MD} {
    width: 10rem;
    padding: 0.5rem;
    align-items: center;
    border-bottom: none;
    ${(props) => props.$active && `background-color: grey;`}
  }
`

const YearsAndStandingsDataType = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #f3f3f3;
  padding: 10px 10px;
  ${MEDIA_QUERY_MD} {
    background-color: white;
    padding: 0;
  }
`

const SelectForm = styled.select`
  width: 100%;
  min-width: 10rem;
  max-width: 20rem;
  border-radius: 0.25rem;
  padding: 10px 20px;
  font-size: 1.5rem;
  cursor: pointer;
  ${MEDIA_QUERY_MD} {
    border: 1px solid black;
    border-radius: 0.25rem;
    height: 5rem;
    margin-right: 1rem;
    width: 10rem;
  }
`

const StandingsDataType = styled.div`
  border: 1px solid black;
  border-radius: 0.25rem;
  ${MEDIA_QUERY_MD} {
    display: flex;
    align-items: center;
  }
`

const DataType = styled.button`
  padding: 10px 20px;
  min-width: 12rem;
  max-width: 20rem;
  cursor: pointer;
  height: 100%;
  ${(props) => props.$active && `background-color: grey;`}
`

const FormContainer = styled.div`
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

function SelectButtons({t, season, setSeason, year, setYear, dataType, setDataType}) {
  return (
    <SelectButtonsContainer>
      <Seasons>
        <Season 
          onClick={() => setSeason('firstHalf')}
          $active={season === 'firstHalf'}
        >{t('standings.firstHalf')}
        </Season>
        <Season 
          onClick={() => setSeason('secondHalf')}
          $active={season === 'secondHalf'}
        >{t('standings.secondHalf')}
        </Season>
        <Season 
          onClick={() => setSeason('full')}
          $active={season === 'full'}
        >{t('standings.fullseason')}
        </Season>
      </Seasons>
      <YearsAndStandingsDataType>
        <SelectForm value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
        </SelectForm>
        <StandingsDataType>
          <DataType
            onClick={() => setDataType('standard')}
            $active={dataType === 'standard'}
          >{t('standings.standard')}
          </DataType>
          <DataType
            onClick={() => setDataType('advanced')}
            $active={dataType === 'advanced'}
          >{t('standings.advanced')}
          </DataType>
        </StandingsDataType>
      </YearsAndStandingsDataType>
    </SelectButtonsContainer>
  )
}

function Form({standardTitles, advancedTitles, standings, currentLng, handleStrkLng, dataType}) {
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
            {standings.map((standing, x) => (
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
          {standings.map((standing, x) => (
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

export default function StandingsPage() {
  const [ year, setYear ] = useState(2020)
  const [ season, setSeason ] = useState('full')
  const [ dataType, setDataType ] = useState('standard')
  const { t, i18n } = useTranslation();
  const [ standings, setStandings ] = useState([])
  const currentLng = i18n.language

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
  
  useEffect(() => {
    fetch(`https://floating-river-74889.herokuapp.com/standingsApi/${year}/${season}`)
      .then(res => res.json())
      .then(data => setStandings(data))
      .catch(err => console.log(err))
  }, [year, season])

  return (
    <Root>
      <Container>
        <Header>
          <PageTitle>{t('navbar.standings')}</PageTitle>
          <SelectButtons 
            t={t} 
            season={season}
            setSeason={setSeason} 
            year={year}
            setYear={setYear}
            dataType={dataType}
            setDataType={setDataType}
          />
        </Header>
        <Form 
          standardTitles={standardTitles} 
          advancedTitles={advancedTitles}
          standings={standings} 
          currentLng={currentLng}
          handleStrkLng={handleStrkLng} 
          dataType={dataType}
        />
      </Container>
    </Root>
  )
}