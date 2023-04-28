import React from "react";
import "./listing.css";
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart,AiOutlineHeart } from "react-icons/ai";
import img6 from '../../../assets/img 6.png'
import img5 from '../../../assets/img 5.png'
import img4 from '../../../assets/img 4.png'
import img3 from '../../../assets/img 3.png'
import img1 from '../../../assets/img 1.png'
import img2 from '../../../assets/img 2.png'

import user1 from '../../../assets/profileImages/user1.webp'
import user2 from '../../../assets/profileImages/user2.jpeg'
import user3 from '../../../assets/profileImages/user3.jpeg'
import user4 from '../../../assets/profileImages/user4.jpeg'
import user5 from '../../../assets/profileImages/user5.jpg'




const Listing = () => {

  const cards = [
    {
      id:1,
      iconSrc:<AiFillHeart className="icon"/>,
      imgSrc:img6,
      plantName:"Annual Vince"
    },
    {
      id:2,
      iconSrc:<AiOutlineHeart className="icon"/>,
      imgSrc:img5,
      plantName:"Cofee Plant"
    },
    {
      id:3,
      iconSrc:<AiFillHeart className="icon"/>,
      imgSrc:img4,
      plantName:"Button Fern"
    },
    {
      id:4,
      iconSrc:<AiOutlineHeart className="icon"/>,
      imgSrc:img3,
      plantName:"Spider Plant"
    },
    {
      id:5,
      iconSrc:<AiFillHeart className="icon"/>,
      imgSrc:img1,
      plantName:"flower"
    },
    {
      id:6,
      iconSrc:<AiOutlineHeart className="icon"/>,
      imgSrc:img2,
      plantName:"Wildflower"
    }
]
  return (
    <div className="listingSection">

      <div className="heading flex">
        <h1>My Listings</h1>
        <button className="btn flex">
          See All
          <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer flex">
        {cards.map((item,id)=>{
          return(
            <div className="singleItem">
            {item.iconSrc}
            <img src={item.imgSrc} alt="Image Name" />
            <h3>{item.plantName}</h3>
            </div>
          )
        })}
       
       
      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className="btn flex">
          See All
          <BsArrowRightShort className="icon" />
        </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user1} alt="User Image" />
              <img src={user2} alt="User Image" />
              <img src={user4} alt="User Image" />
              <img src={user5} alt="User Image" />
              
            </div>
            <div className="cardText">
              <span>
                14,556 Plants sold <br />
                <small>
                  21 Sellers <span className="date">7 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className="btn flex">
          See All
          <BsArrowRightShort className="icon" />
        </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user3} alt="User Image" />
              <img src={user2} alt="User Image" />
              <img src={user5} alt="User Image" />
              <img src={user1} alt="User Image" />
              
            </div>
            <div className="cardText">
              <span>
                28,556 Plants sold <br />
                <small>
                  26 Sellers <span className="date">31 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default Listing;
