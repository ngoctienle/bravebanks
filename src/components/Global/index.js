import tw from 'twin.macro'

export const Container = tw.div`
    transition-width ease-linear duration-500
    container max-w-full mx-auto
    desktop:max-w-[1240px]
    laptop:max-w-[1140px]
    tablet:max-w-[960px]
    mobile:max-w-[720px]
`

export const AnimationDiv = tw.div`
    z-[-1] fixed w-full h-screen top-0
`
