import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'

import { AnimationDiv } from './components/Global'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage'

const App = () => {
  return (
    <Fragment>
      <Header />

      <AnimationDiv className='hidden dark:block'/>
      <AnimationDiv className="hidden dark:block dark:animate-bg-1 dark:bg-animation-1" />
      <AnimationDiv className="hidden dark:block dark:animate-bg-2 dark:bg-animation-2" />

      <main className="pt-[60px]">
        <Routes>
          <Route path='/post/:slug' element={<></>} />

          <Route path='/auth' element={<AuthPage />} />

          <Route path='/' element={<HomePage />} />
        </Routes>
      </main>
    </Fragment>
  )
}

export default App
