import { MoveRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const ServiceSection = () => {
  return (
   <section className="section-padding bg-black">
    <div className="max-w-7xl mx-auto">
      {/* //HEADING */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
          <div>
            <h2 className="heading-2 clash-display grad1 from-zinc-50">
              Our Premium Fleet & <br className=''/> Services
            </h2>
            <p className="text-zinc-400 max-w-lg ">
              Discover the perfect vehicle for  you neddds, backed by unparalled services and support
            </p>
          </div>
          <Link to="/fleet" className='mt-4 sm:mt-0 flex items-center text-sky-500 hover:text-sky-400 whitespace-nowrap '>
          View All Cars <MoveRight className='relative left-2'/>
          </Link>
        </div>
        {/* SERVICES CARDS */}

    </div>
   </section>
  )
}

export default ServiceSection