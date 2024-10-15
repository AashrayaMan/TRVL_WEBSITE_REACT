import React from 'react'
import './Mainpage.css'
import london from '../Assests/london.jpg'
import kathmandu from '../Assests/kathmandu.jpg'
import tokyo from '../Assests/japan.jpg'


const Mainpage = () => {
  return (
    <div className='main'>
      <div className="mainleft">
        <div className="extra">  &nbsp;  Know Before You Go &nbsp; </div>
        <h1>Travelling opens the door to creating <span className='memo'>memories...</span></h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt ipsum, dolores nam vel temporibus perspiciatis est id officiis alias unde ipsam similique    </p>
        
      </div>
      <div className="mainright">
        <img src={london} alt="" />
        <div className='img2'>
          <img src={kathmandu} alt="" />
        </div>
        <div className='img3'>
          <img src={tokyo } alt="" />
        </div>
       

      </div>
      
    </div>
  )
}

export default Mainpage
