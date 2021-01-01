import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MEDIA_QUERY_SM, MEDIA_QUERY_LG } from '../../constants/breakpoint';
import { useTranslation } from 'react-i18next';

const largeDevice = `(min-width: 1024px)`

const NavbarContainer = styled.div`
  max-width: 100%;
  postion: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #0A1E40;
  display: flex;
  padding: 0 32px;
  justify-content: space-between;
  box-shadow: 1px 2px 5px #000;
  ${MEDIA_QUERY_SM} {
    height: 100px;
    flex-direction: column;
  }
  ${MEDIA_QUERY_LG} {
    height: 70px;
    flex-direction: row;
  }
`

const NavbarTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`

const NavbarMenuButtonContainer = styled.div`
  width: 24px;
  height: 18px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const MenuSpan = styled.div`
  display: block;
  height: 2px;
  width: 24px;
  background: #fff;
  border-radius: 3px;
`

const Logo = styled(Link)`
  width: 80px;
  height: 38px;
  ${MEDIA_QUERY_LG} {
    min-width: 100px;
    height: 45px;
    margin-right: 20px;
  }
`

const NavbarBottom = styled.div`
  display: flex;
  justify-content: space-around;
`

const Login = styled(Link)`
  color: #fff;
  font-weight: 700;
  font-size: 20px;
  display: flex;
  justify-content: center;
`

const Nav = styled(Link)`
  color: #fff;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  padding: 10px 12px;
  display: flex;
  flex: 1 1 100%;
  justify-content: center;
  white-space: nowrap;
  ${MEDIA_QUERY_LG} {
    padding: 10px 25px;
  }
`

const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
`

const NavbarRight = styled.div`
  display: flex;
  align-items: center;
`

function NavbarMenuButton() {
  return (
    <NavbarMenuButtonContainer>
      <MenuSpan />
      <MenuSpan />
      <MenuSpan />
    </NavbarMenuButtonContainer>
  )
}

export default function Header() {
  const query = window.matchMedia(largeDevice)
  const [match, setMatch] = useState(query.matches)
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  useEffect(() => {
    const handleMatch = q => setMatch(q.matches)
    query.addListener(handleMatch)
    return () => query.removeListener(handleMatch)
  }, )
  
  if(match) {
    return (
      <NavbarContainer>
        <NavbarLeft>
          <Logo to="/" ><img src='./TPBL.svg'/></Logo>
          <Nav to="/news">{t('navbar.news')}</Nav>
          <Nav to="/scores">{t('navbar.scores')}</Nav>
          <Nav to="/standings">{t('navbar.standings')}</Nav>
          <Nav to="/stats">{t('navbar.stats')}</Nav>
          <Nav to="/schedule">{t('navbar.schedule')}</Nav>
        </NavbarLeft>
        <NavbarRight>
          <Nav onClick={() => changeLanguage("zh-TW")}>中文</Nav>
          <Nav onClick={() => changeLanguage("en")}>EN</Nav>
          <Nav>{t('navbar.login')}</Nav>
        </NavbarRight>
      </NavbarContainer>
    )
  }
  return (
    <NavbarContainer>
      <NavbarTop>
        <NavbarMenuButton />
        <Logo to="/" ><img src='./TPBL.svg'/></Logo>
        <Login>{t('navbar.login')}</Login>
      </NavbarTop>
      <NavbarBottom>
        <Nav to="/scores">{t('navbar.scores')}</Nav>
        <Nav to="/standings">{t('navbar.standings')}</Nav>
        <Nav to="/stats">{t('navbar.stats')}</Nav>
      </NavbarBottom>
    </NavbarContainer>
  )
}