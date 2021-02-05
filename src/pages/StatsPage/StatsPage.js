import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { MEDIA_QUERY_LG, MEDIA_QUERY_MD, MEDIA_QUERY_SM, MEDIA_QUERY_SMtoMD } from '../../constants/breakpoint';
import Form from './Form';
import { getStats } from '../../WebAPI';

const largeDevice = `(min-width: 600px)`

const Root = styled.div`
  background-color: ${({theme}) => theme.background.white_300};
  width: 100%;
  max-width: 1600px;
  min-height: 700px;
  margin: 100px auto 0 auto;
  color: ${({theme}) => theme.text.black_200};
  ${MEDIA_QUERY_LG} {
    padding: 0 2rem;
    margin: 70px auto 0 auto;
  }
`

const Container = styled.div`
  background-color: ${({theme}) => theme.background.white_100};
  width: 100%;
  min-height: 700px;
  margin: 3px auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 16px;
  padding: 2rem 0;
  ${(props) => props.$active && `padding: 2rem;`}
`

const Header = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  justify-content: space-around;
  width: 100%
`

const PageTitle = styled.h1`
  font-weight: 700;
  color: ${({theme}) => theme.text.black_100};
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
  color: ${({theme}) => theme.text.black_100};
`

const Nav = styled.div`
  padding-right: 18px;
  font-size: 24px;
  font-weight: 900;
  cursor: pointer;
  transition: all 0.5s;
  ${(props) => props.$active && `color: ${props.theme.text.guardians_blue};`}
`

const SubNav = styled.div`
  margin-right: 14px;
  padding-bottom: 5px;
  font-size: 18px;
  font-weight: 900;
  cursor: pointer;
  transition: all 0.5s;
  ${(props) => props.$active && `color: ${props.theme.text.guardians_blue}; border-bottom: 3px solid ${props.theme.text.guardians_blue};`}
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
  outline: none;
  background-color: ${({theme}) => theme.background.white_100};
  color: ${({theme}) => theme.text.black_300};
  ${MEDIA_QUERY_MD} {
    border: 1px solid ${({theme}) => theme.background.light_gray};
    border-radius: 0.25rem;
  }
`

const StatsDataType = styled.div`
  border: 1px solid ${({theme}) => theme.background.light_gray};
  border-radius: 0.25rem;
  transition: all 0.5s;
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
  transition: all 0.5s;
  outline: none;
  color: ${({theme}) => theme.text.black_300};
  ${(props) => props.$active && `background-color: ${props.theme.background.light_gray}; color: ${props.theme.text.white_opacity08};`}
  font-weight: 700;
  font-size: 1.5rem;
  &:hover {
    background-color: ${({theme}) => theme.background.light_gray};
    color: ${({theme}) => theme.text.white_opacity08};
  }
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
  border: 1px solid ${({theme}) => theme.background.black_100};
  border-radius: 1rem;
  padding: 7px;
  margin: 2px 10px;
  min-width: 7rem;
  width: 100%;
  cursor: pointer;
  font-weight: 700;
  outline: none;
  color: ${({theme}) => theme.text.black_300};
  ${(props) => props.$active && `background-color: ${props.theme.background.dark_gray}; color: ${props.theme.text.white_opacity08};`}
  &:hover {
    background-color: ${({theme}) => theme.background.dark_gray};
    color: ${({theme}) => theme.text.white_opacity10};
  }
