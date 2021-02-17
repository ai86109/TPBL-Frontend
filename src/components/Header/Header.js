import React, { useEffect, useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { MEDIA_QUERY_LG } from '../../constants/breakpoint';
import { useTranslation } from 'react-i18next';
import TPBLlogo from '../../image/TPBL-logo.svg'
import sunIcon from '../../image/sunIcon.png'
import moonIcon from '../../image/moonIcon.png'
import { useDispatch, useSelector } from 'react-redux';
import { setLightOrDarkMode } from '../../redux/reducers/styleReducer'
import { getUser, setUser } from '../../redux/reducers/userReducer';
import { setAuthToken } from '../../utils';

const largeDevice = `(min-width: 1024px)`

const NavbarContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${({theme}) => theme.background.dark_gray};
  display: flex;
  padding: 0 32px;
  justify-content: space-between;
  box-shadow: 1px 1px 2px ${({theme}) => theme.background.black_100};
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
  background: ${({theme}) => theme.background.white_100};
  border-radius: 3px;
`

const MenuCross = styled.div`
  color: ${({theme}) => theme.text.white_opacity10};
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
  ${(props) => props.$active && `justify-content: flex-end; margin-bottom: 10px;`}
`

const Login = styled(Link)`
  color: ${({theme}) => theme.text.white_opacity08};
  font-weight: 700;
  font-size: 20px;
  display: flex;
  justify-content: center;
  &:hover {
    color: ${({theme}) => theme.text.white_opacity10};
  }
`

const Nav = styled(Link)`
  color: ${({theme}) => theme.text.white_opacity08};
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
    color: ${({theme}) => theme.text.white_opacity10};
  }
`

const CircleButton = styled.div`
  display: flex;
  align-items: center;
  background: ${({theme}) => theme.background.white_100};
  opacity: 0.9;
  min-width: 30px;
  height: 25px;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
  img {
    position: relative;
    max-width: 30px;
    max-height: 30px;
    border-radius: 50%;
    transform: translateX(-10%);
    border: 2px solid ${({theme}) => theme.background.black_100};
    ${(props) => props.$active && `transform: translateX(5px);`}
    transition: all 0.4s;
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
  background: ${({theme}) => theme.background.dark_gray};
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
  color: ${({theme}) => theme.text.white_opacity08};
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  padding: 10px;
  &:hover {
    color: ${({theme}) => theme.text.white_opacity10};
    border-bottom: 2px solid ${({theme}) => theme.text.white_opacity10};
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

function CircleButtonContainer({LightOrDarkMode, setLightOrDarkMode, dispatch}) {
  return (
    <CircleButton 
      $active={LightOrDarkMode === 'dark'}
      onClick={() => dispatch(setLightOrDarkMode(LightOrDarkMode === 'light' ? 'dark' : 'light'))}
    >
      {LightOrDarkMode === 'light' ?
        <img src={sunIcon} /> :
        <img src={moonIcon} />
      }
    </CircleButton>
  )
}

export default function Header() {
  const query = window.matchMedia(largeDevice)
  const [match, setMatch] = useState(query.matches)
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false)
  const currentLng = i18n.language
  const dispatch = useDispatch()
  const LightOrDarkMode = useSelector(store => store.styles.lightOrDarkMode)
  const user = useSelector(store => store.users.user)
  const location = useLocation()
  const history = useHistory()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  const handleLogout = () => {
    setAuthToken('')
    dispatch(setUser(null))
    if(location.pathname !== "/") {
      history.push("/")
    }
  }

  useEffect(() => {
    const handleMatch = q => {
      setMatch(q.matches)
    }
    query.addListener(handleMatch)
    return () => query.removeListener(handleMatch)
  }, )

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])
  
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
          <CircleButtonContainer 
            LightOrDarkMode={LightOrDarkMode} 
            setLightOrDarkMode={setLightOrDarkMode} 
            dispatch={dispatch}
          />
          {currentLng === 'zh-TW' ? 
            <Nav onClick={() => changeLanguage("en")}>{t('navbar.language')}</Nav> :
            <Nav onClick={() => changeLanguage("zh-TW")}>{t('navbar.language')}</Nav>
          }
          {user && <Nav onClick={() => alert("網頁建置中")}>{t('navbar.cms')}</Nav>}
          {!user && <Nav to='/login'>{t('navbar.login')}</Nav>}
          {user && <Nav onClick={handleLogout}>{t('navbar.logout')}</Nav>}
        </NavbarRight>
      </NavbarContainer>
    )
  }
  return (
    <Hamburger>
      <NavbarContainer>
        <NavbarTop>
          <HamburgerButton open={open} setOpen={setOpen} />
          <Logo to="/" onClick={() => setOpen(false)}>
            <img src={TPBLlogo} />
          </Logo>
          {!user && <Login to='/login' onClick={() => setOpen(false)}>{t('navbar.login')}</Login>}
          {user && <Login onClick={() => setOpen(false)}>{t('navbar.logout')}</Login>}
        </NavbarTop>
        <NavbarBottom $active={open}>
          {!open &&
            <>
              <Nav to="/scores">{t('navbar.scores')}</Nav>
              <Nav to="/standings">{t('navbar.standings')}</Nav>
              <Nav to="/stats">{t('navbar.stats')}</Nav>
            </>
          }
          {open &&
            <CircleButtonContainer 
              LightOrDarkMode={LightOrDarkMode} 
              setLightOrDarkMode={setLightOrDarkMode} 
              dispatch={dispatch}
            />
          }
        </NavbarBottom>
      </NavbarContainer>
      {open && 
        <HamburgerMenuContainer>
          <MenuBlock>
            <Menu to="/news" onClick={() => setOpen(false)}>{t('navbar.news')}</Menu>
            <Menu to="/scores" onClick={() => setOpen(false)}>{t('navbar.scores')}</Menu>
            <Menu to="/standings" onClick={() => setOpen(false)}>{t('navbar.standings')}</Menu>
            <Menu to="/stats" onClick={() => setOpen(false)}>{t('navbar.stats')}</Menu>
            <Menu to="/schedule" onClick={() => setOpen(false)}>{t('navbar.schedule')}</Menu>
            {currentLng === 'zh-TW' ? 
              <Menu onClick={() => changeLanguage("en")}>{t('navbar.language')}</Menu> :
              <Menu onClick={() => changeLanguage("zh-TW")}>{t('navbar.language')}</Menu>
            }
            {user && <Menu onClick={() => alert("網頁建置中")}>{t('navbar.cms')}</Menu>}
          </MenuBlock>
        </HamburgerMenuContainer>
      }
    </Hamburger>
  )
}
