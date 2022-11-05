import React from 'react'
import { InputSearch, SearchWrapper } from './styles'

const SearchIcon = ({ size }) => {
  return (
    <svg
      className="absolute top-1/2 left-2 -translate-y-1/2"
      width={`${size}px`}
      height={`${size}px`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      ></path>
    </svg>
  )
}

const HeaderSearch = () => {
  return (
    <SearchWrapper>
      <SearchIcon size={16} />
      <InputSearch
        type="text"
        placeholder="Search by name, categories, etc.."
      />
    </SearchWrapper>
  )
}

export default HeaderSearch
