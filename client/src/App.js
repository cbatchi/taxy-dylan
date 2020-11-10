import React from 'react'
import { Navbar, Banner, Offers } from './components/index'

const App = () => {
  return <>
    <header className="header">
      <div className="container">
        <Navbar />
      </div>
    </header>

    <section className="banner banner-intro">
      <div className="container">
        <Banner />
      </div>
    </section>

    <section className="offers offers-intro bg-default">
      <div className="container">
        <Offers />
      </div>
    </section>
  </>
}

export default App