`

function SelectButtons({t, nav, setNav, subNav, setSubNav, year, setYear, statsType, setStatsType, batterStatsTypeTitles, pitcherStatsTypeTitles, dataType, setDataType, match, teamBatterStatsTypeTitles, teamPitcherStatsTypeTitles}) {
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
          onClick={() => {
            setSubNav('hitting')
            setDataType('standard')
            setStatsType('avg')
          }}
          $active={subNav === 'hitting'}
        >
          {t('stats.hitting')}
        </SubNav>
        <SubNav
          onClick={() => {
            setSubNav('pitching')
            setDataType('standard')
            setStatsType('win')
          }}
          $active={subNav === 'pitching'}
        >
          {t('stats.pitching')}
        </SubNav>
      </NavList>
      <YearsAndStatsType>
        <SelectForm value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </SelectForm>
        {match && nav === 'player' &&
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
        }
      </YearsAndStatsType>
      <StatsType>
          {nav === 'player' && subNav === 'hitting' && batterStatsTypeTitles.map((title, key) => (
            <Type
              key={key}
              onClick={() => setStatsType(title[1])}
              $active={statsType === title[1]}
            >
              {title[0]}
            </Type>
          ))}
          {nav === 'player' && subNav === 'pitching' && pitcherStatsTypeTitles.map((title, key) => (
            <Type
              key={key}
              onClick={() => setStatsType(title[1])}
              $active={statsType === title[1]}
            >
              {title[0]}
            </Type>
          ))}
          {nav === 'team' && subNav === 'hitting' && teamBatterStatsTypeTitles.map((title, key) => (
            <Type
              key={key}
              onClick={() => setStatsType(title[1])}
              $active={statsType === title[1]}
            >
              {title[0]}
            </Type>
          ))}
          {nav === 'team' && subNav === 'pitching' && teamPitcherStatsTypeTitles.map((title, key) => (
            <Type
              key={key}
              onClick={() => setStatsType(title[1])}
              $active={statsType === title[1]}
            >
              {title[0]}
            </Type>
          ))}
        </StatsType>
    </SelectButtonsContainer>
  )
}

export default function StandingsPage() {
  const { t, i18n } = useTranslation();
  const [ year, setYear ] = useState(2020)
  const [ nav, setNav ] = useState('player')
  const [ subNav, setSubNav ] = useState('hitting')
  const [ statsType, setStatsType ] = useState('avg')
  const [ dataType, setDataType ] = useState('standard')
  const [ sort, setSort ] = useState('desc')
  const [ stats, setStats ] = useState([])
  const currentLng = i18n.language
  const query = window.matchMedia(largeDevice)
  const [ match, setMatch ] = useState(query.matches)

  const batterStatsTypeTitles = [
    ['AVG', 'avg'], ['OPS', 'ops'], ['HR', 'hr'], ['H', 'h'], ['1B', '1B'], ['2B', '2B'], ['3B', '3B'],
    ['RBI', 'rbi'], ['BB', 'bb'], ['SO', 'so'], ['R', 'r'], ['G','games'], ['AB', 'ab'], ['SB', 'sb'], 
    ['CS', 'cs'], ['OBP', 'obp'], ['SLG', 'slg'], ['PA', 'pa'], ['HBP', 'hbp'], ['SAC', 'sac'], 
    ['SF', 'sf'], ['GIDP', 'gidp'], ['GO/AO', 'goao'], ['XBH', 'xbh'], ['TB', 'tb'], ['IBB', 'ibb'], 
    ['BABIP', 'babip'], ['ISO', 'iso'], ['AB/HR', 'abhr'], ['BB/K', 'bbso'], ['BB%', 'bbpa'], ['SO%', 'sopa']
  ]

  const pitcherStatsTypeTitles = [
    ['W', 'win'], ['L', 'lose'], ['SV', 'sv'], ['HLD', 'hld'], ['ERA', 'era'], ['G', 'games'], ['GS', 'gs'],
    ['CG', 'cg'], ['SHO', 'sho'], ['GR', 'gr'], ['BS', 'bs'], ['IP','ip'], ['H', 'h'], ['R', 'r'], 
    ['ER', 'er'], ['BB', 'bb'], ['HBP', 'hbp'], ['SO', 'so'], ['WHIP', 'whip'], ['TBF', 'tbf'], ['NP', 'np'], 
    ['P/IP', 'pip'], ['IBB', 'ibb'], ['WP', 'wp'], ['BK', 'bk'], ['GO', 'go'], ['AO', 'ao'], ['GO/AO', 'goao'],
    ['SO/9', 'so9'], ['BB/9', 'bb9'], ['SO/BB', 'sobb']
  ]

  const teamBatterStatsTypeTitles = [
    ['AVG', 'avg'], ['OPS', 'ops'], ['HR', 'hr'], ['H', 'h'], ['RBI', 'rbi'], ['BB', 'bb'], ['SO', 'so'], 
    ['R', 'r'], ['G','games'], ['AB', 'ab'], ['SB', 'sb'], ['CS', 'cs'], ['OBP', 'obp'], ['SLG', 'slg'], ['AB/HR', 'abhr']
  ]

  const teamPitcherStatsTypeTitles = [
    ['W', 'win'], ['L', 'lose'], ['T', 'tied'], ['ERA', 'era'], ['G', 'games'], ['H', 'h'], ['R', 'r'], ['ER', 'er'], 
    ['BB', 'bb'], ['SO', 'so'], ['WHIP', 'whip'], ['BF', 'bf'], ['NP', 'np'], ['WP', 'wp'], ['BK', 'bk'], 
    ['SO/BB', 'sobb']
  ]

  useEffect(() => {
    getStats(nav, subNav, year, statsType, sort).then(data => setStats(data))
  }, [nav, subNav, year, statsType, sort])

  useEffect(() => {
    const handleMatch = q => setMatch(q.matches)
    query.addListener(handleMatch)
    return () => query.removeListener(handleMatch)
  }, )

  return (
    <Root>
      <Container $active={!match}>
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
            batterStatsTypeTitles={batterStatsTypeTitles}
            pitcherStatsTypeTitles={pitcherStatsTypeTitles}
            teamBatterStatsTypeTitles={teamBatterStatsTypeTitles}
            teamPitcherStatsTypeTitles={teamPitcherStatsTypeTitles}
            match={match}
          />
        </Header>
        <Form 
          nav={nav}
          year={year}
          subNav={subNav}
          dataType={dataType}
          statsType={statsType}
          setStatsType={setStatsType}
          stats={stats}
          sort={sort}
          setSort={setSort}
          currentLng={currentLng}
          match={match}
        />
      </Container>
    </Root>
  )
}