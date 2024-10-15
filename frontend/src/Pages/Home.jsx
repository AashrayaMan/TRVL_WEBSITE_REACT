import React from 'react'
import Mainpage from '../Components/Mainpage/Mainpage'
import Popular from '../Components/Popular/Popular'
import Search from '../Components/Search-box/Search'

const Home = () => {
  return (
    <div>
      <Mainpage />
      <Search />
      <Popular />
      
    </div>
  )
}

export default Home
