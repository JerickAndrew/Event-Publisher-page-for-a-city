import React from 'react'
import Banner from '../components/Banner'
import TopEvents from './TopEvents'
import FavEvent from './FavEvent'
import PromoBanner from './PromoBanner'
import OtherEvent from './OtherEvent'

const Home = () => {
  return (
    <div>
      <Banner/>
      <TopEvents/>
      <FavEvent/>
      <PromoBanner/>
      <OtherEvent/>
    </div>
  )
}

export default Home