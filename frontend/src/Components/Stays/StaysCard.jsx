import React from 'react'
import all_data from '../Assests/all_product'
import Item from '../Items/Item'
import './StaysCard.css'
import bann from '../Assests/tours.jpg'
import Search from '../Search-box/Search'

const StaysCard = () => {
  return (
    
    <div className='popularr'>
      <img className='h' src={bann} alt="" />
      <h1 >Tours</h1>
      
      <hr />
      <div className="search2">
      <Search />
      </div>
      <div className="popularr_places">
        {all_data.map((product)=>{
            return <Item key={product.id} id={product.id} image={product.image} name={product.name} new_price={product.new_price} old_price={product.old_price} destination={product.destination}/>
        })}
      </div>
    </div>
  )
}

export default StaysCard
