import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { MEDIA_QUERY_LG, MEDIA_QUERY_MD, MEDIA_QUERY_SM, MEDIA_QUERY_SMtoMD } from '../../constants/breakpoint';
import { getStandings } from '../../WebAPI';
import StandingsPageForm from './StandingsPageForm';

const Root = styled.div`
  margin-top: 3px;
  background-color: ${({theme}) => theme.background.white_300};
  width: 100%;
  max-width: 1600px;
  min-height: 700px;
  margin: 100px auto 0 auto;
  color: ${({theme}) => theme.text.black_200};
  ${MEDIA_QUERY_LG} {
    margin: 70px auto 0 auto;
  }
`

const Container = styled.div`
  background-color: ${({theme}) => theme.background.white_100};
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
  padding: 2rem;
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
  ${MEDIA_QUERY_MD} {
    flex-direction: row;
    align-items: flex-end;
  }
`

const Seasons = styled.div`
  display: flex;
  ${MEDIA_QUERY_MD} {
    border: 1px solid ${({theme}) => theme.background.light_gray};
    border-radius: 0.25rem;
    height: 5rem;
    margin-right: 1rem;
  }
`

const Season = styled.button`
  display: flex;
  flex: 1 1 100%;
  justify-content: center;
  outline: none;
  ${(props) => props.$active && `border-bottom: 3px solid ${props.theme.background.dark_red};`}
  color: ${({theme}) => theme.text.black_300};
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.5;
  cursor: pointer;
  transition: all 0.5s;
  padding: 1rem 0;
  ${MEDIA_QUERY_MD} {
    font-size: 1.5rem;
    width: 10rem;
    padding: 0.5rem;
    align-items: center;
    border-bottom: none;
    ${(props) => props.$active && `background-color: ${props.theme.background.light_gray}; color: ${props.theme.text.white_opacity08};`}
    &:hover {
      background-color: ${({theme}) => theme.background.light_gray};
      color: ${({theme}) => theme.text.white_opacity08};
    }
  }
`

const YearsAndStandingsDataType = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: ${({theme}) => theme.background.white_300};
  padding: 10px 10px;
  margin-top: 1rem;
  ${MEDIA_QUERY_MD} {
    background-color: ${({theme}) => theme.background.white_100};
    padding: 0;
  }
`

const SelectForm = styled.select`
  width: 100%;
  min-width: 5rem;
  max-width: 10rem;
  border-radius: 0.25rem;
  padding: 5px 10px;
  font-size: 1.5rem;
  cursor: pointer;
  outline: none;
  font-weight: 700;
  background-color: ${({theme}) => theme.background.white_100};
  color: ${({theme}) => theme.text.black_300};
  ${MEDIA_QUERY_SMtoMD} {
    padding: 10px 20px;
    min-width: 10rem;
  }
  ${MEDIA_QUERY_MD} {
    border-radius: 0.25rem;
    height: 5rem;
    margin-right: 1rem;
    width: 10rem;
  }
`

const StandingsDataType = styled.div`
  border: 1px solid ${({theme}) => theme.background.light_gray};
  border-radius: 0.25rem;
  ${MEDIA_QUERY_MD} {
    display: flex;
    align-items: center;
  }
`

const DataType = styled.button`
  padding: 5px 10px;
  min-width: 8rem;
  max-width: 15rem;
  cursor: pointer;
  height: 100%;
  outline: none;
  transition: all 0.5s;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({theme}) => theme.text.black_300};
  ${(props) => props.$active && `background-color: ${props.theme.background.light_gray}; color: ${props.theme.text.white_opacity08};`}
  ${MEDIA_QUERY_SMtoMD} {
    padding: 10px 20px;
    min-width: 12rem;
    max-width: 20rem;
    &:hover {
      background-color: ${({theme}) => theme.background.light_gray};
      color: ${({theme}) => theme.text.white_opacity08};
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

export default function StandingsPage() {
  const [ year, setYear ] = useState(2020)
  const [ season, setSeason ] = useState('full')
  const [ dataType, setDataType ] = useState('standard')
  const { t, i18n } = useTranslation();
  const [ standings, setStandings ] = useState([])
  const currentLng = i18n.language
  
  useEffect(() => {
    getStandings(year, season).then(data => setStandings(data))
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
        <StandingsPageForm
          t={t}  
          standings={standings} 
          currentLng={currentLng}
          dataType={dataType}
        />
      </Container>
    </Root>
  )
}
