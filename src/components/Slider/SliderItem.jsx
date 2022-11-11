import React from 'react'
import { DescBlogSlide, WrapContentSlide, WrapSlide } from './styles'

import { TitleBlog } from '../Global'

const SliderItem = ({ srcImg }) => {
  return (
    <WrapSlide className="swiper-carousel-animate-opacity">
      <img src={srcImg} alt="" />
      <WrapContentSlide className="slide-content">
        <TitleBlog>Guardians Of The Galaxy</TitleBlog>
        <DescBlogSlide>
          A group of intergalactic criminals must pull together to stop a
          fanatical warrior with plans to purge the universe.
        </DescBlogSlide>
      </WrapContentSlide>
    </WrapSlide>
  )
}

export default SliderItem
