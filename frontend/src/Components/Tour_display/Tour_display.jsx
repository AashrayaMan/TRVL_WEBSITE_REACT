import React from 'react'
import './Tour_display.css'
import stars from '../Assests/star_icon.png'
import starsdull from '../Assests/star_dull_icon.png'
import gps from '../Assests/location.png'

const Tour_display = (props) => {
   const {Travels} = props;
  return (
    <div className='TourDisplay'>
    <div className="TourDisplay_l">
        <img src={Travels.image} alt="" />
        <div className="idk">
        <h2>{Travels.name}</h2>
        <div className="star">
            <img src={stars} alt="" />
            <img src={stars} alt="" />
            <img src={stars} alt="" />
            <img src={stars} alt="" />
            <img src={starsdull} alt="" />
            <p>(122)</p>

        </div> 
        <div className="intel">
        <img src={gps} alt="" />{Travels.destination}
        </div>
        <div className="description">
        <h4>Description</h4>
        <p>{Travels.description}</p>  
        </div>

        </div>
        
    </div>
    <div className="overlayer">

      <div className="TourDisplay_r">
       <div className="headder"><h1>Rs {Travels.new_price} <span className="rrs">/per person</span>  </h1><div className='ratee'><img src={stars} alt="" /> 4 (122)</div> </div>
       <hr className='hrr' />
       <div className="info">
        <h4>Information</h4>
        <div className="he">
         <input type="text" placeholder='Name'/>
         <hr className='hr2' />
          <input type="text" placeholder='Phone No.' />
          <hr className='hr2' />
          <div className="aba">
            <input type="date" placeholder='dd/mm/yyyy' />
            <hr className='aaahhh' />
            <input type="number" placeholder='Guest?' />
            
          </div>
        <hr />
        <br />
        </div>
       </div>
       <div className="pricetot">
       <div className="numb">
       <p>RS {Travels.new_price } X 1  person</p>
       <span className="qqqq"><p>Rs {Travels.new_price * 1}</p></span>
       </div>
       <div className="numb">
        <p>Service Charge</p>
        <span className="qqq"><p>Rs 10</p></span>
       </div>
       <div className="numb">
       <h3>Total </h3>
       <span className='qq'><h3> Rs {Travels.new_price + 10}</h3></span>
       </div>
        
       </div>
       <button>Book Now</button>
    </div>
    </div>   
    </div>
  )
}

export default Tour_display
