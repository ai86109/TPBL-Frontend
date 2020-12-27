import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { MEDIA_QUERY_LG, MEDIA_QUERY_MD, MEDIA_QUERY_SM, MEDIA_QUERY_SMtoMD } from '../../constants/breakpoint';
import Form from './Form';

const Container = styled.div`
  background-color: #fff;
  width: 100%;
  min-height: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 16px;
  padding: 2rem;
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
`

const NavList = styled.div`
  display: flex;
  margin: 10px 0;
  color: grey;
`

const Nav = styled.div`
  padding-right: 18px;
  font-size: 24px;
  font-weight: 900;
  cursor: pointer;
  ${(props) => props.$active && `color: #0A1E40;`}
`

const SubNav = styled.div`
  margin-right: 14px;
  padding-bottom: 5px;
  font-size: 18px;
  font-weight: 900;
  cursor: pointer;
  ${(props) => props.$active && `color: #0A1E40; border-bottom: 3px solid #0A1E40;`}
`

const YearsAndStatsType = styled.div`
  display: flex;
`

const SelectForm = styled.select`
  width: 10rem;
  border-radius: 0.5rem;
  padding: 7px 20px;
  font-size: 1.5rem;
  cursor: pointer;
  margin-right: 1rem;
  ${MEDIA_QUERY_MD} {
    border: 1px solid black;
    border-radius: 0.25rem;
  }
`

const StatsDataType = styled.div`
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

const StatsType = styled.div`
  display: flex;
  align-items: center;
  overflow: scroll;
  margin-top: 10px;
  ${MEDIA_QUERY_SMtoMD} {
    display: none;
  }
`

const Type = styled.button`
  border: 1px solid grey;
  border-radius: 1rem;
  padding: 7px 5px;
  margin: 2px 10px;
  min-width: 5rem;
  width: 100%;
  cursor: pointer;
  ${(props) => props.$active && `background-color: #0A1E40; color: #fff`}
`

function SelectButtons({t, nav, setNav, subNav, setSubNav, year, setYear, statsType, setStatsType, statsTypeTitles, dataType, setDataType}) {
  return (
    <SelectButtonsContainer>
      <NavList>
        <Nav
          onClick={() => setNav('player')}
          $active={nav === 'player'}
        >
          {t('stats.player')}
        </Nav>
        <Nav
          onClick={() => setNav('team')}
          $active={nav === 'team'}
        >
          {t('stats.team')}
        </Nav>
      </NavList>
      <NavList>
        <SubNav
          onClick={() => setSubNav('hitting')}
          $active={subNav === 'hitting'}
        >
          {t('stats.hitting')}
        </SubNav>
        <SubNav
          onClick={() => setSubNav('pitching')}
          $active={subNav === 'pitching'}
        >
          {t('stats.pitching')}
        </SubNav>
      </NavList>
      <YearsAndStatsType>
        <SelectForm value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
        </SelectForm>
        <StatsDataType>
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
        </StatsDataType>
      </YearsAndStatsType>
      <StatsType>
          {statsTypeTitles.map((title, key) => (
            <Type
              key={key}
              onClick={() => setStatsType(title)}
              $active={statsType === title}
            >
              {title}
            </Type>
          ))}
        </StatsType>
    </SelectButtonsContainer>
  )
}

export default function StandingsPage() {
  const { t } = useTranslation();
  const [ year, setYear ] = useState(2020)
  const [ nav, setNav ] = useState('player')
  const [ subNav, setSubNav ] = useState('hitting')
  const [ statsType, setStatsType ] = useState('AVG')
  const [ dataType, setDataType ] = useState('standard')

  const statsTypeTitles = [
    'avg'.toUpperCase(),
    'ops'.toUpperCase(),
    'hr'.toUpperCase(),
    'h'.toUpperCase(),
    '2b'.toUpperCase(),
    '3b'.toUpperCase(),
    'rbi'.toUpperCase(),
    'bb'.toUpperCase(),
    'so'.toUpperCase(),
    'r'.toUpperCase(),
    'g'.toUpperCase(),
    'ab'.toUpperCase(),
    'sb'.toUpperCase(),
    'cs'.toUpperCase(),
    'obp'.toUpperCase(),
    'slg'.toUpperCase(),
  ]

  return (
    <Container>
      <Header>
        <PageTitle>{t('navbar.stats')}</PageTitle>
        <SelectButtons 
          t={t}
          nav={nav}
          setNav={setNav}
          subNav={subNav}
          setSubNav={setSubNav}
          year={year}
          setYear={setYear}
          statsType={statsType}
          dataType={dataType}
          setDataType={setDataType}
          setStatsType={setStatsType}
          statsTypeTitles={statsTypeTitles}
        />
      </Header>
      <Form 
        nav={nav}
        year={year}
        subNav={subNav}
        dataType={dataType}
        statsType={statsType}
      />
    </Container>
  )
}