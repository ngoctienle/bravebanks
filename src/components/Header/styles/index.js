import tw from 'twin.macro'

export const Main = tw.header`
    fixed w-full top-0 left-0 z-[99]
    before:absolute before:content-[""] before:top-0 before:left-0
    before:w-full before:h-full before:z-[-1] before:bg-[rgba(33, 33, 33, 0.3)]
`

export const HeaderWrapper = tw.div`
    flex items-center justify-between h-[60px]
`

export const SearchWrapper = tw.div`
    flex items-center bg-[#11100f] px-4 py-1 w-[200px] relative transition-all rounded-[10px] focus-within:w-[300px]
`
export const InputSearch = props => {
  const classes =
    'bg-transparent border-transparent ml-4 w-full overflow-hidden whitespace-nowrap outline-none text-dark text-16 placeholder:text-14 text-ellipsis'

  return <input className={classes} {...props} />
}
