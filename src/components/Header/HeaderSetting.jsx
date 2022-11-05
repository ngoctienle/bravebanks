import React from 'react'

const HeaderSetting = () => {
  return (
    <div className="relative">
      <div className="rounded-full w-6 h-6 flex items-center justify-center bg-primary/20 hover:bg-primary/30 transition-colors cursor-pointer">
        <svg
          className="w-4 h-4  text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
      <div className="absolute top-[200%] right-0 w-auto h-auto bg-primary/20 rounded-[10px] p-4 blur-menu">
        <div className="flex justify-between p-2">
          <span className="whitespace-nowrap">Dark Mode</span>
          <label
            for="default-toggle"
            className="inline-flex relative items-center cursor-pointer ml-11"
          >
            <input
              type="checkbox"
              value=""
              id="default-toggle"
              className="sr-only peer"
            />
            <div className="bg-[#11100f]/30 w-12 h-5  peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-primary after:content-[''] after:absolute after:top-0 after:left-0 after:bg-primary after:border-primary after:border after:rounded-full after:h-6 after:w-6 after:transition-all"></div>
          </label>
        </div>
        <div className="flex justify-between p-2 mt-2">
          <span className="whitespace-nowrap">Language</span>
        </div>
      </div>
    </div>
  )
}

export default HeaderSetting
