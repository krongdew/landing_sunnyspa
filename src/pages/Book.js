import React from 'react'
import '../App.css'
import Footer from '../components/Footer'
import From from '../components/From'


function Book() {
  return (
    <>
    <h1 className='Book'>Book</h1>
    <div style={{display: 'flex',flexFlow:'column',padding:40,alignItems:'center'}}>
    <p style={{fontSize:25,paddingBottom:25}}>Book Form</p>
    <From/>
   
    </div>
    <Footer/>   
    </>
  )
}

export default Book