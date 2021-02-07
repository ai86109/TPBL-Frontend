import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MEDIA_QUERY_MDtoLG, MEDIA_QUERY_LG } from '../../constants/breakpoint';
import { useTranslation } from 'react-i18next';
import { getHittingStatsLeader, getPitchingStatsLeader, getStandings } from '../../WebAPI';
import HomePageGamesNav from './HomePageGamesNav';
import HomePageNews from './HomePageNews';
import HomePageStandings from './HomePageStandings';
import HomePageStats from './HomePageStats';

const Root = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 100px auto 0 auto;
  background-color: ${({theme}) => theme.background.white_200};
  min-height: 700px;
  font-size: 16px;
  ${MEDIA_QUERY_LG} {
    display: flex;
    padding: 2rem;
    margin-top: 70px;
  }
`

const TwoColumnContainer = styled.div`
  color: ${({theme}) => theme.text.black_200};
  ${MEDIA_QUERY_MDtoLG} {
    display: flex;
    flex-direction: row;
    padding: 1.75rem;
  }
  ${MEDIA_QUERY_LG} {
    padding: 0 0 0 1.75rem;
  }
`

const TwoColumnLeft = styled.div`
  ${MEDIA_QUERY_MDtoLG} {
    width: 65%;
    margin-right: 1.75rem;
  }
  ${MEDIA_QUERY_LG} {
    width: 66%;
  }
`

const TwoColumnRight = styled.div`
  ${MEDIA_QUERY_MDtoLG} {
    width: 34%;
  }
  ${MEDIA_QUERY_LG} {
    width: 33%;
  }
`

const SubNavContainer = styled.div`
  background-color: ${({theme}) => theme.background.white_100};
  box-shadow: 1px 1px 5px #000;
  ${MEDIA_QUERY_LG} {
    box-shadow: none;
    width: 40%;
    background-color: transparent;
  }
`

export default function HomePage() {
  const { t, i18n } = useTranslation();
  const [ standings, setStandings ] = useState([])
  const [ statsType, setStatsType ] = useState('hitting')
  const [ hittingStats, setHittingStats ] = useState([])
  const [ pitchingStats, setPitchingStats ] = useState([])
  const currentLng = i18n.language

  useEffect(() => {
    getStandings(2020, 'full').then(data => setStandings(data))
  }, [])

  useEffect(() => {
    if(statsType === 'hitting') {
      getHittingStatsLeader(2020).then(data => setHittingStats(data))
    } else if (statsType === 'pitching') {
      getPitchingStatsLeader(2020).then(data => setPitchingStats(data))
    }
  }, [statsType])

  return (
    <Root>
      <SubNavContainer>
        <HomePageGamesNav />
      </SubNavContainer>
      <TwoColumnContainer>
        <TwoColumnLeft>
          <HomePageNews />
        </TwoColumnLeft>
        <TwoColumnRight>
          <HomePageStandings
            t={t} 
            standings={standings}
            currentLng={currentLng}   
          />
          <HomePageStats
            hittingStats={hittingStats}
            pitchingStats={pitchingStats}
            statsType={statsType}
            setStatsType={setStatsType}
          />
        </TwoColumnRight>
      </TwoColumnContainer>
    </Root>
  )
}
