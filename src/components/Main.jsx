import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
const Main = (props) => {
  return (
    <div>
      <NavBar/>
        {props.child}
        <div>
        <Footer/>

        </div>
    </div>
  )
}

export default Main