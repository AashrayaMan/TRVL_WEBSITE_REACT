import React from 'react'
import './Search.css'
import gps from '../Assests/location.png'
import distance from '../Assests/distance.png'
import people from '../Assests/peoples.png'
import search from '../Assests/pngwing.com (55).png'



const Search = () => {
  return (
    <div>

        <div className="search">
          <div className="haha">
           <img src={gps} alt="" /> 
            <div className='box'>
            <p> Location</p>
            <input type="text" placeholder='Where are you going?'/>
            
            </div>
          </div>
        <div className="haha">
        <img src={distance} alt="" /> 
        <div className='box'>
            <p>Distance</p>
            <input type="text" placeholder='Distance k/m' />
        </div>
        </div>
        
        <div className="haha">
        <img src={people} alt="" />
        <div className='boxl'>
            <p>Max People</p>
            <input type="number" placeholder='0' />
            
        </div>
        <div className="mg">
            <img src={search} alt="" />
            </div>
        </div>
            
        </div>
    </div>
    
  )
}

export default Search
