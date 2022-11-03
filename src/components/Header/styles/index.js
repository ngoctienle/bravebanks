import tw from 'twin.macro'

export const Main = tw.header`
    fixed w-full top-0 left-0 z-[99]
    before:absolute before:content-[""] before:top-0 before:left-0
    before:w-full before:h-full before:z-[-1] before:bg-[rgba(33, 33, 33, 0.3)]
`

export const HeaderWrapper = tw.div`
    flex items-center justify-between h-[50px]
`
