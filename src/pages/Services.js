import React, { useState } from 'react';
import '../App.css'
import ProductList from '../components/ProductList';
import Footer from '../components/Footer'
import { products } from '../data/Product'

const Services = () => {
  

  return (

    <div>
      <h1 className='services'>Services List</h1>
      <ProductList products={products} /> 
      <Footer/>
    </div>
  );

  }
  export default Services