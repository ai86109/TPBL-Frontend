import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MEDIA_QUERY_LG } from '../../constants/breakpoint';
import { useTranslation } from 'react-i18next';
import TPBLlogo from '../../image/TPBL-logo.svg'

const largeDevice = `(min-width: 1024px)`

const NavbarContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${props => props.theme.light.background.dark_gray};
  display: flex;
  padding: 0 32px;
  justify-content: space-between;
  box-shadow: 1px 1px 2px ${props => props.theme.light.background.black_100};
  height: 100px;
  flex-direction: column;
  z-index: 2;
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

const HamburgerButtonContainer = styled.div`
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
  background: ${props => props.theme.light.background.white_100};
  border-radius: 3px;
`

const MenuCross = styled.div`
  color: ${props => props.theme.light.text.white_opacity10};
  font-size: 2.2rem;
  font-weight: 600;
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
  color: ${props => props.theme.light.text.white_opacity08};
  font-weight: 700;
  font-size: 20px;
  display: flex;
  justify-content: center;
  &:hover {
    color: ${props => props.theme.light.text.white_opacity10};
  }
`

const Nav = styled(Link)`
  color: ${props => props.theme.light.text.white_opacity08};
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
  &:hover {
    color: ${props => props.theme.light.text.white_opacity10};
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

const Hamburger = styled.div`
  position: relative;
  z-index: 1;
`

const HamburgerMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 100px;
  bottom: 0;
  height: 60%;
  width: 300px;
  opacity: 0.9;
  background: ${props => props.theme.light.background.dark_gray};
  z-index: 2;
`

const MenuBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 2rem;
  font-weight: 700;
`

const Menu = styled(Link)`
  color: ${props => props.theme.light.text.white_opacity08};
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  padding: 10px;
  &:hover {
    color: ${props => props.theme.light.text.white_opacity10};
    border-bottom: 2px solid ${props => props.theme.light.text.white_opacity10};
    transition: all 1s;
  }
`

function HamburgerButton({open, setOpen}) {
  return (
    <HamburgerButtonContainer onClick={() => setOpen(!open)}>
      {!open && 
        <>
          <MenuSpan />
          <MenuSpan />
          <MenuSpan />
        </>
      }
      {open && <MenuCross>X</MenuCross>}
    </HamburgerButtonContainer>
  )
}

export default function Header() {
  const query = window.matchMedia(largeDevice)
  const [match, setMatch] = useState(query.matches)
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false)
  const currentLng = i18n.language

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  useEffect(() => {
    const handleMatch = q => {
      setMatch(q.matches)
      setOpen(!open)
    }
    query.addListener(handleMatch)
    return () => query.removeListener(handleMatch)
  }, )
  
  if(match) {
    return (
      <NavbarContainer>
        <NavbarLeft>
          <Logo to="/" ><img src={TPBLlogo} /></Logo>
          <Nav to="/news">{t('navbar.news')}</Nav>
          <Nav to="/scores">{t('navbar.scores')}</Nav>
          <Nav to="/standings">{t('navbar.standings')}</Nav>
          <Nav to="/stats">{t('navbar.stats')}</Nav>
          <Nav to="/schedule">{t('navbar.schedule')}</Nav>
        </NavbarLeft>
        <NavbarRight>
          {currentLng === 'zh-TW' ? 
            <Nav onClick={() => changeLanguage("en")}>{t('navbar.language')}</Nav> :
            <Nav onClick={() => changeLanguage("zh-TW")}>{t('navbar.language')}</Nav>
          }
          <Nav>{t('navbar.login')}</Nav>
        </NavbarRight>
      </NavbarContainer>
    )
  }
  return (
  <Hamburger>
    <NavbarContainer>
      <NavbarTop>
        <HamburgerButton open={open} setOpen={setOpen} />
        <Logo to="/" ><img src={TPBLlogo} /></Logo>
        <Login>{t('navbar.login')}</Login>
      </NavbarTop>
      {!open && 
        <NavbarBottom>
          <Nav to="/scores">{t('navbar.scores')}</Nav>
          <Nav to="/standings">{t('navbar.standings')}</Nav>
          <Nav to="/stats">{t('navbar.stats')}</Nav>
        </NavbarBottom>
      }
    </NavbarContainer>
    {open && 
      <HamburgerMenuContainer>
        <MenuBlock>
          <Menu to="/news">{t('navbar.news')}</Menu>
          <Menu to="/scores">{t('navbar.scores')}</Menu>
          <Menu to="/standings">{t('navbar.standings')}</Menu>
          <Menu to="/stats">{t('navbar.stats')}</Menu>
          <Menu to="/schedule">{t('navbar.schedule')}</Menu>
          {currentLng === 'zh-TW' ? 
            <Menu onClick={() => changeLanguage("en")}>{t('navbar.language')}</Menu> :
            <Menu onClick={() => changeLanguage("zh-TW")}>{t('navbar.language')}</Menu>
          }
        </MenuBlock>
      </HamburgerMenuContainer>
    }
  </Hamburger>
  )
}