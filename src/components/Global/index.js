import tw from 'twin.macro'

export const Container = tw.div`
    transition-width ease-linear duration-500
    container max-w-full mx-auto
    desktop:max-w-[1440px]
    laptop:max-w-[1140px]
    tablet:max-w-[960px]
    mobile:max-w-[720px]
    mobile-xs:max-w-[540px]
`
