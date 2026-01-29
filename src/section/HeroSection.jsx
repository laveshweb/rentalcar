import { Sparkles } from 'lucide-react'
import React from 'react'
import bg from '../assets/images/car2.png'
function HeroSection() {
  return (
    <div  style={{ backgroundImage: `url(${bg})` }} className="relative min-h-screen flex items-center justify-center bg-no-repeat bg-center top-10 bg-cover  overflow-hidden pt-16">
      <div className="container absolute mx-auto  md:px-0 px-6 bottom-6 lg:bottom-14 z-10 ">
        <div className="z-50 gap-4 md:centered-row md:gap-40  lg:gap-80">
          {/* LEFT */}
          <div className="z-10 left">
            <div className="col max-w-3xl mx-auto">
              {/* SUB HEAD */}
              <div className="mb-4">
                <div className="bg-zinc-300/20 text-zinc-50 rounded-full px-4 py-1 text-sm font-medium inline-flex items-center clash-display">
                  <Sparkles className='h-3.5 w-3.5 mr-1'/>Your Journey, Elevated
                </div>
              </div>
              {/* MAIN HEAD */}
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold lg:leading-20 mb-6 clash-display text-nowrap tracking-tight">
                <span className="grad1 clash-display">Premium  </span>Car,  <br/> Rental
              </h1>
            </div>
          </div>
          {/* RIGHT */}
          <div className="right">
            <p className="text-lg z-10  text-gray-200 mb-8 max-w-md">
              Unlock unparalleled freedom with you premium car rental Service.{""}<br className="" />Experience luxury, comfort, annd seamless booking..
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection