import React, { Fragment } from 'react'
import { Container } from './components/Global'
import Header from './components/Header'

const App = () => {
  return (
    <Fragment>
      <Header />
      <div className="animation-global"></div>
      <div className="animation-global"></div>
      <div className="animation-global"></div>
      <main className="pt-[50px]">
        <Container>ABC</Container>
      </main>
    </Fragment>
  )
}

export default App
