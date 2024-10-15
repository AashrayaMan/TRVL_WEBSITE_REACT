import React from 'react'
import './Popular.css'
import data_product from '../Assests/data'
import Item from '../Items/Item'


const Popular = () => {
  return (
    <div className='popular'>
      <div className="extraa">  &nbsp;Explore &nbsp; </div>

      <h1>Featured Tour</h1>
      <hr />
      <div className="popular_place">
        {data_product.map((item)=>{
            return <Item key={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} destination={item.destination}/>
        })}
      </div>
    </div>
  )
}

export default Popular
