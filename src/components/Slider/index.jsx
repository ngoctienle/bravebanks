import 'swiper/scss'
import 'swiper/scss/virtual'
import '../../assets/main.scss'

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Container } from '../Global'
import { CoverThumbBG } from './styles'
import SliderItem from './SliderItem'

import { settings } from '../../helpers/setting-carousel'
import Image from '../../assets/images/guardians-of-the-galaxy.jpg'
import Image1 from '../../assets/images/justice-league.jpg'
import Image2 from '../../assets/images/suicide-squad.jpg'

const SwiperWrap = () => {
  const [imgLink, setImgLink] = useState('')

  const changeBgImg = swiper => {
    let elmImg = swiper.imagesToLoad[swiper.activeIndex].getAttribute('src')
    setImgLink(elmImg)
  }
  return (
    <section className="relative dark:from-slate-900 ">
      <CoverThumbBG>
        <img
          src={imgLink}
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
      </CoverThumbBG>
      <Container className="pt-[40px] pb-[80px]">
        <h2 className="text-[40px] font-semibold text-light dark:text-dark text-center mb-[40px]">
          Popular News
        </h2>
        <Swiper {...settings} onSlideChange={swiper => changeBgImg(swiper)}>
          <SwiperSlide>
            <SliderItem srcImg={Image1} />
          </SwiperSlide>
          <SwiperSlide>
            <SliderItem srcImg={Image2} />
          </SwiperSlide>
          <SwiperSlide>
            <SliderItem srcImg={Image} />
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  )
}

export default SwiperWrap
