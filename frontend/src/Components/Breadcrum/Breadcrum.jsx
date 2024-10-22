import React from 'react'
import './Breadcrum.css'
import arrow from '../Assests/breadcrum_arrow.png'

const Breadcrum = (props) => {
  const { Travels } = props;
  console.log("travels prop:", Travels);
  // Check if travels prop is defined
  if (Travels) {
    return (
      <div className='breadcrum'>
        HOME <img src={arrow} alt="" /> TOURS <img src={arrow} alt="" /> {Travels.destination} <img src={arrow} alt="" />{Travels.name}
      </div>
    )
  } else {
    // Handle the case when travels prop is undefined
    return <div>Loading...</div>
  }
}

export default Breadcrum
//w