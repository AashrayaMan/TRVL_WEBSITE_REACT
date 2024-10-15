import React from 'react'
import './Items.css'
import gps from '../Assests/location.png'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/Travels/${props.name}`}><img src={props.image} alt="" /></Link>
         <p><img src={gps} alt="" className="gps" /> {props.name}</p>
         <p className="destiny"><span className='need'>{props.destination}</span></p>

     <div className="item-prices">
        <div className="item-price-new">
           <span className="pp">Rs {props.new_price}</span><span className="perperson">/per person</span>
           
        </div>
        <Link to={`/Travels/${props.name}`}><button className='rrrr'>Book Now</button></Link>
     </div>    
      
    </div>
  )
}

export default Item
