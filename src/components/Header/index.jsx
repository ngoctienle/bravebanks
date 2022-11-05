import React from 'react'

import HeaderLogo from './HeaderLogo'
import { Container } from '../Global'
import { HeaderWrapper, Main } from './styles'
import { Link } from 'react-router-dom'
import HeaderSearch from './HeaderSearch'
import HeaderSetting from './HeaderSetting'

const Header = () => {
  return (
    <Main className="blur-custom">
      <Container>
        <HeaderWrapper>
          <HeaderLogo />
          


          <div className='flex items-center gap-3'>
            <HeaderSearch />
            <HeaderSetting />
          </div>
        </HeaderWrapper>
      </Container>
    </Main>
  )
}

export default Header
