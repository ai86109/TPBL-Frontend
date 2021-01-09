import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { MEDIA_QUERY_LG, MEDIA_QUERY_MD, MEDIA_QUERY_SM, MEDIA_QUERY_SMtoMD } from '../../constants/breakpoint';
import Calendar from 'react-calendar';
import calendarLogo from '../../image/calendar.svg'
import 'react-calendar/dist/Calendar.css';

const Root = styled.div`
  margin-top: 3px;
  background-color: ${props => props.theme.light.background.black_300};
  width: 100%;
  min-height: 700px;
  margin-top: 100px;
  color: ${props => props.theme.light.text.black_200};
  ${MEDIA_QUERY_LG} {
    margin-top: 70px;
  }
`

const Container = styled.div`
  background-color: ${props => props.theme.light.background.white_100};
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
    background-color: ${props => props.theme.light.background.white_200};
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
  color: ${props => props.theme.light.text.black_100};
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
  border-bottom: 2px solid ${props => props.theme.light.background.dark_gray};
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

const ScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px 0;
`

const ScheduleBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`

const DateTime = styled.div`
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 10px;
`

const Game = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0;
  width: 100%;
  ${MEDIA_QUERY_SMtoMD} {
    background-color: ${props => props.theme.light.background.white_100};
    border-radius: 4px;
    padding: 15px;
  }
`

const Teams = styled.div`
  display: flex;
  min-width: 230px;
`

const Team = styled.div`
  display: flex;
  margin: 10px;
`

const At = styled.div`
  display: flex;
  align-items: center;
  color: grey;
  font-size: 2rem;
  font-weight: 900;
  margin-right: 5px;
`

const TeamLogo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  & img {
    border-radius: 50%;
    max-width: 20px;
    max-height: 20px;
  }
`

const TeamName = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 900;
`

const GameInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.75rem;
  font-weight: 700;
  color: ${props => props.theme.light.text.black_300};
  margin-left: 20px;
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

function Schedule() {
  return (
    <ScheduleContainer>
      <ScheduleBlock>
        <DateTime>星期一 9月8日</DateTime>
        <Game>
          <Teams>
            <Team>
              <TeamLogo>
                <img src="https://i.imgur.com/9p23DQK.png" />
              </TeamLogo>
              <TeamName>悍將</TeamName>
            </Team>
            <Team>
              <At>@</At>
              <TeamLogo>
                <img src="https://i.imgur.com/pEHu3n2.png" />
              </TeamLogo>
              <TeamName>獅</TeamName>
            </Team>
          </Teams>
          <GameInfo>悍將 7, 獅 8</GameInfo>
        </Game>
      </ScheduleBlock>
      <ScheduleBlock>
        <DateTime>星期一 9月9日</DateTime>
        <Game>
          <Teams>
            <Team>
              <TeamLogo>
                <img src="https://i.imgur.com/9p23DQK.png" />
              </TeamLogo>
              <TeamName>悍將</TeamName>
            </Team>
            <Team>
              <At>@</At>
              <TeamLogo>
                <img src="https://i.imgur.com/pEHu3n2.png" />
              </TeamLogo>
              <TeamName>獅</TeamName>
            </Team>
          </Teams>
          <GameInfo>悍將 0, 獅 6</GameInfo>
        </Game>
        <Game>
          <Teams>
          <Team>
            <TeamLogo>
              <img src="https://i.imgur.com/XkOy9RG.png" />
            </TeamLogo>
            <TeamName>兄弟</TeamName>
          </Team>
          <Team>
            <At>@</At>
            <TeamLogo>
              <img src="https://i.imgur.com/wbwC9r7.png" />
            </TeamLogo>
            <TeamName>桃猿</TeamName>
          </Team>
          </Teams>
          <GameInfo>兄弟 8, 桃猿 1</GameInfo>
        </Game>
      </ScheduleBlock>
    </ScheduleContainer>
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
        <Schedule />
      </Container>
    </Root>
  )
}