import React from 'react';
import styled from 'styled-components';
import { MEDIA_QUERY_MD, MEDIA_QUERY_SMtoMD } from '../../constants/breakpoint';
import {
  statsBatterButtonTypeTitles,
  statsPitcherButtonTypeTitles,
  statsTeamBatterButtonTypeTitles,
  statsTeamPitcherButtonTypeTitles
} from '../../ListTitles'

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

export default function StatsPageSelectButton({t, nav, setNav, subNav, setSubNav, year, setYear, statsType, setStatsType, dataType, setDataType, match}) {
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
          {nav === 'player' && subNav === 'hitting' && statsBatterButtonTypeTitles.map((title, key) => (
            <Type
              key={key}
              onClick={() => setStatsType(title[1])}
              $active={statsType === title[1]}
            >
              {title[0]}
            </Type>
          ))}
          {nav === 'player' && subNav === 'pitching' && statsPitcherButtonTypeTitles.map((title, key) => (
            <Type
              key={key}
              onClick={() => setStatsType(title[1])}
              $active={statsType === title[1]}
            >
              {title[0]}
            </Type>
          ))}
          {nav === 'team' && subNav === 'hitting' && statsTeamBatterButtonTypeTitles.map((title, key) => (
            <Type
              key={key}
              onClick={() => setStatsType(title[1])}
              $active={statsType === title[1]}
            >
              {title[0]}
            </Type>
          ))}
          {nav === 'team' && subNav === 'pitching' && statsTeamPitcherButtonTypeTitles.map((title, key) => (
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
