import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { MEDIA_QUERY_LG, MEDIA_QUERY_MD, MEDIA_QUERY_SM } from '../../constants/breakpoint';

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
  `

  const BoxHeader = styled.div`
    margin-top: 30px;
  `

  const Title = styled.div`
    font-size: 22px;
    font-weight: 700;
    margin: 10px 0;
  `

  const Description = styled.div`
    font-weight: 700;
    margin: 10px 0;
  `

  const BoxBody = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    padding: 10px 5px;
  `

  const BoxBodyLeft = styled.div`
    display: flex;
  `

  const BoxBodyRight = styled.div`
    font-size: 24px;
    font-weight: 500;
  `

  const Rank = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;
  `

  const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
  `

  const PlayerProfilePic = styled.div`
    display: flex;
    align-items: center;
    background-color: red;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-right: 10px;
  `

  const PlayerInfo = styled.div`
    display: flex;
    flex-direction: column;
  `

  const PlayerInfoTop = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  `

  const PlayerName = styled.div`
    font-size: 18px;
    font-weight: 600;
    margin-right: 10px;
  `

  const PlayerPosition = styled.div`
    font-size: 14px;
    color: grey;
  `

  const PlayerTeam = styled.div`
    font-size: 14px;
    color: grey;
  `

  const TeamName = styled.div`
    font-size: 18px;
    font-weight: 600;
  `

  function Profile({nav}) {
    if(nav === 'team') {
      return (
        <ProfileContainer>
          <TeamName>中信兄弟</TeamName>
        </ProfileContainer>
      )
    }
    return (
      <ProfileContainer>
        <PlayerProfilePic></PlayerProfilePic>
        <PlayerInfo>
          <PlayerInfoTop>
            <PlayerName>田澤純一</PlayerName>
            <PlayerPosition>P</PlayerPosition>
          </PlayerInfoTop>
          <PlayerTeam>味全龍</PlayerTeam>
        </PlayerInfo>
      </ProfileContainer>
    )
  }

export default function Form({nav, year, subNav, dataType, statsType}) {
  const { t } = useTranslation();

  const standardTitles = [

  ]

  const advancedTitles = [

  ]

  return (
    <FormContainer>
      <BoxHeader>
        <Title>{t(`stats.${statsType}.title`)}</Title>
        <Description>{t(`stats.${statsType}.desc`)}</Description>
      </BoxHeader>
      <BoxBody>
        <BoxBodyLeft>
          <Rank>1</Rank>
          <Profile nav={nav} />
        </BoxBodyLeft>
        <BoxBodyRight>.364</BoxBodyRight>
      </BoxBody>
      <BoxBody>
        <BoxBodyLeft>
          <Rank>1</Rank>
          <Profile />
        </BoxBodyLeft>
        <BoxBodyRight>.364</BoxBodyRight>
      </BoxBody>
      <BoxBody>
        <BoxBodyLeft>
          <Rank>1</Rank>
          <Profile />
        </BoxBodyLeft>
        <BoxBodyRight>.364</BoxBodyRight>
      </BoxBody>
    </FormContainer>
  )
}