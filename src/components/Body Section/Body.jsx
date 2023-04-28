import React from 'react'
import './body.css'
import Top from './Top section/Top'
import Listing from './Listing section/Listing'
import Activity from './Activity section/Activity'


const Body = () => {
  return (
    <div className='mainContent'>
      <Top/>
      <div className="bottom flex">
        <Listing/>
        <Activity/>
      </div>
    </div>
  )
}

export default Body