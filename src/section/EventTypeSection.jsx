import { ArrowRight } from 'lucide-react'
import React from 'react'
import {carUsageCategories} from '../assets/assets.jsx'
import CarDard from '../components/CarDard'

const EventTypeSection = () => {
  return (
    <section className="section-padding bg-black">
        {/* TITLE */}
        <div className="max-w-7xl mx-auto flex flex-col mb-20 ">
        <div className=" ">
            <h2 className="heading-2 clash-display grad1 from-zinc-50 max-w-2xl">
                Perfect Ride For Every Occasion
            </h2>
            <div className="md:flex justify-between items-end">
            <p className="text-zinc-400 max-w-md">
                Find the deal for car for you business need, family adventures, or special moments
            </p>
        {/* Button */}
        <button className=" flex  w-35  md:relative md:bottom-16  bg-blue-300 mt-4 mf:mt-0 text-zinc-800 py-3 px-5 rounded-full cursor-pointer hover:bg-transparent border border-transparent hover:border-zinc-100 transition-all  duration-200 ease-out hover:text-zinc-200 clash-display h-fit lg:centered-row gap-2" >
            See All <ArrowRight className=''/>
        </button>
        </div>
        </div>
        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 rounded-2xl gap-2 mt-10 ">
            {/* {Car Card} */}
            {
                carUsageCategories.map((event , index)=>(
                    <CarDard key={index} {...event}/>
                ))
            }
        </div>
        </div>
    </section>
  )
}

export default EventTypeSection