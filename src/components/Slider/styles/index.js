import styled from '@emotion/styled'
import tw from 'twin.macro'

export const WrapSlide = tw.div`
    h-full overflow-hidden rounded-10
`
export const WrapImgSlide = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  transform: scale(1);
  transition: 0.4s ease;
`

export const CoverThumbBG = styled.div`
  background-image: linear-gradient(
    0deg,
    #100f0e 0%,
    rgba(16, 15, 14, 0.92) 15%,
    rgba(16, 15, 14, 0)
  );
  position: absolute;
  bottom: -1px;
  left: -1px;
  z-index: 1;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
`

export const WrapContentSlide = tw.div`
    absolute bottom-8 w-[90%] p-4 text-white z-[1]
`

export const DescBlogSlide = styled.p`
  margin: 8px 0 0;
  font-size: 14px;
  font-weight: 500;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`
