import React from 'react'
import { Link } from 'react-router-dom'
import tw from 'twin.macro'

const SpanLogo = tw.span`
    text-16 font-semibold text-primary
`

const HeaderLogo = () => {
  return (
    <Link to='/'>
        <SpanLogo>BraveBanks</SpanLogo>
    </Link>
  )
}

export default HeaderLogo