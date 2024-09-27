import React from 'react'

const Hotels = (trip) => {
  return (
    <div><h2 className='font-bold text-xl mt-5'>Hotel Recommendation 
    <div>
        {trip?.tripData?.hotels?.map((item,index)=>(
            <div><img
            src="/placeholder.jpg" className='rounded-xl'/></div>
        ))}
    </div>
        </h2></div>
  )
}

export default Hotels