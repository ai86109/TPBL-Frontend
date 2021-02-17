import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { MEDIA_QUERY_LG, MEDIA_QUERY_MD, MEDIA_QUERY_SM } from '../../constants/breakpoint';
import StatsPageSelectButton from './StatsPageSelectButton';
import StatsPageForm from './StatsPageForm';
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

export default function StatsPage() {
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

  useEffect(() => {
    getStats(nav, subNav, year, statsType, sort).then(data => setStats(data))
  }, [nav, subNav, year, statsType, sort])

  useEffect(() => {
    const handleMatch = q => setMatch(q.matches)
    query.addListener(handleMatch)
  }, )

  return (
    <Root>
      <Container $active={!match}>
        <Header>
          <PageTitle>{t('navbar.stats')}</PageTitle>
          <StatsPageSelectButton
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
            match={match}
          />
        </Header>
        <StatsPageForm 
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
