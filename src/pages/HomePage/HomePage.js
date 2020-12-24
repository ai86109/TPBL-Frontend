import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'

const Root = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

export default function HomePage() {

  return (
    <Root>
      <span>homepage</span>
    </Root>
  )
}