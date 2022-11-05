import React from 'react'
import { InputSearch, SearchWrapper } from './styles'

const SearchIcon = ({size}) => {
    return (
        <svg
        class="absolute top-1/2 left-2 -translate-y-1/2"
        width={`${size}px`}
        height={`${size}px`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        ></path>
      </svg>
    )
}

const HeaderSearch = () => {
  return (
    <SearchWrapper>
      <SearchIcon size={16}/>
      <InputSearch
        type="text"
        placeholder="Search by name, categories, ..."
      />
    </SearchWrapper>
  )
}

export default HeaderSearch
