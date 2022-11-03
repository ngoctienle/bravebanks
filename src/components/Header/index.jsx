import React from 'react'

import HeaderLogo from './HeaderLogo'
import { Container } from '../Global'
import { HeaderWrapper, Main } from './styles'

const Header = () => {
  return (
    <Main className='blur-custom'>
      <Container>
        <HeaderWrapper >
          <HeaderLogo />
        </HeaderWrapper>
      </Container>
    </Main>
  )
}

export default Header
