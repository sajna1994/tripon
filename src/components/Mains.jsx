import React from 'react'
import Footer from './Footer'
import SideBar from './SideBar'
const Mains = (props) => {
  return (
    <div>
      <SideBar/>
        {props.child}
        <div>
        <Footer/>

        </div>
    </div>
  )
}

export default Mains