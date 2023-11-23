import React from 'react'

const Gallery = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">

      {data.map((images) => 

        <div key={images.id} className="flex justify-center">

          <div >


            <img src={`https://farm${images.farm}.staticflickr.com/${images.server}/${images.id}_${images.secret}_m.jpg`} height="200" width="200" className='rounded-xl' />

          </div>

        </div> ) }

    </div>
  )
}

export default Gallery