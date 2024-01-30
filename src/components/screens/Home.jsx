import React from 'react'
import Carousal from '../Carousal'
import About from '../About'
import Serve from './Serve'
import Footer from '../Footer'
import Packages from '../Packages'

const Home = () => {
  return (
    <div>
        <div>
            <Carousal/>
        </div>
        <div>
        <About/>

        </div>
        <div>
          <Serve/>
        </div>
        <div>
        <Packages/>

        </div>
    </div>
  )
}

export default Home