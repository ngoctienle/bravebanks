import React, { Fragment } from 'react'

import Header from './components/Header'
import { AnimationDiv, Container } from './components/Global'

const App = () => {
  return (
    <Fragment>
      <Header />

      <AnimationDiv />
      <AnimationDiv className="dark:animate-bg-1 dark:bg-animation-1" />
      <AnimationDiv className="dark:animate-bg-2 dark:bg-animation-2" />

      <main className="pt-[50px]">
        <Container>ABC</Container>
      </main>
    </Fragment>
  )
}

export default App
