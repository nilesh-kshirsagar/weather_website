import React, { useEffect } from 'react'
import { useState } from 'react'
import './css/style.css'

const Tempapp = () => {

  const [city,setcity]=useState(null)
  const [search,setsearch]=useState("latur")

  useEffect(()=>{
    const fetchapi=async()=>{
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=013a12158e516b14b6d8cdff2e6678a9`
     const response=await fetch(url)
    //  console.log(response)
    const resjson=await response.json()
    setcity(resjson.main)
    }
    fetchapi()
  },[search])
  return (
   <>
    <div className='box'>
      <div className="inputData">
        <input type="search" value={search} className='inputField' onChange={(event)=>{setsearch(event.target.value)

        }} />
      </div>
   
{
  !city ? (
    <p>No Data Found</p>
  ):(
    <div>
    <div className='info'>
      <h2 className='location'>
        <i className="fa-solid fa-street-view"></i>{search}
      </h2>
      <h1 className='temp'>
        {city.temp}&#8451;
      </h1>
      <h3 className="tempmin_max">Min:{city.temp_min}&#8451; | max:{city.temp_max}&#8451;</h3>

    </div>

    <div className="wave-one"></div>
    <div className="wave-two"></div>
    <div className="wave-three"></div>
    </div>
  )
}
    
    </div>
   </>
  )
}

export default Tempapp
