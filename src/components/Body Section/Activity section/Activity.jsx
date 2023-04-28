import React from 'react'
import './activity.css'
import {BsArrowRightShort} from 'react-icons/bs'
import logo from '../../../assets/logo.png'
import user1 from '../../../assets/profileImages/user1.webp'
import user2 from '../../../assets/profileImages/user2.jpeg'
import user3 from '../../../assets/profileImages/user3.jpeg'
import user4 from '../../../assets/profileImages/user4.jpeg'
import user5 from '../../../assets/profileImages/user5.jpg'

const Activity = () => {

  const Activity = [
    {
    id:1,
    imageSrc:user2,
    customerName:"Quentin Walker"
  },
  {
    id:2,
    imageSrc:user5,
    customerName:"Rayne Logan"
  },
  {
    id:2,
    imageSrc:user4,
    customerName:"Carsen Blanchard"
  },
  {
    id:2,
    imageSrc:user3,
    customerName:"Humberto Hicks"
  },
  {
    id:2,
    imageSrc:user1,
    customerName:"Rylee Huynh"
  }
]
  return (
    <div className='activitySection'>
      <div className="heading flex">
        <h1>Recent Activity</h1>
        <button className="btn flex">See All<BsArrowRightShort className='icon'/></button>
      </div>
      <div className="secContainer grid">
        {Activity.map((item, id)=>{
          return(
           <div key={id} className="singleCustomer flex">
           <img src={item.imageSrc} alt="Customer Image" />
           <div className="customerDetails">
             <span className="name">{item.customerName}</span>
             <small>Ordered a new plant</small>
           </div>
           <div className="duration">
             2 mins ago
           </div>
         </div>
         )
        })}
        
      </div>
    </div>
  )
}

export default Activity