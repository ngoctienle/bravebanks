import React from 'react'

import { Container } from '../Global'
import { HeaderWrapper, Main } from './styles'

import HeaderLogo from './HeaderLogo'
import HeaderMenu from './HeaderMenu'
import HeaderSearch from './HeaderSearch'
import HeaderSetting from './HeaderSetting'

const Header = () => {
  return (
    <Main className="blur-custom">
      <Container>
        <HeaderWrapper>
          <HeaderLogo />

          <HeaderMenu />

          <div className="flex items-center gap-3">
            <HeaderSearch />
            <HeaderSetting />
          </div>
        </HeaderWrapper>
      </Container>
    </Main>
  )
}

export default Header
