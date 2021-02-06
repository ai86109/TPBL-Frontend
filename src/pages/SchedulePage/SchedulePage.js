import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { MEDIA_QUERY_LG, MEDIA_QUERY_MD, MEDIA_QUERY_SM, MEDIA_QUERY_SMtoMD } from '../../constants/breakpoint';
import Calendar from 'react-calendar';
import calendarLogo from '../../image/calendar.svg'
import 'react-calendar/dist/Calendar.css';
import SchedulePageContent from './SchedulePageContent';

const Root = styled.div`
  margin-top: 3px;
  background-color: ${({theme}) => theme.background.black_300};
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
  max-width: 1440px;
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
  ${MEDIA_QUERY_SMtoMD} {
    background-color: ${({theme}) => theme.background.white_200};
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
  position: relative;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 2px solid ${({theme}) => theme.background.dark_gray};
  ${MEDIA_QUERY_SMtoMD} {
    max-width: 400px;
    justify-content: flex-start;
    border: none;
  }
`

const GameDate = styled.div`
  display: flex;
  flex-grow: 1;
  font-weight: 900;
`

const Pages = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
`

const Date = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const GameCalendar = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  cursor: pointer;
  img {
    width: 30px;
  }
`

function SelectButtons({clickCalendar, setClickCalendar, value, onChange, locale}) {
  return (
    <SelectButtonsContainer>
      <GameDate>
        <Pages>＜</Pages>
        <Date>9月 7 - 13日, 2020</Date>
        <Pages>＞</Pages>
      </GameDate>
      <GameCalendar>
        <img src={calendarLogo} onClick={() =>setClickCalendar(!clickCalendar)} />
        {clickCalendar &&
        <Calendar
          value={value}
          onChange={onChange}
          locale={locale}
        />}
      </GameCalendar>
    </SelectButtonsContainer>
  )
}

export default function SchedulePage() {
  const { t, i18n } = useTranslation();
  const currentLng = i18n.language
  const [clickCalendar, setClickCalendar] = useState(false)
  const [value, onChange] = useState(new window.Date())
  const [locale, setLocale] = useState("zh-Hant")

  useEffect(() => {
    currentLng === 'en' ? setLocale("en-US") : setLocale("zh-Hant")
    console.log(value)
  }, [value, currentLng])

  return (
    <Root>
      <Container>
        <Header>
          <PageTitle>{t('navbar.schedule')}</PageTitle>
          <SelectButtons
            clickCalendar={clickCalendar}
            setClickCalendar={setClickCalendar}
            value={value}
            onChange={onChange}
            locale={locale}
          />
        </Header>
        <SchedulePageContent />
      </Container>
    </Root>
  )
}
