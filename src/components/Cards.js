import React from 'react'
import './Cards.css'
import Carditem from './Carditem'


function Cards() {
  return (
    <div className='cards'>
    <h1>Check out these our services!</h1>
    <div className='cards__container'>
      <div className='cards__wrapper'>
        <ul className='cards__items'>
          <Carditem
            src='./images/spaimg1.jpg'
            text='Explore the hidden waterfall deep inside the Amazon Jungle'
            label='Skin care'
            path='/services'
          />
          <Carditem
            src='./images/spaimg2.jpg'
            text='Travel through the Islands of Bali in a Private Cruise'
            label='Massage'
            path='/services'
          />
        </ul>
        <ul className='cards__items'>
          <Carditem
            src='./images/spaimg3.jpg'
            text='Explore the hidden waterfall deep inside the Amazon Jungle'
            label='Massage'
            path='/services'
          />
          <Carditem
            src='./images/spaimg4.jpg'
            text='Travel through the Islands of Bali in a Private Cruise'
            label='Massage'
            path='/services'
          />
           <Carditem
            src='./images/spaimg1.jpg'
            text='Travel through the Islands of Bali in a Private Cruise'
            label='Skin care'
            path='/services'
          />
        </ul>
        
      </div>
    </div>
  </div>
  )
}

export default Cards
