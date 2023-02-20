


import CardProduct from '../../components/Card'
import axios from "axios";
import React, { useState } from 'react';
import Grid2 from '@mui/material/Unstable_Grid2';
import Navbar from '../../components/Navbar'
import jwtDecode from 'jwt-decode'


export default function Home(){

  const [products, setProducts] = useState([]);
  const [car, setCar] = useState([])



  const addCar = (item) =>{
   
    setCar([...car,item])
    console.log(car)

    localStorage.setItem('car',JSON.stringify(car))

 
  }

  React.useEffect( ()=> {
    
    axios.get('https://api-desafio.airex.com.br/products/')
    .then( (response) => {
        return response['data']
      }).then((data) => {
        
        setProducts(data)
        
      })
    })

  return(
    <>
      <Navbar car={car} />

      
   
      <div className='ml-12 mt-8'>
      <Grid2 container rowSpacing={1}   >
        {products.map( (product) => {
          return  (<Grid2 xs={5} md={4}>
          <CardProduct  product ={product} add ={addCar}/>
          </Grid2>)})}
      </Grid2>

      </div>

      </>
     
  )

}