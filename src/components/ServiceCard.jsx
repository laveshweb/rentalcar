import { ArrowRight } from 'lucide-react'
import React, { useRef, useState } from 'react'
import Car2 from '../assets/images/car2.png'

const ServiceCard = ({title, description, icon, imageSrc}) => {
    const [isHover, setisHover] = useState(false)
    const cardRef = useRef(null)
    //Handle Mouse Enter
    const HandleMouseEnter = () => {{
        if(cardRef.current){
            cardRef.current.addEventListener("mouseenter", ()=>{
                setisHover(true)
            })
        }
    }}
        //Handle Mouse Leave
    const HandleMouseLeave = () => {{
        if(cardRef.current){
            cardRef.current.addEventListener("mouseleave", ()=>{
                setisHover(false)
            })
        }
    }}

  return (
   <div ref={cardRef} onMouseEnter={HandleMouseEnter} onMouseLeave={HandleMouseLeave} style={{
    backgroundImage : `url(${imageSrc})`,
    backgroundSize : "cover",
    backgroundPosition : "center",
    backgroundRepeat : "no-repeat"
   }} className="min-h-[430px]  relative overflow-hidden cursor-pointer transition-all duration-500">
    {/* TEXT  */}
    <div className="bg-gradient-to-b from-zinc-950 py-7 px-7 to-transparent">
        <h2 className="text-5xl font-semibold clash-display">{title}</h2>
    </div>
    {/* OVERLAY */}
  
                
                    {isHover && (
                        <div className="absolute flex-col w-full min-h-full bg-gradient-to-b from-zinc-950 to-transparent flex-1 px-8 top-1/2 ">
        <div className="mb-2 centered-row">
            {icon}
        </div>
            <p className="text-center">
               {description}
            </p>
    </div>
                    )}
                
       
    {/* BUTTON */}
    <div className="bg-gradient-to-t absolute bottom-0 from-zinc-950 py-7 px-7 to-transparent flex min-w-full justify-end">
        <div className="h-16 w-16 bg-zinc-100 rounded-full cursor-pointer hover:bg-sky-200 transition-all duration-300 ease-out hover:-translate-y-1 center-item">
            <ArrowRight className='text-zinc-800 font-semibold -rotate-45 hover:-translate-y-1 transition'/>
        </div>
    </div>
   </div>
  )
}

export default ServiceCard