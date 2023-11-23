
"use client"
import axios from 'axios';
import React, { useState } from 'react'
import Gallery from './Gallery';


const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";

const page = () => {

  const [search, setsearch] = useState("")

  const [data, setdata] = useState([])

  const sumbitHandler = (e) => {

    e.preventDefault();

   axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`).then(response=>setdata(response.data.photos.photo))

    setsearch("")

  }

  return (
    <>

<body className="bg-gradient-to-r from-red-500 to-zinc-500">


<center className='m-10 bg-yellow-600'>

<h2 className='text-5xl '>Image Gallery</h2>
<h2 className='mt-4 bg-black text-white text-2xl'>Search Images</h2>

<form onSubmit={sumbitHandler}>



  <input className='m-6 w-80 rounded text-center text-xl' type='text' placeholder='search here' value={search} onChange={(e) => {
    setsearch(e.currentTarget.value)

    console.log(e.target.value)
  }} />

  <input  className='bg-black rounded p-1 text-white text-md' type='submit' value='Search'/>

</form>


</center>
<div>

{data.length>=1?<Gallery data= {data}/>:<h2 className='text-center'>No Data Found</h2>}

</div>


</body>


    </>
  )
}

export default page
