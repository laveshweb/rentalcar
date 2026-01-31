import React from 'react'
import BookNowButton from './BookNowButton'

const CarDard = ({name , image}) => {
  return (
    <div  style={{
      backgroundImage : `url(${image})`,
      backgroundSize : "cover",
      backgroundPosition : "center",
      backgroundRepeat : "no-repeat"
     }} className="h-[400px]  lg:h-[380px] cursor-pointer flex flex-col  justify-between hover:-transalte-y-1 transition-all duration-300 ease-in-out">
      {/* {Text} */}
      <div className="bg-gradient-to-b w-full from-zinc-950 to-transparent p-7 ">
        <h2 className="text-3xl clash-display ">
          SUV Cars
        </h2>
      </div>
      {/* BTNS */}
      <div className="bottom-0 bg-gradient-to-t w-full from-zinc-950 to-transparent centered-row justify-between  p-7  ">
        {/* price per Day */}
        <p className="text-lg clash-display">
          $150/Day
        </p>
        {/* Book Button */}
        <BookNowButton/>
      </div>
    </div>
  )
}

export default CarDard