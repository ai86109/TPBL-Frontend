import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, login, setErrorMessage } from '../../redux/reducers/userReducer';
import { getAuthToken } from '../../utils';
import { useHistory } from 'react-router-dom';
import { MEDIA_QUERY_SMtoMD } from '../../constants/breakpoint';

const FormContainer = styled.div`
  background-color: ${({theme}) => theme.background.white_200};
  height: 812px;
  display: flex;
  align-items: center;
  ${MEDIA_QUERY_SMtoMD} {
    height: 696px;
  }
`

const FormBlock = styled.form`
  margin: 0 auto;
  width: 320px;
  height: 300px;
  padding: 10px;
  color: ${({theme}) => theme.text.black_300};
  border: solid 3px ${({theme}) => theme.background.black_300};
  background-color: ${({theme}) => theme.background.white_100};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${MEDIA_QUERY_SMtoMD} {
    width: 450px;
    padding: 60px;
  }
`

const FormTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 10px;
`

const FormInputContainer = styled.div``

const FormInputTitle = styled.div`
  font-size: 1.5rem;
`

const FormInput = styled.input`
  text-decoration: none;
  border: solid 1px ${({theme}) => theme.background.black_100};
  width: 200px;
  height: 23px;
  margin: 10px 10px;
  padding: 2px 4px;
  font-size: 1.5rem;
  ${MEDIA_QUERY_SMtoMD} {
    width: 287px;
    margin: 10px 20px;
  }
`

const SubmitButton = styled.button`
  width: 92px;
  height: 40px;
  border-radius: 3px;
  background-color: black;
  color: white;
  font-size: 15px;
  margin-top: 20px;
  padding: 5px;
`

const ErrorMessage = styled.div`
  color: red;
  font-size: 1.3rem;
`

export default function LoginPage() {
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const history = useHistory()
  const errorMessage = useSelector(store => store.users.errorMessage)

  const handleSubmit = () => {
    dispatch(setErrorMessage(null))
    dispatch(login(username, password)).then(() => {
      if(getAuthToken()) {
        dispatch(getUser()).then((res) => {
          console.log(res)
          if(res.ok === 1) return history.push("/")
        })
      }
    })
  }

  return (
    <FormContainer>
      <FormBlock onSubmit={handleSubmit}>
        <FormTitle>{t('navbar.login')}</FormTitle>
        <FormInputContainer>
          <FormInputTitle>{t('navbar.username')}</FormInputTitle>
          <FormInput value={username} onChange={(e) => setUsername(e.target.value)} />
        </FormInputContainer>
        <FormInputContainer>
          <FormInputTitle>{t('navbar.password')}</FormInputTitle>
          <FormInput type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormInputContainer>
        {errorMessage && 
          <ErrorMessage>
            {t(`error.${errorMessage}`)}
          </ErrorMessage>
        }
        <SubmitButton>{t('navbar.send')}</SubmitButton>
      </FormBlock>
    </FormContainer>
  )
}